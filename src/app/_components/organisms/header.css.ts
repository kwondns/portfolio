import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const headerCss = style({
  background: themeVars.background,
  color: themeVars.color,
  position: 'sticky',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '60px',
  marginBottom: '16px',
  padding: '0 16px',
  zIndex: 1000,
});
