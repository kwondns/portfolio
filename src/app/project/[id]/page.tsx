import { MDXRemote } from 'next-mdx-remote/rsc';
import { md } from '_temp/projectdetail';
import { containerCss } from '@/styles/project.detail.css';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className={containerCss}>
      {id}
      <MDXRemote source={md} />
    </div>
  );
}
