export interface FetchStoryFolderListResponse {
  id: string;
  name: string;
  novelId: string;
  created_at: string;
  files: {
    id: string;
    name: string;
  }[];
}

export interface PostStoryFolderResponse {
  id: string;
  name: string;
  novelId: string;
  created_at: Date;
}

export interface DeleteStoryFolderResponse {
  message: string;
}
