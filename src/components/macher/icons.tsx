import type { SVGProps } from "react";

export function FracturedStar({ className, ...props }: SVGProps<SVGSVGElement>) {
  // Star of David with a single jagged lightning crack
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="2.4" strokeLinejoin="miter" fill="none">
        <polygon points="50,6 91,76 9,76" />
        <polygon points="50,94 9,24 91,24" />
      </g>
      {/* lightning crack: cuts through center, jagged */}
      <path
        d="M58 8 L42 38 L56 44 L36 78 L58 56 L46 50 L70 18 Z"
        fill="var(--color-navy)"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function IconBrokenHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
      <path d="M32 56 C 14 44 6 32 6 22 A 12 12 0 0 1 30 18 L 28 30 L 36 26 L 32 56 Z" />
      <path d="M32 56 C 50 44 58 32 58 22 A 12 12 0 0 0 34 18 L 28 30 L 36 26 L 32 56 Z" />
    </svg>
  );
}

export function IconChip({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4">
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="14" strokeDasharray="3 4" />
      <text x="32" y="39" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="22" fill="currentColor" stroke="none">$</text>
    </svg>
  );
}

export function IconCube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
      <path d="M32 8 L56 20 L56 44 L32 56 L8 44 L8 20 Z" />
      <path d="M32 8 L32 32 M32 32 L8 20 M32 32 L56 20 M32 32 L32 56" />
    </svg>
  );
}

// Domain icons
export function IconCampus({ className }: { className?: string }) {
  // mortarboard
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
      <path d="M4 24 L32 12 L60 24 L32 36 Z" />
      <path d="M14 30 L14 44 C 14 48, 50 48, 50 44 L 50 30" />
      <path d="M58 26 L58 42" />
    </svg>
  );
}
export function IconMedia({ className }: { className?: string }) {
  // broadcast tower
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
      <path d="M14 12 C 8 22, 8 34, 14 44" />
      <path d="M50 12 C 56 22, 56 34, 50 44" />
      <path d="M22 18 C 18 24, 18 32, 22 38" />
      <path d="M42 18 C 46 24, 46 32, 42 38" />
      <circle cx="32" cy="28" r="4" />
      <path d="M32 32 L24 56 M32 32 L40 56 M26 46 H 38" />
    </svg>
  );
}
export function IconPolitics({ className }: { className?: string }) {
  // dome / capitol
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
      <path d="M8 50 H 56" />
      <path d="M12 50 V 32 C 12 20, 52 20, 52 32 V 50" />
      <path d="M32 12 V 20" />
      <circle cx="32" cy="10" r="2" />
      <path d="M22 50 V 32 M32 50 V 28 M42 50 V 32" />
    </svg>
  );
}
export function IconEducation({ className }: { className?: string }) {
  // open book
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
      <path d="M6 16 C 18 14, 28 16, 32 22 C 36 16, 46 14, 58 16 V 50 C 46 48, 36 50, 32 56 C 28 50, 18 48, 6 50 Z" />
      <path d="M32 22 V 56" />
    </svg>
  );
}
export function IconStreet({ className }: { className?: string }) {
  // megaphone
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
      <path d="M8 26 L 36 14 V 50 L 8 38 Z" />
      <path d="M8 26 H 4 V 38 H 8" />
      <path d="M36 22 C 46 24, 50 28, 50 32 C 50 36, 46 40, 36 42" />
      <path d="M14 38 V 54 H 22 V 41" />
    </svg>
  );
}
export function IconPromenade({ className }: { className?: string }) {
  // park bench
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
      <path d="M6 30 H 58" />
      <path d="M6 36 H 58" />
      <path d="M6 24 H 58" />
      <path d="M12 24 V 50" />
      <path d="M52 24 V 50" />
      <path d="M16 36 V 50 M48 36 V 50" />
    </svg>
  );
}

export const SocialIcons = {
  Instagram: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  TikTok: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 3v10.2a3.3 3.3 0 1 1-2.4-3.18V7.6a6 6 0 1 0 5 5.93V8.95a6.4 6.4 0 0 0 4 1.4V7.7A4 4 0 0 1 16.7 3z"/>
    </svg>
  ),
  Facebook: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8z"/>
    </svg>
  ),
  X: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3 3h4.5l4.5 6.2L16.8 3H21l-7 9.4L21.5 21H17l-5-6.7L6.4 21H2.2l7.6-10z"/>
    </svg>
  ),
  YouTube: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5C.6 9.4.6 12 .6 12s0 2.6.4 4.5A3 3 0 0 0 3.1 18.6C5 19 12 19 12 19s7 0 8.9-.4A3 3 0 0 0 23 16.5c.4-1.9.4-4.5.4-4.5s0-2.6-.4-4.5zM10 15.5v-7l6 3.5z"/>
    </svg>
  ),
  Discord: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.6 5.3A17 17 0 0 0 15 4l-.3.5a14 14 0 0 1 4 1.5 13 13 0 0 0-13.5 0 14 14 0 0 1 4-1.5L9 4a17 17 0 0 0-4.6 1.3C2 8.7 1.3 12 1.6 15.3a17 17 0 0 0 5.2 2.6l1-1.4a11 11 0 0 1-1.8-.9l.4-.3a12 12 0 0 0 11.2 0l.4.3a11 11 0 0 1-1.8.9l1 1.4a17 17 0 0 0 5.2-2.6c.4-3.7-.4-7-2.8-10zM8.5 13.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/>
    </svg>
  ),
};
