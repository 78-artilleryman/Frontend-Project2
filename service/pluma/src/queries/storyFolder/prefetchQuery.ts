import { dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { storyFolderQueryKey } from "./queryKey";
import getQueryClient from "@/common/util/getQueryClient";
import { GetSotryFolderList } from "@/services/storyFolder/service";
import { FetchStoryFolderListRequest } from "@/types/storyFolder/request.type";

// prefetch hook
export const usePrefetchStoryFolderQuery = async (novelId: FetchStoryFolderListRequest) => {
  const queryClient = getQueryClient();
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");

  await queryClient.prefetchQuery({
    queryKey: storyFolderQueryKey.list().queryKey,
    queryFn: () => GetSotryFolderList(novelId, token),
  });

  const dehydratedState = dehydrate(queryClient);

  return { dehydratedState };
};
