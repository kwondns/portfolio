import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

export const TagContainerCss = style([
  {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.3rem',
  },
  sprinkles({
    marginBottom: {
      mobile: 'small',
      tablet: 'medium',
    },
  }),
]);
