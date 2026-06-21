import { FracturedStar } from "./icons";

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex w-full max-w-5xl items-center gap-4 px-6 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-steel/40" style={{ background: "rgba(78,124,168,0.35)" }} />
      <FracturedStar className="h-7 w-7 shrink-0 text-steel" />
      <span className="h-px flex-1" style={{ background: "rgba(78,124,168,0.35)" }} />
    </div>
  );
}
