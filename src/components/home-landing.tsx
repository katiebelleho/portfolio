"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import NavLinks from "@/components/nav-links";
import PhotoBadge from "@/components/photo-badge";
import { projects, type Project } from "@/lib/projects";
import { site } from "@/lib/site";

const CROSSFADE_MS = 160;

function metaParts(eyebrow: string) {
  const [company, date] = eyebrow.split("/").map((part) => part.trim());
  return { company, date };
}

function BioPanel() {
  return (
    <h1 className="max-w-[850px] font-display text-[40px] leading-[1.25] text-[#141414]">
      I&rsquo;m {site.name}, a Product Designer with 6+ years helping
      mission-driven companies ship products that{" "}
      <span className="text-[#0A2978]">move metrics and scale.</span>
    </h1>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  const { company, date } = metaParts(project.eyebrow);
  const label = project.skillsHighlight?.label.replace(/\s*[—-]\s*$/, "");

  return (
    <div>
      <h2 className="max-w-[850px] font-display text-[40px] leading-[1.25] text-[#141414]">
        {project.cardTitle}
      </h2>
      <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#9a98a0]">
        {company} <span aria-hidden="true">·</span> {date}
      </p>
      {project.skillsHighlight && (
        <div className="mt-8">
          <p className="text-base text-[#9a98a0]">{label}</p>
          <ol className="mt-5 flex max-w-[700px] flex-col gap-5">
            {project.skillsHighlight.items.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="pt-0.5 font-mono text-xs font-bold text-[#0A2978]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg leading-[1.5] text-[#161616]">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  onHoverStart,
}: {
  project: Project;
  onHoverStart: () => void;
}) {
  const { company, date } = metaParts(project.eyebrow);
  const media = project.media[0];
  const focalPointClass =
    media.focalPoint === "top"
      ? "object-top"
      : media.focalPoint === "bottom"
        ? "object-bottom"
        : "object-center";

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor-hover
      data-cursor-label="View"
      onMouseEnter={onHoverStart}
      className="block w-[300px] shrink-0 snap-start sm:w-[360px]"
    >
      <h3 className="font-display text-xl text-[#141414] sm:text-2xl">
        {project.cardTitle}
      </h3>
      <p className="mt-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#9a98a0]">
        {company} <span aria-hidden="true">·</span> {date}
      </p>
      <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={media.src}
          alt={media.alt ?? ""}
          fill
          sizes="(min-width: 640px) 360px, 300px"
          className={`object-cover ${focalPointClass}`}
        />
      </div>
    </Link>
  );
}

export default function HomeLanding() {
  const [displayedSlug, setDisplayedSlug] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const targetSlugRef = useRef<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showProject(slug: string | null) {
    if (slug === targetSlugRef.current) return;
    targetSlugRef.current = slug;
    setVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDisplayedSlug(slug);
      setVisible(true);
    }, CROSSFADE_MS);
  }

  const displayedProject = displayedSlug
    ? projects.find((project) => project.slug === displayedSlug)
    : undefined;

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[100dvh] max-w-[1300px] flex-col px-6 pt-10 pb-10 sm:pt-12"
    >
      <div className="flex items-start justify-between gap-6">
        <div
          className={`transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {!displayedProject && <PhotoBadge />}
        </div>
        <NavLinks className="flex shrink-0 flex-wrap items-center justify-end gap-x-4 gap-y-1 pt-2 sm:gap-x-8" />
      </div>

      <div
        className={`mt-10 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {displayedProject ? (
          <ProjectPreview project={displayedProject} />
        ) : (
          <BioPanel />
        )}
      </div>

      <div className="mt-auto pt-16" onMouseLeave={() => showProject(null)}>
        <div className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-4 sm:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onHoverStart={() => showProject(project.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
