import React from "react";
import NovelBox from "./NovelBox";

function NovelListSlider() {
  return (
    <ul className="flex  gap-8 w-[200%] flex-shrink-0">
      <NovelBox />
    </ul>
  );
}

export default NovelListSlider;
