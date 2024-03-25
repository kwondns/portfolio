import { useNavigate, useLoaderData, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { LoaderType } from '@/types';
import { projectDetailLoader } from '@/pages';
import { useProject } from '@/hooks';
import { Div, Typo, Link } from '@/atoms';
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
  const { projectMoreDetail } = data;

  return (
    <Div className="flex flex-col">
      <Link className="mb-8 self-start" to={`/project/${projectId}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
        &nbsp; To Project
      </Link>
      <Typo className="text-3xl">{title}</Typo>
      <Typo className="text-right text-sm md:text-lg">{date}</Typo>
      <ProjectTags frontTag={frontTag} backTag={backTag} db={db} />
      <MarkdownTemplate source={projectMoreDetail} />
    </Div>
  );
}
