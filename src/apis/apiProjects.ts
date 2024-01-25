import { Supabase } from '@/libs';

export async function getProjectAll() {
  const { data, error } = await Supabase.from('project_tag')
    .select('id, preview_image, shorten_content, title, date, db, front_tag, back_tag')
    .order('created_at', { ascending: false });
  if (error) {
    throw new Error('Project Not Found');
  }
  return data;
}

export async function getProjectById(id: string) {
  const { data, error } = await Supabase.from('project_detail').select('id, content').eq('id', id);
  if (error) {
    throw new Error('Project Not Found');
  }
  return data;
}
