import { Supabase } from '@/libs';

export async function getFrontStack() {
  const { data, error } = await Supabase.from('front_stack_by_category').select('*');
  if (error) {
    throw new Error('Stack Not Found');
  }

  return data;
}

export async function getBackStack() {
  const { data, error } = await Supabase.from('back_stack_by_category').select('*');
  if (error) {
    throw new Error('Stack Not Found');
  }
  return data;
}
export async function getEtcStack() {
  const { data, error } = await Supabase.from('etc_stack_by_category').select('*');
  if (error) {
    throw new Error('Stack Not Found');
  }
  return data;
}

export default async function getStack() {
  const [front, back, etc] = await Promise.all([getFrontStack(), getBackStack(), getEtcStack()]);
  return { front, back, etc };
}
