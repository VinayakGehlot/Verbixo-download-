import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { APP_INFO } from '../data/content';
import { GooglePlayButton } from './GooglePlayButton';
import { AppleAppStoreButton } from './AppleAppStoreButton';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="download"
      className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center text-center"
    >
      {/* Background Cinematic Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0C24] to-[#07070D] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-r from-[#6C4DFF]/30 via-[#8E72FF]/20 to-[#6C4DFF]/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Decorative Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* App Icon Centered */}
        <div className="inline-block relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-[#6C4DFF] to-[#A28FFF] shadow-2xl shadow-[#6C4DFF]/50 mx-auto transition-transform duration-300 hover:scale-105">
            <img
              src={APP_INFO.iconUrl}
              alt="VERBIXO App Logo"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <span className="absolute -inset-2 rounded-3xl bg-[#6C4DFF] opacity-30 blur-lg -z-10" />
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Your English Practice Starts Today.
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 tracking-tight">
            Learn practical English. Practice every day. Communicate with confidence.
          </p>
        </div>

        {/* Large Dual Platform CTA Buttons */}
        <div className="pt-2 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <GooglePlayButton
              id="final-cta-playstore-btn"
              label="GET IT ON"
              sublabel="Google Play"
              variant="primary"
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-2xl shadow-[#6C4DFF]/40 hover:shadow-[#6C4DFF]/70 w-full sm:w-auto justify-center"
            />
            <AppleAppStoreButton
              id="final-cta-ios-btn"
              label="OPEN FOR"
              sublabel="iOS / Web"
              variant="secondary"
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-2xl shadow-[#6C4DFF]/20 hover:shadow-[#6C4DFF]/50 w-full sm:w-auto justify-center"
            />
          </div>

          {/* Trust points */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#8E72FF]" />
              <span>Available for Android & iOS</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#8E72FF]" />
              <span>Instant Everyday Practice</span>
            </div>
          </div>
        </div>

        {/* App Info below */}
        <div className="pt-6 border-t border-white/10 max-w-md mx-auto space-y-1">
          <div className="text-base font-bold text-white tracking-wide">
            {APP_INFO.name}
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B8A6FF]">
            Spoken English & Real-Life Communication
          </div>
        </div>
      </div>
    </section>
  );
};
