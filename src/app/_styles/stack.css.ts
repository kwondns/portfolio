import { style } from '@vanilla-extract/css';

export const sectionCss = style({
  display: 'flex',
  width: '100%',
  '@media': {
    'screen and (max-width:700px)': {
      flexDirection: 'column',
    },
  },
});
