import Image from "next/image";
import { site } from "@/lib/site";

export default function PhotoBadge() {
  return (
    <div className="relative h-[150px] w-[150px] shrink-0 sm:h-[170px] sm:w-[170px]">
      <div
        className="absolute -right-3 top-2 h-[130px] w-[130px] rounded-full bg-[#0A2978] sm:h-[150px] sm:w-[150px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image
          src={site.photoUrl}
          alt={site.name}
          fill
          sizes="170px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
