import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useModalContext } from "../Modal";

interface ModalTitleProps {
  children: ReactNode;
  className?: string;
}

function ModalTitle({ className }: ModalTitleProps) {
  const modalContext = useModalContext();
  const DefaultModalTitleClass = "text-xl font-bold text-blackAlpha-900 ";
  const ModalTitleClass = twMerge(DefaultModalTitleClass, className);

  return <h2 className={ModalTitleClass}>{modalContext.title}</h2>;
}

export default ModalTitle;
