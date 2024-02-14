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

export const backgroundColor = styleVariants(palette, (color) => [
  { backgroundColor: color },
]);
