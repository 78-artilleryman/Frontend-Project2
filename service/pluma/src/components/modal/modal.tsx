import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import classes from "./modal.module.css";
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
      <div className={classes["modal-root"]}>{props.children}</div>
    </ModalContext.Provider>,
    modalElement
  );
}
