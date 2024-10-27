export interface FetchStoryFolderListRequest {
  novelId: string;
}

export interface PostStoryFolderRequest {
  novelId: string;
  folderName: string;
}

export interface DeleteStoryFolderRequest {
  folderId: string;
}
