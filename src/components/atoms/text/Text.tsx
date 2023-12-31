import React from 'react';
import { textColor, textSize, textWeight } from './text.css';
import { palette } from '@/utils/colors.css';

export type Props = {
  children: React.ReactNode;
  color?: keyof typeof palette;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
  weight?: 'normal' | 'bold' | 'extraBold';
};

export default function Text({
  children,
  color = 'gray700',
  size = 'md',
  weight = 'normal',
}: Props) {
  return (
    <span
      className={`${textColor[color]} ${textWeight[weight]} ${textSize[size]}`}
    >
      {children}
    </span>
  );
}
