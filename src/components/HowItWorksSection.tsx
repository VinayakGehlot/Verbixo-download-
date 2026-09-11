import React from 'react';
import { BookOpen, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { GooglePlayButton } from './GooglePlayButton';
import { AppleAppStoreButton } from './AppleAppStoreButton';

export const HowItWorksSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#A28FFF]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#A28FFF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#A28FFF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#A28FFF]" />;
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#090714] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#6C4DFF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C4DFF]/15 border border-[#6C4DFF]/30 text-xs font-semibold uppercase tracking-wider text-[#B8A6FF]">
            <span>Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How VERBIXO Works
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A simple 3-step cycle designed to turn passive English knowledge into spontaneous, confident communication.
          </p>
        </div>

        {/* 3-Step Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#6C4DFF]/20 via-[#6C4DFF]/60 to-[#6C4DFF]/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="group relative rounded-3xl p-8 bg-[#110E23]/90 backdrop-blur-xl border border-white/10 hover:border-[#6C4DFF]/60 transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/50 hover:shadow-[#6C4DFF]/25 flex flex-col justify-between space-y-6"
              >
                {/* Glow ring */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-b from-[#6C4DFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#1D173A] border border-[#6C4DFF]/40 flex items-center justify-center group-hover:scale-110 group-hover:border-[#6C4DFF] shadow-inner transition-transform duration-300">
                      {getStepIcon(step.icon)}
                    </div>
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#6C4DFF]/40 group-hover:text-[#6C4DFF]/80 transition-colors font-mono">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B8A6FF]">
                      Step {idx + 1}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Main description */}
                  <p className="text-base font-semibold text-slate-100 leading-snug">
                    "{step.description}"
                  </p>

                  {/* Deep details */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pt-1">
                    {step.details}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Phase 0{idx + 1}</span>
                  <ArrowRight className="w-4 h-4 text-[#6C4DFF] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for How It Works */}
        <div id="how-to-play-cta" className="mt-14 sm:mt-18 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-sm text-slate-300">
            Ready to test your first English sentence?
          </span>
          <div className="flex items-center gap-3">
            <GooglePlayButton
              variant="compact"
              label="INSTALL FROM"
              sublabel="Google Play"
            />
            <AppleAppStoreButton
              variant="compact"
              label="OPEN FOR"
              sublabel="iOS / Web"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
