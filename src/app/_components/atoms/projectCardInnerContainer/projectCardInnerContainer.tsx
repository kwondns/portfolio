'use client';

import React from 'react';
import Image from 'next/image';
import {
  cardChildCss,
  projectCardInnerContainerCss,
  cardProjectImageCss,
} from '@/components/atoms/projectCardInnerContainer/projectCardInnerContainer.css';
import Container from '@/components/atoms/base/container';

type CardInnerContainerProps = {
  previewImage: string;
  children: React.ReactNode;
};
export default function ProjectCardInnerContainer(props: CardInnerContainerProps) {
  const { previewImage, children } = props;
  return (
    <article className={projectCardInnerContainerCss}>
      <Image className={cardProjectImageCss} src={previewImage} alt={previewImage} width={400} height={300} />
      <Container className={cardChildCss}>{children}</Container>
    </article>
  );
}
