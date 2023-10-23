import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const themeVars = createThemeContract({
  background: null,
  color: null,
  theme: null,
  color30: null,
  hover: null,
});
export const lightTheme = createTheme(themeVars, {
  background: vars.color.white,
  color: vars.color.dark,
  theme: vars.color.light,
  color30: '#30303030',
  hover: vars.color['white-hover'],
});

export const darkTheme = createTheme(themeVars, {
  background: vars.color.dark,
  color: vars.color.white,
  theme: vars.color.moon,
  color30: '#ffffff30',
  hover: vars.color['dark-hover'],
});
