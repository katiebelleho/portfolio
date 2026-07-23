import Link from "next/link";
import { site } from "@/lib/site";

export default function NavLinks({ className }: { className?: string }) {
  const linkClass =
    "text-base font-semibold uppercase whitespace-nowrap text-[#0A2978]";

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
        data-cursor-label="My past experiences"
        className={linkClass}
      >
        Resume
      </a>
      <Link href={site.aboutUrl} data-cursor-hover className={linkClass}>
        About
      </Link>
    </nav>
  );
}
