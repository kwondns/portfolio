import React from 'react';
import { cardProjectContainerCss } from '@/components/atoms/cardProjectContainer/cardProjectContainer.css';
import Container from '@/components/atoms/base/container';

export default function SkeletonContainer({ children }: { children: React.ReactNode }) {
  return <Container className={cardProjectContainerCss}>{children}</Container>;
}
