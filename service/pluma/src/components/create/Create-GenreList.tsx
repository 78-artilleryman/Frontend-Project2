"use client";

import { Button } from "@byeonghyeon/react-components-button";
import React from "react";
import { genreTranslations } from "@/common/util/translateGenre";
import { createNovelStore } from "@/store/novel/novelStore";

function CreateGenreList() {
  const { novel, updateField } = createNovelStore();

  console.log(novel);

  // 장르 선택 핸들러
  const handleGenreSelect = (genreKey: string) => {
    const currentGenres = novel.genres;

    // 장르가 이미 선택되어 있으면 제거, 아니면 추가
    const updatedGenres = currentGenres.includes(genreKey)
      ? currentGenres.filter(g => g !== genreKey) // 선택 해제
      : [...currentGenres, genreKey]; // 선택 추가
    updateField("genres", updatedGenres);
  };

  return (
    <div className="flex w-[45%] flex-col gap-2">
      <label className="text-blackAlpha-900 text-base font-bold">장르</label>
      <div className="mx-auto grid w-[100%] grid-cols-4 gap-3">
        {Object.keys(genreTranslations).map((genreKey, index) => (
          <Button
            variant={novel.genres.includes(genreKey) ? "solid" : "outline"}
            className="flex justify-center"
            key={index}
            onClick={() => handleGenreSelect(genreKey)}>
            {genreTranslations[genreKey]}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CreateGenreList;
