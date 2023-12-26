import React from 'react';
import { TagContainerCss } from '@/components/atoms/tagContainer/tagContainer.css';
import Container from '@/components/atoms/base/container';

export default function TagContainer({ children }: { children: React.ReactNode }) {
  return <Container className={TagContainerCss}>{children}</Container>;
}
