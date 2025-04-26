import { ExperienceCard } from "@/components/sections/experience/experience-card";
import { experiences } from "@/data/experiences";

export const ExperienceSection = () => {
  return (
    <div
      id="experience-section"
      className="flex flex-col items-start justify-center w-full my-12 md:my-24"
    >
      <h2 className="text-4xl md:text-6xl my-12 px-4">experience</h2>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </div>
  );
};
