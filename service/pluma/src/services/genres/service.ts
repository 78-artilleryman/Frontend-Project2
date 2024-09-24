import { baseHttpClient } from "../baseHttpClient";
import { CookieData } from "../novel/service";
import { getFetchHeader } from "@/common/util/getFetchHeader";
import { GenreResponse } from "@/types/genres/response.type";

//소설 리스트 가져오는 함수
export async function GetGenresList(token?: CookieData): Promise<GenreResponse> {
  const HEADER = getFetchHeader(token?.value, "a");
  try {
    return await baseHttpClient().get<GenreResponse>("genres", HEADER);
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
