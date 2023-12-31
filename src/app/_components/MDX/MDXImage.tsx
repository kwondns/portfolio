import React, { HTMLProps } from 'react';
import { MDXImageCss } from '@/components/MDX/MDXImage.css';
import Img from '@/components/atoms/base/img';

export default function MDXImage(props: HTMLProps<HTMLImageElement>) {
  const { src, alt } = props;
  return <Img className={MDXImageCss} src={src || ''} alt={alt || 'error'} width={400} height={300} loading="lazy" />;
}
