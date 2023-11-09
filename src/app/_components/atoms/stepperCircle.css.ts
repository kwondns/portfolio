import { style } from '@vanilla-extract/css';

export const stepperCircleCss = style({
  backgroundImage: 'linear-gradient(45deg, #a18cd1 0%, #fbc2eb 100%)',
  width: '3rem',
  height: '3rem',
  margin: '0 auto',
  borderRadius: '50%',
  gridArea: '1 / 2 / 2 / 3',
});
