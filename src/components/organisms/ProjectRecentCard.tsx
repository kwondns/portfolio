import { Link } from 'react-router-dom';

import { ProjectType } from '@/types';
import { Div, Img, Typo } from '@/atoms';

type ProjectLastCardProps = {
  project: ProjectType.ProjectType;
};
export default function ProjectRecentCard(props: Readonly<ProjectLastCardProps>) {
  const { project } = props;
  const { id, preview_image: previewImage, title, shorten_content: shortenContent } = project;
  return (
    <Div className="flex flex-col">
      <Link className="group flex h-[250px] scale-[0.98] transition hover:scale-90 md:h-[400px]" to={id}>
        <Img className="object-cover" src={`${import.meta.env.VITE_IMAGE_URL}/${previewImage}`} />
      </Link>
      <Typo className="text-2xl">{title}</Typo>
      <Typo className="text-lg">{shortenContent}</Typo>
    </Div>
  );
}
