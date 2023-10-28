import Image from 'next/image';
import React, { HTMLProps } from 'react';
import { MDXImageCss } from '@/components/atoms/MDXImage.css';

export default function MDXImage(props: HTMLProps<HTMLImageElement>) {
  const { src, alt } = props;
  return <Image className={MDXImageCss} src={src || ''} alt={alt || 'error'} width={400} height={300} loading="lazy" />;
}
