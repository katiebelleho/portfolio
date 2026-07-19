import Link from "next/link";
import { site } from "@/lib/site";

export default function HomeFooter() {
  return (
    <footer className="bg-[#0A2978] px-6 py-10 sm:px-14 sm:py-12">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 sm:flex-row">
        <div className="font-display text-[28px] font-bold tracking-[-0.01em] text-white sm:text-[32px]">
          {site.name}
        </div>
        <div className="flex flex-col items-start gap-3.5 sm:items-end">
          <Link
            href={site.aboutUrl}
            data-cursor-hover
            className="border-b border-transparent pb-0.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:border-white"
          >
            About
          </Link>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            data-cursor-label="Connect with me"
            className="border-b border-transparent pb-0.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:border-white"
          >
            Linkedin
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor-hover
            data-cursor-label="My past experiences"
            className="border-b border-transparent pb-0.5 text-[15px] font-semibold text-white transition-colors duration-150 hover:border-white"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
