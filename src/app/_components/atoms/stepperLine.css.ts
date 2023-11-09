import { style } from '@vanilla-extract/css';

export const stepperLineCss = style({
  width: '4px',
  height: '100%',
  margin: '0 auto',
  backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
  gridArea: '2 / 2 / 3 / 3',
});
