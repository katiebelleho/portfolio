export default function MediaPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-stripes flex items-center justify-center rounded-2xl px-4 text-center font-mono text-[11px] uppercase text-(--ink-muted) ring-1 ring-(--ink)/8 ${className ?? ""}`}
    >
      {label}
    </div>
  );
}
