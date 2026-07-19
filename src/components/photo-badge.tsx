import Image from "next/image";
import { site } from "@/lib/site";

export default function PhotoBadge() {
  return (
    <div className="relative h-[104px] w-[104px] shrink-0 sm:h-[120px] sm:w-[120px]">
      <div
        className="absolute -right-2 top-1.5 h-[88px] w-[88px] rounded-full bg-[#0A2978] sm:h-[104px] sm:w-[104px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image
          src={site.photoUrl}
          alt={site.name}
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
