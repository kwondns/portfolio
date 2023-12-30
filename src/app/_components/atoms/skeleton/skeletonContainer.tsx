import React from 'react';
import { projectCardContainerCss } from '@/components/atoms/ProjectCardContainer/projectCardContainer.css';
import Container from '@/components/atoms/base/container';

export default function SkeletonContainer({ children }: { children: React.ReactNode }) {
  return <Container className={projectCardContainerCss}>{children}</Container>;
}
