import { RefObject, useEffect, useRef, useState } from "react";

const useHandleModalClick = (modalRef: RefObject<HTMLDivElement>, handleModalClose: () => void) => {
  useEffect(() => {
    // ESC keydown => Modal Close
    const handleKeyDownEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [modalRef, handleModalClose]);
};

const useModal = () => {
  const modalRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  useHandleModalClick(modalRef, handleModalClose);

  return {
    openModal,
    modalRef,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
