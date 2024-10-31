import { createQueryKeys } from "@lukemorales/query-key-factory";

export const storyFileQueryKey = createQueryKeys("storyFile", {
  list: () => ["file"],
});
