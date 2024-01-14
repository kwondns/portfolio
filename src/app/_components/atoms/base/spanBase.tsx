import { ComponentProps } from 'react';

type SpanBaseProps = ComponentProps<'span'>;
export default function SpanBase(props: SpanBaseProps) {
  const { children, ...others } = props;
  return <span {...others}>{children}</span>;
}
