import React from 'react';
import {
  display,
  felxJustifyContent,
  flexAlignItems,
  flexDirections,
  flexGaps,
} from './flex.css';

type Props = {
  children: React.ReactNode;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  direction?: 'row' | 'column';
  justifyContent?: 'center' | 'stretch' | 'spaceBetween';
  alignItems?: 'center' | 'start';
};

export default function Flex({
  children,
  gap = 'none',
  direction = 'row',
  alignItems = 'start',
  justifyContent = 'stretch',
}: Props) {
  return (
    <div
      className={`${display} ${flexDirections[direction]} ${flexGaps[gap]} ${flexAlignItems[alignItems]} ${felxJustifyContent[justifyContent]}`}
    >
      {children}
    </div>
  );
}
