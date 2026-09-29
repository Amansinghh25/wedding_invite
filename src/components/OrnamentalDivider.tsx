import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'gold' | 'maroon' | 'subtle';
  width?: string;
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'gold',
  width = 'max-w-md',
}) => {
  const gradientColor =
    variant === 'maroon'
      ? 'from-transparent via-[#8E1E37]/70 to-transparent'
      : variant === 'subtle'
      ? 'from-transparent via-amber-600/30 to-transparent'
      : 'from-transparent via-[#D4AF37]/80 to-transparent';

  const strokeColor =
    variant === 'maroon' ? '#8E1E37' : variant === 'subtle' ? '#A7731F' : '#D4AF37';

  return (
    <div className={`flex items-center justify-center gap-3 w-full mx-auto my-6 sm:my-8 ${width} ${className}`}>
      {/* Left Fine Gold Line */}
      <div className={`h-[1px] flex-1 bg-gradient-to-r ${gradientColor}`} />

      {/* Center Indian Royal Vector Motif */}
      <svg
        width="28"
        height="18"
        viewBox="0 0 28 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 opacity-90"
      >
        {/* Center Diamond */}
        <path
          d="M14 2L18 9L14 16L10 9L14 2Z"
          fill={strokeColor}
          fillOpacity="0.85"
        />
        {/* Side Lotus Petals */}
        <circle cx="5" cy="9" r="1.5" fill={strokeColor} fillOpacity="0.7" />
        <circle cx="23" cy="9" r="1.5" fill={strokeColor} fillOpacity="0.7" />
        <path
          d="M8 9C8 7 11 6 14 6C17 6 20 7 20 9C20 11 17 12 14 12C11 12 8 11 8 9Z"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeOpacity="0.6"
        />
      </svg>

      {/* Right Fine Gold Line */}
      <div className={`h-[1px] flex-1 bg-gradient-to-r ${gradientColor}`} />
    </div>
  );
};
