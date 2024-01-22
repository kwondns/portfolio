import { getProjects } from '@/apis';

export function useProjectAll() {
  return {
    queryKey: ['project', 'all'],
    queryFn: getProjects.getProjectAll,
    suspense: true,
  };
}

export function useProjectId(id: string) {
  return {
    queryKey: ['project', id],
    queryFn: getProjects.getProjectAll,
    suspense: true,
  };
}
