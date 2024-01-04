import React from 'react';
import {
  display,
  felxJustifyContent,
  flexAlignItems,
  flexDirections,
  flexGaps,
  flexHeight,
  flexWidth,
} from './flex.css';

type Props = {
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
  height?: 'auto' | 'half' | 'full' | 'inherit';
  width?: 'auto' | 'half' | 'full' | 'inherit';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  direction?: 'row' | 'column';
  justifyContent?: 'center' | 'stretch' | 'spaceBetween';
  alignItems?: 'center' | 'start';
};

export default function Flex({
  children,
  width = 'full',
  height = 'auto',
  gap = 'none',
  direction = 'row',
  alignItems = 'start',
  justifyContent = 'stretch',
}: Props) {
  return (
    <div
      className={`${display} ${flexWidth[width]} ${flexHeight[height]} ${flexDirections[direction]} ${flexGaps[gap]} ${flexAlignItems[alignItems]} ${felxJustifyContent[justifyContent]}`}
    >
      {children}
    </div>
  );
}
