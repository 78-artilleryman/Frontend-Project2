import { FetchNovelListRequest } from "../types/request.type";
import { FetchNovelListResponse } from "../types/response.type";
import { CookieData } from "@/util/getCookie";

export async function fetchNovels(
  { sort = "createdAt", page = 1, limit = 8 }: FetchNovelListRequest,
  token?: CookieData
): Promise<FetchNovelListResponse[] | undefined> {
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
