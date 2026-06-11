'use client'

type AnimatedLogoProps = {
  className?: string
}

export default function AnimatedLogo({ className = 'w-16 h-16' }: AnimatedLogoProps) {
  return (
    <div className={className}>
      <svg viewBox="0 0 120 120" role="img" aria-label="Carnobon animated logo" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4e1f25" />
            <stop offset="100%" stopColor="#6f8f5c" />
          </linearGradient>
          <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6f8f5c" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#4e1f25" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="60" cy="60" r="46" fill="url(#pulseGlow)" />

        <circle
          cx="60"
          cy="60"
          r="34"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="8"
          opacity="0.9"
          className="origin-center animate-[spin_24s_linear_infinite]"
        />

        <path
          id="cPath"
          d="M60 40 a20 20 0 1 1 0 40 a20 20 0 1 1 0 -40"
          fill="none"
        />

        <g className="origin-center animate-[spin_14s_linear_reverse_infinite]">
          <text fontSize="9" fill="#6f8f5c" letterSpacing="1" textAnchor="middle">
            <textPath href="#cPath" startOffset="50%">
              C C C C C C C C C C C C C C C C
            </textPath>
          </text>
        </g>

        <circle cx="60" cy="60" r="10" fill="#4e1f25" />
        <circle cx="60" cy="60" r="6" fill="#6f8f5c" opacity="0.95" />
      </svg>
    </div>
  )
}
