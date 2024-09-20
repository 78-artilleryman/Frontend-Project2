"use client";

import { Input } from "@byeonghyeon/react-components-input";
import React, { ChangeEvent } from "react";
import { createNovelStore } from "@/store/novel/novelStore";

function CreateInput() {
  const { novel, updateField } = createNovelStore();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateField(name as keyof typeof novel, value);
  };

  return (
    <div className="flex w-[45%] flex-col gap-2">
      <label htmlFor="title" className="text-blackAlpha-900 text-base font-bold">
        제목
      </label>

      <Input
        id="title"
        name="title" // name 속성을 필수로 추가
        className="bg-whiteAlpha-900 focus:bg-whiteAlpha-900 h-10"
        value={novel.title}
        onChange={onChange}
      />
    </div>
  );
}

export default CreateInput;
