export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Minimal A shape */}
    <path
      d="M 50 20 L 75 80 M 50 20 L 25 80 M 35 60 L 65 60"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const VectorCompass = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Center Node */}
    <circle cx="50" cy="50" r="6" fill="#00C2FF" filter="url(#glow)" />
    {/* Up Arrow */}
    <path
      d="M 50 50 L 50 20 M 45 25 L 50 20 L 55 25"
      stroke="#00C2FF"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Right Arrow */}
    <path
      d="M 50 50 L 80 50 M 75 45 L 80 50 L 75 55"
      stroke="#00C2FF"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Left Arrow */}
    <path
      d="M 50 50 L 20 50 M 25 45 L 20 50 L 25 55"
      stroke="#00C2FF"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Circuit Lines */}
    <circle cx="50" cy="20" r="2" fill="#6E00FF" opacity="0.6" />
    <circle cx="80" cy="50" r="2" fill="#6E00FF" opacity="0.6" />
    <circle cx="20" cy="50" r="2" fill="#6E00FF" opacity="0.6" />
  </svg>
);
