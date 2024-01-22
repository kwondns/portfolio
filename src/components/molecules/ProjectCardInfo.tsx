import { Container, Div, Tag, Typo } from '@/atoms';
import { ProjectType } from '@/types';

type ProjectCardTagProps = {
  project: Omit<ProjectType.ProjectType, 'preview_image'>;
};
export default function ProjectCardInfo(props: ProjectCardTagProps) {
  const { project } = props;
  const { title, date, db, front_tag: frontTag, back_tag: backTag, shorten_content: shortenContent } = project;
  return (
    <Div className="absolute inset-x-0 bottom-0 flex h-auto max-h-20 flex-col gap-y-2 bg-gray-200/80 px-4 py-2 backdrop-blur-sm transition-all hover:overflow-y-auto group-hover:max-h-full dark:bg-gray-600/80">
      <Typo className="text-xl">{title}</Typo>
      <Div className="mb-2 flex justify-between">
        <Typo>{shortenContent}</Typo>
        <Typo className="text-sm">{date}</Typo>
      </Div>
      <Container type="projectTag">
        {frontTag.map((front) => (
          <Tag key={front} color="front" value={front} />
        ))}
      </Container>
      <Container type="projectTag">
        {backTag.map((back) => (
          <Tag key={back} color="back" value={back} />
        ))}
      </Container>
      <Tag color="etc" value={db} />
    </Div>
  );
}
