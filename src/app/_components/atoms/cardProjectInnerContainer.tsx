'use client';

import React from 'react';
import Image from 'next/image';
import {
  cardChildCss,
  cardProjectInnerContainerCss,
  cardProjectImageCss,
} from '@/components/atoms/cardProjectInnerContainer.css';
import Container from '@/components/atoms/container';

type CardInnerContainerProps = {
  previewImage: string;
  children: React.ReactNode;
};
export default function CardProjectInnerContainer(props: CardInnerContainerProps) {
  const { previewImage, children } = props;
  return (
    <article className={cardProjectInnerContainerCss}>
      <Image className={cardProjectImageCss} src={previewImage} alt={previewImage} width={400} height={300} />
      <Container className={cardChildCss}>{children}</Container>
    </article>
  );
}
