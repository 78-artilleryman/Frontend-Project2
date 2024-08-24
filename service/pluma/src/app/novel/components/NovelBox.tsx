import React from "react";
import NovelBoxCover from "./NovelBoxCover";

interface NovelBoxProps {
  title: string;
  description: string;
}

function NovelBox(props: NovelBoxProps) {
  return (
    <li className="relative w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px] cursor-pointer group aspect-square">
      <NovelBoxCover {...props} />
    </li>
  );
}

export default NovelBox;
