import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md', 
  showText = true,
  className = '' 
}) => {
  const isDark = variant === 'dark';
  
  const iconDimensions = {
    sm: 34,
    md: 44,
    lg: 56,
    xl: 84
  };

  const currentDim = iconDimensions[size];

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`} id="brand-logo">
      {/* 3 Colinas Official Circular Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg 
          width={currentDim} 
          height={currentDim} 
          viewBox="0 0 160 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 group-hover:scale-105"
        >
          {/* Circular Base Background */}
          <circle 
            cx="80" 
            cy="80" 
            r="76" 
            fill={isDark ? '#FFFFFF' : '#FFFFFF'} 
            stroke={isDark ? '#48C0BA' : '#48C0BA'} 
            strokeWidth="3.5"
          />

          {/* Inner Teal Arc Rings (Top and Bottom Segments with gaps) */}
          <path
            d="M 32 68 A 54 54 0 0 1 128 68"
            stroke="#48C0BA"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 32 92 A 54 54 0 0 0 128 92"
            stroke="#48C0BA"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Top Arch Wire Line */}
          <line 
            x1="30" 
            y1="62" 
            x2="66" 
            y2="62" 
            stroke="#2B2B2B" 
            strokeWidth="1.2" 
            strokeLinecap="round"
          />
          <line 
            x1="94" 
            y1="62" 
            x2="130" 
            y2="62" 
            stroke="#2B2B2B" 
            strokeWidth="1.2" 
            strokeLinecap="round"
          />

          {/* Central Top Tooth Icon with Orthodontic Bracket / Core Dot */}
          <g transform="translate(67, 48)">
            {/* Tooth outline */}
            <path
              d="M 3 6 C 3 2, 7 0.5, 13 0.5 C 19 0.5, 23 2, 23 6 C 23 10, 25 15, 24 23 C 23 25, 20 27, 18 20 C 16 16, 14 17, 13 17 C 12 17, 10 16, 8 20 C 6 27, 3 25, 2 23 C 1 15, 3 10, 3 6 Z"
              fill="#FFFFFF"
              stroke="#2B2B2B"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            {/* Central Bracket Dot / Core */}
            <circle cx="13" cy="14" r="3" fill="#48C0BA" />
          </g>

          {/* Central Typography: - 3 Colinas - */}
          {/* Left dash */}
          <line x1="25" y1="87" x2="35" y2="87" stroke="#2B2B2B" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Number 3 */}
          <text 
            x="48" 
            y="94" 
            fill="#2B2B2B" 
            fontSize="24" 
            fontWeight="bold" 
            fontFamily="Georgia, serif"
          >
            3
          </text>

          {/* Colinas in Stylized Script / Handcrafted Typography */}
          <text 
            x="64" 
            y="93" 
            fill="#48C0BA" 
            fontSize="21" 
            fontWeight="500" 
            fontFamily="'Brush Script MT', 'Dancing Script', 'Caveat', 'Segoe Script', cursive, sans-serif"
            fontStyle="italic"
            letterSpacing="0.5px"
          >
            Colinas
          </text>

          {/* Right dash */}
          <line x1="125" y1="87" x2="135" y2="87" stroke="#2B2B2B" strokeWidth="2.5" strokeLinecap="round" />

          {/* Subtitle: ODONTOLOGIA */}
          <text 
            x="80" 
            y="105" 
            textAnchor="middle" 
            fill="#2B2B2B" 
            fontSize="7.5" 
            fontWeight="700" 
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="2.2px"
          >
            ODONTOLOGIA
          </text>

          {/* Bottom subtle Molar Tooth Contour */}
          <path
            d="M 74 135 C 74 125, 78 118, 88 118 C 96 118, 102 124, 108 124 C 114 124, 120 128, 120 135"
            stroke="#48C0BA"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Brand Text Signature (optional when displayed next to icon) */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5">
            <span className={`font-bold tracking-tight leading-none ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
            } ${isDark ? 'text-[#1A1A1A]' : 'text-white'}`} style={{ fontFamily: 'Georgia, serif' }}>
              3 Colinas
            </span>
            <span className={`text-[9px] uppercase tracking-[0.25em] font-bold ${isDark ? 'text-[#48C0BA]' : 'text-[#56BDB7]'}`}>
              Odontologia
            </span>
          </div>
          <span className={`text-[9px] font-light tracking-wider mt-0.5 ${isDark ? 'text-[#1A1A1A]/50' : 'text-white/60'}`}>
            Ortodontia Digital & Estética
          </span>
        </div>
      )}
    </div>
  );
};

