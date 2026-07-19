import Link from "next/link";
import DiagonalArrow from "@/components/diagonal-arrow";
import PhotoBadge from "@/components/photo-badge";
import TimePill from "@/components/time-pill";
import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1200px] px-6 pt-10 pb-14 sm:pt-12 sm:pb-16"
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
            className="group font-display inline-flex items-center gap-1 text-sm whitespace-nowrap text-[#161616] sm:text-base"
          >
            Linkedin
            <DiagonalArrow />
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            data-cursor-label="My past experiences"
            className="group font-display inline-flex items-center gap-1 text-sm whitespace-nowrap text-[#161616] sm:text-base"
          >
            Resume
            <DiagonalArrow />
          </a>
          <Link
            href={site.aboutUrl}
            data-cursor-hover
            className="group font-display inline-flex items-center gap-1 text-sm whitespace-nowrap text-[#161616] sm:text-base"
          >
            About
            <DiagonalArrow />
          </Link>
        </nav>
      </div>

      <h1
        data-cursor-hover
        className="mt-10 max-w-[850px] font-display text-[40px] leading-[1.25] text-[#141414]"
      >
        I&rsquo;m {site.name}, a Product Designer with 6+ years helping
        mission-driven companies ship products that{" "}
        <span className="text-[#0A2978]">move metrics and scale.</span>
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="text-xl text-[#161616]">{site.location}</span>
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
