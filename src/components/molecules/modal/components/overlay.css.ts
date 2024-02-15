import { palette } from '@/utils/colors';
import { style } from '@vanilla-extract/css';

export const overlay = style({
  width: '100vw',
  height: '100dvh',
  left: 0,
  top: 0,
  background: palette.gray800,
  opacity: 0.5,
  inset: 0,
  zIndex: 1000,
  overflow: 'auto',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
});
