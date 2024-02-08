import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

import { LoaderType } from '@/types';
import { projectLoader } from '@/pages';
import { useProject } from '@/hooks';
import { Typo } from '@/atoms';
import { ProjectCard } from '@/organisms';

export default function ProjectTemplate() {
  const initialData = useLoaderData() as LoaderType.LoaderDataType<typeof projectLoader>;
  const { data, isLoading } = useQuery({ ...useProject.useProjectAll(), initialData });
  const sectionDiv = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.utils.toArray<Element>('.project-card').forEach((element) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: '50% 20%',
              end: '20% 0%',
              scrub: 1,
            },
          })
          .to(
            element,
            { transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter: 'brightness(0.3)' },
            0,
          );
      });
    },
    { scope: sectionDiv },
  );
  if (data === undefined) return <Typo>오류가 발생했습니다.</Typo>;
  return (
    <section className="perspective-[1000px] flex flex-col items-center pb-80" ref={sectionDiv}>
      {data.map((project) => (
        <ProjectCard key={project.id} project={project} isLoading={isLoading} />
      ))}
    </section>
  );
}
