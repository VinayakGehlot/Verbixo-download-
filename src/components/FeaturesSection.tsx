import React from 'react';
import {
  BookOpenCheck,
  Volume2,
  Compass,
  Award,
  Target,
  Flame,
  Check,
} from 'lucide-react';
import { FEATURES } from '../data/content';

export const FeaturesSection: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-[#A28FFF]" />;
      case 'Volume2':
        return <Volume2 className="w-6 h-6 text-[#A28FFF]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#A28FFF]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#A28FFF]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#A28FFF]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-400" />;
      default:
        return <BookOpenCheck className="w-6 h-6 text-[#A28FFF]" />;
    }
  };

  return (
    <section id="features" className="relative py-24 sm:py-32 bg-[#090714] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6C4DFF]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#4A32B3]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C4DFF]/15 border border-[#6C4DFF]/30 text-xs font-semibold uppercase tracking-wider text-[#B8A6FF]">
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need To Practice English
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Designed from the ground up for practical real-world usage, natural sentence fluency, and persistent daily motivation.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative rounded-3xl p-8 bg-[#120F24]/80 backdrop-blur-xl border border-white/10 hover:border-[#6C4DFF]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/50 hover:shadow-[#6C4DFF]/20 flex flex-col justify-between"
            >
              {/* Subtle top edge gradient */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#6C4DFF]/40 to-transparent" />

              <div className="space-y-5">
                {/* Badge & Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#1D183A] border border-[#6C4DFF]/30 flex items-center justify-center group-hover:scale-105 group-hover:border-[#6C4DFF] transition-all duration-300">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400/80 font-mono">
                    0{idx + 1}
                  </span>
                </div>

                {/* Feature Title */}
                <div>
                  <div className="inline-block mb-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#6C4DFF]/15 text-[#B8A6FF] border border-[#6C4DFF]/20">
                    {feature.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {feature.title}
                  </h3>
                </div>

                {/* Feature Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Verified Quality Checkmark line */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-medium text-slate-400">
                <Check className="w-3.5 h-3.5 text-[#6C4DFF]" />
                <span>Authentic VERBIXO Method</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
