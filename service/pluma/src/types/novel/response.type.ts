export interface FetchNovelListResponse {
  novels: Novel[];
  customPageable: CustomPageable;
}

export interface Novel {
  id: string;
  title: string;
  description: string;
  userId: string;
  created_at: string;
  updated_at: string;
  genres: {
    id: string;
    name: string;
  }[];
}

interface CustomPageable {
  first: boolean;
  last: boolean;
  hasNext: boolean;
  totalPages: number;
  totalElements: number;
  page: number;
  size: number;
}

export interface DeleteNovelResponse {
  message: string;
}
