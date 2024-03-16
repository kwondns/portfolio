import { useNavigate, useLoaderData, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { LoaderType } from '@/types';
import { projectDetailLoader } from '@/pages';
import { useProject } from '@/hooks';
import { Div, Typo } from '@/atoms';
import { ProjectTags } from '@/molecules';
import { MarkdownTemplate } from '@/templates';

export default function ProjectDetailTemplate() {
  const initialData = useLoaderData() as LoaderType.LoaderDataType<typeof projectDetailLoader>;
  const { projectId = '' } = useParams();
  const navigate = useNavigate();
  if (!projectId) navigate('/project');

  const { data: totalData } = useQuery({ ...useProject.useProjectAll() });
  const currentData = totalData?.filter((project) => project.id === projectId);

  const { data } = useQuery({ ...useProject.useProjectId(projectId), initialData });

  if (currentData === undefined || data === undefined) return <span>데이터가 없습니다.</span>;
  const { title, front_tag: frontTag, back_tag: backTag, db, date } = currentData[0];
  const { projectDetail } = data;

  return (
    <Div className="flex flex-col">
      <Typo className="text-3xl">{title}</Typo>
      <Typo className="text-right text-sm md:text-lg">{date}</Typo>
      <ProjectTags frontTag={frontTag} backTag={backTag} db={db} />
      <MarkdownTemplate source={projectDetail} />
    </Div>
  );
}
