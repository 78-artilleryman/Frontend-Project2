"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { LuFileEdit } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
import { TbWorldPlus } from "react-icons/tb";

function NavBar() {
  const params = useParams();
  const novelId = params.novelid;

  return (
    <section className="bg-whiteAlpha-900 relative flex h-full w-[60px] flex-col items-center gap-2 p-2">
      {/* 소설 리스트 페이지 이동 */}
      <Link href={`/novel/${novelId}/file/1`}>
        <button
          className="hover:bg-blackAlpha-300 flex h-12 w-12 items-center justify-center rounded-lg px-2"
          type="button">
          <LuFileEdit size={22} />
        </button>
      </Link>

      {/* 인물 설정 페이지 이동 */}
      <Link href={`/novel/${novelId}/person`}>
        <button
          className="hover:bg-blackAlpha-300 flex h-12 w-12 items-center justify-center rounded-lg px-2"
          type="button">
          <MdOutlinePeopleAlt size={22} />
        </button>
      </Link>

      {/* 세계관 설정 페이지 이동 */}
      <Link href={`/novel/${novelId}/world`}>
        <button
          className="hover:bg-blackAlpha-300 flex h-12 w-12 items-center justify-center rounded-lg px-2"
          type="button">
          <TbWorldPlus size={22} />
        </button>
      </Link>
      <div className="absolute bottom-4 flex flex-col items-center gap-2">
        {/* 타이머 */}
        <button
          className="hover:bg-blackAlpha-300 flex h-12 w-12 items-center justify-center rounded-lg px-2"
          type="button">
          <RiTimerLine size={24} />
        </button>

        {/* 환경설정 페이지 이동 */}
        <Link href={`/novel/${novelId}/setting`}>
          <button
            className="hover:bg-blackAlpha-300 flex h-12 w-12 items-center justify-center rounded-lg px-2"
            type="button">
            <LuSettings size={22} />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default NavBar;
