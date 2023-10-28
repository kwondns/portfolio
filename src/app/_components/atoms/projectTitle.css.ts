import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

export const projectTitleCss = style([
  sprinkles({
    marginBottom: {
      mobile: 'small',
      tablet: 'large',
    },
  }),
]);
