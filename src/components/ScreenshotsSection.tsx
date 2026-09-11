import React, { useState, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
} from 'lucide-react';
import { SCREENSHOTS } from '../data/content';
import { GooglePlayButton } from './GooglePlayButton';
import { AppleAppStoreButton } from './AppleAppStoreButton';

export const ScreenshotsSection: React.FC = () => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex(
        activeModalIndex === 0 ? SCREENSHOTS.length - 1 : activeModalIndex - 1
      );
    }
  };

  const handleNextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex(
        activeModalIndex === SCREENSHOTS.length - 1 ? 0 : activeModalIndex + 1
      );
    }
  };

  return (
    <section id="screenshots" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#6C4DFF]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C4DFF]/15 border border-[#6C4DFF]/30 text-xs font-semibold uppercase tracking-wider text-[#B8A6FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#A28FFF]" />
              <span>Real App Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Inside VERBIXO
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore authentic screens from the Google Play listing. Clean, distraction-free interface built for focused learning.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-2xl bg-[#141126] border border-white/10 hover:border-[#6C4DFF]/50 text-slate-300 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-2xl bg-[#141126] border border-white/10 hover:border-[#6C4DFF]/50 text-slate-300 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Screenshot Showcase in Modern Smartphone Mockup Frames */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-4 px-2 no-scrollbar snap-x snap-mandatory"
        >
          {SCREENSHOTS.map((screen, index) => (
            <div
              key={screen.id}
              className="flex-shrink-0 w-[270px] sm:w-[300px] snap-center group cursor-pointer"
              onClick={() => setActiveModalIndex(index)}
            >
              {/* Smartphone Frame */}
              <div className="relative rounded-[40px] p-2.5 bg-gradient-to-b from-[#2B2352] via-[#16132D] to-[#0A0817] border border-white/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_35px_rgba(108,77,255,0.25)] transition-all duration-300 group-hover:scale-[1.03] group-hover:border-[#6C4DFF]/70 group-hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9),0_0_50px_rgba(108,77,255,0.4)]">
                {/* Camera / Speaker pill */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-white/20 rounded-full" />
                </div>

                {/* Screenshot Screen Container */}
                <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/18.5]">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="px-3.5 py-2 rounded-xl bg-[#6C4DFF]/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Fullscreen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Subtitle below mockup */}
              <div className="mt-4 text-center px-2">
                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#B8A6FF] transition-colors">
                  {screen.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {screen.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for screenshots */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-slate-300">
            Enjoy the full experience with smooth animations and instant audio.
          </p>
          <div className="flex items-center gap-3">
            <GooglePlayButton
              variant="compact"
              label="GET APP ON"
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

      {/* Fullscreen Lightbox Modal */}
      {activeModalIndex !== null && (
        <div
          id="screenshot-modal-overlay"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveModalIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50 cursor-pointer"
            aria-label="Close screenshot modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrevModal}
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-[#6C4DFF] text-white transition-all z-50 cursor-pointer"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNextModal}
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-[#6C4DFF] text-white transition-all z-50 cursor-pointer"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Phone Mockup inside Modal */}
            <div className="relative rounded-[44px] p-2.5 bg-gradient-to-b from-[#3E3472] via-[#1D183B] to-[#0A0817] border border-white/20 shadow-2xl shadow-[#6C4DFF]/30">
              <div className="relative rounded-[36px] overflow-hidden bg-black aspect-[9/18.5] max-h-[72vh]">
                <img
                  src={SCREENSHOTS[activeModalIndex].src}
                  alt={SCREENSHOTS[activeModalIndex].alt}
                  className="w-full h-full object-contain select-none"
                />
              </div>
            </div>

            {/* Captions & CTA */}
            <div className="mt-4 text-center space-y-2">
              <h3 className="text-xl font-bold text-white">
                {SCREENSHOTS[activeModalIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {SCREENSHOTS[activeModalIndex].subtitle}
              </p>

              <div className="pt-2 flex items-center justify-center gap-2.5 flex-wrap">
                <GooglePlayButton
                  id="modal-playstore-cta"
                  variant="compact"
                  label="DOWNLOAD ON"
                  sublabel="Google Play"
                />
                <AppleAppStoreButton
                  id="modal-ios-cta"
                  variant="compact"
                  label="OPEN FOR"
                  sublabel="iOS / Web"
                />
              </div>

              {/* Indicator dots */}
              <div className="flex items-center justify-center gap-1.5 pt-2">
                {SCREENSHOTS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveModalIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all ${
                      dotIdx === activeModalIndex
                        ? 'w-6 bg-[#6C4DFF]'
                        : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to screenshot ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
