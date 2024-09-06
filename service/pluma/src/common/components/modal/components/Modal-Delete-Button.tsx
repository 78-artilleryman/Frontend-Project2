import { Button } from "@byeonghyeon/react-components-button";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

function ModalDeleteButton({ onClick, className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const DefaultModalDeleteButtonClass = "w-20 h-8 flex items-center justify-center mt-5 ";
  const ModalDeleteButtonClass = twMerge(DefaultModalDeleteButtonClass, className);
  return (
    <Button color="red" onClick={onClick} className={ModalDeleteButtonClass} size="md">
      삭제
    </Button>
  );
}

export default ModalDeleteButton;
