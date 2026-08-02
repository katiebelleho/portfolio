import { site } from "@/lib/site";

export default function NavLinks({ className }: { className?: string }) {
  const linkClass =
    "text-base font-semibold uppercase whitespace-nowrap text-[#161616]";

  return (
    <nav className={className}>
      <a
        href={site.linkedinUrl}
        target="_blank"
        rel="noreferrer noopener"
        data-cursor-hover
        data-cursor-label="Connect with me"
        className={linkClass}
      >
        Linkedin
      </a>
      <a
        href={site.resumeUrl}
        target="_blank"
        rel="noreferrer noopener"
        data-cursor-hover
        data-cursor-label="Past experiences in a pdf"
        className={linkClass}
      >
        Resume
      </a>
    </nav>
  );
}
