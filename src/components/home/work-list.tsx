import Image from "next/image";
import Link from "next/link";
import { ExternalLinks } from "@/components/home/anchors";
import Headline from "@/components/home/headline";
import { homeWork } from "@/lib/home-work";
import { cardSurface, Kicker, SectionLabel } from "@/components/ui/brand";

/** Narrow-screen homepage: headline plus a single-column list of case studies. */
export default function WorkList() {
  return (
    <div className="px-6 pt-12 pb-16 min-[900px]:hidden">
      <header>
        <ExternalLinks className="mb-10" />
        <Headline interactive={false} className="text-[28px] leading-[1.2] sm:text-[34px]" />
      </header>

      <section aria-labelledby="work-list-label" className="mt-14">
        <SectionLabel as="h2" id="work-list-label">
          Design problems I&rsquo;ve solved
        </SectionLabel>
        <ul className="mt-6 flex flex-col gap-14">
          {homeWork.map((item, index) => {
            const content = (
              <>
                <div
                  className={`relative overflow-hidden ${cardSurface} ${index === 0 ? "aspect-[4/3]" : "aspect-[3/2]"}`}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.alt ?? ""}
                      fill
                      sizes="(min-width: 640px) 600px, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
                    />
                  ) : (
                    <div className="placeholder-stripes h-full w-full" />
                  )}
                </div>
                <p className="mt-4 text-lg leading-[1.3] font-semibold tracking-[-0.01em] text-(--ink)">
                  {item.title}
                </p>
                <Kicker company={item.company} date={item.date} className="mt-1.5" />
              </>
            );

            return (
              <li key={index}>
                {item.slug ? (
                  <Link href={`/projects/${item.slug}`} className="group block">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
