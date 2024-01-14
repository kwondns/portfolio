import { createVar, style } from '@vanilla-extract/css';

export const cardIndex = createVar();
export const cardContainerCss = style({
  opacity: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  animation: 'fadeInUp 0.3s ease',
  animationFillMode: 'forwards !important',
  animationDelay: cardIndex,
});
