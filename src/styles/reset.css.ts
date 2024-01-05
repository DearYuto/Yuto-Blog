import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  listStyle: 'none',
  textDecoration: 'none',
  color: 'black',
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
