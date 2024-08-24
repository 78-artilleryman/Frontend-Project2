"use client";

import React from "react";
import { useFetchNovelSliderQuery } from "../queries/novelQuery";
import NovelBox from "./NovelBox";

function NovelListSlider() {
  const { data: noveSliderlList } = useFetchNovelSliderQuery({ sort: "updatedAt", page: 1, limit: 8 });
  return (
    <ul className="flex gap-8 w-[200%] flex-shrink-0">{noveSliderlList?.map(novel => <NovelBox key={novel.id} />)}</ul>
  );
}

export default NovelListSlider;
