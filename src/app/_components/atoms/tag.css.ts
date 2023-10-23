import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const tagBase = style({
  borderRadius: '20px',
  padding: '0.2rem 0.5rem',
  fontSize: '0.8rem',
  transition: 'font-size 0.2s ease',
  ':hover': {
    color: vars.color.white,
    fontSize: '0.9rem',
  },
});

const stackType = {
  front: { border: `2px solid ${vars.color.front}`, backgroundColor: vars.color.front },
  back: { border: `2px solid ${vars.color.back}`, backgroundColor: vars.color.back },
  etc: { border: `2px solid ${vars.color.etc}`, backgroundColor: vars.color.etc },
  DB: { border: `2px solid ${vars.color.etc}`, backgroundColor: vars.color.etc },
};

export const tagCss = styleVariants(stackType, (stack) => [
  tagBase,
  {
    border: stack.border,
    ':hover': { backgroundColor: stack.backgroundColor },
  },
]);

export const linkCss = style({
  fontSize: '0.8rem',
  selectors: {
    [`${tagBase}:hover &`]: {
      fontSize: '0.9rem',
      transition: 'font-size 0.2s ease',
    },
  },
});
