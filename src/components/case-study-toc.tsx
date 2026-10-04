"use client";

import { useEffect, useState } from "react";
import { PillLink, SectionLabel } from "@/components/ui/brand";

export type TocItem = {
  id: string;
  label: string;
};

export default function CaseStudyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      className="hidden shrink-0 md:block md:w-[200px]"
      aria-label="Case study navigation"
    >
      <div className="sticky top-12 flex flex-col gap-8">
        <PillLink href="/" className="self-start">
          <span aria-hidden="true">&larr;</span>
          All work
        </PillLink>

        {items.length > 1 && (
          <div>
            <SectionLabel className="mb-4">Contents</SectionLabel>
            <ul className="flex flex-col gap-3 border-l border-(--ink)/10">
              {items.map((item) => (
                <li key={item.id} className="-ml-px">
                  <a
                    href={`#${item.id}`}
                    className={`block border-l-2 py-0.5 pl-4 text-sm transition-colors ${
                      activeId === item.id
                        ? "border-(--accent) font-semibold text-(--ink)"
                        : "border-transparent text-(--ink-muted) hover:text-(--ink)"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
