import { ComponentProps } from 'react';

type DivProps = ComponentProps<'div'>;
export default function Div(props: DivProps) {
  const { children, ...others } = props;
  return <div {...others}>{children}</div>;
}
