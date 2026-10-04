import Link from "next/link";
import type { ReactNode } from "react";

/* Shared pieces of the site's visual language (homepage + case studies). */

/** Rounded card with the soft drop shadow and 1px hairline. */
export const cardSurface =
  "rounded-2xl shadow-[0_10px_22px_rgba(27,29,46,.10),0_0_0_1px_rgba(27,29,46,.08)]";

/** Navy pill in Space Mono, used for primary actions. */
export const pillClass =
  "inline-flex items-center gap-2.5 rounded-full bg-(--accent) font-mono text-white transition-colors hover:bg-(--accent-hover) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)";

/** Muted meta line, e.g. "Back Market · Mar 2026". */
export function Kicker({
  company,
  date,
  className = "",
}: {
  company: string;
  date: string;
  className?: string;
}) {
  return (
    <p
      className={`text-[13px] leading-[1.4] font-medium text-(--ink-muted) ${className}`}
    >
      {company} <span aria-hidden="true">·</span> {date}
    </p>
  );
}

/** Navy semibold label above a group of content. */
export function SectionLabel({
  as: Tag = "p",
  id,
  children,
  className = "",
}: {
  as?: "p" | "h2" | "h3";
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      id={id}
      className={`text-sm leading-[1.4] font-semibold tracking-[-0.01em] text-(--accent) ${className}`}
    >
      {children}
    </Tag>
  );
}

export function PillLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${pillClass} px-4 py-2 text-[13px] leading-[1.25] ${className}`}
    >
      {children}
    </Link>
  );
}
