import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import { LoaderType } from '@/types';
import { projectLoader } from '@/pages';
import { useProject } from '@/hooks';
import { Div, Typo } from '@/atoms';
import { ProjectRecentCard, ProjectPerspectiveCard } from '@/organisms';

export default function ProjectTemplate() {
  const initialData = useLoaderData() as LoaderType.LoaderDataType<typeof projectLoader>;
  const { data, isLoading } = useQuery({ ...useProject.useProjectAll(), initialData });
  const sectionDiv = useRef<HTMLDivElement | null>(null);
  const [first, second, third, fourth, fifth, ...rest] = data;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
    <Div className="mx-[10%] flex flex-col gap-y-10">
      <ProjectRecentCard project={first} />
      <Div className="grid grid-cols-2 gap-x-8">
        <ProjectRecentCard project={second} />
        <ProjectRecentCard project={third} />
      </Div>
      <Div className="grid grid-cols-2 gap-x-8 pb-12">
        {fourth && <ProjectRecentCard project={fourth} />}
        {fifth && <ProjectRecentCard project={fifth} />}
      </Div>
      {rest.length > 0 && (
        <section className="perspective-[1000px] flex flex-col items-center pb-80" ref={sectionDiv}>
          {rest.map((project) => (
            <ProjectPerspectiveCard key={project.id} project={project} isLoading={isLoading} />
          ))}
        </section>
      )}
    </Div>
  );
}
