import { HydrationBoundary } from "@tanstack/react-query";
import React from "react";
import Banner from "../../components/novel/Novel-Banner";
import NoverListContainer from "../../components/novel/Novel-Container";
import NovelSlider from "../../components/novel/Novel-Slider";

import { usePrefetchNovelsQuery } from "../../queries/novel/novelPrefetchQuery";

async function NovelPage() {
  const { dehydratedState } = await usePrefetchNovelsQuery({ sort: "createdAt", page: 1, limit: 8 });

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="flex w-full flex-col items-center gap-[90px] bg-gray-50">
        <Banner />
        <section className="mb:px-[40px] w-full max-w-[1440px] px-[90px]">
          <h2 className="tbc:text-xl mb:text-sm mb-3 text-3xl font-bold">최근 수정 작품</h2>
          <NovelSlider />
        </section>
        <section className="mb:px-[40px] w-full max-w-[1440px] px-[90px]">
          <h2 className="tbc:text-xl mb:text-sm mb-3 text-3xl font-bold">모든 작품</h2>
          <NoverListContainer />
        </section>
      </main>
    </HydrationBoundary>
  );
}

export default NovelPage;
