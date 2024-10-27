import { baseHttpClient } from "../baseHttpClient";
import { CookieData } from "../novels/service";
import { getFetchHeader } from "@/common/util/getFetchHeader";
import { FetchStoryFolderListRequest, PostStoryFolderRequest } from "@/types/storyFolder/request.type";
import { FetchStoryFolderListResponse, PostStoryFolderResponse } from "@/types/storyFolder/response.type";

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

export async function PostSotryFolder(
  { novelId, folderName }: PostStoryFolderRequest,
  token = ""
): Promise<PostStoryFolderResponse> {
  const HEADER = getFetchHeader(token, "a");
  try {
    return await baseHttpClient().post<PostStoryFolderResponse, PostStoryFolderRequest>("storyFolder", HEADER, {
      novelId,
      folderName,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
