import React from "react";
import { Modal } from "@/common/components/modal/Modal";

interface NovelDeleteModalProps {
  novelTitle: string;
}

function NovelDeleteModal({ novelTitle }: NovelDeleteModalProps) {
  const modalValues = {
    isLoading: false,
    isDisabled: false,
    title: "소설 삭제",
    onCloseModal: () => 0,
  };

  return (
    <Modal value={modalValues}>
      <Modal.CloseButton />
      <Modal.Title />
      <Modal.Text>
        정말 <span className="text-red-400">{novelTitle}</span>
        을(를) 삭제하시겠습니까?
      </Modal.Text>
    </Modal>
  );
}

export default NovelDeleteModal;
