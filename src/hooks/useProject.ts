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
    queryKey: ['project', 'detail', id],
    queryFn: async () => {
      const project = await getProjects.getProjectById(id);
      return project;
    },
    suspense: true,
  };
}
