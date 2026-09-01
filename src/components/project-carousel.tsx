import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const media = project.media[0];
  const focalPointClass =
    media.focalPoint === "top"
      ? "object-top"
      : media.focalPoint === "bottom"
        ? "object-bottom"
        : "object-center";

  return (
    <div className="w-[300px] shrink-0 snap-start sm:w-[360px]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={media.src}
          alt={media.alt ?? ""}
          fill
          sizes="(min-width: 640px) 360px, 300px"
          className={`object-cover ${focalPointClass}`}
        />
      </div>
      <div className="mt-4">
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-[11px] font-bold text-[#0A2978]">
            {number}
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.04em] text-[#0A2978]">
            {project.eyebrow}
          </span>
        </div>
        <p className="mt-3 font-display text-base leading-[1.5] text-[#161616]">
          {project.summary}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          data-cursor-hover
          data-cursor-label="View"
          className="mt-3 inline-block text-sm font-semibold uppercase text-[#0A2978]"
        >
          Read more
          <span className="sr-only"> about {project.title}</span>
        </Link>
      </div>
    </div>
  );
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <div className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-4 sm:gap-10">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
