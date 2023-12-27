'use client';

import ErrorButton from '@/components/atoms/errorButton/errorButton';
import { centerContainerCss } from '@/styles/centerContainer.css';
import Container from '@/components/atoms/base/container';

export default function ErrorTemplate({ reset }: { reset: () => void }) {
  return (
    <Container className={centerContainerCss}>
      <h4>에러가 발생했습니다.</h4>
      <ErrorButton reset={reset} />
    </Container>
  );
}
