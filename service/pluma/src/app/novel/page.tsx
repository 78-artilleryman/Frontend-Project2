import React from "react";
import Banner from "./components/Banner";
import NovelListSlider from "./components/NovelListSlider";
import NoverListContainer from "./components/NoverListContainer";
import SlideControlButton from "./components/SlideControlButton";
import { fetchNovels } from "./services/novelService";

async function NovelPage() {
  const data = await fetchNovels({});
  console.log(data);
  return (
    <main className="w-full flex flex-col gap-[90px] items-center mb-[200px] bg-gray-50">
      <Banner />
      <section className="max-w-[1440px] w-full px-[90px] mb:px-[40px]">
        <h2 className="text-3xl font-bold mb-3 tbc:text-xl mb:text-sm">최근 수정 작품</h2>
        <div className="w-full relative  overflow-hidden rounded-[20px]">
          <NovelListSlider />
          <SlideControlButton direction="left" />
          <SlideControlButton direction="right" />
        </div>
      </section>
      <section className=" max-w-[1440px] w-full px-[90px] mb:px-[40px]">
        <h2 className="text-3xl font-bold mb-3 tbc:text-xl mb:text-sm">모든 작품</h2>
        <NoverListContainer />
      </section>
    </main>
  );
}

export default NovelPage;
