import create from "zustand";
import { PostNovelRequest } from "@/types/novel/request.type";
import { NovelState, PostNovelState } from "@/types/novel/state.type";

// 상태 생성
export const useNovelStore = create<NovelState>(set => ({
  novel: null,
  setNovel: novel => set({ novel }),
  clearNovel: () => set({ novel: null }),
}));

// novel 생성값 상태
export const createNovelStore = create<PostNovelState>(set => ({
  novel: {
    title: "",
    description: "",
    image: null,
    genres: [],
    created_at: "",
    updated_at: "",
  },

  // 하나의 함수로 모든 필드를 업데이트
  updateField: <K extends keyof PostNovelRequest>(field: K, value: PostNovelRequest[K]) =>
    set(state => ({
      novel: {
        ...state.novel,
        [field]: value,
      },
    })),

  // Novel 상태 리셋 함수
  resetNovel: () =>
    set(() => ({
      novel: {
        title: "",
        description: "",
        image: null,
        genres: [],
        created_at: "",
        updated_at: "",
      },
    })),
}));

/*
const { updateField, resetNovel } = createNovelStore();
updateField('title', '새로운 제목');
updateField('description', '설명 업데이트');
updateField('genres', ['fantasy', 'adventure']);
resetNovel();
*/
