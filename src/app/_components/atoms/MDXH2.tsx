import { HTMLProps } from 'react';
import { MDXH2Css } from '@/components/atoms/MDXH2.css';

export default function MDXH2(props: HTMLProps<HTMLSpanElement>) {
  const { children } = props;
  return <h2 className={MDXH2Css}>{children}</h2>;
}
