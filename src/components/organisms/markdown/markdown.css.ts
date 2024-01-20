import { palette } from '@/utils/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  lineHeight: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  marginBottom: '100px',
});

export const code = style({
  background: palette.gray100,
  padding: '8px 10px',
  margin: '2px',
  borderRadius: '5px',
});

export const blockquote = style({
  padding: '10px',
  display: 'flex',
  fontWeight: 'bold',
  background: palette.serenity100,
  borderRadius: '5px',
  margin: '10px 0',

  '::before': {
    content: '',
    borderLeft: `4px solid ${palette.primary}`,
    display: 'inline-block',
    height: 'auto',
    width: '2px',
    marginRight: '8px',
  },
});

export const hr = style({
  border: 'none',
  borderBottom: `1px solid ${palette.gray200}`,
  margin: '10px',
});
