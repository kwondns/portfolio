import CardContainer from '@/components/atoms/cardContainer/cardContainer';
import CardInnerContainer from '@/components/atoms/cardInnerContainer/cardInnerContainer';
import Container from '@/components/atoms/base/container';
import { noteCardTextContainerCss } from '@/components/organisms/noteCard/noteCard.css';
import NoteTagContainer from '@/components/molecules/noteTagContainer/noteTagContainer';
import { NoteType } from '@/types/note';

type NoteCardProps = {
  note: NoteType;
  index: number;
};
export default function NoteCard(props: NoteCardProps) {
  const { note, index } = props;
  const title = note.properties.Name.title[0].text.content;
  const cover = note.cover?.file?.url;
  const tags = note.properties.Tags.multi_select;
  const createTime = note.created_time;
  const publicUrl = note.public_url;
  return (
    <CardContainer index={index} id={publicUrl}>
      <CardInnerContainer
        previewImage={
          cover ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/180px-Black_colour.jpg'
        }
      >
        <Container className={noteCardTextContainerCss}>
          <h3>{title}</h3>
          <h4>{new Date(createTime).toLocaleDateString('ko-KR')}</h4>
        </Container>
        <NoteTagContainer tags={tags} />
      </CardInnerContainer>
    </CardContainer>
  );
}
