import { site } from "@/lib/site";

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      width="12"
      height="12"
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
          className="inline-flex items-center gap-1.5 rounded-sm font-mono text-base leading-[1.25] text-(--accent) underline decoration-transparent decoration-1 underline-offset-[5px] transition-colors hover:decoration-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
        >
          {link.label}
          <ArrowUpRight />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ))}
    </nav>
  );
}
