import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="text-base font-bold tracking-tight text-neutral-900">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-neutral-500">{site.role}</p>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-neutral-600">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            Resume
          </a>
          <p className="text-neutral-400">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
