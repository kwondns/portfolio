import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'>;
export default function Input(props: InputProps) {
  return <input {...props} />;
}
