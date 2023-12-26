import React from 'react';
import { TagContainerCss } from '@/components/atoms/tagContainer.css';
import Container from '@/components/atoms/container';

export default function TagContainer({ children }: { children: React.ReactNode }) {
  return <Container className={TagContainerCss}>{children}</Container>;
}
