import { QueryClient } from '@tanstack/react-query';

import { ProjectTemplate } from '@/templates';
import { useProject } from '@/hooks';
import { ProjectType } from '@/types';

export default function Project() {
  return <ProjectTemplate />;
}

export const projectLoader = (queryClient: QueryClient) => async (): Promise<ProjectType.ProjectType[]> => {
  const query = useProject.useProjectAll();
  return queryClient.getQueryData<ProjectType.ProjectType[]>(query.queryKey) ?? (await queryClient.fetchQuery(query));
};
