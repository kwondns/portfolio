import React from 'react';
import { profileContainerCss } from '@/components/atoms/profileContainer/profileContainer.css';
import Container from '@/components/atoms/base/container';

export default function ProfileContainer({ children }: { children: React.ReactNode }) {
  return (
    <article className="profile-article">
      <Container className={profileContainerCss}>{children}</Container>
    </article>
  );
}
