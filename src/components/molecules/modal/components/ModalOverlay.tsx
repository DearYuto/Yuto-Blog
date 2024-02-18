import React from 'react';
import { overlay } from './overlay.css';
import { DISPLAY_NAME } from '../constants/displayNames';

type Props = {
  onClose: () => void;
};

export default function ModalOverlay({ onClose }: Props) {
  return <div onClick={onClose} className={overlay}></div>;
}

ModalOverlay.displayName = DISPLAY_NAME.overlay;
