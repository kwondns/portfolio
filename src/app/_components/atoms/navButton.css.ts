import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

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
  ':hover': {
    background: `linear-gradient(45deg,${vars.color.back} 0%, ${vars.color.front} 50%, ${vars.color.etc} 100%)`,
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transform: 'translateX(2px) translateY(-2px)',
  },

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
    background: `linear-gradient(45deg,${vars.color.back} 0%, ${vars.color.front} 50%, ${vars.color.etc} 100%)`,
    transition: 'all 0.2s ease',
  },
  '@media': {
    'screen and (max-width:700px)': {
      fontSize: '0.85rem',
    },
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
      background: `linear-gradient(45deg,${vars.color.back} 0%, ${vars.color.front} 50%, ${vars.color.etc} 100%)`,
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
