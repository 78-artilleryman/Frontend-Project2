import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/common/db";

// 특정 폴더의 파일 리스트 조회
export async function GET(req: NextRequest) {
  try {
    // 인증 토큰을 가져옵니다.
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    // URL의 쿼리 파라미터에서 폴더 ID를 가져옵니다.
    const { searchParams } = new URL(req.url);
    const folderId = searchParams.get("folderId"); // 쿼리에서 folderId를 가져옵니다.

    if (!folderId) {
      // 폴더 ID가 제공되지 않았을 때의 처리
      return NextResponse.json({ message: "No folder ID provided" }, { status: 400 });
    }

    // 사용자 ID
    const userId = token.sub;

    // 폴더의 파일 리스트를 가져옵니다.
    const files = await prisma.storyFile.findMany({
      where: {
        folderId: folderId,
        folder: {
          novel: {
            userId: userId, // 사용자 ID로 소속된 파일만 가져옵니다.
          },
        },
      },
    });

    if (!files || files.length === 0) {
      // 해당 폴더에 파일이 없을 때의 처리
      return NextResponse.json({ message: "No files found in this folder" }, { status: 404 });
    }

    // 성공적인 응답으로 파일 리스트 반환
    return NextResponse.json(files, { status: 200 });
  } catch (error) {
    // 오류 처리
    console.error("Error fetching files:", error);
    return NextResponse.json({ message: "Error fetching files" }, { status: 500 });
  }
}

// 파일 생성
export async function POST(req: NextRequest) {
  try {
    // 인증 토큰을 가져옵니다.
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    // 요청 본문에서 파일 정보를 가져옵니다.
    const { folderId, fileName } = await req.json();

    // 파일 이름과 폴더 ID가 제공되지 않았을 때의 처리
    if (!fileName || !folderId) {
      return NextResponse.json({ message: "File name and folder ID must be provided" }, { status: 400 });
    }

    // 현재 날짜
    const createdAt = new Date();

    // 파일을 생성합니다.
    const newFile = await prisma.storyFile.create({
      data: {
        name: fileName,
        folderId: folderId,
        content: "",
        created_at: createdAt, // 생성 날짜// 현재 날짜를 생성 날짜로 사용합니다.
      },
    });

    // 성공적인 응답으로 생성된 파일 정보를 반환합니다.
    return NextResponse.json(newFile, { status: 201 });
  } catch (error) {
    // 오류 처리
    console.error("Error creating file:", error);
    return NextResponse.json({ message: "Error creating file" }, { status: 500 });
  }
}
