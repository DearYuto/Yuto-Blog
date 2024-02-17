import Button from '@/components/atoms/button/Button';
import React from 'react';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalCloseButton({ onClose, children }: Props) {
  return <Button onClick={onClose}>{children}</Button>;
}

ModalCloseButton.displayName = 'Modal.CloseButton';
