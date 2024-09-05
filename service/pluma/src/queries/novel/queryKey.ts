import { createQueryKeys } from "@lukemorales/query-key-factory";
import { FetchNovelListRequest } from "../../app/novel/types/request.type";

export const novelQueryKey = createQueryKeys("novel", {
  slider: (params: FetchNovelListRequest) => [params],
  container: (params: FetchNovelListRequest) => [params],
});
