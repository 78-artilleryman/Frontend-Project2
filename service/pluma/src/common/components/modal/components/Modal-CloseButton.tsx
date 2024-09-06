import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

function ModalCloseButton({ onClick, className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const DefaultModalButtonClass = "absolute top-4 right-4 ";
  const ModalButtonClass = twMerge(DefaultModalButtonClass, className);

  return (
    <button onClick={onClick} className={ModalButtonClass}>
      <Image src="/icon/x.svg" alt="modal-close" width={24} height={24} />
    </button>
  );
}

export default ModalCloseButton;
