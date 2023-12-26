import { kv } from '@vercel/kv';
import CardProject from '@/components/organisms/cardProject';
import { ProjectType } from '@/types/projectType';
import Container from '@/components/atoms/container';

export default async function ProjectPage() {
  const projectList = await kv.lrange('project', 0, -1);
  const previewProject = await Promise.all(projectList.map((projectID) => kv.hgetall<ProjectType>(`${projectID}`)));
  return (
    <>
      {previewProject.map((project, index) => {
        if (project !== null) {
          const { id, previewImage, title, shortenContent, date, frontTag, backTag, DBTag } = project;
          return (
            <CardProject
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
