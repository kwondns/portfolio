import React from 'react';
import { TagContainerCss } from '@/components/atoms/tagContainer.css';

export default function TagContainer({ children }: { children: React.ReactNode }) {
  return <div className={TagContainerCss}>{children}</div>;
}
