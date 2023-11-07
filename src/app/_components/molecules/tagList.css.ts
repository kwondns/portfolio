import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';
import { sprinkles } from '@/styles/sprinkles.css';

const articleBase = style({
  flex: 1,
  border: '1px solid #808080',
  borderRadius: '8px',
  padding: '0.5rem',
  margin: '1rem',
  opacity: 0,
  animationFillMode: 'forwards !important',
  transition: 'all 0.2s ease',
  '@media': {
    'screen and (max-width:700px)': {
      maxWidth: '100%',
    },
  },
});

const stackType = {
  front: { color: vars.color.front20, animation: 'fadeInRight 0.5s ease' },
  back: { color: vars.color.back20, animation: 'fadeInLeft 0.5s 0.3s ease' },
  etc: { color: vars.color.etc20, animation: 'fadeInUp 0.5s 0.6s ease' },
  DB: { color: vars.color.etc20, animation: 'fadeInUp 0.5s 0.6s ease' },
};

export const articleCss = styleVariants(stackType, (stack) => [
  articleBase,
  {
    animation: stack.animation,
    ':hover': { backgroundColor: stack.color },
  },
]);

export const articlePCss = style({
  selectors: {
    [`${articleBase} &`]: { fontSize: '1.3rem', fontWeight: 'bold' },
  },
});

export const articleULCss = style({
  selectors: {
    [`${articleBase} &`]: { paddingLeft: '1rem' },
  },
});

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
