import React, { ButtonHTMLAttributes } from "react";
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";

interface SlideControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

function SlideControlButton({ direction, onClick }: SlideControlButtonProps) {
  const absoluteDirection =
    direction === "left" ? "left-0 bg-button-left rounded-l-md" : "right-0 bg-button-right rounded-r-md";

  return (
    <button
      onClick={onClick}
      className={`w-[30px] h-[280px] flex justify-center items-center absolute top-0 tbr:h-[270px] tbc:h-[210px] tbc:rounded-xl mb:hidden ${absoluteDirection} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      type="button">
      {direction === "left" ? (
        <RiArrowLeftWideFill size={25} color="white" />
      ) : (
        <RiArrowRightWideFill size={25} color="white" />
      )}
    </button>
  );
}

export default SlideControlButton;
