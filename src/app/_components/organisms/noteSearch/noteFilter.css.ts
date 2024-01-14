import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const noteFilterContainerCss = style({
  marginTop: '8px',
  paddingRight: '8px',
  borderRight: `4px solid ${themeVars.color}`,
});

export const noteFilterTagContainerCss = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '8px',
});

export const noteTagButtonCss = style({
  display: 'contents',
});
