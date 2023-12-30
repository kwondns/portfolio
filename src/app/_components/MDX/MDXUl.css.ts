import { globalStyle, style } from '@vanilla-extract/css';

export const MDXUlCss = style({
  margin: 0,
});
globalStyle(`${MDXUlCss} > li`, {
  margin: '4px',
});
