import { ComponentProps } from 'react';

type ImgProps = ComponentProps<'img'>;
export default function Img(props: ImgProps) {
  const { src, alt, ...others } = props;
  return <img alt={alt ?? src} src={src} {...others} />;
}
