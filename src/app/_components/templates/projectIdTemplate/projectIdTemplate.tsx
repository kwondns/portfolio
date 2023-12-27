import Container from '@/components/atoms/base/container';
import { containerCss } from '@/styles/project.detail.css';
import ProjectDetail from '@/components/organisms/projectDetail/projectDetail';
import { ProjectDetailType } from '@/types/projectType';
import Modal from '@/components/molecules/modal/modal';

type ProjectIdTemplateProps = {
  project: ProjectDetailType;
  modal?: boolean;
};
export default function ProjectIdTemplate(props: ProjectIdTemplateProps) {
  const { project, modal = false } = props;
  const { title, frontTag, backTag, DBTag, content } = project;
  const ProjectDetailComponent = () => (
    <ProjectDetail title={title} content={content} frontTag={frontTag} backTag={backTag} DBTag={DBTag} />
  );
  if (modal)
    return (
      <Modal>
        <ProjectDetailComponent />
      </Modal>
    );
  return (
    <Container className={containerCss}>
      <ProjectDetailComponent />
    </Container>
  );
}
