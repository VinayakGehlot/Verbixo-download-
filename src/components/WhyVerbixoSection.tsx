import React from 'react';
import { CheckCircle2, XCircle, Sparkles, MessageSquare, Zap, Target, Repeat } from 'lucide-react';
import { GooglePlayButton } from './GooglePlayButton';
import { AppleAppStoreButton } from './AppleAppStoreButton';

export const WhyVerbixoSection: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Everyday Sentences',
      textbook: 'Abstract grammatical diagrams & rarely used rules',
      verbixo: 'Ready-to-use sentences for actual daily interactions',
      icon: <MessageSquare className="w-5 h-5 text-[#A28FFF]" />,
    },
    {
      feature: 'Communication Focus',
      textbook: 'Passive reading comprehension & multiple-choice tests',
      verbixo: 'Active speaking confidence & situational dialogues',
      icon: <Sparkles className="w-5 h-5 text-[#A28FFF]" />,
    },
    {
      feature: 'Real-Life Contexts',
      textbook: 'Isolated vocabulary lists out of social context',
      verbixo: 'Realistic scenarios: shopping, transit, friends, family',
      icon: <Target className="w-5 h-5 text-[#A28FFF]" />,
    },
    {
      feature: 'Practice Method',
      textbook: 'Rigid memorization that leads to speaking hesitation',
      verbixo: 'Interactive sentence building that feels natural',
      icon: <Zap className="w-5 h-5 text-[#A28FFF]" />,
    },
    {
      feature: 'Habit Consistency',
      textbook: 'Overwhelming chapters that cause quick burnout',
      verbixo: 'Bite-sized daily streaks that keep motivation alive',
      icon: <Repeat className="w-5 h-5 text-[#A28FFF]" />,
    },
  ];

  return (
    <section id="why-verbixo" className="relative py-24 sm:py-32 bg-[#090714] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[400px] bg-[#6C4DFF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C4DFF]/15 border border-[#6C4DFF]/30 text-xs font-semibold uppercase tracking-wider text-[#B8A6FF]">
            <span>The Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Learn Less Like A Textbook.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8A6FF] to-[#6C4DFF]">
              Practice More Like Real Life.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Most people understand English grammar rules, but freeze when trying to speak. VERBIXO is built specifically to bridge that gap.
          </p>
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#110E23]/90 backdrop-blur-xl border border-[#6C4DFF]/25 shadow-2xl shadow-black/60 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-black/40 border-b border-white/10 p-5 sm:p-6 text-sm font-bold uppercase tracking-wider">
            <div className="md:col-span-4 text-slate-400">Core Focus</div>
            <div className="hidden md:block md:col-span-4 text-slate-400">
              Traditional Textbook
            </div>
            <div className="hidden md:block md:col-span-4 text-[#B8A6FF]">
              VERBIXO Method
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/[0.06]">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-white/[0.02] transition-colors"
              >
                {/* Feature Name */}
                <div className="md:col-span-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1D183B] border border-[#6C4DFF]/30 flex items-center justify-center flex-shrink-0">
                    {row.icon}
                  </div>
                  <span className="font-bold text-white text-base">
                    {row.feature}
                  </span>
                </div>

                {/* Textbook Column */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                  <XCircle className="w-4 h-4 text-rose-400/80 flex-shrink-0 mt-0.5" />
                  <span>{row.textbook}</span>
                </div>

                {/* VERBIXO Column */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 font-semibold bg-[#6C4DFF]/10 p-3 rounded-xl border border-[#6C4DFF]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#8E72FF] flex-shrink-0 mt-0.5" />
                  <span>{row.verbixo}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card Summary */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#171331] via-[#1F1943] to-[#171331] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">
                Start speaking naturally without fear.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Install VERBIXO for Android or open on iOS / Web to test your first conversation today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <GooglePlayButton
                variant="compact"
                label="GET THE APP"
                sublabel="Google Play"
              />
              <AppleAppStoreButton
                variant="compact"
                label="OPEN ON"
                sublabel="iOS / Web"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
