import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { useModalContext } from "../Modal";

function ModalCloseButton({ className }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const modalContext = useModalContext();
  const DefaultModalButtonClass = "absolute top-4 right-4 ";
  const ModalButtonClass = twMerge(DefaultModalButtonClass, className);

  return (
    <button onClick={modalContext.onCloseModal} className={ModalButtonClass}>
      <Image src="/icon/x.svg" alt="modal-close" width={24} height={24} />
    </button>
  );
}

export default ModalCloseButton;
