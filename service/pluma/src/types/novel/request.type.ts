export interface FetchNovelListRequest {
  sort: "updatedAt" | "createdAt";
  page: number;
  limit: number;
}

export interface PostNovelRequest {
  title: string;
  description: string;
  image?: string | null;
  created_at: string;
  updated_at: string;
  genres: string[];
}
