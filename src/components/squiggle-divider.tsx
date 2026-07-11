export default function SquiggleDivider() {
  return (
    <div className="flex items-center justify-center py-20" aria-hidden="true">
      <svg
        width="260"
        height="10"
        viewBox="0 0 260 10"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M2 5 C 40 2, 55 8, 95 4 C 130 1, 150 7, 190 3 C 215 1, 235 6, 258 4"
          stroke="#0A2978"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
