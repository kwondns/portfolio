import { kv } from '@vercel/kv';
import { notFound } from 'next/navigation';
import { ProjectDetailType } from '@/types/projectType';
import ProjectIdTemplate from '@/components/templates/projectIdTemplate/projectIdTemplate';

export default async function ModalPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = await kv.hgetall<ProjectDetailType>(id);
  if (project !== null) return <ProjectIdTemplate project={project} modal />;
  return notFound();
}
