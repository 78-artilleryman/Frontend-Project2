import { baseHttpClient } from "../baseHttpClient";
import { CookieData } from "../novels/service";
import { getFetchHeader } from "@/common/util/getFetchHeader";
import { FetchStoryFileListRequest, PostStoryFileRequest } from "@/types/storyFile/request.type";
import { FetchStoryFileListResponse, PostStoryFileResponse } from "@/types/storyFile/response.type";

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

export async function PostSotryFㅑㅣㄷ(
  { folderId, fileName }: PostStoryFileRequest,
  token = ""
): Promise<PostStoryFileResponse> {
  const HEADER = getFetchHeader(token, "a");
  try {
    return await baseHttpClient().post<PostStoryFileResponse, PostStoryFileRequest>("storyFolder", HEADER, {
      folderId,
      fileName,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
