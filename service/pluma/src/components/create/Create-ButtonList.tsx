"use client";

import { Button } from "@byeonghyeon/react-components-button";
import { useToast } from "@byeonghyeon/react-components-toast";
import { useRouter } from "next/navigation";
import React from "react";
import { useNovelMutation } from "@/queries/novel/mutation";
import { createNovelStore } from "@/store/novel/store";

function CreateButtonList() {
  const { novel } = createNovelStore();
  const { mutate } = useNovelMutation("", "post", novel);
  const { toast } = useToast();

  const router = useRouter();

  const handlePostNovel = async () => {
    mutate(undefined, {
      onSuccess: () => {
        toast({
          payload: {
            message: "소설이 생성되었습니다.",
          },
        });
        router.push("/novel");
      },
      onError: error => {
        console.error("소설 생성 실패:", error);
        toast({
          payload: {
            message: "소설 생성에 실패했습니다.",
          },
        });
      },
    });
  };

  return (
    <Button type="button" color="blue" className="text-base" size="lg" onClick={handlePostNovel}>
      생성
    </Button>
  );
}

export default CreateButtonList;
