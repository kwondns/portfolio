import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Div, Typo } from '@/atoms';
import { useNote } from '@/hooks';
import { LoaderType } from '@/types';
import { noteLoader } from '@/pages';
import { NoteStore } from '@/stores';
import { NoteFilter } from '@/molecules';
import { NoteCard } from '@/organisms';

export default function NoteTemplate() {
  const { note: noteInit } = useLoaderData() as LoaderType.LoaderDataType<typeof noteLoader>;
  const selectedTag = useRecoilValue(NoteStore.SelectedTagAtom);
  const { data: noteData } = useQuery({
    ...useNote.useNote(selectedTag),
    initialData: noteInit,
  });

  if (noteData === undefined) return <Typo>에러가 발생했습니다.</Typo>;
  return (
    <Div className="mb-20 flex flex-col gap-y-4 md:grid md:grid-cols-[15%_1fr] md:gap-x-2">
      <Typo className="col-start-1 col-end-3 row-start-1 text-3xl">Notion 노트 정리 페이지</Typo>
      <NoteFilter />
      <Div className="flex flex-col flex-wrap gap-6 py-10 md:flex-row lg:gap-x-4 lg:gap-y-8">
        {noteData.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </Div>
    </Div>
  );
}
