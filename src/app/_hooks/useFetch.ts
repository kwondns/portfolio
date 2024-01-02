import { headers } from 'next/headers';
import { NoteType } from '@/types/note';

const header = headers();
const requestURL = `${header.get('x-forwarded-proto')}://${header.get('host')}/api/notion-page`;

export default async function useFetch(): Promise<NoteType[]> {
  const response = await fetch(requestURL, {
    method: 'get',
    next: { revalidate: 36000 },
  });

  return response.json();
}
