import create from "zustand";
import { NovelType } from "@/types/novel/novel.type";

type NovelState = {
  novel: NovelType | null;
  // eslint-disable-next-line no-unused-vars
  setNovel: (novel: NovelType) => void;
  clearNovel: () => void;
};

// 상태 생성
export const useNovelStore = create<NovelState>(set => ({
  novel: null,
  setNovel: novel => set({ novel }),
  clearNovel: () => set({ novel: null }),
}));
