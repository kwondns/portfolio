import { Div, Typo } from '@/atoms';
import { ProjectType } from '@/types';
import { ProjectTags } from '@/molecules';

type ProjectCardTagProps = {
  project: Omit<ProjectType.ProjectType, 'preview_image'>;
};
export default function ProjectCardInfo(props: ProjectCardTagProps) {
  const { project } = props;
  const { title, date, db, front_tag: frontTag, back_tag: backTag, shorten_content: shortenContent } = project;
  return (
    <Div className="absolute inset-x-0 bottom-0 flex h-auto max-h-20 flex-col gap-y-1 bg-gray-200/80 px-4 py-2 backdrop-blur-sm transition-all hover:overflow-y-auto group-hover:max-h-full dark:bg-gray-600/80">
      <Typo className="text-xl">{title}</Typo>
      <Div className="mb-3 flex justify-between">
        <Typo>{shortenContent}</Typo>
        <Typo className="text-sm">{date}</Typo>
      </Div>
      <ProjectTags frontTag={frontTag} backTag={backTag} db={db} />
    </Div>
  );
}
