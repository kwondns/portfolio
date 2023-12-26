import { kv } from '@vercel/kv';
import ProjectCard from '@/components/organisms/projectCard/projectCard';
import { ProjectType } from '@/types/projectType';
import Container from '@/components/atoms/base/container';

export default async function ProjectPage() {
  const projectList = await kv.lrange('project', 0, -1);
  const previewProject = await Promise.all(projectList.map((projectID) => kv.hgetall<ProjectType>(`${projectID}`)));
  return (
    <>
      {previewProject.map((project, index) => {
        if (project !== null) {
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
        }
        return <Container>Error Occurred!</Container>;
      })}
    </>
  );
}
