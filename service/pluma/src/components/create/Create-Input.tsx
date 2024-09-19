"use client";

import { Input } from "@byeonghyeon/react-components-input";
import React from "react";

function CreateInput() {
  return (
    <div className="flex w-[45%] flex-col gap-2">
      <label htmlFor="title" className="text-blackAlpha-900 text-base font-bold">
        제목
      </label>
      <Input id="title" className="bg-whiteAlpha-900 focus:bg-whiteAlpha-900 h-10" />
    </div>
  );
}

export default CreateInput;
