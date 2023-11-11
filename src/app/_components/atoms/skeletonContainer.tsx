import React from 'react';
import { cardProjectContainerCss } from '@/components/atoms/cardProjectContainer.css';

export default function SkeletonContainer({ children }: { children: React.ReactNode }) {
  return <div className={cardProjectContainerCss}>{children}</div>;
}
