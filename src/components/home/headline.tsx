import Link from "next/link";
import NameLink from "@/components/home/name-link";
import { site } from "@/lib/site";

/**
 * Homepage headline. `interactive` enables the name's hover treatment; without
 * it (mobile) the name is a plain link.
 */
export default function Headline({
  interactive = true,
  className = "",
}: {
  interactive?: boolean;
  className?: string;
}) {
  return (
    <h1
      className={`max-w-[912px] text-[40px] font-medium tracking-[-0.03em] text-(--ink) ${className}`}
    >
      I&rsquo;m{" "}
      {interactive ? (
        <NameLink />
      ) : (
        <Link
          href={site.aboutUrl}
          className="text-(--accent) underline decoration-dotted decoration-2 underline-offset-[7px]"
        >
          {site.name}
        </Link>
      )}
      , a Product Designer with 6+ years helping mission-driven companies ship
      products that{" "}
      <span className="text-(--accent)">move metrics and scale.</span>
    </h1>
  );
}
