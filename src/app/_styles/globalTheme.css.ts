import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    white: '',
    'white-hover': '',
    dark: '',
    'dark-hover': '',
    gray: '',
    front: '',
    back: '',
    etc: '',
    front20: '',
    back20: '',
    etc20: '',
    db: '',
    light: '',
    moon: '',
  },
});

createGlobalTheme(':root', vars, {
  color: {
    white: '#eee',
    'white-hover': '#dfdfdf',
    dark: '#1d1d26',
    'dark-hover': '#404040',
    gray: '#808080',
    front: '#6667ab',
    back: '#bb2649',
    etc: '#308c4f',
    front20: '#6667ab20',
    back20: '#bb264920',
    etc20: '#308c4f20',
    db: '#2ddeca',
    light: '#ff9100',
    moon: '#ffda00',
  },
});
