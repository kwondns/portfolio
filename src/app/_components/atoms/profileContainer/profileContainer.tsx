import React from 'react';
import { profileContainerCss } from '@/components/atoms/profileContainer/profileContainer.css';

export default function ProfileContainer({ children }: { children: React.ReactNode }) {
  return <article className={profileContainerCss}>{children}</article>;
}
