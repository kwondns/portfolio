import { Fetch } from '@/libs';
import { ProjectType } from '@/types';

export function useProjectAll() {
  return {
    queryKey: ['project', 'all'],
    queryFn: async () => Fetch<ProjectType.ProjectType[]>('port/project'),
    suspense: true,
  };
}

export function useProjectId(id: string) {
  return {
    queryKey: ['project', 'detail', id],
    queryFn: async () => Fetch<ProjectType.ProjectDetailType>(`port/project/${id}`),
    suspense: true,
  };
}
