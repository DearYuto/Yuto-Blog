import { palette } from '@/utils/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '280px',
  height: '280px',
  borderRadius: '10px',
  background: palette.white,
  boxShadow: `2px 6px 15px 0px ${palette.gray100}`,

  padding: '16px 0',
  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  height: '100%',
  minHeight: '150px',
  background: '#ddd',
});

export const title = style({
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  WebkitLineClamp: 1,
});
