import React from "react";
import { translateGenre } from "@/util/translateGenre";

interface NovelBoxCoverProps {
  title: string;
  description: string;
  genres: {
    id: string;
    name: string;
  }[];
}

function NovelBoxCover(props: NovelBoxCoverProps) {
  return (
    <div className="opacity-0 flex flex-col items-center rounded-[20px] h-full group-hover:bg-[rgba(0,0,0,0.6)] group-hover:opacity-100 absolute inset-0 z-30 transition-all justify-center gap-3">
      <ul className="flex items-center gap-2">
        {props.genres.map(genre => (
          <li className="text-sm text-blackAlpha-900 bg-blue-400 p-2 text-center font-bold rounded" key={genre.id}>
            {translateGenre(genre.name)}
          </li>
        ))}
      </ul>
      <h4 className="text-whiteAlpha-900 text-xl font-bold text-overflow-3">{props.title}</h4>
      <p className="text-whiteAlpha-900 text-sm font-normal w-[180px] text-overflow-3">{props.description}</p>
    </div>
  );
}

export default NovelBoxCover;
