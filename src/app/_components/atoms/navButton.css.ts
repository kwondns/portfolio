import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';
import { vars } from '@/styles/globalTheme.css';

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0px)' },
});

export const linkButtonBase = style({
  borderRadius: '4px',
  padding: '4px 6px',
  color: themeVars.color,
  textTransform: 'capitalize',

  ':after': {
    maxWidth: '100%',
    height: '2px',
    display: 'block',
    opacity: 0,
    content: '',
    background: `linear-gradient(45deg,${vars.color.back} 0%, ${vars.color.front} 50%, ${vars.color.etc} 100%)`,
    marginBottom: '-6px',
    marginTop: '1px',
  },
  '@media': {
    'screen and (max-width:700px)': {
      fontSize: '0.85rem',
    },
  },

  selectors: {
    '&:hover:after': {
      animation: `${fadeInUp} 0.1s ease`,
      animationFillMode: 'forwards',
    },
  },
});

export const linkButtonCss = styleVariants({
  active: [
    linkButtonBase,
    {
      selectors: {
        '&:after': { opacity: 1 },
        '&:hover:after': {
          animation: 'none',
        },
      },
    },
  ],
});
