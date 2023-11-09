import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0px)' },
});

export const linkButtonBase = style({
  position: 'relative',
  borderRadius: '4px',
  padding: '4px 6px',
  textTransform: 'capitalize',
  transition: 'all 0.2s ease',
  fontSize: '1.1rem',
  ':hover': {
    background: themeVars.nav,
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transform: 'translateX(2px) translateY(-2px)',
  },
  color: themeVars.color,

  ':before': {
    position: 'absolute',
    bottom: '0',
    right: '0',
    left: '0',
    width: '60%',
    height: '2px',
    margin: '0 auto',
    opacity: 0,
    content: '',
    background: themeVars.nav,
    transition: 'all 0.2s ease',
  },

  selectors: {
    '&:hover:before': {
      animation: `${fadeInUp} 0.1s ease`,
      animationFillMode: 'forwards',
      width: '90%',
    },
  },
});

export const linkButtonCss = styleVariants({
  active: [
    linkButtonBase,
    {
      background: themeVars.nav,
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      selectors: {
        '&:before': { opacity: 1 },
        '&:hover:before': {
          animation: 'none',
        },
      },
    },
  ],
});
