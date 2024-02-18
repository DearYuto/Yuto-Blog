import React from 'react';
import { modalContent, modalContentsContainer } from './contents.css';
import { DISPLAY_NAME } from '../constants/displayNames';
type Props = {
  children: React.ReactNode;
};

export default function ModalContents({ children }: Props) {
  return (
    <div className={modalContentsContainer}>
      <div className={modalContent}>{children}</div>
    </div>
  );
}

ModalContents.displayName = DISPLAY_NAME.contents;
