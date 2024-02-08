import { Link } from 'react-router-dom';

import { ProjectType } from '@/types';
import { Div, Img, Spinner, Typo } from '@/atoms';
import { ProjectTags } from '@/molecules';

type ProjectCardProps = {
  project: ProjectType.ProjectType;
  isLoading: boolean;
};
export default function ProjectCard(props: ProjectCardProps) {
  const { project, isLoading } = props;
  const {
    id,
    preview_image: previewImage,
    date,
    title,
    db,
    front_tag: frontTag,
    back_tag: backTag,
    shorten_content: shortenContent,
  } = project;
  return (
    <Link
      to={id}
      className="project-card group sticky top-[100px] mb-4 mt-10 grid max-h-[60%] min-h-[500px] w-full gap-x-8 gap-y-4 overflow-hidden rounded-2xl border-2 border-stone-500 bg-inherit bg-neutral-300 p-8 brightness-100 dark:bg-[#1d1d26] md:grid-cols-[70%_auto] md:grid-rows-[80%_auto]"
      key={project.id}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Img
          className="h-auto content-center justify-center rounded-lg object-cover md:w-full"
          src={`${import.meta.env.VITE_SUPABASE_BUCKET_URL}/${previewImage}`}
        />
      )}
      <div className="flex flex-col md:row-start-2">
        <Typo className="mb-4 truncate text-2xl md:text-4xl ">{title}</Typo>
        <Div className="mb-3 flex justify-between">
          <Typo className="text-xl">{shortenContent}</Typo>
          <Typo className="text-sm">{date}</Typo>
        </Div>
      </div>
      <div className="mb-4 flex flex-col  justify-end md:col-start-2 md:row-start-1 md:row-end-3">
        <ProjectTags frontTag={frontTag} backTag={backTag} db={db} />
      </div>
    </Link>
  );
}
