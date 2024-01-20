import { ComponentProps } from 'react';

type TypoProps = ComponentProps<'span'>;
export default function Typo(props: TypoProps) {
  const { children, ...others } = props;
  return <span {...others}>{children}</span>;
}
