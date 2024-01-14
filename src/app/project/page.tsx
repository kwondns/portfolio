import { kv } from '@vercel/kv';
import { ProjectType } from '@/types/projectType';
import ProjectTemplate from '@/components/templates/project/projectTemplate';

export default async function ProjectPage() {
  const projectList = await kv.lrange('project', 0, -1);
  const previewProject = await Promise.all(projectList.map((projectID) => kv.hgetall<ProjectType>(`${projectID}`)));
  const filteredPreviewProject = previewProject.filter((project): project is ProjectType => project !== null);
  return <ProjectTemplate previewProject={filteredPreviewProject} />;
}
