"use client";

import React, { ChangeEvent } from "react";
import { createNovelStore } from "@/store/novel/store";

function CreateTextarea() {
  const { novel, updateField } = createNovelStore();

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    updateField(name as keyof typeof novel, value);
  };
  return (
    <div className="flex w-[45%] flex-col gap-2">
      <label htmlFor="description" className="text-blackAlpha-900 text-base font-bold">
        요약
      </label>
      <textarea
        value={novel.description}
        id="description"
        name="description"
        className="h-40 w-full resize-none rounded-md border-2 border-gray-300 p-2 focus:border-2 focus:border-blue-500 focus:outline-none focus:ring-0"
        onChange={onChange}
      />
    </div>
  );
}

export default CreateTextarea;
