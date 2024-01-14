import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';
import { themeVars } from '@/styles/theme.css';

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

export const noteTagColor = createVar();

export const noteTagCss = style([
  tagBase,
  {
    // fontSize: '1.2rem',
    border: `2px solid ${noteTagColor}`,
    ':hover': {
      color: themeVars.color,
    },
  },
]);

export const spanCss = style({
  fontSize: '1rem',
  selectors: {
    [`${tagBase}:hover &`]: {
      fontSize: '1.1rem',
      transition: 'font-size 0.2s ease',
    },
  },
});

export const tagActiveCss = style({
  backgroundColor: themeVars.color,
  color: themeVars.background,
  ':hover': {
    color: themeVars.background,
  },
});
