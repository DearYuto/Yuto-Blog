import React from 'react';
import { overlay } from './overlay.css';

type Props = {
  onClose: () => void;
};

export default function ModalOverlay({ onClose }: Props) {
  return <div onClick={onClose} className={overlay}></div>;
}
