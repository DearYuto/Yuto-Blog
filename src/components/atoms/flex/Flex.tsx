import React from 'react';
import {
  display,
  felxJustifyContent,
  flexAlignItems,
  flexDirections,
  flexGaps,
  flexHeight,
  flexWidth,
  flexWrap,
} from './flex.css';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
  height?: 'auto' | 'half' | 'full' | 'inherit';
  width?: 'auto' | 'half' | 'full' | 'inherit';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  direction?: 'row' | 'column';
  justifyContent?: 'center' | 'stretch' | 'spaceBetween';
  alignItems?: 'center' | 'start';
  wrap?: 'wrap' | 'nowrap';
  style?: React.CSSProperties | undefined;
};

export default function Flex({
  children,
  style,
  wrap = 'nowrap',
  width = 'full',
  height = 'auto',
  gap = 'none',
  direction = 'row',
  alignItems = 'start',
  justifyContent = 'stretch',
}: Props) {
  const className = classNames(
    display,
    flexWidth[width],
    flexHeight[height],
    flexDirections[direction],
    flexGaps[gap],
    flexAlignItems[alignItems],
    felxJustifyContent[justifyContent],
    flexWrap[wrap]
  );

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}
