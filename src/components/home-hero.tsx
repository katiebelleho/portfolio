import { site } from "@/lib/site";

export default function HomeHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1240px] px-6 pt-24 pb-16 sm:px-14 sm:pt-28 sm:pb-20"
    >
      <h1
        data-cursor-hover
        className="w-fit font-display text-[clamp(2.75rem,10vw,110px)] font-bold leading-[0.98] tracking-[-0.03em] text-[#141414]"
      >
        {site.name}
      </h1>
      <p className="mt-7 max-w-[800px] text-base leading-[1.8] text-[#68666b] sm:text-lg">
        Product Designer with 6+ years of experience helping mission-driven
        companies scale with
        <br />
        <span className="relative inline-block font-semibold text-[#0A2978]">
          effective design solutions that prioritize results
          <svg
            width="100%"
            height="10"
            viewBox="0 0 260 10"
            preserveAspectRatio="none"
            className="absolute -bottom-1.5 left-0"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 5 C 40 2, 55 8, 95 4 C 130 1, 150 7, 190 3 C 215 1, 235 6, 258 4"
              stroke="#0A2978"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              style={{ animation: "underline-draw 1.1s 0.4s ease forwards" }}
            />
          </svg>
        </span>
        . Currently @ Back Market.
      </p>
      <div className="mt-5 flex gap-6">
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noreferrer noopener"
          data-cursor-hover
          className="border-b border-transparent pb-0.5 text-sm font-semibold text-[#161616] transition-colors duration-150 hover:border-[#161616]"
        >
          Connect
        </a>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer noopener"
          data-cursor-hover
          className="border-b border-transparent pb-0.5 text-sm font-semibold text-[#161616] transition-colors duration-150 hover:border-[#161616]"
        >
          Resume
        </a>
      </div>
      <a
        href="#work"
        data-cursor-hover
        className="mx-auto mt-24 flex w-fit flex-col items-center gap-2 sm:mt-32"
      >
        <span className="text-xs tracking-[0.02em] text-[#9a98a0]">
          Selected work
        </span>
        <span className="inline-block animate-[home-bounce_2s_ease-in-out_infinite] text-sm text-[#9a98a0]">
          ↓
        </span>
      </a>
    </section>
  );
}
