import type { ReactNode } from "react";
import LazyVideo from "@/components/lazy-video";
import MediaPlaceholder from "@/components/media-placeholder";
import type { CaseStudyContentBlock, CaseStudySection } from "@/lib/projects";

const h2Class = "font-display text-2xl text-[#161616] sm:text-[28px]";
const h3Class = "font-display text-xl text-[#161616]";
const statLabelClass =
  "text-xs font-semibold uppercase tracking-[0.04em] text-[#0A2978]";

type MediaSlotSource = {
  label: string;
  type?: "image" | "video" | "vimeo";
  src?: string;
  poster?: string;
  alt?: string;
  caption?: string;
};

// Real media keeps its native aspect ratio, so any aspect-* utility (only
// meant to size the placeholder box) is stripped before it's applied here.
function stripAspect(className?: string) {
  return (className ?? "").replace(/\baspect-\S+/g, "").trim();
}

export function MediaSlot({
  media,
  className,
}: {
  media: MediaSlotSource;
  className?: string;
}) {
  let mediaEl: ReactNode;

  if (!media.src) {
    mediaEl = <MediaPlaceholder label={media.label} className={className} />;
  } else if (media.type === "vimeo") {
    // Vimeo has no intrinsic size to read from, so it keeps the placeholder's aspect box.
    mediaEl = (
      <div className={`relative overflow-hidden rounded-[6px] bg-neutral-100 ${className ?? ""}`}>
        <iframe
          src={`https://player.vimeo.com/video/${media.src}`}
          title={media.label}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  } else if (media.type === "video") {
    mediaEl = (
      <LazyVideo
        src={media.src}
        poster={media.poster}
        className={`w-full rounded-[6px] ${stripAspect(className)}`}
      />
    );
  } else {
    mediaEl = (
      // eslint-disable-next-line @next/next/no-img-element -- native aspect ratio, unknown intrinsic size
      <img
        src={media.src}
        alt={media.alt ?? media.label}
        loading="lazy"
        className={`w-full rounded-[6px] ${stripAspect(className)}`}
      />
    );
  }

  if (!media.caption) return mediaEl;

  return (
    <figure className="m-0">
      {mediaEl}
      <figcaption className="mt-3 text-center text-sm italic text-[#9a98a0]">
        {media.caption}
      </figcaption>
    </figure>
  );
}

export function renderWithEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <span key={index}>{part}</span>;
  });
}

function ContentBlocks({ blocks }: { blocks: CaseStudyContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={index}
              className="mt-4 max-w-[700px] text-base leading-[1.6] text-[#161616] first:mt-4"
            >
              {renderWithEmphasis(block.text)}
            </p>
          );
        }

        if (block.type === "list") {
          const ListTag = block.style === "bulleted" ? "ul" : "ol";
          return (
            <ListTag
              key={index}
              className={`mt-4 max-w-[700px] space-y-2 pl-5 text-base leading-[1.6] text-[#161616] marker:font-semibold marker:text-[#0A2978] ${
                block.style === "bulleted" ? "list-disc" : "list-decimal"
              }`}
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ListTag>
          );
        }

        if (block.type === "callout") {
          return (
            <div
              key={index}
              className="mt-4 max-w-[700px] rounded-md bg-neutral-50 px-5 py-4 text-base font-medium text-[#161616]"
            >
              {renderWithEmphasis(block.text)}
            </div>
          );
        }

        if (block.type === "row") {
          return (
            <div
              key={index}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-start sm:gap-8"
            >
              <div className="[&>*:first-child]:mt-0">
                {block.heading && <h3 className={h3Class}>{block.heading}</h3>}
                <ContentBlocks blocks={block.text} />
              </div>
              <MediaSlot media={block.media} className="aspect-[3/4] w-full" />
            </div>
          );
        }

        return (
          <MediaSlot
            key={index}
            media={{
              label: block.label,
              type: block.mediaType,
              src: block.src,
              poster: block.poster,
              alt: block.alt,
              caption: block.caption,
            }}
            className="mt-8 aspect-video w-full"
          />
        );
      })}
    </>
  );
}

export default function CaseStudySectionBlock({
  section,
}: {
  section: CaseStudySection;
}) {
  if (section.kind === "media") {
    return (
      <MediaSlot
        media={{
          label: section.label,
          type: section.mediaType,
          src: section.src,
          poster: section.poster,
          alt: section.alt,
          caption: section.caption,
        }}
        className="aspect-video w-full"
      />
    );
  }

  if (section.kind === "stats") {
    // With exactly 3 items, the first one runs tall along the left with the
    // other two stacked beside it; any other count falls back to a plain grid.
    const useTallFirstItem = section.items.length === 3;

    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
        {section.items.map((item, index) => (
          <div
            key={index}
            className={`rounded-md bg-neutral-50 p-5 ${
              useTallFirstItem && index === 0 ? "sm:row-span-2" : ""
            }`}
          >
            <p className={statLabelClass}>{item.label}</p>
            {item.list ? (
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-[1.5] text-[#161616]">
                {item.list.map((entry, entryIndex) => (
                  <li key={entryIndex}>{entry}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-[1.5] text-[#161616]">{item.body}</p>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (section.kind === "columns") {
    const gridColsClass =
      section.columns.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";

    return (
      <div>
        <h2 className={h2Class}>{section.heading}</h2>
        <div className={`mt-8 grid grid-cols-1 gap-10 sm:gap-8 ${gridColsClass}`}>
          {section.columns.map((column, index) => (
            <div key={index}>
              {column.mediaLabel && (
                <MediaPlaceholder
                  label={column.mediaLabel}
                  className="aspect-[4/3] w-full"
                />
              )}
              <h3 className={`${h3Class} ${column.mediaLabel ? "mt-4" : ""}`}>
                {column.heading}
              </h3>
              {column.list ? (
                <ul className="mt-2 list-disc space-y-1.5 pl-4 text-base leading-[1.6] text-[#161616] marker:font-semibold marker:text-[#0A2978]">
                  {column.list.map((entry, entryIndex) => (
                    <li key={entryIndex}>{entry}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-base leading-[1.6] text-[#161616]">
                  {column.body}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const HeadingTag = section.level === 2 ? "h2" : "h3";
  const headingClass = section.level === 2 ? h2Class : h3Class;

  const content = (
    <>
      <HeadingTag className={headingClass}>{section.heading}</HeadingTag>
      <ContentBlocks blocks={section.blocks} />
    </>
  );

  if (section.media) {
    return (
      <div>
        {content}
        <MediaSlot
          media={section.media}
          className="mt-8 aspect-[4/3] w-full"
        />
      </div>
    );
  }

  return <div>{content}</div>;
}
