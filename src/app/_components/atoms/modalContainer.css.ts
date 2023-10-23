import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const modalContainerCss = style([
  {
    position: 'relative',
    border: '1px solid #efefef80',
    borderRadius: '8px',
    backgroundColor: themeVars.background,
    padding: '1.5rem',
    minWidth: '300px',
    maxWidth: '720px',
    animation: 'fadeInUp 0.3s ease',
    zIndex: '1002',
    overflow: 'auto',
  },
  sprinkles({
    width: { mobile: '100%', tablet: '66%' },
    marginX: { mobile: 'medium', tablet: 'auto' },
    marginY: { mobile: 'medium' },
  }),
]);

export const modalCloseButtonCss = style({
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '4px',
});
