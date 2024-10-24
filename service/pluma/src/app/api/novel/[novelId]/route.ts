import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/common/db";

export async function GET(req: NextRequest, { params }: { params: { novelId: string } }) {
  try {
    // 인증 토큰을 가져옵니다.
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    // 요청 URL에서 소설 ID를 가져옵니다.
    const { novelId } = params;
    if (!novelId) {
      // 소설 ID가 제공되지 않았을 때의 처리
      return NextResponse.json({ message: "No novel ID provided" }, { status: 400 });
    }

    // 사용자 ID
    const userId = token.sub;

    // 소설 ID와 사용자 ID에 따라 폴더와 파일 정보를 가져옵니다.
    const foldersWithFiles = await prisma.folder.findMany({
      where: {
        novelId: novelId,
        novel: {
          userId: userId,
        },
      },
      include: {
        files: true, // 각 폴더에 속한 파일 정보를 포함합니다.
      },
    });

    if (!foldersWithFiles || foldersWithFiles.length === 0) {
      // 해당 소설에 폴더가 없을 때의 처리
      return NextResponse.json({ message: "No folders or files found for this novel" }, { status: 404 });
    }

    // 성공적인 응답으로 폴더 및 파일 정보를 반환
    return NextResponse.json(foldersWithFiles, { status: 200 });
  } catch (error) {
    // 오류 처리
    console.error("Error fetching folders and files:", error);
    return NextResponse.json({ message: "Error fetching folders and files" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { novelId: string } }) {
  try {
    // 인증 토큰을 가져옵니다.
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    // 요청 URL에서 소설 ID를 가져옵니다.
    const { novelId } = params;
    if (!novelId) {
      // 소설 ID가 제공되지 않았을 때의 처리
      return NextResponse.json({ message: "No novel ID provided" }, { status: 400 });
    }

    // 사용자 ID
    const userId = token.sub;

    // 소설을 삭제합니다.
    const deleteResult = await prisma.novel.deleteMany({
      where: {
        id: novelId,
        userId: userId,
      },
    });

    if (deleteResult.count === 0) {
      // 삭제된 소설이 없을 때의 처리
      return NextResponse.json({ message: "Novel not found or not authorized to delete" }, { status: 404 });
    }

    // 성공적인 삭제 응답
    return NextResponse.json({ message: "Novel deleted successfully" }, { status: 200 });
  } catch (error) {
    // 오류 처리
    console.error("Error deleting novel:", error);
    return NextResponse.json({ message: "Error deleting novel" }, { status: 500 });
  }
}
