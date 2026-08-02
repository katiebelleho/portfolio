import { site } from "@/lib/site";

export default function HomeFooter() {
  const linkClass = "text-base font-semibold uppercase text-white";

  return (
    <footer className="bg-[#0A2978] px-6 py-10 sm:py-12">
      <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-8 sm:flex-row">
        <div className="font-display text-[28px] tracking-[-0.01em] text-white sm:text-[32px]">
          {site.name}
        </div>
        <div className="flex flex-col items-start gap-3.5 sm:items-end">
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
        </div>
      </div>
    </footer>
  );
}
