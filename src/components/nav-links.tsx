import Link from "next/link";
import DiagonalArrow from "@/components/diagonal-arrow";
import { site } from "@/lib/site";

export default function NavLinks({ className }: { className?: string }) {
  const linkClass =
    "group font-display inline-flex items-center gap-1 text-sm whitespace-nowrap text-[#161616] sm:text-base";

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
        <DiagonalArrow />
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
        <DiagonalArrow />
      </a>
      <Link href={site.aboutUrl} data-cursor-hover className={linkClass}>
        About
        <DiagonalArrow />
      </Link>
    </nav>
  );
}
