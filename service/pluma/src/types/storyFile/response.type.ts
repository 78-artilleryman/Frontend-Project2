export interface FetchStoryFileListResponse {
  id: string;
  name: string;
  content: string;
  folderId: string;
  created_at: Date;
}

export interface PostStoryFileResponse {
  id: string;
  name: string;
  folderId: string;
  created_at: Date;
}

export interface DeleteStoryFileResponse {
  message: string;
}
