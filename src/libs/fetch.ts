import { unstable_cache } from 'next/cache';
import { ProjectModalType } from '@/types/project';

export const get = async <T>(url: string): Promise<T> => {
  const result = await fetch(`${process.env.API_URL}${url}`, { next: { revalidate: 3600 } });
  return result.json();
};

export const getProjectWithCache = (projectId: string) =>
  unstable_cache<() => Promise<ProjectModalType>>(
    async () => await get(`/port/project/${projectId}`),
    ['project', projectId],
    { tags: ['project', projectId], revalidate: 3600 },
  )();
