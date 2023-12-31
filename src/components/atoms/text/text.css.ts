import { palette } from '../../../utils/colors';
import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  fontSize: 16,
  fontWeight: 600,
});

export const textColor = styleVariants(palette, (color) => [base, { color }]);

export const textWeight = styleVariants({
  normal: { fontWeight: 400 },
  bold: { fontWeight: 700 },
  extraBold: { fontWeight: 800 },
});

export const textSize = styleVariants({
  xs: { fontSize: '12px' },
  sm: { fontSize: '14px' },
  md: { fontSize: '16px' },
  lg: { fontSize: '18px' },
  xl: { fontSize: '24px' },
  '2xl': { fontSize: '30px' },
});
