import Link from "next/link";
import DiagonalArrow from "@/components/diagonal-arrow";
import { site } from "@/lib/site";

export default function HomeFooter() {
  return (
    <footer className="bg-[#0A2978] px-6 py-10 sm:py-12">
      <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-8 sm:flex-row">
        <div className="font-display text-[28px] font-semibold tracking-[-0.01em] text-white sm:text-[32px]">
          {site.name}
        </div>
        <div className="flex flex-col items-start gap-3.5 sm:items-end">
          <Link
            href={site.aboutUrl}
            data-cursor-hover
            className="group inline-flex items-center gap-1 text-[15px] text-white"
          >
            About
            <DiagonalArrow />
          </Link>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            data-cursor-label="Connect with me"
            className="group font-display inline-flex items-center gap-1 text-xl text-white"
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
            className="group font-display inline-flex items-center gap-1 text-xl text-white"
          >
            Resume
            <DiagonalArrow />
          </a>
        </div>
      </div>
    </footer>
  );
}
