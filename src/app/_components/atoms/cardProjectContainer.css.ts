import { createVar, style } from '@vanilla-extract/css';

export const cardIndex = createVar();
export const cardProjectContainerCss = style({
  opacity: 0,
  display: 'flex',
  width: '100%',
  animation: 'fadeInUp 0.3s ease',
  animationFillMode: 'forwards !important',
  animationDelay: cardIndex,
});
