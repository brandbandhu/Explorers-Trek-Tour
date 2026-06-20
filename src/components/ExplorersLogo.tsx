interface ExplorersLogoProps {
  className?: string;
  compact?: boolean;
}

const ExplorersLogo = ({ className = "", compact = false }: ExplorersLogoProps) => {
  return (
    <svg
      className={className}
      viewBox={compact ? "0 0 350 90" : "0 0 430 120"}
      role="img"
      aria-label="Explorers treks and tours"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Explorers treks and tours</title>
      <g fill="none" fillRule="evenodd">
        <text
          x="0"
          y="62"
          fill="currentColor"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="54"
          fontWeight="700"
          letterSpacing="-2"
        >
          EXPL
        </text>
        <text
          x="163"
          y="62"
          fill="currentColor"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="54"
          fontWeight="700"
          letterSpacing="-2"
        >
          RERS
        </text>
        <circle cx="139" cy="45" r="39" fill="#f3aa00" stroke="currentColor" strokeWidth="4" />
        <circle cx="139" cy="45" r="29" fill="#fff9ed" />
        <path d="M109 57 L129 36 L139 48 L151 29 L171 57 Z" fill="#26313b" />
        <path d="M129 36 L137 46 L144 39 L151 29 L160 57 L139 48 Z" fill="#ffffff" opacity="0.9" />
        <path d="M113 59 C126 53 151 53 166 59" stroke="#26313b" strokeWidth="2.5" strokeLinecap="round" />
        <text x="322" y="26" fill="currentColor" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">
          ®
        </text>
        {!compact && (
          <text
            x="230"
            y="98"
            fill="#d89400"
            fontFamily="Montserrat, Arial, sans-serif"
            fontSize="22"
            fontWeight="800"
          >
            treks &amp; tours
          </text>
        )}
      </g>
    </svg>
  );
};

export default ExplorersLogo;
