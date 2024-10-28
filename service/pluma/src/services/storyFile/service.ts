import { baseHttpClient } from "../baseHttpClient";
import { CookieData } from "../novels/service";
import { getFetchHeader } from "@/common/util/getFetchHeader";
import { FetchStoryFileListRequest } from "@/types/storyFile/request.type";
import { FetchStoryFileListResponse } from "@/types/storyFile/response.type";

export async function GetSotryFolderList(
  { folderId }: FetchStoryFileListRequest,
  token?: CookieData
): Promise<FetchStoryFileListResponse[]> {
  const HEADER = getFetchHeader(token?.value, "a");
  try {
    return await baseHttpClient().get<FetchStoryFileListResponse[]>("storyFile", HEADER, { folderId });
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
