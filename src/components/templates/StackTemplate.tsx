import { Suspense } from 'react';

import { StackByTech, StackOthers } from '@/organisms';
import { Spinner } from '@/atoms';

export default function StackTemplate() {
  return (
    <article id="stack">
      <Suspense fallback={<Spinner />}>
        <span className="font-Kanit text-2xl font-bold">Recently Used Stack</span>
        <StackByTech tech="front" />
        <StackByTech tech="back" />
        <StackByTech tech="etc" />
        <StackOthers />
      </Suspense>
    </article>
  );
}
