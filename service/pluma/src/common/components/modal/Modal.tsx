"use client";

import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import * as Components from "./components/index";
import { ModalContextStates, ModalContextValues } from "./modal.type";

const initialModalContextState = {
  isLoading: false,
  onCloseModal: () => {},
};

const ModalContext = createContext<ModalContextStates>(initialModalContextState);

export function useModalContext() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) throw new Error("Modal Context에서 사용해주세요");
  return modalContext;
}

export function Modal(props: ModalContextValues) {
  const modalElement = document.querySelector("#modal")!;
  return createPortal(
    <ModalContext.Provider value={props.value}>
      <div className="bg-blackAlpha-500 fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center">
        <div className="fixed left-1/2 top-1/2 z-[49] w-[400px] -translate-x-1/2 -translate-y-1/2 transform bg-gray-50">
          {props.children}
        </div>
      </div>
    </ModalContext.Provider>,
    modalElement
  );
}

Modal.Title = Components.Title;
Modal.Text = Components.Text;
Modal.CloseButton = Components.CloseButton;
Modal.Backdrop = Components.Backdrop;
