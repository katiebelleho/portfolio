import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="text-base font-bold tracking-tight text-neutral-900">
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-600">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-neutral-900"
          >
            LinkedIn
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-neutral-900 px-4 py-2 text-white transition-colors hover:bg-accent"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
