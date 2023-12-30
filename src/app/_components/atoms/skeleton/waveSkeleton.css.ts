import { keyframes, style } from '@vanilla-extract/css';
import { projectCardInnerContainerCss } from '@/components/atoms/projectCardInnerContainer/projectCardInnerContainer.css';

const waves = keyframes({
  '100%': {
    backgroundPosition: '-100% 0',
  },
});

export const waveSkeletonCss = style([
  projectCardInnerContainerCss,
  {
    background: 'linear-gradient(120deg, #ececec 50%, #fafafa 60%, #fafafa 61%, #ececec 70%)',
    backgroundSize: '200%',
    backgroundPosition: '100% 0',
    animation: `${waves} 2s linear infinite`,
  },
]);
