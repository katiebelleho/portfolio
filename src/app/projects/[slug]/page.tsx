import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MediaStack from "@/components/media-stack";
import Reveal from "@/components/reveal";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

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

const sections = [
  { key: "problem", label: "The Problem" },
  { key: "approach", label: "My Approach" },
  { key: "solution", label: "The Solution" },
  { key: "outcome", label: "Outcome & Impact" },
] as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article>
          <header className="px-6 pt-32 pb-16 sm:px-10 sm:pt-40 sm:pb-20">
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {project.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                {project.title}
              </h1>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-neutral-200 pt-8">
                <div>
                  <dt className="text-sm text-neutral-500">Role</dt>
                  <dd className="mt-1 font-medium text-neutral-900">
                    {project.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-500">Timeline</dt>
                  <dd className="mt-1 font-medium text-neutral-900">
                    {project.timeline}
                  </dd>
                </div>
              </dl>
            </div>
          </header>

          <div className="px-6 sm:px-10">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <MediaStack media={project.media} />
              </Reveal>
            </div>
          </div>

          <div className="px-6 py-20 sm:px-10 sm:py-28">
            <div className="mx-auto flex max-w-4xl flex-col gap-16">
              {sections.map((section) => (
                <Reveal key={section.key}>
                  <section>
                    <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                      {section.label}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                      {project[section.key]}
                    </p>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="px-6 pb-24 sm:px-10">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-base font-semibold text-neutral-900 transition-colors hover:text-accent"
              >
                <span aria-hidden="true">←</span>
                Back to all work
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
