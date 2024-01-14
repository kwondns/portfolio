import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

const RippleOut = keyframes({
  '40%': { opacity: '1' },
  '100%': {
    width: 'calc(100% + 20px)',
    height: 'calc(100% + 20px)',
    opacity: '0',
  },
});

export const stackButtonContainerBase = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '8px',
    padding: '8px',
    minWidth: '140px',
    height: '160px',
    borderRadius: '10%',
    position: 'relative',
    selectors: {
      '&:hover:before': {
        content: '',
        width: 'calc(100% + 2px)',
        height: 'calc(100% + 2px)',
        borderRadius: '10%',
        position: 'absolute',
        animation: `${RippleOut} 0.8s ease`,
      },
    },
  },
]);

const stackType = {
  front: {
    beforeBorder: `3px solid ${vars.color.front}`,
    border: `2px solid ${vars.color.front}`,
    backgroundColor: vars.color.front,
  },
  back: {
    beforeBorder: `3px solid ${vars.color.back}`,
    border: `2px solid ${vars.color.back}`,
    backgroundColor: vars.color.back,
  },
  etc: {
    beforeBorder: `3px solid ${vars.color.etc}`,
    border: `2px solid ${vars.color.etc}`,
    backgroundColor: vars.color.etc,
  },
  DB: {
    beforeBorder: `3px solid ${vars.color.etc}`,
    border: `2px solid ${vars.color.etc}`,
    backgroundColor: vars.color.etc,
  },
};

export const stackButtonContainerCss = styleVariants(stackType, (stack) => [
  stackButtonContainerBase,
  {
    border: stack.border,
    ':hover': {
      background: stack.backgroundColor,
    },
    '&:hover:before': {
      border: stack.beforeBorder,
    },
  },
]);
