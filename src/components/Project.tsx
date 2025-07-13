import { get } from '@/libs/fetch';
import BentoGrid from '@/components/BentoGrid';
import { ProjectType } from '@/types/project';
import ProjectCard from '@/components/ProjectCard';

export default async function Project() {
  const data = await get<ProjectType[]>('/port/project');
  return (
    <section id="project" className="mx-2 sm:mx-12">
      <div className="flex justify-center mb-8">
        <h2 className="text-4xl font-bold gradient-title">Project</h2>
      </div>
      <BentoGrid className="gap-8 sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </BentoGrid>
    </section>
  );
}
