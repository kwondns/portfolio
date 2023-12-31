'use client';

import React from 'react';
import {
  cardChildCss,
  projectCardInnerContainerCss,
  cardProjectImageCss,
} from '@/components/atoms/projectCardInnerContainer/projectCardInnerContainer.css';
import Container from '@/components/atoms/base/container';
import Img from '@/components/atoms/base/img';

type CardInnerContainerProps = {
  previewImage: string;
  children: React.ReactNode;
};
export default function ProjectCardInnerContainer(props: CardInnerContainerProps) {
  const { previewImage, children } = props;
  return (
    <article className={projectCardInnerContainerCss}>
      <Img className={cardProjectImageCss} src={previewImage} alt={previewImage} width={400} height={300} />
      <Container className={cardChildCss}>{children}</Container>
    </article>
  );
}
