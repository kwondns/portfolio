'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import React from 'react';
import Link from 'next/link';
import { cardContainerCss, cardIndex } from '@/components/atoms/cardContainer/cardContainer.css';

type CardProps = {
  index: number;
  id: string;
  children: React.ReactNode;
};
export default function CardContainer(props: CardProps) {
  const { index, id, children } = props;
  return (
    <Link
      className={cardContainerCss}
      style={assignInlineVars({ [cardIndex]: `${index * 0.2}s` })}
      href={id}
      scroll={false}
    >
      {children}
    </Link>
  );
}