"use client";

import { Button } from "@byeonghyeon/react-components-button";
import React from "react";
import { genreTranslations } from "@/common/util/translateGenre";

function CreateGenreList() {
  return (
    <div className="flex w-[45%] flex-col gap-2">
      <label className="text-blackAlpha-900 text-base font-bold">장르</label>
      <div className="mx-auto grid w-[100%] grid-cols-4 gap-3">
        {Object.values(genreTranslations).map((genre, index) => (
          <Button variant="outline" className="flex justify-center" key={index} onClick={() => console.log(genre)}>
            {genre}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CreateGenreList;
