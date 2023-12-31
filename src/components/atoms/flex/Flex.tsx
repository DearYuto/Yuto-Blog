import React from 'react';
import {
  display,
  felxJustifyContent,
  flexAlignItems,
  flexDirections,
  flexGaps,
  flexWidth,
} from './flex.css';

type Props = {
  children: React.ReactNode;
  width?: 'half' | 'full';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  direction?: 'row' | 'column';
  justifyContent?: 'center' | 'stretch' | 'spaceBetween';
  alignItems?: 'center' | 'start';
};

export default function Flex({
  children,
  width = 'full',
  gap = 'none',
  direction = 'row',
  alignItems = 'start',
  justifyContent = 'stretch',
}: Props) {
  return (
    <div
      className={`${display} ${flexWidth[width]} ${flexDirections[direction]} ${flexGaps[gap]} ${flexAlignItems[alignItems]} ${felxJustifyContent[justifyContent]}`}
    >
      {children}
    </div>
  );
}
