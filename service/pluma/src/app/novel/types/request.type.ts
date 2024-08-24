export interface FetchNovelListRequest {
  sort: "updatedAt" | "createdAt";
  page: number;
  limit: number;
}
