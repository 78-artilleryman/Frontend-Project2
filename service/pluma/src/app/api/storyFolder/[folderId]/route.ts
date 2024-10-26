import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/common/db";

// 폴더 삭제
export async function DELETE(req: NextRequest, { params }: { params: { folderId: string } }) {
  try {
    // 인증 토큰을 가져옵니다.
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    // 요청 URL에서 폴더 ID를 가져옵니다.
    const { folderId } = params;
    if (!folderId) {
      // 폴더 ID가 제공되지 않았을 때의 처리
      return NextResponse.json({ message: "No folder ID provided" }, { status: 400 });
    }

    // 사용자 ID
    const userId = token.sub;

    // 폴더를 삭제합니다.
    const deleteResult = await prisma.storyFolder.deleteMany({
      where: {
        id: folderId,
        novel: {
          userId: userId, // 사용자 ID로 소속된 폴더만 삭제하도록 제한
        },
      },
    });

    if (deleteResult.count === 0) {
      // 삭제된 폴더가 없을 때의 처리
      return NextResponse.json({ message: "Folder not found or not authorized to delete" }, { status: 404 });
    }

    // 성공적인 삭제 응답
    return NextResponse.json({ message: "Folder deleted successfully" }, { status: 200 });
  } catch (error) {
    // 오류 처리
    console.error("Error deleting folder:", error);
    return NextResponse.json({ message: "Error deleting folder" }, { status: 500 });
  }
}
