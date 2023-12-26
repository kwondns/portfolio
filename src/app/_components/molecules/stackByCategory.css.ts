import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';

export const tagListUlCss = style({
  listStyleType: 'none',
  paddingLeft: 0,
  paddingBottom: '1rem',
  ':last-of-type': {
    paddingBottom: 0,
  },
});
export const tagListCategoryCss = style([
  sprinkles({
    paddingY: 'medium',
  }),
]);
export const tagListLiCss = style({
  display: 'inline-block',
  margin: '0.5rem 0.2rem',
});
