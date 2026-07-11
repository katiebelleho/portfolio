import CustomCursor from "@/components/custom-cursor";
import HomeFooter from "@/components/home-footer";
import HomeHero from "@/components/home-hero";
import ProjectSection from "@/components/project-section";
import SquiggleDivider from "@/components/squiggle-divider";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="home-page bg-[#fbfaf8]">
      <CustomCursor />
      <HomeHero />
      <div id="work" className="mx-auto max-w-[1240px] px-6 pt-16 pb-[140px] sm:px-14">
        {projects.map((project, index) => (
          <div key={project.slug}>
            <ProjectSection project={project} index={index} />
            {index < projects.length - 1 && <SquiggleDivider />}
          </div>
        ))}
      </div>
      <HomeFooter />
    </div>
  );
}
