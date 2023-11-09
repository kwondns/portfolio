import { style } from '@vanilla-extract/css';
import { introCss, rightTextCss } from '@/styles/profile.css';

export const stepperCss = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
});

export const stepperLine = style({
  display: 'grid',
  rowGap: '1rem',
  alignItems: 'center',
  gridTemplateColumns: '1fr 100px ',
  gridTemplateRows: '1fr 0.5fr',
});

export const stepperTextCss = style([
  introCss,
  rightTextCss,
  {
    gridArea: '1/1/2/2',
    textAlign: 'right',
  },
]);
