import { createQueryKeys } from "@lukemorales/query-key-factory";

export const genresQueryKey = createQueryKeys("genres", {
  list: () => ["genre"],
});
