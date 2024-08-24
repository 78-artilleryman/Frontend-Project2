import React from "react";

interface NovelBoxCoverProps {
  title: string;
  description: string;
}

function NovelBoxCover(props: NovelBoxCoverProps) {
  return (
    <div className="bg-blackAlpha-900 flex flex-col items-center rounded-[20px] h-full group-hover:opacity-60 absolute inset-0 z-30 opacity-0 transition-opacity duration-500 justify-center gap-3">
      <h4 className="text-whiteAlpha-900 text-xl font-bold text-overflow-3">{props.title}</h4>
      <p className="text-whiteAlpha-900 text-sm font-normal w-[180px] text-overflow-3 ">{props.description}</p>
    </div>
  );
}

export default NovelBoxCover;
