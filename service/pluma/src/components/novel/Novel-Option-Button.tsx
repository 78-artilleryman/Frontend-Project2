import React, { ButtonHTMLAttributes } from "react";
import NovelDeleteModal from "./Novel-Delete-Modal";
import useModal from "@/common/hooks/use-modal";

interface NovelOptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  controlType: "delete" | "edit";
}

function NovelOptionButton({ controlType }: NovelOptionButtonProps) {
  const defaultButtonClass = "w-full py-2 text-center text-sm font-bold hover:bg-gray-300 ";

  const {
    openModal: deleteModalState,
    handleModalOpen: deleteModalOepn,
    handleModalClose: deleteModalClose,
  } = useModal();
  const { openModal: editeModalState, handleModalOpen: editeModalOpen, handleModalClose: editModalClose } = useModal();

  const handleOpenModal = () => {
    if (controlType === "delete") {
      deleteModalOepn();
    } else {
      editeModalOpen();
    }
  };

  if (controlType === "delete") {
    return (
      <>
        {deleteModalState && <NovelDeleteModal handleModalClose={deleteModalClose} />}
        <button className={`${defaultButtonClass}` + "rounded-tr-2xl text-red-600"} onClick={handleOpenModal}>
          삭제
        </button>
      </>
    );
  } else {
    return (
      <>
        {editeModalState && <NovelDeleteModal handleModalClose={editModalClose} />}
        <button className={`${defaultButtonClass}` + "text-blackAlpha-900 rounded-bl-2xl"} onClick={handleOpenModal}>
          수정
        </button>
      </>
    );
  }
}

export default NovelOptionButton;
