import Link from "next/link";
import PhotoBadge from "@/components/photo-badge";
import TimePill from "@/components/time-pill";
import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1240px] px-6 pt-10 pb-14 sm:px-14 sm:pt-12 sm:pb-16"
    >
      <div className="flex items-start justify-between gap-6">
        <PhotoBadge />
        <nav className="flex shrink-0 flex-wrap items-center justify-end gap-x-4 gap-y-1 pt-2 sm:gap-x-8">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            data-cursor-label="Connect with me"
            className="font-display text-sm font-semibold whitespace-nowrap text-[#161616] sm:text-base"
          >
            Linkedin
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            data-cursor-label="My past experiences"
            className="font-display text-sm font-semibold whitespace-nowrap text-[#161616] sm:text-base"
          >
            Resume
          </a>
          <Link
            href={site.aboutUrl}
            data-cursor-hover
            className="font-display text-sm font-semibold whitespace-nowrap text-[#161616] sm:text-base"
          >
            About
          </Link>
        </nav>
      </div>

      <h1
        data-cursor-hover
        className="mt-10 max-w-[850px] font-display text-4xl leading-[1.25] text-[#141414] sm:text-[42px] sm:leading-[1.25]"
      >
        I&rsquo;m {site.name}, a Product Designer with 6+ years of
        experience helping mission-driven companies scale with{" "}
        <span className="text-[#0A2978]">
          effective design solutions that prioritize results
        </span>
        .
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="text-base text-[#68666b]">{site.location}</span>
        <TimePill />
      </div>

      <div className="mt-14 flex items-center gap-4 sm:mt-16">
        <span className="shrink-0 text-lg text-[#141414]">
          <span className="italic">Selected</span> work
        </span>
        <span className="h-px w-full bg-neutral-200" aria-hidden="true" />
      </div>
    </section>
  );
}
