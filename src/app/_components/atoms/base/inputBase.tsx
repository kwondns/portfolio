import { ComponentProps } from 'react';

type InputBaseProps = ComponentProps<'input'>;
export default function InputBase(props: InputBaseProps) {
  return <input type="text" {...props} />;
}
