import { get } from '@/libs/fetch';
import { ProjectModalType } from '@/types/project';
import ProjectDetail from '@/components/ProjectDetail';

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const projects: { id: string }[] = await fetch(`${process.env.API_URL}/port/project`).then((r) => r.json());
  return projects.map((p) => ({ projectId: p.id }));
}

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
