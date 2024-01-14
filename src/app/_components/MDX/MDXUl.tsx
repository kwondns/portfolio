import React, { HTMLProps } from 'react';
import { MDXUlCss } from '@/components/MDX/MDXUl.css';

export default function MDXUl(props: HTMLProps<HTMLUListElement>) {
  const { children } = props;
  return <ul className={MDXUlCss}>{children}</ul>;
}
