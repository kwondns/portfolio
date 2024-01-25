import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;
export default function Button(props: ButtonProps) {
  const { children, ...others } = props;
  return (
    <button type="button" {...others}>
      {children}
    </button>
  );
}
