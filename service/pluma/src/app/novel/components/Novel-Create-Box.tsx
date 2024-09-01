import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function CreateNovelBox() {
  return (
    <li className="relative w-[230px] h-[280px] bg-[#d9d9d9] rounded-[20px] tbr:w-[200px] tbr:h-[270px] tbc:w-[140px] tbc:h-[210px] tbc:rounded-xl mb:w-[90px] mb:h-[140px] cursor-pointer group aspect-square flex justify-center items-center hover:bg-[rgba(0,0,0,0.3)]">
      <IoIosAddCircleOutline size={60} color="gray" />
    </li>
  );
}

export default CreateNovelBox;
