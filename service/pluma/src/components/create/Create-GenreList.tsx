"use client";

import { Button } from "@byeonghyeon/react-components-button";
import React from "react";
import { genreTranslations } from "@/common/util/translateGenre";
import { useFetchGenresListQuery } from "@/queries/genres/query";
import { createNovelStore } from "@/store/novel/store";
import { Genre } from "@/types/genres/response.type";

function CreateGenreList() {
  const { novel, updateField } = createNovelStore();
  const { data: genreList } = useFetchGenresListQuery();

  // 성공적인 응답인지 확인
  const genresInKorean: Genre[] = Array.isArray(genreList)
    ? genreList.map(genre => ({
        id: genre.id,
        name: genreTranslations[genre.name] || genre.name, // 변환이 없을 경우 원래 이름 사용
      }))
    : []; // 실패한 경우 빈 배열

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
        {genresInKorean.map(genre => (
          <Button
            variant={novel.genres.includes(genre.id) ? "solid" : "outline"}
            className="flex justify-center"
            key={genre.id}
            onClick={() => handleGenreSelect(genre.id)}>
            {genre.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CreateGenreList;
