import { PropsWithChildren } from "react";

export interface NovelType extends PropsWithChildren {
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
