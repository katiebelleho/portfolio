import CustomCursor from "@/components/custom-cursor";
import HomeFooter from "@/components/home-footer";
import HomeHero from "@/components/home-hero";
import ProjectCarousel from "@/components/project-carousel";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="home-page bg-white">
      <CustomCursor />
      <HomeHero />
      <div className="mx-auto max-w-[1300px] px-6 pb-[140px]">
        <ProjectCarousel projects={projects} />
      </div>
      <HomeFooter />
    </div>
  );
}
