import React from 'react';

interface MonogramProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withSeal?: boolean;
}

export const Monogram: React.FC<MonogramProps> = ({
  size = 'md',
  className = '',
  withSeal = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-lg',
    xl: 'w-32 h-32 text-2xl',
  };

  const svgSizes = {
    sm: 40,
    md: 64,
    lg: 96,
    xl: 128,
  };

  const currentSvgSize = svgSizes[size];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {withSeal ? (
        <svg
          width={currentSvgSize}
          height={currentSvgSize}
          viewBox="0 0 100 100"
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="monogramGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E0A3" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA771C" />
              <stop offset="100%" stopColor="#E5C158" />
            </linearGradient>
            <linearGradient id="monogramRing" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#AA771C" />
              <stop offset="50%" stopColor="#FFE8A3" />
              <stop offset="100%" stopColor="#7A5013" />
            </linearGradient>
          </defs>

          {/* Outer Ornamental Ring */}
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="url(#monogramRing)"
            strokeWidth="1.2"
            strokeDasharray="4 2"
            opacity="0.85"
          />

          {/* Inner Solid Gold Ring */}
          <circle
            cx="50"
            cy="50"
            r="43"
            fill="none"
            stroke="url(#monogramGold)"
            strokeWidth="1.8"
          />

          {/* 8-Point Traditional Indian Petal Accents */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <circle
              key={i}
              cx={50 + 47 * Math.cos((angle * Math.PI) / 180)}
              cy={50 + 47 * Math.sin((angle * Math.PI) / 180)}
              r="1.8"
              fill="url(#monogramGold)"
            />
          ))}

          {/* Micro Diamond Accents */}
          <path
            d="M 50 3 L 52 5 L 50 7 L 48 5 Z M 50 93 L 52 95 L 50 97 L 48 95 Z M 3 50 L 5 48 L 7 50 L 5 52 Z M 93 50 L 95 48 L 97 50 L 95 52 Z"
            fill="url(#monogramGold)"
          />
        </svg>
      ) : null}

      {/* Monogram Typography */}
      <div className={`absolute inset-0 flex items-center justify-center font-cinzel font-bold text-amber-200 tracking-wider ${sizeMap[size]}`}>
        <span className="gold-gradient-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          A<span className="font-script font-normal text-[1.1em] text-amber-300/90 mx-0.5">&</span>A
        </span>
      </div>
    </div>
  );
};
