import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';
import { vars } from '@/styles/globalTheme.css';

export const cardImage = createVar();
export const cardProjectInnerContainerCss = style({
  position: 'relative',
  borderRadius: '10px',
  width: '680px',
  height: '350px',
  margin: '1rem',
  backgroundImage: cardImage,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  overflow: 'hidden',
  cursor: 'pointer',
  boxShadow: themeVars.color30,
  '@media': {
    'screen and (max-width:700px)': {
      flex: 1,
      padding: '0.25rem',
      margin: '0.25rem 0.25rem 1rem',
      height: '280px',
    },
  },
});

export const cardChildCss = style({
  selectors: {
    [`${cardProjectInnerContainerCss}:hover &`]: {
      height: '50%',
      overflowY: 'auto',
      '@media': {
        'screen and (max-width:700px)': {
          height: '100%',
        },
      },
    },
    [`${cardProjectInnerContainerCss} &`]: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '70px',
      backgroundColor: '#30303090',
      borderRadius: '0 0 10px 10px',
      paddingLeft: '1rem',
      margin: 0,
      transition: 'height 0.3s ease-in-out',
    },
  },
});

globalStyle(`${cardChildCss} > * `, {
  padding: 0,
  margin: '2px',
  fontWeight: 'normal',
  color: vars.color.white,
});
