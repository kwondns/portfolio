import { style } from '@vanilla-extract/css';

export const nameCss = style({
  marginRight: 'auto',
  marginBottom: '1rem',
  paddingLeft: '1.5rem',
  animation: 'fadeInRight 0.2s ease',
});
export const introCss = style({
  display: 'flex',
  alignItems: 'center',
  wordBreak: 'keep-all',
  padding: '0.4rem',
});

export const introChildCss = style({
  verticalAlign: 'sub',
  paddingRight: '8px',
});

export const pCss = style({
  padding: '8px',
});
