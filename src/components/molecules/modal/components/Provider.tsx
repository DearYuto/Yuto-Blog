import React, { useState } from 'react';
import {
  ModalDispatchContext,
  ModalStateContext,
} from '../utils/hooks/useModal';

type Props = {
  children: React.ReactNode;
};

export default function ModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(() => true);
  };

  const closeModal = () => {
    setIsOpen(() => false);
  };

  return (
    <ModalStateContext.Provider value={isOpen}>
      <ModalDispatchContext.Provider value={{ closeModal, openModal }}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
