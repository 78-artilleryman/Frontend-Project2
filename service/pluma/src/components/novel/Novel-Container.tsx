"use client";

import React from "react";
import { useFetchNovelContainerQuery } from "../../queries/novel/novelQuery";
import NovelBox from "./Novel-Box";
import CreateNovelBox from "./Novel-Create-Box";

function NovelContainer() {
  const { data: novelContainerList } = useFetchNovelContainerQuery({ sort: "createdAt", page: 1, limit: 8 });
  return (
    <ul className="tbr:grid-cols-4 tbr:gap-7 tbc:grid-cols-4 tbc:gap-7 mb:grid-cols-3 mb:gap-4 mb-20 grid grid-cols-5 gap-10">
      <CreateNovelBox />
      {novelContainerList &&
        novelContainerList.pages[0]?.novels.map(novel => (
          <NovelBox key={novel.id}>
            <NovelBox.Cover {...novel}>
              <NovelBox.Option {...novel}>
                <NovelBox.OptionButton controlType="delete" novel={novel} />
                <NovelBox.OptionButton controlType="edit" novel={novel} />
              </NovelBox.Option>
            </NovelBox.Cover>
          </NovelBox>
        ))}
    </ul>
  );
}

export default NovelContainer;
