import { ProjectType } from '@/types';
import { Div, Img } from '@/atoms';
import { ProjectCardInfo } from '@/molecules';

type ProjectCardProps = {
  project: ProjectType.ProjectType;
};
export default function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  const { preview_image: previewImage, ...others } = project;
  return (
    <Div
      className="group relative mb-4 size-full max-h-[300px] max-w-[680px] animate-[fadeInUp_0.5s_ease_forwards] overflow-hidden rounded-2xl border-2 border-stone-500 p-2 opacity-0 "
      key={project.id}
    >
      <Img
        className="h-auto max-h-[calc(300px-1rem-4px)] w-full content-center justify-center rounded-lg object-cover"
        src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${previewImage}`}
      />
      <ProjectCardInfo project={others} />
    </Div>
  );
}
