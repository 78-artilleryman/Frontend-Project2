import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import useOutsideClick from "@/hooks/useOutSideClick";
import useToggleHook from "@/hooks/useToggleHook";

function NovelOptionBox() {
  const { isOpen, toggleState } = useToggleHook();
  const { dropdownRef } = useOutsideClick(toggleState);
  return (
    <>
      <GoKebabHorizontal
        color="white"
        className="cursor-pointer z-40 absolute right-4 top-4"
        onClick={toggleState}
        size={20}
      />
      {isOpen && (
        <ul
          className="z-40 absolute w-20 h-[70px] flex flex-col gap-3 items-center justify-center bg-gray-200 top-0 right-0 rounded-bl-[18px] rounded-tr-[18px]"
          ref={dropdownRef}>
          <li className="text-sm font-bold text-red-600">삭제</li>
          <li className="text-sm font-bold text-blackAlpha-900">수정</li>
        </ul>
      )}
    </>
  );
}

export default NovelOptionBox;
