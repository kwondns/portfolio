import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { LoaderType } from '@/types';
import { Div, Typo } from '@/atoms';
import { StackByCategory } from '@/molecules';
import { stackLoader } from '@/pages';
import { useStack } from '@/hooks';

const colorByTech = {
  front: 'hover:bg-red-300/5',
  back: 'hover:bg-cyan-300/5',
  etc: 'hover:bg-blue-300/5',
};
export default function StackByTech() {
  const initialData = useLoaderData() as LoaderType.LoaderDataType<typeof stackLoader>;
  const { data } = useQuery({ ...useStack(), initialData });
  if (data === undefined) return <Typo className="text-2xl">데이터가 없습니다.</Typo>;
  return (
    <Div className="flex flex-col justify-between gap-y-3 pt-3">
      <Div className="flex">
        <h4 className="flex-1 text-xl md:text-4xl">Front</h4>
        <h4 className="flex-1 text-xl md:text-4xl">Back</h4>
        <h4 className="flex-1 text-xl md:text-4xl">ETC</h4>
      </Div>
      <Div className="flex gap-x-4">
        <Div
          className={`my-6 flex flex-1 flex-col rounded-3xl border-2 border-slate-500/50 p-2 md:p-4 ${colorByTech.front}`}
        >
          {data.recent.front.map((value) => (
            <StackByCategory
              key={value.category}
              category={value.category}
              img={value.img}
              name={value.name}
              url={value.url}
            />
          ))}
        </Div>
        <Div
          className={`my-6 flex flex-1 flex-col rounded-3xl border-2 border-slate-500/50 p-2 md:p-4 ${colorByTech.back}`}
        >
          {data.recent.back.map((value) => (
            <StackByCategory
              key={value.category}
              category={value.category}
              img={value.img}
              name={value.name}
              url={value.url}
            />
          ))}
        </Div>
        <Div
          className={`my-6 flex flex-1 flex-col rounded-3xl border-2 border-slate-500/50 p-2 md:p-4 ${colorByTech.etc}`}
        >
          {data.recent.etc.map((value) => (
            <StackByCategory
              key={value.category}
              category={value.category}
              img={value.img}
              name={value.name}
              url={value.url}
            />
          ))}
        </Div>
      </Div>
    </Div>
  );
}
