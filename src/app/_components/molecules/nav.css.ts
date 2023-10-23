import { style } from '@vanilla-extract/css';
import { sprinkles } from '@/styles/sprinkles.css';
import { themeVars } from '@/styles/theme.css';

export const navCss = style([
  sprinkles({
    display: 'flex',
    alignItems: 'center',
  }),
]);

export const collapseCss = style({
  display: 'inline',
  position: 'absolute',
  top: '42px',
  right: '4px',
  animationDuration: '0.2s',
  backgroundColor: themeVars.background,
  animation: 'fadeInDown 0.3s ease',
  paddingBottom: '4px',
  borderRadius: '5px',
});
