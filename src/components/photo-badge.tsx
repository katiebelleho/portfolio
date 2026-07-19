import Image from "next/image";
import { site } from "@/lib/site";

export default function PhotoBadge() {
  return (
    <div className="relative h-[100px] w-[100px] shrink-0">
      <div
        className="absolute -right-2 top-1.5 h-[84px] w-[84px] rounded-full bg-[#0A2978]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image
          src={site.photoUrl}
          alt={site.name}
          fill
          sizes="100px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
