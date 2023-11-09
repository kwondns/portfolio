import { createTheme, createThemeContract } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const themeVars = createThemeContract({
  background: null,
  color: null,
  theme: null,
  color30: null,
  hover: null,
  side: null,
  nav: null,
});
export const lightTheme = createTheme(themeVars, {
  background: vars.color.white,
  color: vars.color.dark,
  theme: vars.color.light,
  color30: '#30303030',
  hover: vars.color['white-hover'],
  side: vars.color.white,
  nav: 'linear-gradient( 135deg, #97ABFF 10%, #123597 100%)',
});

export const darkTheme = createTheme(themeVars, {
  background: vars.color.dark,
  color: vars.color.white,
  theme: vars.color.moon,
  color30: '#ffffff30',
  hover: vars.color['dark-hover'],
  side: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,0.5) 0%, rgba(32,45,58,0.8) 81.3% )',
  nav: 'linear-gradient( 103.3deg,  rgba(252,225,208,1) 30%, rgba(255,173,214,1) 55.7%, rgba(162,186,245,1) 81.8% )',
});
