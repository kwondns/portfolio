import React, { HTMLProps } from 'react';
import { MDXTableCss, containerCss } from '@/components/atoms/MDXTable.css';

export default function MDXTable(props: HTMLProps<HTMLTableElement>) {
  const { children } = props;
  return (
    <div className={containerCss}>
      <table className={MDXTableCss}>{children}</table>
    </div>
  );
}
