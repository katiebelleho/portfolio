import MediaPlaceholder from "@/components/media-placeholder";
import type { CaseStudyContentBlock, CaseStudySection } from "@/lib/projects";

const h2Class = "font-display text-2xl text-[#161616] sm:text-[28px]";
const h3Class = "font-display text-xl text-[#161616]";

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

        return (
          <MediaPlaceholder
            key={index}
            label={block.label}
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
    return <MediaPlaceholder label={section.label} className="aspect-video w-full" />;
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
        <MediaPlaceholder
          label={section.media.label}
          className="aspect-[4/3] w-full"
        />
      </div>
    );
  }

  return <div>{content}</div>;
}
