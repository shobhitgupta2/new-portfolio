import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/projects/project-card";

export const ProjectsSection = () => {
  return (
    <div
      id="projects-section"
      className="flex flex-col items-start justify-center w-full my-12 md:my-24"
    >
      <h2 className="text-4xl md:text-6xl my-12 px-4">projects</h2>
      <div className="w-xs md:w-md self-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
