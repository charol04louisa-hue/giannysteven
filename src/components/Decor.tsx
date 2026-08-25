/**
 * Reusable creative background system.
 * All layers are decorative: aria-hidden, pointer-events none.
 */

export function GrainOverlay({ opacity = 0.35 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

export function BlueprintGrid({ dark = false }: { dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${dark ? "blueprint-dark" : "blueprint"}`}
      style={{
        maskImage: "radial-gradient(80% 60% at 50% 40%, black, transparent 100%)",
      }}
    />
  );
}

export function Halftone({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`halftone pointer-events-none absolute text-blue/25 ${className}`}
    />
  );
}

export function BrushStroke({
  className = "",
  color = "var(--color-yellow)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 60"
      className={`pointer-events-none absolute ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M4 40C70 18 150 10 232 16c56 4 108 14 182 6-58 20-118 24-186 20-56-4-118-14-176 2 44-8 92-8 136-4-64-6-124 0-184 0z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M16 52c96-16 200-20 300-6-90-4-186-2-278 12z"
        fill={color}
        opacity="0.55"
      />
    </svg>
  );
}

export function CameraSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 400"
      className={`pointer-events-none absolute ${className}`}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="2">
        {/* body */}
        <path d="M150 150h210v130H150z" />
        {/* mount / handle */}
        <path d="M196 120h96v30h-96z" />
        {/* lens */}
        <path d="M360 178h96v74h-96z" />
        <path d="M456 190h34v50h-34z" />
        <circle cx="470" cy="215" r="16" />
        {/* reels */}
        <circle cx="205" cy="112" r="34" />
        <circle cx="300" cy="112" r="34" />
        <circle cx="205" cy="112" r="8" />
        <circle cx="300" cy="112" r="8" />
        {/* viewfinder */}
        <path d="M110 176h40v40h-40z" />
        {/* tripod */}
        <path d="M255 280v40M255 320l-70 68M255 320l70 68M215 358h80" />
        {/* focus marks */}
        <path d="M372 168v-16M400 168v-10M428 168v-16" />
      </g>
    </svg>
  );
}

export function CitySilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 220"
      className={`pointer-events-none absolute ${className}`}
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0 220V148h48v-26h34v26h30V96h56v52h26v-30h44v30h36V62h58v86h30v-40h48v40h34V88h60v60h28v-34h46v34h38V54h56v94h30v-28h44v28h34V104h58v44h30v-24h46v24h36V74h56v74h30v-30h48v30h34v-42h58v42h30v-18h46v18h34v-64h56v64h32v72z"
      />
      <g fill="var(--color-yellow)" opacity="0.5">
        <rect x="120" y="132" width="6" height="8" />
        <rect x="330" y="86" width="6" height="8" />
        <rect x="612" y="76" width="6" height="8" />
        <rect x="905" y="98" width="6" height="8" />
        <rect x="1180" y="106" width="6" height="8" />
      </g>
    </svg>
  );
}

export function FilmMarks({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 10h34M10 10v34M190 10h-34M190 10v34M10 190h34M10 190v-34M190 190h-34M190 190v-34" />
      <circle cx="100" cy="100" r="34" strokeDasharray="4 8" />
      <path d="M100 52v-18M100 166v-18M52 100H34M166 100h-18" />
    </svg>
  );
}

export function FloatingGeometry({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className="float-slow absolute size-40 rounded-full border border-yellow/30" />
      <div
        className="float-slow absolute left-24 top-24 size-24 rotate-45 border border-white/20"
        style={{ animationDelay: "1.4s" }}
      />
    </div>
  );
}
