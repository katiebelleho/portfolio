import Image from "next/image";
import Link from "next/link";
import DiagonalArrow from "@/components/diagonal-arrow";
import LazyVideo from "@/components/lazy-video";
import type { Project } from "@/lib/projects";

type ProjectSectionProps = {
  project: Project;
  index: number;
};

export default function ProjectSection({ project, index }: ProjectSectionProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[664px_1fr] md:gap-12">
      <div
        className={`grid w-full max-w-[664px] gap-4 sm:gap-6 ${
          project.media.length === 2 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {project.media.map((item, i) => (
          <div
            key={i}
            className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-[10px] bg-neutral-100"
          >
            {item.type === "video" ? (
              <LazyVideo
                src={item.src}
                poster={item.poster}
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt ?? ""}
                fill
                sizes="(min-width: 768px) 320px, 45vw"
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div className="min-w-0">
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-[11px] font-bold text-[#0A2978]">
            {number}
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.04em] text-[#0A2978]">
            {project.eyebrow}
          </span>
        </div>
        <p className="mt-3.5 text-base leading-[1.5] text-[#161616]">
          {project.summary}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          data-cursor-hover
          data-cursor-label="Read about this one"
          className="group mt-[18px] inline-flex items-center gap-1 text-sm text-[#161616]"
        >
          Read more
          <span className="sr-only"> about {project.title}</span>
          <DiagonalArrow />
        </Link>
      </div>
    </div>
  );
}
