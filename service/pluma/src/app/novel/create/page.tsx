"use client";

import { Button } from "@byeonghyeon/react-components-button";
import { Input } from "@byeonghyeon/react-components-input";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { genreTranslations } from "@/common/util/translateGenre";

function NovelCreatePage() {
  return (
    <div className="bg-custom-Page-gradient flex h-screen w-screen items-center justify-center">
      <div className="bg-custom-box-gradient relative flex h-[645px] w-[800px] flex-col items-center gap-3 rounded-[20px] py-8">
        <Link href="/novel" className="absolute left-5 top-10">
          <IoIosArrowBack size={30} />
        </Link>
        <h1 className="text-blackAlpha-900 text-3xl font-bold">소설 생성</h1>
        <div className="flex gap-3">
          <div className="h-2 w-[50px] rounded-lg bg-blue-500" />
          <div className="h-2 w-[50px] rounded-lg bg-gray-300" />
        </div>
        <div className="flex w-[45%] flex-col gap-2">
          <label htmlFor="title" className="text-blackAlpha-900 text-base font-bold">
            제목
          </label>
          <Input id="title" className="bg-whiteAlpha-900 focus:bg-whiteAlpha-900 h-10" />
        </div>
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
        <div className="flex w-[45%] flex-col gap-2">
          <label htmlFor="description" className="text-blackAlpha-900 text-base font-bold">
            요약
          </label>
          <textarea
            id="description"
            className="h-40 w-full resize-none rounded-md border-2 border-gray-300 p-2 focus:border-2 focus:border-blue-500 focus:outline-none focus:ring-0"
          />
        </div>
        <Button color="blue" className="text-base" size="lg">
          생성
        </Button>
      </div>
    </div>
  );
}

export default NovelCreatePage;
