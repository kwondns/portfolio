import React from 'react';
import { cardProfileCss } from '@/components/atoms/cardProfile.css';

export default function CardProfile({ children }: { children: React.ReactNode }) {
  return <article className={cardProfileCss}>{children}</article>;
}
