'use client';

import ErrorTemplate from '@/components/templates/error/errorTemplate';

export default function GlobalError({ reset }: { reset: () => void }) {
  return <ErrorTemplate reset={reset} />;
}
