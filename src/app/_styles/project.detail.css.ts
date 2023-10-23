import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

export const containerCss = style([
  sprinkles({
    marginX: { mobile: 'large' },
    marginBottom: { mobile: 'medium' },
  }),
]);
