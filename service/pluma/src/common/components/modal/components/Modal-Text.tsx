import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ModalTextProps {
  children: ReactNode;
  className?: string;
}

function ModalText({ className, children }: ModalTextProps) {
  const DefaultModalTextClass = "text-sm font-normal text-blackAlpha-900 ";
  const ModalTextClass = twMerge(DefaultModalTextClass, className);

  return <p className={ModalTextClass}>{children}</p>;
}

export default ModalText;
