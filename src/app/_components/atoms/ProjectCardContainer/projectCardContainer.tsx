'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import React from 'react';
import Link from 'next/link';
import { projectCardContainerCss, cardIndex } from '@/components/atoms/ProjectCardContainer/projectCardContainer.css';

type CardProps = {
  index: number;
  id: string;
  children: React.ReactNode;
};
export default function ProjectCardContainer(props: CardProps) {
  const { index, id, children } = props;
  return (
    <Link
      className={projectCardContainerCss}
      style={assignInlineVars({ [cardIndex]: `${index * 0.2}s` })}
      href={`/project/${id}`}
      scroll={false}
    >
      {children}
    </Link>
  );
}
