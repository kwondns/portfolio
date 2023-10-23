import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const base = style({
  width: '4rem',
  height: '2rem',
  border: `1px solid ${themeVars.color30}`,
  borderRadius: '16px',
  background: themeVars.background,
  ':before': {
    content: '',
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    transition: 'transform 0.3s ease',
    position: 'relative',
    top: '2px',
    left: '-16px',
    backgroundColor: themeVars.theme,
    boxShadow: `${themeVars.theme} 0 0 5px 2px`,
  },
  '@media': {
    'screen and (max-width:700px)': {
      height: '1.5rem',
      width: '3rem',
      ':before': {
        height: '12px',
        width: '12px',
        boxShadow: `${themeVars.theme} 0 0 3px 2px`,
        top: '2px',
        left: '-12px',
      },
    },
  },
});

export const themeTriggerButtonCss = styleVariants({
  dark: [
    base,
    {
      ':before': { transform: 'translateX(32px)' },
      '@media': { 'screen and (max-width:700px)': { ':before': { transform: 'translateX(24px)' } } },
    },
  ],
  light: [base, { ':before': { transform: 'translateX(0px)' } }],
});
