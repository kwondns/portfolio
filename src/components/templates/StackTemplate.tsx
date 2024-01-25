import { Suspense } from 'react';

import { StackByTech } from '@/organisms';
import { Spinner } from '@/atoms';

export default function StackTemplate() {
  return (
    <article id="stack">
      <Suspense fallback={<Spinner />}>
        <StackByTech tech="front" />
        <StackByTech tech="back" />
        <StackByTech tech="etc" />
      </Suspense>
    </article>
  );
}
