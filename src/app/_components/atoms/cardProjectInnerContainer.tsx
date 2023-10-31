'use client';

import React from 'react';
import Image from 'next/image';
import {
  cardChildCss,
  cardProjectInnerContainerCss,
  cardProjectImageCss,
} from '@/components/atoms/cardProjectInnerContainer.css';

type CardInnerContainerProps = {
  previewImage: string;
  children: React.ReactNode;
};
export default function CardProjectInnerContainer(props: CardInnerContainerProps) {
  const { previewImage, children } = props;
  return (
    <article className={cardProjectInnerContainerCss}>
      <Image className={cardProjectImageCss} src={previewImage} alt={previewImage} width={400} height={300} />
      <div className={cardChildCss}>{children}</div>
    </article>
  );
}
