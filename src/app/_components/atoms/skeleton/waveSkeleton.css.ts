import { keyframes, style } from '@vanilla-extract/css';
import { cardInnerContainerCss } from '@/components/atoms/cardInnerContainer/cardInnerContainer.css';

const waves = keyframes({
  '100%': {
    backgroundPosition: '-100% 0',
  },
});

export const waveSkeletonCss = style([
  cardInnerContainerCss,
  {
    background: 'linear-gradient(120deg, #ececec 50%, #fafafa 60%, #fafafa 61%, #ececec 70%)',
    backgroundSize: '200%',
    backgroundPosition: '100% 0',
    animation: `${waves} 2s linear infinite`,
  },
]);
