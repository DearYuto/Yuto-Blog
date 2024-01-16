import { palette } from '@/utils/colors';
import { style, styleVariants } from '@vanilla-extract/css';

const base = {
  fontSize: 16,
  fontWeight: 400,
  padding: '5px 10px',
  borderRadius: 10,
  border: 'none',
  cursor: 'pointer',
  transition: 'all .2s',
};

export const buttonBase = style({
  ...base,
  ':hover': {
    boxShadow: `2px 2px 10px ${palette.gray150}`,
  },
});

export const buttonVariant = styleVariants({
  primaryOutline: {
    backgroundColor: palette.white,
    border: `1px solid ${palette.primary}`,
    color: palette.primary,
  },
  primary: {
    backgroundColor: palette.primary,
    color: palette.white,
  },
});

export const buttonSize = styleVariants({
  auto: { width: 'auto' },
  xs: { width: '100px' },
  sm: { width: '200px' },
  md: { width: '400px' },
  lg: { width: '600px' },
  full: { width: '100%' },
});
