import { FetchNovelListRequest } from "../../types/novel/request.type";
import { DeleteNovelResponse, FetchNovelListResponse } from "../../types/novel/response.type";
import { baseHttpClient } from "../baseHttpClient";
import { getFetchHeader } from "@/common/util/getFetchHeader";

export type CookieData = {
  name: string;
  value: string;
  path?: string;
};

//소설 리스트 가져오는 함수
export async function GetNovelList(
  { sort = "createdAt", page = 1, limit = 8 }: FetchNovelListRequest,
  token?: CookieData
): Promise<FetchNovelListResponse> {
  const HEADER = getFetchHeader(token?.value, "a");
  try {
    return await baseHttpClient().get<FetchNovelListResponse>("novels", HEADER, { sort, page, limit });
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// 소설 지우는 함수
export async function DeleteNovel(novelId: string, token = ""): Promise<DeleteNovelResponse> {
  const HEADER = getFetchHeader(token, "a");
  try {
    return await baseHttpClient().delete<DeleteNovelResponse>(`novel/${novelId}`, HEADER);
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
