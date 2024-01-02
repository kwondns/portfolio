import CardContainer from '@/components/atoms/cardContainer/cardContainer';
import CardInnerContainer from '@/components/atoms/cardInnerContainer/cardInnerContainer';
import { ProjectType } from '@/types/projectType';
import ProjectTagContainer from '@/components/molecules/projectTagContainer/projectTagContainer';

type CardProps = Omit<ProjectType, 'content'> & {
  index: number;
};
export default function ProjectCard(props: CardProps) {
  const { id, index, previewImage, title, shortenContent, date, frontTag, backTag, DBTag } = props;
  return (
    <CardContainer index={index} id={`/project/${id}`}>
      <CardInnerContainer previewImage={previewImage}>
        <h4>{title}</h4>
        <h5>{shortenContent}</h5>
        <h6>{date}</h6>
        <ProjectTagContainer frontTag={frontTag} backTag={backTag} DBTag={DBTag} />
      </CardInnerContainer>
    </CardContainer>
  );
}
