import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: 1.5,
});
