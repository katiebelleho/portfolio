import Link from "next/link";
import NavLinks from "@/components/nav-links";
import { site } from "@/lib/site";

export default function DetailHeader() {
  return (
    <header className="mx-auto flex max-w-[1300px] items-center justify-between px-6 pt-10 sm:pt-12">
      <Link
        href="/"
        data-cursor-hover
        className="font-display text-xl font-semibold text-[#141414]"
      >
        {site.name}
      </Link>
      <NavLinks className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-8" />
    </header>
  );
}
