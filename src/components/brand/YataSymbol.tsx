interface YataSymbolProps {
  size?: number
  className?: string
}

export function YataSymbol({ size = 100, className }: YataSymbolProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Head with eye cutout via evenodd */}
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M50,5 a11,11 0 0,1 11,11 a11,11 0 0,1 -11,11 a11,11 0 0,1 -11,-11 a11,11 0 0,1 11,-11 Z
           M50,12 a2.5,2.5 0 0,1 2.5,2.5 a2.5,2.5 0 0,1 -2.5,2.5 a2.5,2.5 0 0,1 -2.5,-2.5 a2.5,2.5 0 0,1 2.5,-2.5 Z"
      />
      {/* Body */}
      <ellipse cx="50" cy="50" rx="17" ry="21" fill="currentColor" />
      {/* Left wing */}
      <path fill="currentColor" d="M33,46 C22,40 8,41 5,47 C3,53 16,58 33,52 Z" />
      {/* Right wing */}
      <path fill="currentColor" d="M67,46 C78,40 92,41 95,47 C97,53 84,58 67,52 Z" />
      {/* Left leg */}
      <line x1="43" y1="69" x2="36" y2="89" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="89" x2="27" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="89" x2="44" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Center leg */}
      <line x1="50" y1="71" x2="50" y2="91" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="91" x2="43" y2="97" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="91" x2="57" y2="97" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Right leg */}
      <line x1="57" y1="69" x2="64" y2="89" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="64" y1="89" x2="56" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="64" y1="89" x2="73" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
