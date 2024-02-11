import { palette } from '@/utils/colors';
import { styleVariants } from '@vanilla-extract/css';

export const badgeStyle = styleVariants({
  default: {
    fontSize: 12,
    fontWeight: 600,
    color: palette.white,
    background: palette.primary,
    display: 'inline-block',
    padding: '2px 6px',
  },
});

// TODO 공통 사용하는 스타일 모아서 사용하도록 변경해야할 듯
export const borderRadius = styleVariants({
  none: {
    borderRadius: 0,
  },
  xs: {
    borderRadius: '2px',
  },
  sm: {
    borderRadius: '4px',
  },
  md: {
    borderRadius: '8px',
  },
  lg: {
    borderRadius: '12px',
  },
  xl: {
    borderRadius: '20px',
  },
  full: {
    borderRadius: '100%',
  },
});

export const backgroundColor = styleVariants(palette, (color) => [
  { backgroundColor: color },
]);
