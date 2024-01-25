import { QueryClient } from '@tanstack/react-query';

import { NoteTemplate } from '@/templates';
import { useNote } from '@/hooks';
import { NoteType } from '@/types';

export default function Note() {
  return <NoteTemplate />;
}

export const noteLoader =
  (queryClient: QueryClient) => async (): Promise<{ note: NoteType.NoteType[]; tag: NoteType.NoteTagType[] }> => {
    const noteQuery = useNote.useNote('');
    const tagQuery = useNote.useNoteTag();
    return {
      note:
        queryClient.getQueryData<NoteType.NoteType[]>(noteQuery.queryKey) ??
        (await queryClient.fetchQuery<NoteType.NoteType[]>(noteQuery)),
      tag:
        queryClient.getQueryData<NoteType.NoteTagType[]>(tagQuery.queryKey) ?? (await queryClient.fetchQuery(tagQuery)),
    };
  };
