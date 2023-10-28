import { keyframes, style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const spinnerCss = style({
  width: '40px',
  height: '40px',
  border: `5px solid ${themeVars.color}`,
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  display: 'inline-block',
  animation: `${rotate} 1s linear infinite`,
});
