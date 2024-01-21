import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { LoaderType, StackType } from '@/types';
import { Div, Typo } from '@/atoms';
import { StackByCategory } from '@/molecules';
import { stackLoader } from '@/pages';
import { useStack } from '@/hooks';

type StackByTypeProps = {
  tech: StackType.StackTechType;
};

const colorByTech = {
  front: 'hover:bg-red-300/5',
  back: 'hover:bg-cyan-300/5',
  etc: 'hover:bg-blue-300/5',
};
export default function StackByTech(props: StackByTypeProps) {
  const initialData = useLoaderData() as LoaderType.LoaderDataType<typeof stackLoader>;
  const { data } = useQuery({ ...useStack(), initialData });
  const { tech } = props;
  if (data === undefined) return <Typo className="text-2xl">데이터가 없습니다.</Typo>;
  return (
    <Div className={`my-6 flex flex-col rounded-3xl border-2 border-slate-500/50  p-4 ${colorByTech[tech]}`}>
      <Typo className="text-2xl">{tech.toUpperCase()}</Typo>
      {data[tech].map((value) => (
        <StackByCategory
          key={value.category}
          category={value.category}
          img={value.img}
          name={value.name}
          url={value.url}
        />
      ))}
    </Div>
  );
}
