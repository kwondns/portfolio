'use client';

import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  cardChildCss,
  cardProjectInnerContainerCss,
  cardImage,
} from '@/components/atoms/cardProjectInnerContainer.css';

type CardInnerContainerProps = {
  previewImage: string;
  children: React.ReactNode;
};
export default function CardProjectInnerContainer(props: CardInnerContainerProps) {
  const { previewImage, children } = props;
  return (
    <article
      className={cardProjectInnerContainerCss}
      style={assignInlineVars({ [cardImage]: `url("${previewImage}")` })}
    >
      <div className={cardChildCss}>{children}</div>
    </article>
  );
}
