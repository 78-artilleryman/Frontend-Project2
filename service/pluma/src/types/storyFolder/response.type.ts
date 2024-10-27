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
