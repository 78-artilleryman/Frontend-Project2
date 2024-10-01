import { useToast } from "@byeonghyeon/react-components-toast";
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
  const { toast } = useToast();

  const modalValues = {
    isLoading: false,
    isDisabled: false,
    title: "소설 삭제",
    onCloseModal: handleModalClose,
  };

  const handleDeleteNovel = () => {
    mutate(undefined, {
      onSuccess: () => {
        toast({
          payload: {
            message: "소설이 삭제되었습니다.",
          },
        });
        handleModalClose();
      },
      onError: error => {
        console.error("소설 삭제 실패:", error);
        toast({
          payload: {
            message: "소설 삭제에 실패했습니다.",
          },
        });
      },
    });
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
