import { palette } from '@/utils/colors';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  listStyle: 'none',
  textDecoration: 'none',
  color: palette.gray700,
});

globalStyle('h1', {
  margin: 0,
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: 1.5,
});

globalStyle('code span', {
  color: palette.gray100,
});
