export default function MediaPlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-[10px] border border-dashed border-neutral-300 bg-neutral-50 text-center text-sm text-[#9a98a0] ${className ?? ""}`}
    >
      {label}
    </div>
  );
}
