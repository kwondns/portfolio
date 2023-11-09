import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const cardProfileCss = style({
  margin: '16px',
  border: '1px solid gray',
  borderRadius: '8px',
  minWidth: '60%',
  maxWidth: '90%',
  width: 'fit-content',
  padding: '0 16px',
  opacity: 0,
  animationFillMode: 'forwards !important',
  ':hover': {
    backgroundColor: themeVars.hover,
  },

  selectors: {
    '&:nth-of-type(even)': {
      marginLeft: 'auto',
    },
    '&:nth-of-type(1)': {
      animation: 'fadeInRight 0.3s ease',
      animationDelay: '0.2s',
      marginRight: 'auto',
    },
    '&:nth-of-type(2)': {
      border: 'none',
      animation: 'fadeInLeft 0.3s ease',
      animationDelay: '0.4s',
    },
    '&:nth-of-type(2):hover': {
      backgroundColor: themeVars.background,
    },
    '&:nth-of-type(3)': {
      animation: 'fadeInUp 0.3s ease',
      animationDelay: '0.6s',
      width: '100%',
      maxWidth: '100%',
    },
  },
  '@media': {
    'screen and (max-width:700px)': {
      width: '100%',
      margin: '8px !important',
      ':last-of-type': {
        maxWidth: '90%',
      },
    },
  },
});
