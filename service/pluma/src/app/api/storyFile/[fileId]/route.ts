import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/common/db";

// 파일 삭제
export async function DELETE(req: NextRequest, { params }: { params: { fileId: string } }) {
  try {
    // 인증 토큰을 가져옵니다.
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    // 요청 URL에서 파일 ID를 가져옵니다.
    const { fileId } = params;
    if (!fileId) {
      // 파일 ID가 제공되지 않았을 때의 처리
      return NextResponse.json({ message: "No file ID provided" }, { status: 400 });
    }

    // 사용자 ID
    const userId = token.sub;

    // 파일을 삭제합니다.
    const deleteResult = await prisma.storyFile.deleteMany({
      where: {
        id: fileId,
        folder: {
          // 해당 파일이 속한 폴더의 소유자 확인
          novel: {
            userId: userId,
          },
        },
      },
    });

    if (deleteResult.count === 0) {
      // 삭제된 파일이 없을 때의 처리
      return NextResponse.json({ message: "File not found or not authorized to delete" }, { status: 404 });
    }

    // 성공적인 삭제 응답
    return NextResponse.json({ message: "File deleted successfully" }, { status: 200 });
  } catch (error) {
    // 오류 처리
    console.error("Error deleting file:", error);
    return NextResponse.json({ message: "Error deleting file" }, { status: 500 });
  }
}
