import React from 'react';
import { cardProjectContainerCss } from '@/components/atoms/cardProjectContainer.css';
import Container from '@/components/atoms/container';

export default function SkeletonContainer({ children }: { children: React.ReactNode }) {
  return <Container className={cardProjectContainerCss}>{children}</Container>;
}
