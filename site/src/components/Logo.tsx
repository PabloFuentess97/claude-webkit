import { cn } from "@/lib/cn";

export default function Logo({
  className,
  mark = true,
}: {
  className?: string;
  mark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-display", className)}>
      {mark && (
        <span
          aria-hidden
          className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-white shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_8px_24px_-8px_rgba(37,99,235,0.5)]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 5v9a7 7 0 0 0 14 0V5" />
          </svg>
        </span>
      )}
      <span className="text-[17px] font-semibold tracking-tight">
        Uxea<span className="text-brand">.</span>
      </span>
    </span>
  );
}
