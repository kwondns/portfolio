import { useNavigate, useLoaderData, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { LoaderType } from '@/types';
import { projectDetailLoader } from '@/pages';
import { useProject } from '@/hooks';
import { Div, Img, Link, Typo } from '@/atoms';

export default function ProjectDetailTemplate() {
  const initialData = useLoaderData() as LoaderType.LoaderDataType<typeof projectDetailLoader>;
  const { projectId = '' } = useParams();
  const navigate = useNavigate();
  if (!projectId) navigate('/project');

  const { data } = useQuery({ ...useProject.useProjectId(projectId), initialData });

  if (data === undefined) return <span>데이터가 없습니다.</span>;
  const {
    id,
    title,
    shorten_content: shortenContent,
    preview_image: previewImage,
    date,
    link,
    role,
    context,
    images,
  } = data;

  return (
    <Div className="relative flex flex-col items-start gap-y-10 text-stone-700 dark:text-stone-300 md:mx-32">
      <Img
        className="absolute left-[50%] right-0 -z-10 max-h-dvh max-w-[45vw] -skew-x-6 -skew-y-2 object-contain opacity-30"
        src={`${import.meta.env.VITE_IMAGE_URL}/${previewImage}`}
      />
      <Link to="/project">
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
      <Typo className="font-Raleway text-5xl font-semibold">{title}</Typo>
      <Div className="flex gap-x-12">
        <Div className="flex flex-col gap-y-1">
          <Typo className="text-stone-700/70 dark:text-stone-300/70">소개</Typo>
          <Typo className="text-xl">{shortenContent}</Typo>
        </Div>
        <Div className="flex flex-col gap-y-1">
          <Typo className="text-stone-700/70 dark:text-stone-300/70">Date</Typo>
          <Typo className="text-xl">{date}</Typo>
        </Div>
        <Div className="flex flex-col gap-y-1">
          <Typo className="text-stone-700/70 dark:text-stone-300/70">링크</Typo>
          <Link to={link !== '-' ? link : ''} className={`text-xl ${link === '-' && 'cursor-default line-through'}`}>
            홈페이지
          </Link>
        </Div>
      </Div>
      <Div className="flex max-w-[60%] flex-col gap-y-1">
        <Typo className="text-2xl text-stone-700/70 dark:text-stone-300/70">요약</Typo>
        <Typo className="whitespace-pre">{context}</Typo>
      </Div>
      <Div className="flex max-w-[60%] flex-col gap-y-1">
        <Typo className="text-2xl text-stone-700/70 dark:text-stone-300/70">역할</Typo>
        <Typo className="whitespace-pre">{role}</Typo>
      </Div>
      {images.length > 0 && (
        <Div className="w-full gap-y-1">
          <Typo className="text-2xl text-stone-700/70 dark:text-stone-300/70">결과물</Typo>
          <Div className="flex gap-x-8 overflow-y-hidden overflow-x-scroll">
            {images.map((image) => (
              <Img
                key={image}
                className="size-auto max-h-[400px] scale-90 transition hover:scale-100"
                src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
              />
            ))}
          </Div>
        </Div>
      )}
      <Link className="mb-20 self-end" to={`/project/more/${id}`}>
        개발 과정 &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg>
      </Link>
    </Div>
  );
}
