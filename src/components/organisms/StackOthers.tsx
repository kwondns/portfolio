import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { LoaderType } from '@/types';
import { stackLoader } from '@/pages';
import { useStack } from '@/hooks';
import { Stack, Typo } from '@/atoms';

export default function StackOthers() {
  const initialData = useLoaderData() as LoaderType.LoaderDataType<typeof stackLoader>;
  const { data } = useQuery({ ...useStack(), initialData });
  if (data === undefined) return <Typo className="text-2xl">데이터가 없습니다.</Typo>;
  return (
    <>
      <p className="my-4 text-3xl font-bold">Others</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {data.other.map((stack) => (
          <Stack key={stack.name} name={stack.name} img={stack.img} url={stack.url} />
        ))}
      </div>
    </>
  );
}
