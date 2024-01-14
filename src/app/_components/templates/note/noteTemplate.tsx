'use client';

import { NoteType, TagsType } from '@/types/note';
import Container from '@/components/atoms/base/container';
import { noteContainerCss } from '@/styles/note.css';
import { NoteContext } from '@/hooks/useNote';
import NoteFilter from '@/components/organisms/noteSearch/noteFilter';
import NoteCardContainer from '@/components/organisms/noteCardContainer/noteCardContainer';

type NoteTemplateProps = {
  notes: NoteType[];
  tags: TagsType[];
};
export default function NoteTemplate(props: NoteTemplateProps) {
  const { notes, tags } = props;
  return (
    <>
      <h4>이 페이지는 노션과 연동하여 노트를 정리한 페이지입니다.</h4>
      <Container className={noteContainerCss}>
        <NoteContext InitData={notes}>
          <NoteFilter tags={tags} />
          <NoteCardContainer />
        </NoteContext>
      </Container>
    </>
  );
}
