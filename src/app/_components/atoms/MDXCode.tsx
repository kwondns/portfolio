import { ComponentProps } from 'react';
import { MDXCodeCss } from '@/components/atoms/MDXCode.css';

export default function MDXCode(props: ComponentProps<'code'>) {
  const { children } = props;
  return <code className={MDXCodeCss}>{children}</code>;
}
