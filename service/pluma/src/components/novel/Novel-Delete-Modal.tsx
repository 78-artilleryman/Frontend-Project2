import React from "react";
import { Modal } from "@/common/components/modal/Modal";

interface NovelDeleteModalProps {
  novelTitle?: string;
  handleModalClose: () => void;
}

function NovelDeleteModal({ novelTitle, handleModalClose }: NovelDeleteModalProps) {
  const modalValues = {
    isLoading: false,
    isDisabled: false,
    title: "소설 삭제",
    onCloseModal: handleModalClose,
  };

  return (
    <Modal value={modalValues} className="flex flex-col items-center gap-3">
      <Modal.Backdrop />
      <Modal.CloseButton />
      <Modal.Title />
      <Modal.Text>
        정말 <span className="text-red-400">{novelTitle}</span>
        을(를) 삭제하시겠습니까?
      </Modal.Text>
      <Modal.DeleteButton />
    </Modal>
  );
}

export default NovelDeleteModal;
