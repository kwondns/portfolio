import { ProjectDetailType } from '@/types/projectType';
import ProjectTagContainer from '@/components/molecules/projectTagContainer';
import CustomMDXRemote from '@/components/MDX/CustomMDXRemote';
import ProjectTitle from '@/components/atoms/projectTitle';
import Container from '@/components/atoms/container';

export default function ProjectDetail(props: ProjectDetailType) {
  const { title, content, frontTag, backTag, DBTag } = props;
  return (
    <Container>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectTagContainer frontTag={frontTag} backTag={backTag} DBTag={DBTag} />
      <CustomMDXRemote source={content} />
    </Container>
  );
}
