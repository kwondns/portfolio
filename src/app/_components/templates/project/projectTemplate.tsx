import ProjectCard from '@/components/organisms/projectCard/projectCard';
import { ProjectType } from '@/types/projectType';

type ProjectTemplateProps = {
  previewProject: ProjectType[];
};
export default function ProjectTemplate(props: ProjectTemplateProps) {
  const { previewProject } = props;
  return previewProject.map((project, index) => {
    const { id, previewImage, title, shortenContent, date, frontTag, backTag, DBTag } = project;
    return (
      <ProjectCard
        key={title}
        id={id}
        index={index}
        previewImage={previewImage}
        title={title}
        shortenContent={shortenContent}
        date={date}
        frontTag={frontTag}
        backTag={backTag}
        DBTag={DBTag}
      />
    );
  });
}
