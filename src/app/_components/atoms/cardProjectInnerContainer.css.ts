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
  border: `1px solid ${themeVars.color30}`,
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
  rowGap: '4px',
  height: 'auto',
  selectors: {
    [`${cardProjectInnerContainerCss}:hover &`]: {
      maxHeight: '100%',
      overflowY: 'auto',
      backgroundColor: '#303030',
    },
    [`${cardProjectInnerContainerCss} &`]: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '80px',
      backgroundColor: '#303030c0',
      borderRadius: '0 0 10px 10px',
      paddingLeft: '1rem',
      margin: 0,
      transition: 'all 0.3s ease-in-out',
    },
  },
});

globalStyle(`${cardChildCss} > * `, {
  padding: 0,
  margin: '2px',
  fontWeight: 'normal',
  color: vars.color.white,
});
