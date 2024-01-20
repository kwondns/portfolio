import { useLoaderData } from 'react-router-dom';

import { StackByTech } from '@/organisms';
import { stackLoader } from '@/pages';
import { LoaderType } from '@/types';

export default function StackTemplate() {
  const stacks = useLoaderData() as LoaderType.LoaderDataType<typeof stackLoader>;
  return (
    <article id="stack">
      <StackByTech tech="front" stacksCategory={stacks.front} />
      <StackByTech tech="back" stacksCategory={stacks.back} />
      <StackByTech tech="etc" stacksCategory={stacks.etc} />
    </article>
  );
}
