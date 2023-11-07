import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const headerCss = style({
  background: themeVars.background,
  color: themeVars.color,
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
  maxWidth: '1024px',
  height: '60px',
  marginBottom: '16px',
  padding: '0 16px',
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 1000,
  ':before': {
    content: '',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '60px',
    backgroundColor: themeVars.background,
    zIndex: -1,
  },
});
