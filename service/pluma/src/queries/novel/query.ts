import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { FetchNovelListRequest } from "../../types/novel/request.type";
import { FetchNovelListResponse } from "../../types/novel/response.type";
import { novelQueryKey } from "./queryKey";
import { GetNovelList } from "@/services/novel/service";

export const useFetchNovelSliderQuery = (params: FetchNovelListRequest) => {
  return useQuery<FetchNovelListResponse | undefined>({
    queryKey: novelQueryKey.slider({ ...params }).queryKey,
    queryFn: () => GetNovelList({ ...params }),
  });
};

export const useFetchNovelContainerQuery = (params: FetchNovelListRequest) => {
  return useInfiniteQuery({
    queryKey: novelQueryKey.container({ ...params }).queryKey,
    queryFn: ({ pageParam = 1 }) => GetNovelList({ ...params, page: pageParam }),
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
