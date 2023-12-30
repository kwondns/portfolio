import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';
import { sprinkles } from '@/styles/sprinkles.css';

export const containerCss = style([
  sprinkles({
    marginY: {
      mobile: 'small',
      tablet: 'medium',
      desktop: 'large',
    },
  }),
  {
    border: `1px solid ${themeVars.color30}`,
    borderRadius: '4px',
    width: '100%',
    overflowX: 'auto',
  },
]);
export const MDXTableCss = style({
  width: '100%',
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
});

globalStyle(`${MDXTableCss} th`, {
  borderBottom: `2px double ${themeVars.color30}`,
});

globalStyle(`${MDXTableCss} td:first-of-type`, {
  minWidth: '100%',
});

globalStyle(`${MDXTableCss} td`, {
  border: `1px solid ${themeVars.color30}`,
  padding: '4px',
  textAlign: 'left',
});

globalStyle(`${MDXTableCss} td:nth-child(3)`, {
  borderRight: 'none',
  whiteSpace: 'nowrap',
});
