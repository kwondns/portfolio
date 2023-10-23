import { MDXRemote } from 'next-mdx-remote/rsc';
import { md } from '_temp/projectdetail';
import Modal from '@/components/molecules/modal';

export default function ModalPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <Modal>
      {id}
      <MDXRemote source={md} />
    </Modal>
  );
}
