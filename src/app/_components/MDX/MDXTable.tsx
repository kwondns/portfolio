import React, { HTMLProps } from 'react';
import { MDXTableCss, containerCss } from '@/components/MDX/MDXTable.css';
import Container from '@/components/atoms/container';

export default function MDXTable(props: HTMLProps<HTMLTableElement>) {
  const { children } = props;
  return (
    <Container className={containerCss}>
      <table className={MDXTableCss}>{children}</table>
    </Container>
  );
}
