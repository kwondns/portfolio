import { useNavigate, useLoaderData, useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { LoaderType } from '@/types';
import { projectDetailLoader } from '@/pages';
import { useProject } from '@/hooks';
import { Div, Img, Typo } from '@/atoms';

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
        className="absolute left-[50%] right-0 -z-10 max-w-[45vw] -skew-x-6 -skew-y-2 object-contain opacity-30"
        src={`${import.meta.env.VITE_IMAGE_URL}/${previewImage}`}
      />
      <Link
        className="relative flex items-center after:absolute after:inset-x-0 after:-bottom-2 after:h-1 after:origin-bottom after:scale-0 after:bg-stone-700/50 after:transition-all after:content-[''] hover:after:scale-100 hover:after:bg-stone-700 dark:text-stone-300/80 dark:after:bg-stone-300/50 dark:hover:text-stone-300 dark:hover:after:bg-stone-300"
        to="/project"
      >
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
        <Typo>{context}</Typo>
      </Div>
      <Div className="flex max-w-[60%] flex-col gap-y-1">
        <Typo className="text-2xl text-stone-700/70 dark:text-stone-300/70">역할</Typo>
        <Typo>{role}</Typo>
      </Div>
      {images.length > 0 && (
        <Div className="w-full gap-y-1">
          <Typo className="text-2xl text-stone-700/70 dark:text-stone-300/70">결과물</Typo>
          <Div className="flex gap-x-8 overflow-y-hidden overflow-x-scroll">
            {images.map((image) => (
              <Img
                key={image}
                className="size-auto max-h-[400px] transition hover:scale-90"
                src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
              />
            ))}
          </Div>
        </Div>
      )}
      <Link
        className="relative mb-20 flex items-center self-end after:absolute after:inset-x-0 after:-bottom-2 after:h-1 after:origin-bottom after:scale-0 after:bg-stone-700/50 after:transition-all after:content-[''] hover:after:scale-100 hover:after:bg-stone-700 dark:text-stone-300/80 dark:after:bg-stone-300/50 dark:hover:text-stone-300 dark:hover:after:bg-stone-300"
        to={`/project/more/${id}`}
      >
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
