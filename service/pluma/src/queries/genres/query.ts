import { useQuery } from "@tanstack/react-query";
import { genresQueryKey } from "./queryKey";

import { GetGenresList } from "@/services/genres/service";
import { GenreResponse } from "@/types/genres/response.type";

export const useFetchGenresListQuery = () => {
  return useQuery<GenreResponse | undefined>({
    queryKey: genresQueryKey.list().queryKey,
    queryFn: () => GetGenresList(),
  });
};
