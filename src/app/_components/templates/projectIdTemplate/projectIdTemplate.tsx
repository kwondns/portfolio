import Container from '@/components/atoms/base/container';
import { containerCss } from '@/styles/project.detail.css';
import ProjectDetail from '@/components/organisms/projectDetail/projectDetail';
import { ProjectDetailType } from '@/types/projectType';
import Modal from '@/components/molecules/modal/modal';

type ProjectIdTemplateProps = {
  project: ProjectDetailType;
  // eslint-disable-next-line react/require-default-props
  modal?: boolean;
};

const ProjectDetailComponent = (props: ProjectDetailType) => {
  const { title, content, backTag, DBTag, frontTag } = props;
  return <ProjectDetail title={title} content={content} frontTag={frontTag} backTag={backTag} DBTag={DBTag} />;
};

export default function ProjectIdTemplate(props: ProjectIdTemplateProps) {
  const { project, modal = false } = props;
  const { title, frontTag, backTag, DBTag, content } = project;
  if (modal)
    return (
      <Modal>
        <ProjectDetailComponent title={title} frontTag={frontTag} backTag={backTag} DBTag={DBTag} content={content} />
      </Modal>
    );
  return (
    <Container className={containerCss}>
      <ProjectDetailComponent title={title} frontTag={frontTag} backTag={backTag} DBTag={DBTag} content={content} />
    </Container>
  );
}
