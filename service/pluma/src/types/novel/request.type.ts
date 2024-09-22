export interface FetchNovelListRequest {
  sort: "updatedAt" | "createdAt";
  page: number;
  limit: number;
}

export interface PostNovelRequest {
  title: string;
  description: string;
  userId: string;
  image?: string | null;
  created_at: string;
  updated_at: string;
  genres: {
    id: string;
    name: string;
  }[];
}
