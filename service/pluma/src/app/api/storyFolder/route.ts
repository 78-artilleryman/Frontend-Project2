import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/common/db";

// 스토리 폴더 및 파일 목록 조회
export async function GET(req: NextRequest) {
  try {
    // 인증 토큰을 가져옵니다.
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    // 요청 URL에서 쿼리 파라미터로 소설 ID를 가져옵니다.
    const url = new URL(req.url);
    const novelId = url.searchParams.get("novelId");
    if (!novelId) {
      // 소설 ID가 제공되지 않았을 때의 처리
      return NextResponse.json({ message: "No novel ID provided" }, { status: 400 });
    }

    // 사용자 ID
    const userId = token.sub;

    // 소설 ID와 사용자 ID에 따라 폴더와 파일 정보를 가져옵니다.
    const foldersWithFiles = await prisma.storyFolder.findMany({
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
