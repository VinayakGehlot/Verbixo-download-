import React from 'react';
import {
  CalendarDays,
  MessageSquareHeart,
  Users2,
  Sparkles,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { ABOUT_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarDays':
        return <CalendarDays className="w-6 h-6 text-[#A28FFF]" />;
      case 'MessageSquareHeart':
        return <MessageSquareHeart className="w-6 h-6 text-[#A28FFF]" />;
      case 'Users2':
        return <Users2 className="w-6 h-6 text-[#A28FFF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#A28FFF]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#A28FFF]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#A28FFF]" />;
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle Purple Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#6C4DFF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C4DFF]/15 border border-[#6C4DFF]/30 text-xs font-semibold uppercase tracking-wider text-[#B8A6FF]">
            <span>About The App</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {ABOUT_INFO.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {ABOUT_INFO.description}
          </p>
        </div>

        {/* 6 Elegant Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ABOUT_INFO.highlights.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-8 bg-[#100E22]/70 backdrop-blur-xl border border-white/10 hover:border-[#6C4DFF]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/40 hover:shadow-[#6C4DFF]/15"
            >
              {/* Inner ambient card glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#6C4DFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-start space-y-4">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#1A1635] border border-[#6C4DFF]/30 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-[#6C4DFF] transition-all duration-300">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight pt-1">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
