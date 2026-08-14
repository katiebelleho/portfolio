import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudySectionBlock, {
  MediaSlot,
  renderWithEmphasis,
} from "@/components/case-study-section";
import CaseStudyToc, { type TocItem } from "@/components/case-study-toc";
import CustomCursor from "@/components/custom-cursor";
import HomeFooter from "@/components/home-footer";
import Reveal from "@/components/reveal";
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

function hasHeading(
  section: CaseStudySection
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

  const tocItems: TocItem[] = [
    { id: "at-a-glance", label: "At a glance" },
    ...restSections
      .filter(hasHeading)
      .map((section) => ({
        id: slugify(section.heading),
        label: section.tocLabel ?? section.heading,
      })),
  ];

  return (
    <div className="home-page bg-white">
      <CustomCursor />
      <article className="mx-auto max-w-[1300px] px-6 pb-[140px]">
        <div className="flex flex-col gap-10 pt-10 sm:pt-12 md:flex-row md:justify-center md:gap-16">
          <CaseStudyToc items={tocItems} />

          <div className="max-w-[700px]">
            <Link
              href="/"
              data-cursor-hover
              className="mb-8 inline-flex items-center gap-2 text-sm text-[#161616] md:hidden"
            >
              <span aria-hidden="true">←</span>
              Back to all work
            </Link>

            <div id="at-a-glance" className="scroll-mt-24">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.04em] text-[#0A2978]">
                {project.eyebrow}
              </p>
              <h1 className="mt-4 font-display text-[32px] leading-[1.25] text-[#141414]">
                {project.title}
              </h1>

              {project.skillsHighlight && (
                <Reveal>
                  <div className="mt-4 rounded-md border-l-4 border-[#0A2978] bg-neutral-50 p-5">
                    <p className="text-base font-semibold text-[#161616]">
                      {project.skillsHighlight.label}
                    </p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-4 text-base leading-[1.6] text-[#161616] marker:font-semibold marker:text-[#0A2978]">
                      {project.skillsHighlight.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              <Reveal>
                <div>
                  {project.intro.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mt-4 text-base leading-[1.6] text-[#161616]"
                    >
                      {renderWithEmphasis(paragraph)}
                    </p>
                  ))}
                </div>
              </Reveal>

              {project.introMedia && (
                <Reveal>
                  <MediaSlot media={project.introMedia} className="mt-10 aspect-video w-full" />
                </Reveal>
              )}

              {firstSection && (
                <Reveal className="mt-4">
                  <CaseStudySectionBlock section={firstSection} />
                </Reveal>
              )}
            </div>

            {restSections.length > 0 && (
              <div className="mt-16 flex flex-col gap-16 sm:mt-20">
                {restSections.map((section, index) => {
                  const id = hasHeading(section) ? slugify(section.heading) : undefined;
                  return (
                    <Reveal key={index} id={id} className={id ? "scroll-mt-24" : undefined}>
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
