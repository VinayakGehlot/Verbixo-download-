import React from 'react';
import { IOS_APP_URL } from '../data/content';

interface AppleAppStoreButtonProps {
  label?: string;
  sublabel?: string;
  variant?: 'primary' | 'secondary' | 'compact';
  className?: string;
  id?: string;
}

export const AppleAppStoreButton: React.FC<AppleAppStoreButtonProps> = ({
  label = 'AVAILABLE FOR',
  sublabel = 'iOS / Web',
  variant = 'secondary',
  className = '',
  id,
}) => {
  const isCompact = variant === 'compact';
  const isPrimary = variant === 'primary';

  return (
    <a
      id={id || 'ios-app-download-cta'}
      href={IOS_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-3 rounded-2xl transition-all duration-300 active:scale-[0.98] ${
        isPrimary
          ? 'bg-gradient-to-r from-[#2A2353] via-[#3D337A] to-[#2A2353] border border-[#6C4DFF]/60 text-white px-7 py-4 shadow-lg shadow-[#6C4DFF]/30 hover:border-[#8E72FF] hover:shadow-[#6C4DFF]/50'
          : isCompact
          ? 'bg-white/10 hover:bg-white/15 border border-white/15 text-white px-4 py-2 text-sm backdrop-blur-md hover:border-[#6C4DFF]/50'
          : 'bg-[#120F24]/90 hover:bg-[#1C1838] border border-white/20 text-white px-6 py-3.5 shadow-md shadow-black/40 hover:border-[#6C4DFF]/70'
      } ${className}`}
    >
      {/* Background glow sheen */}
      <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#8E72FF] to-[#6C4DFF] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-40" />

      {/* Official Apple Logo SVG */}
      <svg
        className={`relative z-10 flex-shrink-0 fill-current text-white transition-transform duration-300 group-hover:scale-105 ${
          isCompact ? 'w-5 h-5' : 'w-7 h-7'
        }`}
        viewBox="0 0 170 170"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.7-11.71-13.97-6.19-9.5-11.07-20.2-14.64-32.1-3.57-11.9-5.36-23.3-5.36-34.2 0-14.54 3.75-26.68 11.24-36.42 7.49-9.74 16.92-14.71 28.3-14.92 5.09 0 10.74 1.34 16.95 4.02 6.2 2.68 10.15 4.07 11.83 4.17 1.34-.1 5.48-1.57 12.43-4.41 6.94-2.83 12.82-4.06 17.63-3.68 13.06.66 23.38 5.45 30.96 14.38-11.45 6.9-17.06 16.42-16.82 28.57.25 9.47 3.86 17.38 10.84 23.73 7 6.35 15.22 10.02 24.66 11.01-2.12 6.64-4.82 13.12-8.08 19.46zM119.22 31.84c0-7.39 2.68-14.28 8.04-20.67 5.37-6.39 11.96-10.45 19.78-12.17.47 1.8.71 3.51.71 5.13 0 7.39-2.73 14.33-8.2 20.82-5.46 6.5-12.21 10.45-20.25 11.85-.14-1.57-.22-3.21-.22-4.96z" />
      </svg>

      <div className="relative z-10 text-left flex flex-col justify-center leading-none">
        <span
          className={`font-semibold tracking-wider uppercase text-slate-300 ${
            isCompact ? 'text-[10px]' : 'text-[11px]'
          }`}
        >
          {label}
        </span>
        <span
          className={`font-bold tracking-tight text-white mt-0.5 ${
            isCompact ? 'text-sm' : 'text-base sm:text-lg'
          }`}
        >
          {sublabel}
        </span>
      </div>
    </a>
  );
};
