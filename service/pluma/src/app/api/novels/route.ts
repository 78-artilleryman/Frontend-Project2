import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // 인증되지 않은 사용자에 대한 처리
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const userId = token.sub;
    const sortParam = req.nextUrl.searchParams.get("sort") || "createdAt";
    const pageParam = req.nextUrl.searchParams.get("page") || "1";
    const limitParam = req.nextUrl.searchParams.get("limit") || "10";

    const page = parseInt(pageParam, 10);
    const limit = parseInt(limitParam, 10);
    const skip = (page - 1) * limit;

    let orderBy = {};
    if (sortParam === "createdAt") {
      orderBy = { created_at: "desc" }; // 최신순
    } else if (sortParam === "updatedAt") {
      orderBy = { updated_at: "desc" }; // 수정날짜순
    }

    try {
      const novelListData = await prisma.novel.findMany({
        where: {
          userId: userId,
        },
        orderBy: orderBy,
        take: limit,
        skip: skip,
      });

      // 성공
      return NextResponse.json(novelListData, {
        status: 200,
      });
    } catch (dbError) {
      // 데이터베이스 요청 오류 처리 로직
      console.error("Database error:", dbError);
      return NextResponse.json({ message: "Database error" }, { status: 500 });
    }
  } catch (authError) {
    // 토큰을 가져오는 중 오류가 발생할 경우 실행될 로직
    console.error("Authentication error:", authError);
    return NextResponse.json({ message: "Authentication error" }, { status: 500 });
  }
}
