import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import ButtonList from "@/components/create/Create-ButtonList";
import GenreList from "@/components/create/Create-GenreList";
import Input from "@/components/create/Create-Input";
import Textarea from "@/components/create/Create-Textarea";

function NovelCreatePage() {
  return (
    <main className="bg-custom-Page-gradient flex h-screen w-screen items-center justify-center">
      <div className="bg-custom-box-gradient relative flex h-[645px] w-[800px] flex-col items-center gap-3 rounded-[20px] py-8">
        <Link href="/novel" className="absolute left-5 top-10">
          <IoIosArrowBack size={30} />
        </Link>
        <h1 className="text-blackAlpha-900 text-3xl font-bold">소설 생성</h1>
        <div className="flex gap-3">
          <div className="h-2 w-[50px] rounded-lg bg-blue-500" />
          <div className="h-2 w-[50px] rounded-lg bg-gray-300" />
        </div>
        <Input />
        <GenreList />
        <Textarea />
        <ButtonList />
      </div>
    </main>
  );
}

export default NovelCreatePage;
