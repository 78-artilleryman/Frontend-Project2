import { cookies } from "next/headers";
import React from "react";
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";
import Banner from "./components/Banner";

async function fetchNovels({ sort = "updatedAt", page = 1, limit = 8 }) {
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/novels?sort=${sort}&page=${page}&limit=${limit}`,
      {
        cache: "no-store",
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token?.value.toString(),
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
