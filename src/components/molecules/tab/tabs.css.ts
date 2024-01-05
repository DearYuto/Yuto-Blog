import { vars } from '@/styles/global.css';
import { palette } from '@/utils/colors';
import { fontFace, style, styleVariants } from '@vanilla-extract/css';

const base = style({
  padding: '8px 15px',
  cursor: 'pointer',
  borderRadius: '10px 10px 0 0',
  fontFamily: vars.font.nanum_gothic,
});

export const tab = styleVariants({
  active: [
    base,
    {
      fontWeight: '800',
      color: palette.primary,
      background: palette.serenity50,
      borderBottom: `2px solid ${palette.primary}`,
    },
  ],
  inactive: [
    base,
    {
      background: palette.white,
      color: palette.gray700,
      borderBottom: `2px solid ${palette.gray100}`,
    },
  ],
});

export const content = style({
  padding: '20px 10px',
});
