import React from 'react';

import Button from '@/components/atoms/button/Button';
import ModalContents from './components/ModalContents';
import ModalOverlay from './components/ModalOverlay';
import ModalCloseButton from './components/ModalCloseButton';

import { DISPLAY_NAME } from './constants/displayNames';
import ModalValidator from './utils/validator/Validator';

type Props = {
  isOpen: boolean;
  children: React.ReactElement | React.ReactElement[];
  openModal: () => void;
  closeModal: () => void;
};

function ModalContainer({ openModal, closeModal, children, isOpen }: Props) {
  const childrenCount = React.Children.count(children);

  React.Children.forEach(children, (child) => {
    const { displayName } = child.type as unknown as { displayName: string };

    if (childrenCount > 1) {
      ModalValidator.validateModalDisplayName(displayName);
      return;
    }

    ModalValidator.ensureSingleModalContent(displayName);
  });

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

ModalContainer.displayName = DISPLAY_NAME.container;

const Modal = Object.assign(ModalContainer, {
  Contents: ModalContents,
  CloseButton: ModalCloseButton,
});

export default Modal;
