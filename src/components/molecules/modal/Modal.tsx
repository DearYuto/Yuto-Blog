import React from 'react';
import Button from '@/components/atoms/button/Button';
import ModalContents from './components/ModalContents';
import ModalOverlay from './components/ModalOverlay';

type Props = {
  isOpen: boolean;
  children: React.ReactElement<typeof ModalContents>;
  openModal: () => void;
  closeModal: () => void;
};

function ModalContainer({ openModal, closeModal, children, isOpen }: Props) {
  if (children) {
    const { displayName } = children.type as unknown as { displayName: string };

    if (displayName !== 'Modal.Contents') {
      throw new Error(
        '모달의 자식 요소는 반드시 ModalContents 컴포넌트를 사용해야 합니다.'
      );
    }
  }

  return (
    <div>
      <Button onClick={openModal}>Open</Button>
      {isOpen && (
        <>
          <ModalOverlay onClose={closeModal} />
          <>{children}</>
        </>
      )}
    </div>
  );
}

ModalContainer.displayName = 'Modal';

const Modal = Object.assign(ModalContainer, {
  Contents: ModalContents,
});

export default Modal;
