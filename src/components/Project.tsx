import { get } from '@/libs/fetch';
import BentoGrid from '@/components/BentoGrid';
import { ProjectType } from '@/types/project';
import ProjectCard from '@/components/ProjectCard';

export default async function Project() {
  const data = await get<ProjectType[]>('/port/project');
  return (
    <section id="project" className="my-24 mx-12">
      <BentoGrid className="gap-8 grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </BentoGrid>
    </section>
  );
}
