import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

export const MDXH2Css = style([
  sprinkles({
    marginY: { mobile: 'medium', tablet: 'large' },
  }),
]);
