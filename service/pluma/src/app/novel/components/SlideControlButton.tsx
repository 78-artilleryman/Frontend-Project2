import React, { ButtonHTMLAttributes } from "react";
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";

interface SlideControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

function SlideControlButton({ direction }: SlideControlButtonProps) {
  return (
    <button
      className="w-[30px] h-[280px] flex justify-center items-center absolute top-0 left-0 bg-button-left rounded-l-xl tbr:h-[270px] tbc:h-[210px] tbc:rounded-xl mb:hidden"
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
