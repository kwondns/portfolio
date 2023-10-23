import { style } from '@vanilla-extract/css';

export const modalWrapperCss = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  backgroundColor: '#00000050',
  zIndex: 1001,
});
