import { Link } from 'react-router-dom';

import { ProjectType } from '@/types';
import { Img, Spinner } from '@/atoms';
import { ProjectCardInfo } from '@/molecules';

type ProjectCardProps = {
  project: ProjectType.ProjectType;
  isLoading: boolean;
};
export default function ProjectCard(props: ProjectCardProps) {
  const { project, isLoading } = props;
  const { preview_image: previewImage, ...others } = project;
  return (
    <Link
      to={`${others.id}`}
      className="group relative mb-4 size-full max-h-[300px] min-h-[200px] max-w-[680px] animate-[fadeInUp_0.5s_ease_forwards] overflow-hidden rounded-2xl border-2 border-stone-500 p-2 opacity-0 "
      key={project.id}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Img
          className="h-auto max-h-[calc(300px-1rem-4px)] w-full content-center justify-center rounded-lg object-cover"
          src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${previewImage}`}
        />
      )}
      <ProjectCardInfo project={others} />
    </Link>
  );
}
