import Image from "next/image";
import LazyVideo from "@/components/lazy-video";
import type { ProjectMedia } from "@/lib/projects";

export default function MediaStack({ media }: { media: ProjectMedia[] }) {
  return (
    <div className="flex flex-col gap-4">
      {media.map((item, index) => (
        <div
          key={index}
          className={`overflow-hidden rounded-2xl ${
            item.matte ? "bg-neutral-100 p-4 sm:p-6" : ""
          }`}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
            {item.type === "video" ? (
              <LazyVideo
                src={item.src}
                poster={item.poster}
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt ?? ""}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
