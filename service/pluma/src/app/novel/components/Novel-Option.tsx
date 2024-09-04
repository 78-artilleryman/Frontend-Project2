import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import useOutside from "@/common/hooks/use-outside";
import useToggle from "@/common/hooks/use-toggle";

function NovelOption() {
  const { isToggle, onToggle } = useToggle();
  const ref = useOutside<HTMLUListElement>({ onCloseToggle: onToggle });
  return (
    <>
      <GoKebabHorizontal
        color="white"
        className="absolute right-4 top-4 z-40 cursor-pointer"
        onClick={onToggle}
        size={20}
      />
      {isToggle && (
        <ul
          className="absolute right-0 top-0 z-40 flex h-[74px] w-20 flex-col items-center justify-center rounded-bl-[18px] rounded-tr-[18px] bg-gray-200"
          ref={ref}>
          <li className="w-full rounded-tr-2xl py-2 text-center text-sm font-bold text-red-600 hover:bg-gray-300">
            삭제
          </li>
          <li className="text-blackAlpha-900 w-full rounded-bl-2xl py-2 text-center text-sm font-bold hover:bg-gray-300">
            수정
          </li>
        </ul>
      )}
    </>
  );
}

export default NovelOption;
