import React, { ButtonHTMLAttributes } from "react";

interface NovelOptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  controlType: "delete" | "edit";
}

function NovelOptionButton({ controlType }: NovelOptionButtonProps) {
  const defaultButtonClass = "w-full py-2 text-center text-sm font-bold hover:bg-gray-300 ";

  if (controlType === "delete") {
    return <button className={`${defaultButtonClass}` + "rounded-tr-2xl text-red-600"}>삭제</button>;
  } else {
    <button className={`${defaultButtonClass}` + "text-blackAlpha-900 rounded-bl-2xl"}>수정</button>;
  }
}

export default NovelOptionButton;
