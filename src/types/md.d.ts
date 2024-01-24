import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      rowcontainer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}
