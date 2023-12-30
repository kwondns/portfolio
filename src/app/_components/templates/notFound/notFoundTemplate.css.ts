import { style } from '@vanilla-extract/css';

export const notFoundTemplateCss = style({
  marginTop: '60px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  justifyContent: 'center',
  alignItems: 'center',
});

export const notFoundButtonCss = style({
  padding: '4px',
  borderRadius: '8px',
  border: '3px solid gray',
  ':hover': {
    background: 'gray',
  },
});
