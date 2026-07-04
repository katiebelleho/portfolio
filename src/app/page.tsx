import Hero from "@/components/hero";
import ProjectRow from "@/components/project-row";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="work" className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-24 sm:gap-32">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
