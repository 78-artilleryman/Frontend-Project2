import { dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { storyFileQueryKey } from "./queryKey";
import getQueryClient from "@/common/util/getQueryClient";
import { GetSotryFileList } from "@/services/storyFile/service";
import { FetchStoryFileListRequest } from "@/types/storyFile/request.type";

// prefetch hook
export const usePrefetchStoryFileQuery = async (folderId: FetchStoryFileListRequest) => {
  const queryClient = getQueryClient();
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");

  await queryClient.prefetchQuery({
    queryKey: storyFileQueryKey.list().queryKey,
    queryFn: () => GetSotryFileList(folderId, token),
  });

  const dehydratedState = dehydrate(queryClient);

  return { dehydratedState };
};
