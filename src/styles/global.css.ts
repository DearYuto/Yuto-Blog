import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import './reset.css';

/**
 * ```
 * Font loader values must be explicitly written literals.
 * ```
 * @see app/layout.tsx
 */
export const vars = createGlobalTheme(':root', {
  font: {
    nanum_gothic: `var(--font-nanum-gothic)`,
  },
});

globalStyle('html', {
  position: 'relative',
  color: '#393a47',
  fontFamily: 'nanum_gothic',
  height: 'auto',
  minHeight: '100vh',
});

globalStyle('body', {
  height: 'auto',
  position: 'relative',
  background: `radial-gradient(
    circle at 28% 0%,
    rgba(149, 162, 239, 0.3) 0%,
    rgba(124, 207, 235, 0) 20%
  ),
  radial-gradient(
    circle at 50% 0%,
    rgba(190, 129, 255, 0.252) 0%,
    rgba(204, 168, 255, 0) 25%
  ),
  radial-gradient(
    circle at 65% 5%,
    rgba(255, 186, 239, 0.3) 0%,
    rgba(78, 75, 210, 0) 50%
  ),
  radial-gradient(
    circle at 80% 5%,
    rgba(244, 244, 244, 0.05) 0%,
    rgba(244, 244, 244, 100) 80%
  )`,
});
