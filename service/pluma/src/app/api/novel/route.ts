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
        userId,
        genres: {
          create: genres.map((genreId: string) => ({
            genre: {
              connect: { id: genreId },
            },
          })),
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
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
