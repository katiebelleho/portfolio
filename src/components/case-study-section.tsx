import Image from "next/image";
import LazyVideo from "@/components/lazy-video";
import MediaPlaceholder from "@/components/media-placeholder";
import type { CaseStudyContentBlock, CaseStudySection } from "@/lib/projects";

const h2Class = "font-display text-2xl text-[#161616] sm:text-[28px]";
const h3Class = "font-display text-xl text-[#161616]";

type MediaSlotSource = {
  label: string;
  type?: "image" | "video";
  src?: string;
  poster?: string;
  alt?: string;
};

function MediaSlot({
  media,
  className,
}: {
  media: MediaSlotSource;
  className?: string;
}) {
  if (!media.src) {
    return <MediaPlaceholder label={media.label} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-neutral-100 ${className ?? ""}`}>
      {media.type === "video" ? (
        <LazyVideo
          src={media.src}
          poster={media.poster}
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src={media.src}
          alt={media.alt ?? media.label}
          fill
          sizes="(min-width: 1140px) 50vw, 100vw"
          className="object-cover"
        />
      )}
    </div>
  );
}

function renderWithEmphasis(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part, index) => {
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
              className="mt-4 max-w-[760px] text-base leading-[1.6] text-[#161616] first:mt-4"
            >
              {renderWithEmphasis(block.text)}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ol
              key={index}
              className="mt-4 max-w-[760px] list-decimal space-y-2 pl-5 text-base leading-[1.6] text-[#161616] marker:font-semibold marker:text-[#0A2978]"
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ol>
          );
        }

        if (block.type === "row") {
          return (
            <div
              key={index}
              className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div className="[&>p:first-child]:mt-0">
                <ContentBlocks blocks={block.text} />
              </div>
              <MediaSlot media={block.media} className="aspect-[4/3] w-full" />
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
        }}
        className="aspect-video w-full"
      />
    );
  }

  if (section.kind === "columns") {
    return (
      <div>
        <h2 className={h2Class}>{section.heading}</h2>
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {section.columns.map((column, index) => (
            <div key={index}>
              <MediaPlaceholder
                label={column.mediaLabel}
                className="aspect-[4/3] w-full"
              />
              <h3 className={`mt-4 ${h3Class}`}>{column.heading}</h3>
              <p className="mt-2 text-base leading-[1.6] text-[#161616]">
                {column.body}
              </p>
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

  if (section.media?.placement === "side") {
    return (
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>{content}</div>
        <MediaSlot media={section.media} className="aspect-[4/3] w-full" />
      </div>
    );
  }

  return <div>{content}</div>;
}
