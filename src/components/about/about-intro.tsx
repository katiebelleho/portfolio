import { SectionLabel } from "@/components/ui/brand";

const SUPERPOWERS = [
  "Design strategy",
  "Bringing structure to complexity",
  "Problem definition",
  "Built-in business instincts",
  "Getting everyone on the same page",
  "Practical to the core",
];

/** "About me" bio and "Design superpowers" tags shown under the tagline. */
export default function AboutIntro({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-[590px] ${className}`}>
      <section>
        <SectionLabel as="h2" className="text-base">
          About me
        </SectionLabel>
        <p className="mt-2 text-base leading-[1.6] text-(--ink)">
          I&rsquo;ve spent the last six years designing web and app experiences
          where design, business, and user needs meet. Right now, I&rsquo;m at
          Back Market, where I work on insurance, telecom partnerships, and US
          growth. Before that, I spent nearly four years at Trove building
          resale and trade-in experiences for brands like Patagonia and
          Lululemon.
        </p>
      </section>

      <section className="mt-12">
        <SectionLabel as="h2" className="text-base">
          Design superpowers
        </SectionLabel>
        <ul className="mt-3 flex flex-wrap gap-3.5">
          {SUPERPOWERS.map((superpower) => (
            <li
              key={superpower}
              className="rounded-xl bg-[color-mix(in_srgb,var(--highlight)_35%,var(--bg))] px-3 py-3 text-[17px] leading-6 text-(--ink)"
            >
              {superpower}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
