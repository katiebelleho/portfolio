import { site } from "@/lib/site";

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      width="11"
      height="11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 9.5l7-7M4 2.5h5.5V8" />
    </svg>
  );
}

/** LinkedIn / Resume links anchoring the top-right of the homepage. */
export function ExternalLinks({ className = "" }: { className?: string }) {
  const links = [
    { label: "LinkedIn", href: site.linkedinUrl },
    { label: "Resume", href: site.resumeUrl },
  ];
  return (
    <nav aria-label="Elsewhere" className={`flex items-center gap-8 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 rounded-sm text-[15px] leading-[1.4] text-(--ink-muted) transition-colors hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
        >
          {link.label}
          <ArrowUpRight />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ))}
    </nav>
  );
}

/** "Currently: …" status line with a softly glowing dot. */
export function CurrentlyStatus({ className = "" }: { className?: string }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[15px] leading-[1.4] text-(--ink-muted) ${className}`}
    >
      <span aria-hidden="true" className="status-dot" />
      <span>
        Currently: <span className="text-(--ink)">{site.currently}</span>
      </span>
    </p>
  );
}
