'use client';

import ErrorButton from '@/components/atoms/errorButton';
import { centerContainerCss } from '@/components/molecules/centerContainer.css';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className={centerContainerCss}>
      <h4>Error Occurred!</h4>
      <ErrorButton reset={reset} />
    </div>
  );
}
