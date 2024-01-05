import { palette } from '@/utils/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  background: palette.white,
  height: '90vh',
  minHeight: '900px',
  maxWidth: '1200px',
  margin: '20px',
  borderRadius: '10px',
  boxShadow: '2px 4px 50px rgba(193, 194, 202, 0.2)',
  overflow: 'hidden',
  position: 'relative',
});

export const left = style({
  width: '35%',
  height: '100%',
  background: '#F8F9FF',
  padding: '20px 30px',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '100px',
});

export const right = style({
  width: '70%',
  minWidth: '1000px',
  padding: '20px',
});
