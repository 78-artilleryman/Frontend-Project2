import { baseHttpClient } from "../baseHttpClient";
import { CookieData } from "../novels/service";
import { getFetchHeader } from "@/common/util/getFetchHeader";
import { FetchStoryFolderListRequest } from "@/types/storyFolder/request.type";
import { FetchStoryFolderListResponse } from "@/types/storyFolder/response.type";

export async function GetSotryFolderList(
  { novelId }: FetchStoryFolderListRequest,
  token?: CookieData
): Promise<FetchStoryFolderListResponse> {
  const HEADER = getFetchHeader(token?.value, "a");
  try {
    return await baseHttpClient().get<FetchStoryFolderListResponse>("storyFolder", HEADER, { novelId });
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
