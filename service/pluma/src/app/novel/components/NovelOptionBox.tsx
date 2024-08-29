import React from "react";

function NovelOptionBox() {
  return (
    <ul className="z-40 absolute w-20 h-[70px] flex flex-col gap-3 items-center justify-center bg-gray-200 top-0 right-0 rounded-bl-[18px] rounded-tr-[18px]">
      <li className="text-sm font-bold text-red-600">삭제</li>
      <li className="text-sm font-bold text-blackAlpha-900">수정</li>
    </ul>
  );
}

export default NovelOptionBox;
