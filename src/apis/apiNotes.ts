import { Supabase } from '@/libs';
import { NoteType } from '@/types';

export async function getNoteAll() {
  const { data, error } = await Supabase.from('note_with_tag')
    .select('id, img, link, tags, tags_color, title, created_at')
    .order('created_at', { ascending: false });
  if (error) {
    throw new Error('Note Not Found');
  }
  return data as NoteType.NoteType[];
}

export async function getTagAll() {
  const { data, error } = await Supabase.from('note_tag_type').select('*');
  if (error) {
    throw new Error('Note Tag Not Found');
  }
  return data;
}
