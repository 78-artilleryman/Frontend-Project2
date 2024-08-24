import React from "react";
import { getCookieData } from "../util/getCookie";
import Banner from "./components/Banner";
import NovelListSlider from "./components/NovelListSlider";
import NoverListContainer from "./components/NoverListContainer";
import SlideControlButton from "./components/SlideControlButton";

async function fetchNovels({ sort = "updatedAt", page = 1, limit = 8 }) {
  const token = await getCookieData("next-auth.session-token");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/novels?sort=${sort}&page=${page}&limit=${limit}`,
      {
        cache: "no-store",
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token?.value,
        },
      }
    );

    if (!response.ok) {
      console.log("Response status:", response.status);
      console.log("Response body:", await response.text());
      throw new Error("Network response was not ok");
    }

    const novelListData = await response.json();
    return novelListData;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

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
