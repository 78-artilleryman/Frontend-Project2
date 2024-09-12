import Link from "next/link";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function CreateNovelBox() {
  return (
    <Link href="/novel/create">
      <li className="tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px] group relative flex aspect-square h-[280px] w-[230px] cursor-pointer items-center justify-center rounded-[20px] bg-[#d9d9d9] hover:bg-[rgba(0,0,0,0.3)]">
        <IoIosAddCircleOutline size={60} color="gray" />
      </li>
    </Link>
  );
}

export default CreateNovelBox;
