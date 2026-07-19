import Divider from "@/components/divider";
import PhotoBadge from "@/components/photo-badge";
import TimePill from "@/components/time-pill";
import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1240px] px-6 pt-20 pb-14 sm:px-14 sm:pt-24 sm:pb-16"
    >
      <div className="flex items-start justify-between gap-6">
        <h1
          data-cursor-hover
          className="w-fit font-display text-[clamp(2.5rem,8vw,72px)] font-semibold leading-[0.98] tracking-[-0.03em] text-[#141414]"
        >
          {site.name}
        </h1>
        <nav className="flex shrink-0 flex-col items-end gap-2 pt-2">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            data-cursor-label="Connect with me"
            className="font-display text-xl font-semibold text-[#161616]"
          >
            Linkedin
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            data-cursor-label="My past experiences"
            className="font-display text-xl font-semibold text-[#161616]"
          >
            Resume
          </a>
        </nav>
      </div>

      <div className="mt-6 flex items-start justify-between gap-10">
        <div className="max-w-[600px]">
          <p className="text-base leading-[1.8] text-[#68666b]">
            Product Designer with 6+ years of experience helping
            mission-driven companies scale with{" "}
            <span className="font-semibold text-[#0A2978]">
              effective design solutions that prioritize results
            </span>
            .
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="text-sm text-[#68666b]">{site.location}</span>
            <TimePill />
          </div>
        </div>

        <PhotoBadge />
      </div>

      <div className="mt-14 sm:mt-16">
        <Divider />
      </div>
    </section>
  );
}
