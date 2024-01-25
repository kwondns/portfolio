import { QueryClient } from '@tanstack/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';

import { useProject } from '@/hooks';
import { ProjectType } from '@/types';
import { ProjectDetailTemplate } from '@/templates';

type ProjectDetailLoaderType = {
  projectId: string;
};

export default function ProjectDetail() {
  return <ProjectDetailTemplate />;
}

export const projectDetailLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs<ProjectDetailLoaderType>): Promise<ProjectType.ProjectDetailType[]> => {
    const { projectId } = params;
    const query = useProject.useProjectId(projectId ?? '');
    return (
      queryClient.getQueryData<ProjectType.ProjectDetailType[]>(query.queryKey) ?? (await queryClient.fetchQuery(query))
    );
  };
