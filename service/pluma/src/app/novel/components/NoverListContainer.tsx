import React from "react";
import NovelBox from "./NovelBox";

function NoverListContainer() {
  return (
    <ul className="grid grid-cols-5 gap-10 tbr:grid-cols-4 tbr:gap-7 tbc:grid-cols-4 tbc:gap-7 mb:grid-cols-3 mb:gap-4">
      <NovelBox />
    </ul>
  );
}

export default NoverListContainer;
