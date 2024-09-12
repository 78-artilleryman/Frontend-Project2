import { dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { GetNovelList } from "../../services/novel/novelService";
import { FetchNovelListRequest } from "../../types/novel/request.type";
import { novelQueryKey } from "./queryKey";
import getQueryClient from "@/common/util/getQueryClient";

// prefetch hook
export const usePrefetchNovelsQuery = async (params: FetchNovelListRequest) => {
  const queryClient = getQueryClient();
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");

  await queryClient.prefetchQuery({
    queryKey: novelQueryKey.slider({ ...params, sort: "updatedAt" }).queryKey,
    queryFn: () => GetNovelList({ ...params }, token),
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: novelQueryKey.container({ ...params, limit: 14 }).queryKey,
    queryFn: ({ pageParam = 1 }) => GetNovelList({ ...params, page: pageParam, limit: 14 }, token),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1; // 다음 페이지 번호 반환
      }
      return undefined; // 더 이상 페이지가 없으면 undefined 반환
    },
  });

  const dehydratedState = dehydrate(queryClient);

  return { dehydratedState };
};
