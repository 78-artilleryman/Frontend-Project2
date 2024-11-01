export interface FetchStoryFileListRequest {
  folderId: string;
}

export interface PostStoryFileRequest {
  folderId: string;
  fileName: string;
}

export interface DeleteStoryFileRequest {
  fileId: string;
}
