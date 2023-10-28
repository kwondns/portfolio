import { kv } from '@vercel/kv';
import { containerCss } from '@/styles/project.detail.css';
import ProjectDetail from '@/components/organisms/projectDetail';
import { ProjectDetailType } from '@/types/projectType';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await kv.hgetall<ProjectDetailType>(id);
  if (res !== null)
    return (
      <div className={containerCss}>
        <ProjectDetail
          title={res.title}
          frontTag={res.frontTag}
          backTag={res.backTag}
          DBTag={res.DBTag}
          content={res.content}
        />
      </div>
    );
}
