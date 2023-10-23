import CardProjectContainer from '@/components/atoms/cardProjectContainer';
import CardProjectInnerContainer from '@/components/atoms/cardProjectInnerContainer';
import { ProjectPreviewType } from '@/components/project';
import CardProjectTagContainer from '@/components/molecules/cardProjectTagContainer';

type CardProps = ProjectPreviewType & {
  index: number;
};
export default function CardProject(props: CardProps) {
  const { id, index, previewImage, title, contents, date, frontTag, backTag, DBTag } = props;
  return (
    <CardProjectContainer index={index} id={id}>
      <CardProjectInnerContainer previewImage={previewImage}>
        <h4>{title}</h4>
        <h5>{contents}</h5>
        <h6>{date}</h6>
        <CardProjectTagContainer frontTag={frontTag} backTag={backTag} DBTag={DBTag} />
      </CardProjectInnerContainer>
    </CardProjectContainer>
  );
}
