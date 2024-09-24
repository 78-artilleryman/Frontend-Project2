import React from "react";
import { Modal } from "@/common/components/modal/Modal";
import { useNovelMutation } from "@/queries/novel/mutation";
import { NovelType } from "@/types/novel/novel.type";

interface NovelDeleteModalProps {
  handleModalClose: () => void;
  novel: NovelType;
}

function NovelDeleteModal({ handleModalClose, novel }: NovelDeleteModalProps) {
  const { mutate } = useNovelMutation(novel?.id, "delete");

  const modalValues = {
    isLoading: false,
    isDisabled: false,
    title: "소설 삭제",
    onCloseModal: handleModalClose,
  };

  const handleDeleteNovel = () => {
    mutate();
  };

  return (
    <Modal value={modalValues} className="flex flex-col items-center gap-3">
      <Modal.Backdrop />
      <Modal.CloseButton />
      <Modal.Title />
      <Modal.Text>
        정말 <span className="text-red-400">{novel?.title}</span>
        을(를) 삭제하시겠습니까?
      </Modal.Text>
      <Modal.DeleteButton onClick={handleDeleteNovel} />
    </Modal>
  );
}

export default NovelDeleteModal;
