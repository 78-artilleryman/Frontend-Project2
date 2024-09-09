import React, { PropsWithChildren } from "react";
import NovelBoxCover from "./Novel-Box-Cover";
import NovelOptionBox from "./Novel-Option";
import NovelOptionButton from "./Novel-Option-Button";

function NovelBox(props: PropsWithChildren) {
  return (
    <li className="tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px] group relative aspect-square h-[280px] w-[230px] cursor-pointer rounded-[20px] bg-[#d9d9d9]">
      {props.children}
    </li>
  );
}

NovelBox.Cover = NovelBoxCover;
NovelBox.Option = NovelOptionBox;
NovelBox.OptionButton = NovelOptionButton;
export default NovelBox;
