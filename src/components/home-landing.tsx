"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import LazyVideo from "@/components/lazy-video";
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
    <div>
      <PhotoBadge />
      <h1 className="mt-10 max-w-[850px] font-display text-[40px] leading-[1.25] text-[#141414]">
        I&rsquo;m {site.name}, a Product Designer with 6+ years helping
        mission-driven companies ship products that{" "}
        <span className="text-[#0A2978]">move metrics and scale.</span>
      </h1>
    </div>
  );
}

const MAX_PREVIEW_BULLETS = 3;

function ProjectPreview({ project }: { project: Project }) {
  const { company, date } = metaParts(project.eyebrow);
  const label = project.skillsHighlight?.label.replace(/\s*[—-]\s*$/, "");
  const items = project.skillsHighlight?.items.slice(0, MAX_PREVIEW_BULLETS);

  return (
    <div>
      <h2 className="max-w-[850px] font-display text-[40px] leading-[1.25] text-[#141414]">
        {project.cardTitle}
      </h2>
      <p className="mt-3 text-xs font-semibold text-[#9a98a0]">
        {company} <span aria-hidden="true">·</span> {date}
      </p>
      {items && (
        <div className="mt-8">
          <p className="text-base text-[#9a98a0]">{label}</p>
          <ol className="mt-5 flex max-w-[700px] flex-col gap-5">
            {items.map((item, index) => (
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
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        {media.type === "video" ? (
          <LazyVideo
            src={media.src}
            poster={media.poster}
            className={`h-full w-full object-cover ${focalPointClass}`}
          />
        ) : (
          <Image
            src={media.src}
            alt={media.alt ?? ""}
            fill
            sizes="(min-width: 640px) 360px, 300px"
            className={`object-cover ${focalPointClass}`}
          />
        )}
      </div>
      <p className="mt-3 text-sm text-[#141414]">
        <span className="font-semibold">{project.cardTitle}</span>{" "}
        <span className="text-[#9a98a0]">
          {company} {date}
        </span>
      </p>
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
      className="relative mx-auto flex min-h-[100dvh] max-w-[1300px] flex-col px-6 pt-10 pb-10 sm:pt-12"
    >
      <NavLinks className="absolute right-6 top-10 flex shrink-0 flex-wrap items-center justify-end gap-x-4 gap-y-1 pt-2 sm:top-12 sm:gap-x-8" />

      <div
        className={`min-h-[380px] flex-1 overflow-hidden pt-[15px] transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {displayedProject ? (
          <ProjectPreview project={displayedProject} />
        ) : (
          <BioPanel />
        )}
      </div>

      <div className="pt-16" onMouseLeave={() => showProject(null)}>
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 sm:gap-10">
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
