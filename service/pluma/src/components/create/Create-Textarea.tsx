"use client";

import React from "react";

function CreateTextarea() {
  return (
    <div className="flex w-[45%] flex-col gap-2">
      <label htmlFor="description" className="text-blackAlpha-900 text-base font-bold">
        요약
      </label>
      <textarea
        id="description"
        className="h-40 w-full resize-none rounded-md border-2 border-gray-300 p-2 focus:border-2 focus:border-blue-500 focus:outline-none focus:ring-0"
      />
    </div>
  );
}

export default CreateTextarea;
