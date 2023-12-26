import React from 'react';
import Container from '@/components/atoms/container';

type LayoutProps = {
  children: React.ReactNode;
  stack: React.ReactNode;
  profile: React.ReactNode;
};
export default function Layout({ children, profile, stack }: LayoutProps) {
  return (
    <>
      <Container id="about">{children}</Container>
      <Container id="profile">{profile}</Container>
      <Container id="stack" style={{ height: 'fit-content' }}>
        {stack}
      </Container>
    </>
  );
}
