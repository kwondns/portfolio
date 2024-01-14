import { globalStyle, style } from '@vanilla-extract/css';

export const MDXRowContainerCss = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

globalStyle(`${MDXRowContainerCss} > p`, {
  width: '100%',
  textAlign: 'center',
});
