import { createQueryKeys } from "@lukemorales/query-key-factory";

export const storyFolderQueryKey = createQueryKeys("storyFolder", {
  list: () => ["folder"],
});
