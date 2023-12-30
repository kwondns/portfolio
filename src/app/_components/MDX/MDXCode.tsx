import { ComponentProps } from 'react';
import { MDXCodeCss } from '@/components/MDX/MDXCode.css';

export default function MDXCode(props: ComponentProps<'code'>) {
  const { children } = props;
  return <code className={MDXCodeCss}>{children}</code>;
}
