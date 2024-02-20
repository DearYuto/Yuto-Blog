import React from 'react';

import Button from '@/components/atoms/button/Button';
import ModalContents from './components/ModalContents';
import ModalOverlay from './components/ModalOverlay';
import ModalCloseButton from './components/ModalCloseButton';

import { DISPLAY_NAME } from './constants/displayNames';
import ModalValidator from './utils/validator/Validator';
import ModalProvider from './components/Provider';
import { useModalDispatch, useOpenModal } from './utils/hooks/useModal';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

/**
 * ContextAPI 사용을 위해 래핑
 */
function ModalContainer({ children }: Props) {
  React.Children.forEach(children, (child) => {
    const { displayName } = child.type as unknown as { displayName: string };

    ModalValidator.ensureSingleModalContent(displayName);
  });

  return (
    <ModalProvider>
      <ModalRoot>{children}</ModalRoot>
    </ModalProvider>
  );
}

type RootProps = {
  children: React.ReactElement | React.ReactElement[];
};

function ModalRoot({ children }: RootProps) {
  const isOpen = useOpenModal();
  const { openModal, closeModal } = useModalDispatch();

  return (
    <>
      <Button onClick={openModal}>Open</Button>
      {isOpen && (
        <>
          <ModalOverlay onClose={closeModal} />
          <>{children}</>
        </>
      )}
    </>
  );
}

ModalContainer.displayName = DISPLAY_NAME.root;

const Modal = Object.assign(ModalContainer, {
  Contents: ModalContents,
  CloseButton: ModalCloseButton,
});

export default Modal;
