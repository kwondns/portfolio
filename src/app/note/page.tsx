// import fetchAPI from '@/hooks/fetchAPI';
// import NoteTemplate from '@/components/templates/note/noteTemplate';
import { containerCss } from '@/styles/layout.css';
import Container from '@/components/atoms/base/container';
// import { NoteType, TagsType } from '@/types/note';

export default async function Page() {
  // const notes = await fetchAPI<NoteType[]>('note-page');
  // const tags = await fetchAPI<TagsType[]>('note-tag');

  return (
    <Container className={containerCss} id="note">
      {/* <NoteTemplate notes={notes} tags={tags} /> */}
    </Container>
  );
}
