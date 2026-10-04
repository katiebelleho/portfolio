export default function MediaPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-stripes flex items-center justify-center rounded-2xl px-4 text-center text-[13px] font-medium text-(--ink-muted) ring-1 ring-(--ink)/8 ${className ?? ""}`}
    >
      {label}
    </div>
  );
}
