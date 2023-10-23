import { previewProject } from '_temp/project';
import CardProject from '@/components/organisms/cardProject';

export default function ProjectPage() {
  return (
    <>
      {previewProject.map((project, index) => {
        const { id, previewImage, title, contents, date, frontTag, backTag, DBTag } = project;
        return (
          <CardProject
            key={title}
            id={id}
            index={index}
            previewImage={previewImage}
            title={title}
            contents={contents}
            date={date}
            frontTag={frontTag}
            backTag={backTag}
            DBTag={DBTag}
          />
        );
      })}
    </>
  );
}
