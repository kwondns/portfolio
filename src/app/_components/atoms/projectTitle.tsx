import React from 'react';
import { projectTitleCss } from '@/components/atoms/projectTitle.css';

export default function ProjectTitle({ children }: { children: React.ReactNode }) {
  return <h1 className={projectTitleCss}>{children}</h1>;
}
