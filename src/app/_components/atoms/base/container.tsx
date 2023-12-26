import { ComponentProps } from 'react';

type ContainerProps = ComponentProps<'div'>;
export default function Container(props: ContainerProps) {
  const { children, ...others } = props;
  return <div {...others}>{children}</div>;
}
