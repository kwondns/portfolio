import CardProjectContainer from '@/components/atoms/cardProjectContainer/cardProjectContainer';
import CardProjectInnerContainer from '@/components/atoms/cardProjectInnerContainer/cardProjectInnerContainer';
import { ProjectType } from '@/types/projectType';
import ProjectTagContainer from '@/components/molecules/projectTagContainer';

type CardProps = Omit<ProjectType, 'content'> & {
  index: number;
};
export default function CardProject(props: CardProps) {
  const { id, index, previewImage, title, shortenContent, date, frontTag, backTag, DBTag } = props;
  return (
    <CardProjectContainer index={index} id={id}>
      <CardProjectInnerContainer previewImage={previewImage}>
        <h4>{title}</h4>
        <h5>{shortenContent}</h5>
        <h6>{date}</h6>
        <ProjectTagContainer frontTag={frontTag} backTag={backTag} DBTag={DBTag} />
      </CardProjectInnerContainer>
    </CardProjectContainer>
  );
}
