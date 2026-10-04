import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudySectionBlock, {
  MediaSlot,
  renderWithEmphasis,
} from "@/components/case-study-section";
import CaseStudyToc, { type TocItem } from "@/components/case-study-toc";
import HomeFooter from "@/components/home-footer";
import Reveal from "@/components/reveal";
import { Kicker, PillLink, SectionLabel } from "@/components/ui/brand";
import { getProject, projects } from "@/lib/projects";
import type { CaseStudySection } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** "Back Market / Mar 2026" → { company, date } */
function metaParts(eyebrow: string) {
  const [company, date = ""] = eyebrow.split("/").map((part) => part.trim());
  return { company, date };
}

function hasHeading(
  section: CaseStudySection,
): section is Extract<CaseStudySection, { heading: string }> {
  return "heading" in section;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const [firstSection, ...restSections] = project.caseStudy;
  const { company, date } = metaParts(project.eyebrow);
  const skillsLabel = project.skillsHighlight?.label.replace(/\s*[—-]\s*$/, "");

  const tocItems: TocItem[] = [
    { id: "at-a-glance", label: "At a glance" },
    ...restSections.filter(hasHeading).map((section) => ({
      id: slugify(section.heading),
      label: section.tocLabel ?? section.heading,
    })),
  ];

  return (
    <div className="brand">
      <article className="mx-auto max-w-[1300px] px-6 pb-[140px]">
        <div className="flex flex-col gap-10 pt-10 sm:pt-16 md:flex-row md:justify-center md:gap-16">
          <CaseStudyToc items={tocItems} />

          <div className="max-w-[700px]">
            <PillLink href="/" className="mb-10 md:hidden">
              <span aria-hidden="true">&larr;</span>
              All work
            </PillLink>

            <div id="at-a-glance" className="scroll-mt-24">
              <h1 className="text-[32px] leading-[1.2] font-medium tracking-[-0.03em] text-(--ink) sm:text-[40px]">
                {project.title}
              </h1>
              <Kicker company={company} date={date} className="mt-3" />

              {project.skillsHighlight && (
                <Reveal>
                  <div className="mt-10">
                    <SectionLabel>{skillsLabel}</SectionLabel>
                    <ol className="mt-5 flex flex-col gap-4">
                      {project.skillsHighlight.items.map((item, index) => (
                        <li key={index} className="flex gap-4">
                          <span className="pt-[5px] font-mono text-xs font-bold text-(--accent)">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-lg leading-[1.5] text-(--ink)">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ol>
                    <hr className="mt-10 border-t border-(--ink)/10" />
                  </div>
                </Reveal>
              )}

              <Reveal>
                <div className="mt-6">
                  {project.intro.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mt-4 text-[17px] leading-[1.65] text-(--ink)"
                    >
                      {renderWithEmphasis(paragraph)}
                    </p>
                  ))}
                </div>
              </Reveal>

              {project.introMedia && (
                <Reveal>
                  <MediaSlot
                    media={project.introMedia}
                    className="mt-10 aspect-video w-full"
                  />
                </Reveal>
              )}

              {firstSection && (
                <Reveal className="mt-10">
                  <CaseStudySectionBlock section={firstSection} />
                </Reveal>
              )}
            </div>

            {restSections.length > 0 && (
              <div className="mt-20 flex flex-col gap-20 sm:mt-24">
                {restSections.map((section, index) => {
                  const id = hasHeading(section)
                    ? slugify(section.heading)
                    : undefined;
                  return (
                    <Reveal
                      key={index}
                      id={id}
                      className={id ? "scroll-mt-24" : undefined}
                    >
                      <CaseStudySectionBlock section={section} />
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </article>
      <HomeFooter />
    </div>
  );
}
