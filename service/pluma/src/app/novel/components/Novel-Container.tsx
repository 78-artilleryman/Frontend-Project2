"use client";

import React from "react";
import { useFetchNovelContainerQuery } from "../queries/novelQuery";
import NovelBox from "./Novel-Box";
import CreateNovelBox from "./Novel-Create-Box";

function NovelContainer() {
  const { data: novelContainerList } = useFetchNovelContainerQuery({ sort: "createdAt", page: 1, limit: 8 });
  return (
    <ul className="grid grid-cols-5 gap-10 tbr:grid-cols-4 tbr:gap-7 tbc:grid-cols-4 tbc:gap-7 mb:grid-cols-3 mb:gap-4 mb-20">
      <CreateNovelBox />
      {novelContainerList && novelContainerList.pages[0]?.novels.map(novel => <NovelBox key={novel.id} {...novel} />)}
    </ul>
  );
}

export default NovelContainer;
