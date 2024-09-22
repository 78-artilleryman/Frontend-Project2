import { NextResponse } from "next/server";
import prisma from "@/common/db";

export async function GET() {
  try {
    // 장르 데이터를 가져오는 요청
    const genres = await prisma.genre.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // 장르가 없는 경우 처리
    if (!genres || genres.length === 0) {
      return NextResponse.json({ message: "No genres found" }, { status: 404 });
    }

    // 성공적으로 데이터를 가져온 경우
    return NextResponse.json(genres, { status: 200 });
  } catch (error) {
    // 데이터베이스 요청 오류 처리 로직
    console.error("Database error:", error);
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
}
