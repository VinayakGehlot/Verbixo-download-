import React, { useState } from 'react';
import {
  HandMetal,
  Home,
  GraduationCap,
  Smile,
  ShoppingBag,
  Plane,
  Coffee,
  HelpCircle,
  Mic,
  Sparkles,
  Volume2,
  CheckCircle2,
} from 'lucide-react';
import { CATEGORIES } from '../data/content';
import { GooglePlayButton } from './GooglePlayButton';

export const CategoriesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const activeCategory =
    CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];

  const getCategoryIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'HandMetal':
        return <HandMetal className={className} />;
      case 'Home':
        return <Home className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Smile':
        return <Smile className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Plane':
        return <Plane className={className} />;
      case 'Coffee':
        return <Coffee className={className} />;
      case 'HelpCircle':
        return <HelpCircle className={className} />;
      case 'Mic':
        return <Mic className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const handleSimulateListen = (idx: number) => {
    setCopiedIndex(idx);
    // Simple speech synthesis if supported in browser
    if ('speechSynthesis' in window) {
      try {
        const utterance = new SpeechSynthesisUtterance(
          activeCategory.samplePhrases[idx].en
        );
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      } catch {
        // Safe fallback
      }
    }
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2500);
  };

  return (
    <section id="categories" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#6C4DFF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C4DFF]/15 border border-[#6C4DFF]/30 text-xs font-semibold uppercase tracking-wider text-[#B8A6FF]">
            <span>Situational Learning</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Real-Life English Categories
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Select a category to explore authentic sentence patterns and dialogues you will practice inside VERBIXO.
          </p>
        </div>

        {/* Category Pills Horizontal Flow */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-12">
          {CATEGORIES.map((category) => {
            const isSelected = category.id === selectedCategory;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#6C4DFF] to-[#8E72FF] text-white shadow-lg shadow-[#6C4DFF]/35 scale-105 border border-[#A28FFF]/40'
                    : 'bg-[#120F24]/80 text-slate-300 hover:text-white border border-white/10 hover:border-[#6C4DFF]/40 hover:bg-[#1A1633]'
                }`}
              >
                <span
                  className={`transition-colors duration-200 ${
                    isSelected ? 'text-white' : 'text-[#A28FFF] group-hover:text-white'
                  }`}
                >
                  {getCategoryIcon(category.icon, 'w-4 h-4')}
                </span>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Showcase Glass Card */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-[#120E26]/90 backdrop-blur-2xl border border-[#6C4DFF]/30 shadow-2xl shadow-black/60 relative overflow-hidden">
          {/* Top subtle glow bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C4DFF] via-[#A28FFF] to-[#6C4DFF]" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#6C4DFF]/20 border border-[#6C4DFF]/40 flex items-center justify-center text-[#B8A6FF] shadow-inner">
                {getCategoryIcon(activeCategory.icon, 'w-6 h-6')}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeCategory.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#B8A6FF] bg-[#6C4DFF]/15 px-3 py-1.5 rounded-full self-start sm:self-auto border border-[#6C4DFF]/25">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sample Practice Phrases</span>
            </div>
          </div>

          {/* Practice Phrases List */}
          <div className="mt-6 space-y-4">
            {activeCategory.samplePhrases.map((phrase, idx) => (
              <div
                key={idx}
                className="group p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-[#6C4DFF]/40 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white tracking-wide">
                    {phrase.en}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6C4DFF]" />
                    <span>{phrase.context}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleSimulateListen(idx)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#6C4DFF]/20 border border-white/10 hover:border-[#6C4DFF]/40 text-xs font-medium text-slate-300 hover:text-white transition-all self-start sm:self-auto flex-shrink-0"
                  title="Listen pronunciation"
                >
                  {copiedIndex === idx ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-green-300">Playing</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-[#A28FFF]" />
                      <span>Listen</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Card CTA note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Hundreds of daily sentences and conversational scenarios available in VERBIXO.
            </p>
            <GooglePlayButton
              variant="compact"
              label="Practice on"
              sublabel="Google Play"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
