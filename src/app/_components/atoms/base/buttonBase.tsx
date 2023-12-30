import { ComponentProps } from 'react';

type ButtonBaseProps = ComponentProps<'button'>;
export default function ButtonBase(props: ButtonBaseProps) {
  const { children, ...others } = props;
  return (
    <button type="button" {...others}>
      {children}
    </button>
  );
}
