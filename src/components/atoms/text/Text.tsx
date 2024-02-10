import React from 'react';
import { textColor, textSize, textWeight } from './text.css';
import { palette } from '@/utils/colors';

export type Props = {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: keyof typeof palette;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'bold' | 'extraBold';
  style?: React.CSSProperties | undefined;
};

export default function Text({
  children,
  style,
  className,
  as: Component = 'span',
  color = 'gray700',
  size = 'md',
  weight = 'normal',
}: Props) {
  return (
    <Component
      style={style}
      className={`${textColor[color]} ${textWeight[weight]} ${textSize[size]} ${className}`}
    >
      {children}
    </Component>
  );
}
