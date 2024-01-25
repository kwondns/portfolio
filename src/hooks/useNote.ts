import { getNotes } from '@/apis';
import { NoteType } from '@/types';

export function useNoteTag() {
  return {
    queryKey: ['note', 'tag'],
    queryFn: getNotes.getTagAll,
    suspense: true,
  };
}

export function useNote<T extends NoteType.NoteType[]>(selectedTag: string) {
  return {
    queryKey: ['note'],
    queryFn: getNotes.getNoteAll,
    suspense: true,
    select: (notes: T) =>
      notes.filter((note) => {
        if (selectedTag === '') return note;
        return note.tags.includes(selectedTag);
      }),
  };
}
