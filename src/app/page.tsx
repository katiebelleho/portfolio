import CustomCursor from "@/components/custom-cursor";
import Divider from "@/components/divider";
import HomeFooter from "@/components/home-footer";
import HomeHero from "@/components/home-hero";
import ProjectSection from "@/components/project-section";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="home-page bg-[#fbfaf8]">
      <CustomCursor />
      <HomeHero />
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-[140px] sm:px-14">
        {projects.map((project, index) => (
          <div key={project.slug}>
            <ProjectSection project={project} index={index} />
            {index < projects.length - 1 && (
              <div className="py-16 sm:py-20">
                <Divider />
              </div>
            )}
          </div>
        ))}
      </div>
      <HomeFooter />
    </div>
  );
}
