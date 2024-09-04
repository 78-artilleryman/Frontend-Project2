import { createPortal } from "react-dom";
import { useModalContext } from "../Modal";

function ModalBackdrop() {
  const modalContext = useModalContext();
  const backdropElement = document.querySelector("#backdrop")!;
  return createPortal(
    <div
      className="bg-blackAlpha-900 fixed left-0 top-0 z-10 h-[100vh] w-[100vw] bg-opacity-40"
      onClick={modalContext.onCloseModal}
    />,
    backdropElement
  );
}

export default ModalBackdrop;
