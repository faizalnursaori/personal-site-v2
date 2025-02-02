import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/utils/Project";

export default function Page() {
  return (
    <section className="pt-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[50px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.image}
            imageAlt={project.imageAlt}
            description={project.description}
            repository={project.repository}
            reverse={index % 2 !== 0}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}
