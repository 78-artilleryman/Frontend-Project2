import React, { ButtonHTMLAttributes } from "react";
import NovelDeleteModal from "./Novel-Delete-Modal";
import useToggle from "@/common/hooks/use-toggle";

interface NovelOptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  controlType: "delete" | "edit";
}

function NovelOptionButton({ controlType }: NovelOptionButtonProps) {
  const defaultButtonClass = "w-full py-2 text-center text-sm font-bold hover:bg-gray-300 ";

  const { isToggle: deleteModalState, onToggle: deleteModalToggle } = useToggle();
  const { isToggle: editeModalState, onToggle: editeModalToggle } = useToggle();

  const handleOpenModal = () => {
    if (controlType === "delete") {
      deleteModalToggle();
    } else {
      editeModalToggle();
    }
  };

  if (controlType === "delete") {
    return (
      <>
        {deleteModalState && <NovelDeleteModal />}
        <button className={`${defaultButtonClass}` + "rounded-tr-2xl text-red-600"} onClick={handleOpenModal}>
          삭제
        </button>
      </>
    );
  } else {
    return (
      <>
        {editeModalState && <NovelDeleteModal />}
        <button className={`${defaultButtonClass}` + "text-blackAlpha-900 rounded-bl-2xl"} onClick={handleOpenModal}>
          수정
        </button>
      </>
    );
  }
}

export default NovelOptionButton;
