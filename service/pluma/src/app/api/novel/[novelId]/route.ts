import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/common/db";

export async function POST(req: NextRequest) {
  try {
    // 인증 토큰을 가져옵니다.
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token || !token.sub) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const { title, description, image, genres } = await req.json();

    if (!title || !description || !genres || genres.length === 0) {
      // 필수 필드가 누락된 경우 처리
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // 사용자 ID
    const userId = token.sub;

    // 소설을 생성
    const novel = await prisma.novel.create({
      data: {
        title,
        description,
        image,
        userId, // userId가 반드시 string이어야 함
        genres: {
          create: genres.map((genreId: string) => ({
            genre: {
              connect: { id: genreId },
            },
          })),
        },
      },
    });

    // 성공적인 응답
    return NextResponse.json(novel, { status: 201 });
  } catch (error) {
    // 오류 처리
    console.error("Error creating novel:", error);
    return NextResponse.json({ message: "Error creating novel" }, { status: 500 });
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
