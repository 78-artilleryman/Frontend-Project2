import { createPortal } from "react-dom";
import { useModalContext } from "../Modal";

function ModalBackdrop() {
  const modalContext = useModalContext();
  const backdropElement = document.querySelector("#backdrop")!;
  return createPortal(
    <div className="bg-blackAlpha-500 fixed left-0 top-0 z-50 h-screen w-full" onClick={modalContext.onCloseModal} />,
    backdropElement
  );
}

export default ModalBackdrop;
