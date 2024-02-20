import Button from '@/components/atoms/button/Button';
import React from 'react';
import { DISPLAY_NAME } from '../constants/displayNames';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalCloseButton({ onClose, children }: Props) {
  return (
    <Button variant='primaryOutline' onClick={onClose}>
      {children}
    </Button>
  );
}

ModalCloseButton.displayName = DISPLAY_NAME.closeButton;
