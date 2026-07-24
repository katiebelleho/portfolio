import NavLinks from "@/components/nav-links";
import PhotoBadge from "@/components/photo-badge";
import TimePill from "@/components/time-pill";
import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1300px] px-6 pt-10 pb-14 sm:pt-12 sm:pb-16"
    >
      <div className="flex items-start justify-between gap-6">
        <PhotoBadge />
        <NavLinks className="flex shrink-0 flex-wrap items-center justify-end gap-x-4 gap-y-1 pt-2 sm:gap-x-8" />
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
        <span className="text-base text-[#161616]">{site.location}</span>
        <TimePill />
      </div>
    </section>
  );
}
