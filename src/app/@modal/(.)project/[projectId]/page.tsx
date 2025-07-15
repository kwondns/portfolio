import { getProjectWithCache } from '@/libs/fetch';
import ProjectDetail from '@/components/ProjectDetail';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectModal({ params }: Props) {
  const { projectId } = await params;
  const project = await getProjectWithCache(projectId);
  return <ProjectDetail {...project} />;
}
