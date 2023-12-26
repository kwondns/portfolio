import React from 'react';
import { containerCss } from '@/styles/layout.css';
import Container from '@/components/atoms/container';

export default function Layout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <Container className={containerCss} id="project">
      {children}
      {modal}
    </Container>
  );
}
