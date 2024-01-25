import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { LoaderType } from '@/types';
import { projectLoader } from '@/pages';
import { useProject } from '@/hooks';
import { Div, Typo } from '@/atoms';
import { ProjectCard } from '@/organisms';

export default function ProjectTemplate() {
  const initialData = useLoaderData() as LoaderType.LoaderDataType<typeof projectLoader>;
  const { data, isLoading } = useQuery({ ...useProject.useProjectAll(), initialData });
  if (data === undefined) return <Typo>오류가 발생했습니다.</Typo>;
  return (
    <Div className="flex flex-col items-center px-4">
      {data.map((project) => (
        <ProjectCard key={project.id} project={project} isLoading={isLoading} />
      ))}
    </Div>
  );
}
