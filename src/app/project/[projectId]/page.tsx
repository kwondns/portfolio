import { get } from '@/libs/fetch';
import { ProjectModalType } from '@/types/project';
import ProjectDetail from '@/components/ProjectDetail';

interface Props {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectModal({ params }: Props) {
  const { projectId } = await params;
  const project = await get<ProjectModalType>(`/port/project/${projectId}`);
  return (
    <div className="mt-14 mx-4">
      <ProjectDetail {...project} />
    </div>
  );
}
