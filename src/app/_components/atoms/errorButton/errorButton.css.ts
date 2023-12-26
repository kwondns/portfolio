import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const errorButtonCss = style({
  border: `1px solid ${themeVars.color30}`,
  borderRadius: '10px',
  cursor: 'pointer',
});
