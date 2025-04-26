import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center px-4 my-12 md:my-36">
        <div className="flex flex-col items-start justify-start gap-2 md:gap-4">
          <h1 className="text-4xl md:text-8xl w-full">
            hey there, it&#39;s Shobhit.
          </h1>
          <h2 className="text-lg md:text-4xl w-full md:w-3/4">
            an aspiring <span className="text-primary">software developer</span>{" "}
            and currently a third year engineering student at{" "}
            <span className="text-primary">
              Manipal Institute of Technology
            </span>
          </h2>
        </div>
      </div>
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
