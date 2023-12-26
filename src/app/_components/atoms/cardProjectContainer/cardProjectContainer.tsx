'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import React from 'react';
import Link from 'next/link';
import { cardProjectContainerCss, cardIndex } from '@/components/atoms/cardProjectContainer/cardProjectContainer.css';

type CardProps = {
  index: number;
  id: string;
  children: React.ReactNode;
};
export default function CardProjectContainer(props: CardProps) {
  const { index, id, children } = props;
  return (
    <Link
      className={cardProjectContainerCss}
      style={assignInlineVars({ [cardIndex]: `${index * 0.2}s` })}
      href={`/project/${id}`}
      scroll={false}
    >
      {children}
    </Link>
  );
}
