export type NovelType = {
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
};
