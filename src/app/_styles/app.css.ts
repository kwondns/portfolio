import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const containerCss = style({
  width: '100vw',
  minHeight: 'calc(100vh)',
  backgroundColor: vars.color.dark,
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '60px',
});

export const codeContainerCss = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '4px',
  margin: '16px auto',
  maxWidth: '100%',
});

export const captionCss = style({
  color: '#747474',
  fontSize: '1rem !important',
});

const typing = keyframes({
  from: { width: '0ch' },
  to: { width: '28ch' },
});
// export const delayCss =
export const orangeColorCss = style({ color: '#c88570' });
export const yellowColorCss = style({ color: '#FFC66D' });
export const greenColorCss = style({ color: '#50A255' });
export const whiteColorCss = style({ color: '#A7A7A7' });
export const blueColorCss = style({ color: '#3397E7' });

export const firstCss = style({ paddingLeft: '2ch' });
export const secondCss = style({ paddingLeft: '4ch' });
export const thirdCss = style({ paddingLeft: '6ch' });
export const fourthCss = style({ paddingLeft: '8ch' });

export const typingCss = style({
  animation: `${typing} 1.5s steps(28)`,
  width: '28ch',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

globalStyle(`${codeContainerCss} > :not(${typingCss}, ${captionCss}) `, {
  opacity: 0,
  animation: 'fadeInUp 1s ease',
  animationFillMode: 'forwards',
  animationDelay: '1.6s',
});
globalStyle(`${codeContainerCss} > span`, {
  fontSize: '1.1rem',
  marginLeft: '20px',
});
