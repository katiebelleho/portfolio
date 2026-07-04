import Link from "next/link";
import MediaStack from "@/components/media-stack";
import Reveal from "@/components/reveal";
import type { Project } from "@/lib/projects";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 md:items-center">
      <Reveal>
        <MediaStack media={project.media} />
      </Reveal>
      <Reveal delay={100}>
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {project.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            {project.summary}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="group mt-6 inline-flex items-center gap-2 text-base font-semibold text-neutral-900 transition-colors hover:text-accent"
          >
            Learn more
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
