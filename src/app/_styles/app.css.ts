import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globalTheme.css';

export const imageCss = style({
  position: 'fixed',
  top: '60px',
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url("/images/main.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '@media': {
    'screen and (max-width:700px)': {
      backgroundImage: 'url("/images/main_mobile.png")',
    },
  },
  zIndex: 1000,
  animation: 'fadeInUp 0.2s ease',
});

export const containerCss = style({
  position: 'fixed',
  top: '60px',
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: vars.color.dark,
  zIndex: 10,
});
