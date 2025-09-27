interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>

      {/* Main circle */}
      <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />

      {/* L shape representing "Lynq" */}
      <path
        d="M12 10 L12 26 L24 26 M12 22 L20 22"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connection dots representing "linking" */}
      <circle cx="26" cy="14" r="2" fill="white" />
      <circle cx="30" cy="18" r="1.5" fill="white" opacity="0.8" />
      <circle cx="28" cy="22" r="1" fill="white" opacity="0.6" />

      {/* Connecting lines */}
      <path
        d="M24 22 L26 20 M26 16 L28 18 M28 20 L28 21"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}