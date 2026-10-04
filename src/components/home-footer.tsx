import { site } from "@/lib/site";

export default function HomeFooter() {
  const linkClass =
    "font-mono text-base text-white underline decoration-dotted decoration-1 underline-offset-[6px] hover:decoration-solid";

  return (
    <footer className="min-h-[300px] bg-[#0A2978] px-6 py-10 sm:py-12">
      <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-8 sm:flex-row">
        <div className="text-[28px] leading-none font-medium tracking-[-0.03em] text-white sm:text-[32px]">
          {site.name}
        </div>
        <div className="flex flex-col items-start gap-3.5 sm:items-end">
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={linkClass}
          >
            Linkedin
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={linkClass}
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
