import { FetchNovelListRequest } from "../../types/novel/request.type";
import { DeleteNovelResponse, FetchNovelListResponse } from "../../types/novel/response.type";

export type CookieData = {
  name: string;
  value: string;
  path?: string;
};

//소설 리스트 가져오는 함수
export async function GetNovelList(
  { sort = "createdAt", page = 1, limit = 8 }: FetchNovelListRequest,
  token?: CookieData
): Promise<FetchNovelListResponse | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/novels?sort=${sort}&page=${page}&limit=${limit}`,
      {
        cache: "no-store",
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token?.value,
        },
      }
    );

    if (!response.ok) {
      console.log("Response status:", response.status);
      console.log("Response body:", await response.text());
      throw new Error("Network response was not ok");
    }

    const novelListData = await response.json();
    return novelListData;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// 소설 지우는 함수
export async function DeleteNovel(novelId: string, token = ""): Promise<DeleteNovelResponse | undefined> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/novel/${novelId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      // 오류 발생 시 본문을 JSON으로 읽기
      const errorBody = await response.json();
      console.log("Response status:", response.status);
      console.log("Response body:", errorBody);
      throw new Error("Network response was not ok");
    }

    // 성공적인 응답 처리
    const responseBody = await response.json();
    return responseBody;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
