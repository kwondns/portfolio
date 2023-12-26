'use client';

import ErrorButton from '@/components/atoms/errorButton';
import { centerContainerCss } from '@/components/molecules/centerContainer.css';
import Container from '@/components/atoms/container';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Container className={centerContainerCss}>
      <h4>Error Occurred!</h4>
      <ErrorButton reset={reset} />
    </Container>
  );
}
