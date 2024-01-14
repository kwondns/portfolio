import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const noteSearchContainerCss = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

export const noteSearchInputCss = style({
  fontSize: '1.1rem',
  border: 'none',
  borderBottom: `2px solid ${themeVars.color30}`,
  color: themeVars.color,
  outline: 'none',
  background: 'none',
});
