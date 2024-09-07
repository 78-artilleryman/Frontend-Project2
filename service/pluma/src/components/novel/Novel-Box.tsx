import React from "react";
import NovelBoxCover from "./Novel-Box-Cover";
import { NovelType } from "@/types/novel/novel.type";

function NovelBox(props: NovelType) {
  return (
    <li className="tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px] group relative aspect-square h-[280px] w-[230px] cursor-pointer rounded-[20px] bg-[#d9d9d9]">
      <NovelBoxCover {...props} />
    </li>
  );
}

export default NovelBox;
