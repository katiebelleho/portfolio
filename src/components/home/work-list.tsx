import Image from "next/image";
import Link from "next/link";
import Headline from "@/components/home/headline";
import { homeWork } from "@/lib/home-work";

/** Narrow-screen homepage: headline plus a single-column list of case studies. */
export default function WorkList() {
  return (
    <div className="px-6 pt-12 pb-16 min-[900px]:hidden">
      <header>
        <Headline interactive={false} className="text-[28px] sm:text-[34px]" />
      </header>

      <section aria-labelledby="work-list-label" className="mt-14">
        <h2
          id="work-list-label"
          className="font-mono text-xs font-bold uppercase text-(--accent)"
        >
          Design problems I&rsquo;ve solved
        </h2>
        <ul className="mt-6 flex flex-col gap-10">
          {homeWork.map((item, index) => {
            const content = (
              <>
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-[0_10px_22px_rgba(27,29,46,.10),0_0_0_1px_rgba(27,29,46,.08)] ${index === 0 ? "aspect-[4/3]" : "aspect-[3/2]"}`}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.alt ?? ""}
                      fill
                      sizes="(min-width: 640px) 600px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="home-placeholder h-full w-full" />
                  )}
                </div>
                <p className="mt-4 font-mono text-[11px] leading-[1.4] uppercase text-(--ink-muted)">
                  {item.company} <span aria-hidden="true">·</span> {item.date}
                </p>
                <p className="mt-1.5 text-lg leading-[1.3] font-semibold tracking-[-0.01em] text-(--ink)">
                  {item.title}
                </p>
              </>
            );

            return (
              <li key={index}>
                {item.slug ? (
                  <Link href={`/projects/${item.slug}`} className="block">
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
