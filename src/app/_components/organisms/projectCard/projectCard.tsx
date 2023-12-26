import ProjectCardContainer from '@/components/atoms/ProjectCardContainer/projectCardContainer';
import ProjectCardInnerContainer from '@/components/atoms/projectCardInnerContainer/projectCardInnerContainer';
import { ProjectType } from '@/types/projectType';
import ProjectTagContainer from '@/components/molecules/projectTagContainer/projectTagContainer';

type CardProps = Omit<ProjectType, 'content'> & {
  index: number;
};
export default function ProjectCard(props: CardProps) {
  const { id, index, previewImage, title, shortenContent, date, frontTag, backTag, DBTag } = props;
  return (
    <ProjectCardContainer index={index} id={id}>
      <ProjectCardInnerContainer previewImage={previewImage}>
        <h4>{title}</h4>
        <h5>{shortenContent}</h5>
        <h6>{date}</h6>
        <ProjectTagContainer frontTag={frontTag} backTag={backTag} DBTag={DBTag} />
      </ProjectCardInnerContainer>
    </ProjectCardContainer>
  );
}
