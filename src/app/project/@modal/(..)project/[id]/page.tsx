import { kv } from '@vercel/kv';
import Modal from '@/components/molecules/modal/modal';
import ProjectDetail from '@/components/organisms/projectDetail/projectDetail';
import { ProjectDetailType } from '@/types/projectType';

export default async function ModalPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await kv.hgetall<ProjectDetailType>(id);
  if (res !== null)
    return (
      <Modal>
        <ProjectDetail
          title={res.title}
          frontTag={res.frontTag}
          backTag={res.backTag}
          DBTag={res.DBTag}
          content={res.content}
        />
      </Modal>
    );
}
