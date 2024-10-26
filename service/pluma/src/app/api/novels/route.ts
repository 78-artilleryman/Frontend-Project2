import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/common/db";

export const dynamic = "force-dynamic";

// Novel 목록 조회
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
        include: {
          genres: {
            include: {
              genre: true,
            },
          },
        },
      });

      // 총 소설 수 계산
      const totalElements = await prisma.novel.count({
        where: {
          userId: userId,
        },
      });

      // 장르 정보를 최상위 수준으로 이동시키는 로직
      const novelsWithGenres = novelListData.map(novel => ({
        ...novel,
        genres: novel.genres.map(genreRel => genreRel.genre),
      }));

      const totalPages = Math.ceil(totalElements / limit);
      const customPageable = {
        hasNext: page < totalPages,
        totalPages: totalPages,
        totalElements: totalElements,
        page: page,
        size: limit,
        first: page === 1,
        last: page === totalPages,
      };

      // 성공
      return NextResponse.json(
        { novels: novelsWithGenres, customPageable: customPageable },
        {
          status: 200,
        }
      );
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

// Novel 생성
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
