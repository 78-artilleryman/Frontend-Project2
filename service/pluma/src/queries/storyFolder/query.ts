import { useQuery } from "@tanstack/react-query";
import { storyFolderQueryKey } from "./queryKey";
import { GetSotryFolderList } from "@/services/storyFolder/service";
import { FetchStoryFolderListRequest } from "@/types/storyFolder/request.type";
import { FetchStoryFolderListResponse } from "@/types/storyFolder/response.type";

export const useFetchStoryFolderListQuery = (novelId: FetchStoryFolderListRequest) => {
  return useQuery<FetchStoryFolderListResponse[] | undefined>({
    queryKey: storyFolderQueryKey.list().queryKey,
    queryFn: () => GetSotryFolderList(novelId),
  });
};
