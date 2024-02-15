import { palette } from '@/utils/colors';
import { style } from '@vanilla-extract/css';

export const modalContentsContainer = style({
  top: 0,
  left: 0,
  position: 'fixed',
  width: '100vw',
  height: '100dvh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'none',
  zIndex: 1500,
});

export const modalContent = style({
  background: palette.white,
  margin: '0 auto',
  width: 'auto',
  minWidth: '70dvw',
  maxWidth: '95dvw',
  minHeight: '150px',
  borderRadius: '8px',
  padding: '20px',
  pointerEvents: 'all',
});
