import { style, styleVariants } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { themeVars } from '@/styles/theme.css';

export const navCss = style([
  sprinkles({
    display: 'flex',
    flexDirection: { mobile: 'column', desktop: 'row' },
    gap: { mobile: 'large', tablet: 'medium', desktop: 'none' },
    alignItems: 'center',
  }),
]);

export const collapseBase = style({
  position: 'fixed',
  top: '60px',
  right: '0',
  height: '100vh',
  opacity: 0,
  backgroundColor: themeVars.side,
  transition: 'all 0.5s ease',
  paddingTop: '16px',
  '@media': {
    'screen and (max-width:768px)': {
      top: '-100%',
      right: '0',
      width: '100vw',
    },
    'screen and (min-width:769px) and (max-width:1024px)': {
      top: '60px',
      right: '-200px',
      width: '200px',
      ':before': {
        right: '200px',
      },
    },
  },
  ':before': {
    content: '',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#00000030',
    position: 'absolute',
    top: 0,
  },
});

export const collapseCss = styleVariants({
  active: [
    collapseBase,
    {
      opacity: 1,
      '@media': {
        'screen and (max-width:768px)': {
          transform: 'translateY(calc(100% + 60px))',
        },
        'screen and (min-width:769px) and (max-width:1024px)': {
          transform: 'translateX(-200px)',
        },
      },
    },
  ],
  deactivate: [
    collapseBase,
    {
      ':before': { display: 'none' },
    },
  ],
});
