import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { FetchNovelListRequest } from "../../app/novel/types/request.type";
import { FetchNovelListResponse } from "../../app/novel/types/response.type";
import { novelQueryKey } from "./queryKey";
import { fetchNovels } from "@/services/novel/novelService";

export const useFetchNovelSliderQuery = (params: FetchNovelListRequest) => {
  return useQuery<FetchNovelListResponse | undefined>({
    queryKey: novelQueryKey.slider({ ...params }).queryKey,
    queryFn: () => fetchNovels({ ...params }),
  });
};

export const useFetchNovelContainerQuery = (params: FetchNovelListRequest) => {
  return useInfiniteQuery({
    queryKey: novelQueryKey.container({ ...params }).queryKey,
    queryFn: ({ pageParam = 1 }) => fetchNovels({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      const { customPageable } = lastPage;
      if (customPageable.hasNext) {
        return customPageable.page + 1;
      }
      return undefined;
    },
  });
};
