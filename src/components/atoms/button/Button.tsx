import classNames from 'classnames';
import React from 'react';
import { buttonBase, buttonSize, buttonVariant } from './button.css';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'primaryOutline';
  size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'full';
};

export default function Button({
  children = 'Text',
  size = 'sm',
  variant = 'primary',
}: Props) {
  const className = classNames(
    buttonBase,
    buttonSize[size],
    buttonVariant[variant]
  );
  return <button className={className}>{children}</button>;
}
