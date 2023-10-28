import React from 'react';
import { MDXRowContainerCss } from '@/components/atoms/MDXRowContainer.css';

export default function MDXRowContainer({ children }: { children: React.ReactNode }) {
  return <div className={MDXRowContainerCss}>{children}</div>;
}
