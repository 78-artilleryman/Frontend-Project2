import { baseHttpClient } from "../baseHttpClient";
import { CookieData } from "../novels/service";
import { getFetchHeader } from "@/common/util/getFetchHeader";
import {
  DeleteStoryFileRequest,
  FetchStoryFileListRequest,
  PostStoryFileRequest,
} from "@/types/storyFile/request.type";
import {
  DeleteStoryFileResponse,
  FetchStoryFileListResponse,
  PostStoryFileResponse,
} from "@/types/storyFile/response.type";

export async function GetSotryFileList(
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

export async function PostSotryFile(
  { folderId, fileName }: PostStoryFileRequest,
  token = ""
): Promise<PostStoryFileResponse> {
  const HEADER = getFetchHeader(token, "a");
  try {
    return await baseHttpClient().post<PostStoryFileResponse, PostStoryFileRequest>("storyFile", HEADER, {
      folderId,
      fileName,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function DeleteSotryFile(
  { fileId }: DeleteStoryFileRequest,
  token = ""
): Promise<DeleteStoryFileResponse> {
  const HEADER = getFetchHeader(token, "a");
  try {
    return await baseHttpClient().delete<DeleteStoryFileResponse>(`storyFile/${fileId}`, HEADER);
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
