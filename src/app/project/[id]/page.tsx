import { MDXRemote } from 'next-mdx-remote/rsc';
import { kv } from '@vercel/kv';
import { containerCss } from '@/styles/project.detail.css';

type ResponseType = { title: string; frontTag: string[]; backTag: string[]; content: string };
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await kv.hgetall<ResponseType>('60f3f8ea-7cc4-48b7-b1f0-fb9bdbbb71a9');

  return (
    <div className={containerCss}>
      {id}
      <MDXRemote source={(res && res.content) || 'error'} />
    </div>
  );
}
