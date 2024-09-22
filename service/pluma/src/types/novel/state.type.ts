import { NovelType } from "./novel.type";
import { PostNovelRequest } from "./request.type";

export type NovelState = {
  novel: NovelType | null;
  // eslint-disable-next-line no-unused-vars
  setNovel: (novel: NovelType) => void;
  clearNovel: () => void;
};

export type PostNovelState = {
  novel: PostNovelRequest;
  // eslint-disable-next-line no-unused-vars
  updateField: <K extends keyof NovelType>(field: K, value: NovelType[K]) => void;
  resetNovel: () => void;
};
