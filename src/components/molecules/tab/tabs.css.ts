import { palette } from '@/utils/colors';
import { style, styleVariants } from '@vanilla-extract/css';

export const tab = style({
  padding: '10px 15px',
});

export const background = styleVariants({
  active: { background: palette.serenity50 },
  inactive: { background: palette.white },
});
