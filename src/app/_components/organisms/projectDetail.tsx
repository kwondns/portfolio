import { ProjectDetailType } from '@/types/projectType';
import ProjectTagContainer from '@/components/molecules/projectTagContainer';
import CustomMDXRemote from '@/components/molecules/CustomMDXRemote';
import ProjectTitle from '@/components/atoms/projectTitle';

export default function ProjectDetail(props: ProjectDetailType) {
  const { title, content, frontTag, backTag, DBTag } = props;
  return (
    <div>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectTagContainer frontTag={frontTag} backTag={backTag} DBTag={DBTag} />
      <CustomMDXRemote source={content} />
    </div>
  );
}
