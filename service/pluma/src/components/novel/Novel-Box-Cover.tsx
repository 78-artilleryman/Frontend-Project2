import React from "react";
import NovelOptionBox from "./Novel-Option";
import { translateGenre } from "@/common/util/translateGenre";
import { NovelType } from "@/types/novel/novel.type";

function NovelBoxCover(props: NovelType) {
  return (
    <div className="absolute inset-0 z-30 flex h-full flex-col items-center justify-center gap-3 rounded-[20px] opacity-0 transition-all hover:bg-[rgba(0,0,0,0.6)] hover:opacity-100">
      <NovelOptionBox {...props} />
      <ul className="flex items-center gap-2">
        {props.genres.map(genre => (
          <li className="text-blackAlpha-900 rounded bg-blue-400 p-2 text-center text-sm font-bold" key={genre.id}>
            {translateGenre(genre.name)}
          </li>
        ))}
      </ul>
      <h4 className="text-whiteAlpha-900 text-overflow-3 w-[180px] text-center text-lg font-bold">{props.title}</h4>
      <p className="text-whiteAlpha-900 text-overflow-3 w-[180px] text-sm font-normal">{props.description}</p>
    </div>
  );
}

export default NovelBoxCover;
