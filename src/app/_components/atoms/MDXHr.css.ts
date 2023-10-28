import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

export const MDXHrCss = style([
  sprinkles({
    marginY: { mobile: 'medium', desktop: 'large' },
  }),
]);
