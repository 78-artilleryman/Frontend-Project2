"use client";

import { Button } from "@byeonghyeon/react-components-button";
import React from "react";
import { useNovelMutation } from "@/queries/novel/nevelMutation";
import { createNovelStore } from "@/store/novel/novelStore";

function CreateButtonList() {
  const { novel } = createNovelStore();
  const { mutate } = useNovelMutation("", "post", novel);
  const handlePostNovel = async () => {
    mutate();
  };

  return (
    <Button type="button" color="blue" className="text-base" size="lg" onClick={handlePostNovel}>
      생성
    </Button>
  );
}

export default CreateButtonList;
