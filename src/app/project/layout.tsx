import React from 'react';
import { containerCss } from '@/styles/layout.css';

export default function Layout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <div className={containerCss} id="project">
      {children}
      {modal}
    </div>
  );
}
