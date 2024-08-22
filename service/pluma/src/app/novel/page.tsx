"use client";

import React from "react";
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";

function NovelPage() {
  return (
    <main className="w-full flex flex-col gap-[90px] items-center mb-[200px]">
      <section className="bg-blue-900 h-[350px] w-full flex items-center justify-center relative">
        <h1 className="absolute text-blue-900">Pluma</h1>
        <div className="w-[500px] h-[500px] rounded-full bg-whiteAlpha-900" />
      </section>
      <section className="max-w-[1440px] w-full px-[90px] mb:px-[40px]">
        <h2 className="text-3xl font-bold mb-3 tbc:text-xl mb:text-sm">최근 수정 작품</h2>
        <div className="w-full relative  overflow-hidden rounded-[20px]">
          <ul className="flex  gap-8 w-[200%] flex-shrink-0">
            <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
              box
            </div>
            <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
              box
            </div>
            <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
              box
            </div>
            <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
              box
            </div>
            <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
              box
            </div>
          </ul>
          <button
            className="w-[30px] h-[280px] flex justify-center items-center absolute top-0 left-0 bg-button-left rounded-l-xl tbr:h-[270px] tbc:h-[210px] tbc:rounded-xl mb:hidden"
            type="button">
            <RiArrowLeftWideFill size={25} color="white" />
          </button>
          <button
            className="w-[30px] h-[280px] flex justify-center items-center  absolute top-0 right-0 bg-button-right rounded-l-xl tbr:h-[270px] tbc:h-[210px] tbc:rounded-xl mb:hidden"
            type="button">
            <RiArrowRightWideFill size={25} color="white" />
          </button>
        </div>
      </section>
      <section className=" max-w-[1440px] w-full px-[90px] mb:px-[40px]">
        <h2 className="text-3xl font-bold mb-3 tbc:text-xl mb:text-sm">모든 작품</h2>
        <div className="grid grid-cols-5 gap-10 tbr:grid-cols-4 tbr:gap-7 tbc:grid-cols-4 tbc:gap-7 mb:grid-cols-3 mb:gap-4">
          <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
            box
          </div>
          <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
            box
          </div>
          <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
            box
          </div>
          <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
            box
          </div>
          <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
            box
          </div>
          <div className="w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px]">
            box
          </div>
        </div>
      </section>
    </main>
  );
}

export default NovelPage;
