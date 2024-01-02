'use client';

import React from 'react';
import {
  cardChildCss,
  cardInnerContainerCss,
  cardProjectImageCss,
} from '@/components/atoms/cardInnerContainer/cardInnerContainer.css';
import Container from '@/components/atoms/base/container';
import Img from '@/components/atoms/base/img';

type CardInnerContainerProps = {
  previewImage: string;
  children: React.ReactNode;
};
export default function CardInnerContainer(props: CardInnerContainerProps) {
  const { previewImage, children } = props;
  return (
    <article className={cardInnerContainerCss}>
      <Img className={cardProjectImageCss} src={previewImage} alt={previewImage} width={400} height={300} />
      <Container className={cardChildCss}>{children}</Container>
    </article>
  );
}
