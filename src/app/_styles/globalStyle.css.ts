import { globalFontFace, globalKeyframes, globalStyle } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

globalFontFace('Jetbrains Mono', {
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/font/JetBrainsMono-SemiBold.woff2")',
});

globalFontFace('Noto Sans KR', {
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/font/NotoSansKR-SemiBold.ttf")',
});
globalStyle('html, body', {
  height: '100%',
  color: themeVars.color,
  backgroundColor: themeVars.background,
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  transition: ['color 0.2s ease', 'background-color 0.2s ease'],
});

globalStyle('body, button', {
  margin: '0',
  fontFamily:
    'JetBrains Mono, Noto Sans KR ,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  background: themeVars.background,
  color: themeVars.color,
});

globalStyle('h1, h2, h3, h4, p', {
  margin: 0,
});

globalStyle('a, p', {
  fontSize: '1rem',
});

globalStyle('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '100%',
  maxWidth: '720px',
  margin: '0 auto',
  overflow: 'hidden',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('button', {
  border: 'none',
});

globalKeyframes('fadeInDown', {
  '0%': {
    opacity: 0,
    transform: 'translateY(-20px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0px)',
  },
});

globalKeyframes('fadeInUp', {
  '0%': {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0px)',
  },
});

globalKeyframes('fadeInRight', {
  '0%': {
    opacity: 0,
    transform: 'translateX(-20px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0px)',
  },
});

globalKeyframes('fadeInLeft', {
  '0%': {
    opacity: 0,
    transform: 'translateX(20px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0px)',
  },
});

globalKeyframes('fadeOutLeft', {
  '0%': {
    opacity: 1,
    transform: 'translateX(0px)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateX(-20px)',
  },
});
