import { useQuery } from "@tanstack/react-query";
import { storyFileQueryKey } from "./queryKey";
import { GetSotryFileList } from "@/services/storyFile/service";
import { FetchStoryFileListRequest } from "@/types/storyFile/request.type";
import { FetchStoryFileListResponse } from "@/types/storyFile/response.type";

export const useFetchStoryFileListQuery = (folderId: FetchStoryFileListRequest) => {
  return useQuery<FetchStoryFileListResponse[] | undefined>({
    queryKey: storyFileQueryKey.list().queryKey,
    queryFn: () => GetSotryFileList(folderId),
  });
};
