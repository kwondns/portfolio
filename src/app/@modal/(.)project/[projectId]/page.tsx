import { get } from '@/libs/fetch';
import { ProjectModalType } from '@/types/project';
import ProjectDetail from '@/components/ProjectDetail';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectModal({ params }: Props) {
  const { projectId } = await params;
  const project = await get<ProjectModalType>(`/port/project/${projectId}`);
  return <ProjectDetail {...project} />;
}
