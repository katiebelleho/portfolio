import NavLinks from "@/components/nav-links";

export default function DetailHeader() {
  return (
    <header className="mx-auto flex max-w-[1300px] items-center justify-end px-6 pt-10 sm:pt-12">
      <NavLinks className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-8" />
    </header>
  );
}
