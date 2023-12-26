import React from 'react';
import { MDXRowContainerCss } from '@/components/MDX/MDXRowContainer.css';
import Container from '@/components/atoms/container';

export default function MDXRowContainer({ children }: { children: React.ReactNode }) {
  return <Container className={MDXRowContainerCss}>{children}</Container>;
}
