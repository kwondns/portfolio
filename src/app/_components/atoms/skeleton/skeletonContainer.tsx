import React from 'react';
import { cardContainerCss } from '@/components/atoms/cardContainer/cardContainer.css';
import Container from '@/components/atoms/base/container';

export default function SkeletonContainer({ children }: { children: React.ReactNode }) {
  return <Container className={cardContainerCss}>{children}</Container>;
}
