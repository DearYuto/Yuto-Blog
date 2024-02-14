import { styleVariants } from "@vanilla-extract/css";

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