import React from 'react';
import { PLAY_STORE_URL } from '../data/content';

interface GooglePlayButtonProps {
  label?: string;
  sublabel?: string;
  variant?: 'primary' | 'secondary' | 'compact';
  className?: string;
  id?: string;
}

export const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({
  label = 'GET IT ON',
  sublabel = 'Google Play',
  variant = 'primary',
  className = '',
  id,
}) => {
  const isCompact = variant === 'compact';
  const isPrimary = variant === 'primary';

  return (
    <a
      id={id || 'google-play-download-cta'}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-3 rounded-2xl transition-all duration-300 active:scale-[0.98] ${
        isPrimary
          ? 'bg-gradient-to-r from-[#6C4DFF] via-[#7B5CFF] to-[#8E72FF] text-white px-7 py-4 shadow-lg shadow-[#6C4DFF]/30 hover:shadow-[#6C4DFF]/50 hover:brightness-110'
          : isCompact
          ? 'bg-white/10 hover:bg-white/15 border border-white/15 text-white px-4 py-2 text-sm backdrop-blur-md hover:border-[#6C4DFF]/50'
          : 'bg-[#151329] hover:bg-[#1E1B3A] border border-[#6C4DFF]/40 text-white px-6 py-3.5 shadow-md shadow-black/40 hover:border-[#6C4DFF]'
      } ${className}`}
    >
      {/* Background glow sheen */}
      <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#6C4DFF] to-[#A28FFF] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-40" />

      {/* Official Play Store Triangle Icon */}
      <svg
        className={`relative z-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          isCompact ? 'w-5 h-5' : 'w-7 h-7'
        }`}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.6 30.7C57.4 36.1 54.3 44.5 54.3 55.4V456.6C54.3 467.5 57.4 475.9 62.6 481.3L65.2 483.7L304.5 244.4V237.6L65.2 28.3L62.6 30.7Z"
          fill="url(#play_blue)"
        />
        <path
          d="M384.3 324.2L304.5 244.4V237.6L384.3 157.8L386.4 159L480.9 212.7C507.9 228 507.9 254 480.9 269.3L386.4 323L384.3 324.2Z"
          fill="url(#play_yellow)"
        />
        <path
          d="M386.4 323L304.5 241L62.6 482.9C71.5 492.3 86.4 493.4 103.3 483.8L386.4 323"
          fill="url(#play_red)"
        />
        <path
          d="M386.4 159L103.3 98.2C86.4 88.6 71.5 89.7 62.6 99.1L304.5 341L386.4 159Z"
          fill="url(#play_green)"
        />
        <defs>
          <linearGradient
            id="play_blue"
            x1="281.8"
            y1="47.1"
            x2="28.9"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C0FD" />
            <stop offset="1" stopColor="#0061FF" />
          </linearGradient>
          <linearGradient
            id="play_yellow"
            x1="514.8"
            y1="256"
            x2="301.9"
            y2="256"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE000" />
            <stop offset="0.4" stopColor="#FFBD00" />
            <stop offset="0.8" stopColor="#FFA500" />
            <stop offset="1" stopColor="#FF8C00" />
          </linearGradient>
          <linearGradient
            id="play_red"
            x1="324.9"
            y1="261.4"
            x2="85.7"
            y2="500.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient
            id="play_green"
            x1="85.7"
            y1="11.4"
            x2="229.4"
            y2="155.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#32A071" />
            <stop offset="0.07" stopColor="#2DA771" />
            <stop offset="0.48" stopColor="#15CF74" />
            <stop offset="0.8" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
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
