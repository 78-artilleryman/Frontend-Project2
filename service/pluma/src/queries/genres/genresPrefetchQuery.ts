import { dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { genresQueryKey } from "./queryKey";
import getQueryClient from "@/common/util/getQueryClient";
import { GetGenresList } from "@/services/genres/genresService";
import { GenreResponse } from "@/types/genres/response.type";

// prefetch hook
export const usePrefetchGenresQuery = async () => {
  const queryClient = getQueryClient();
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");

  await queryClient.prefetchQuery<GenreResponse | undefined>({
    queryKey: genresQueryKey.list().queryKey,
    queryFn: () => GetGenresList(token),
  });

  const dehydratedState = dehydrate(queryClient);

  return { dehydratedState };
};
