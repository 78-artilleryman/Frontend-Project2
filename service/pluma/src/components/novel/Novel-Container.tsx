"use client";

import Link from "next/link";
import React from "react";
import { useFetchNovelContainerQuery } from "../../queries/novel/query";
import NovelBox from "./Novel-Box";
import CreateNovelBox from "./Novel-Create-Box";
import useIntersect from "@/common/hooks/use-intersect";

function NovelContainer() {
  const {
    data: novelContainerList,
    fetchNextPage,
    isFetched,
  } = useFetchNovelContainerQuery({
    sort: "createdAt",
    page: 1,
    limit: 14,
  });

  const ref = useIntersect<HTMLDivElement>(fetchNextPage, isFetched);
  return (
    <ul className="tbr:grid-cols-4 tbr:gap-7 tbc:grid-cols-4 tbc:gap-7 mb:grid-cols-3 mb:gap-4 mb-20 grid grid-cols-5 gap-10">
      <CreateNovelBox />
      {novelContainerList &&
        novelContainerList.pages.flatMap(page =>
          page.novels.map(novel => (
            <Link href={`/novel/${novel.id}`} key={novel.id} prefetch={false}>
              <NovelBox>
                <NovelBox.Cover {...novel}>
                  <NovelBox.Option {...novel}>
                    <NovelBox.OptionButton controlType="delete" novel={novel} />
                    <NovelBox.OptionButton controlType="edit" novel={novel} />
                  </NovelBox.Option>
                </NovelBox.Cover>
              </NovelBox>
            </Link>
          ))
        )}
      <div ref={ref} />
    </ul>
  );
}

export default NovelContainer;
