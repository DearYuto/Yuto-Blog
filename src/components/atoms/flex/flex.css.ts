import { style, styleVariants } from '@vanilla-extract/css';

export const display = style({
  display: 'flex',
});

export const flexDirections = styleVariants({
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
});

export const flexGaps = styleVariants({
  none: { gap: 0 },
  xs: { gap: '4px' },
  sm: { gap: '8px' },
  md: { gap: '16px' },
  lg: { gap: '24px' },
});

export const felxJustifyContent = styleVariants({
  center: { justifyContent: 'center' },
  stretch: { justifyContent: 'stretch' },
  spaceBetween: { justifyContent: 'space-between' },
});

export const flexAlignItems = styleVariants({
  center: { alignItems: 'center' },
  start: { alignItems: 'flex-start' },
});

export const flexWidth = styleVariants({
  half: { width: '50%' },
  full: { width: '100%' },
});
