import { createQueryKeys } from "@lukemorales/query-key-factory";

export const novelQueryKey = createQueryKeys("storyFolder", {
  list: () => ["folder"],
});
