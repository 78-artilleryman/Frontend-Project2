import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchNovels } from "../services/novelService";
import { FetchNovelListRequest } from "../types/request.type";
import { FetchNovelListResponse } from "../types/response.type";

const novelQueryKey = createQueryKeys("novel", {
  slider: (params: FetchNovelListRequest) => [params],
  container: (params: FetchNovelListRequest) => [params],
});

export const useFetchNovelSliderQuery = (params: FetchNovelListRequest) => {
  return useQuery<FetchNovelListResponse[] | undefined>({
    queryKey: novelQueryKey.slider(params).queryKey,
    queryFn: () => fetchNovels(params),
  });
};

export const useFetchNovelContainerQuery = (params: FetchNovelListRequest) => {
  return useInfiniteQuery({
    queryKey: novelQueryKey.container(params).queryKey,
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
