import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScreenshotsSection } from './components/ScreenshotsSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CategoriesSection } from './components/CategoriesSection';
import { WhyVerbixoSection } from './components/WhyVerbixoSection';
import { TargetUsersSection } from './components/TargetUsersSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { PLAY_STORE_URL, IOS_APP_URL } from './data/content';
import { useDevice } from './utils/useDevice';

export default function App() {
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const { isIOS, isAndroid } = useDevice();

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileTargetUrl = isIOS ? IOS_APP_URL : PLAY_STORE_URL;
  const mobileLabel = isIOS ? 'Open on iOS' : 'Get on Google Play';

  return (
    <div className="min-h-screen bg-[#07070d] text-slate-100 selection:bg-[#6C4DFF] selection:text-white relative font-sans overflow-x-hidden">
      {/* High-Performance Ambient Blur System */}
      <AnimatedBackground />

      {/* Top Sticky Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. App Screenshots Showcase (Moved UP as requested) */}
        <ScreenshotsSection />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Features Section */}
        <FeaturesSection />

        {/* 5. How VERBIXO Works Section */}
        <HowItWorksSection />

        {/* 6. Learning Categories Section (Daily Spoken Sentences) */}
        <CategoriesSection />

        {/* 7. Why VERBIXO Section */}
        <WhyVerbixoSection />

        {/* 8. Target Users Section */}
        <TargetUsersSection />

        {/* 9. Final Cinematic CTA Section */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick-Install Bar with Smart Platform Detection */}
      <div
        className={`fixed bottom-4 left-3 right-3 z-40 sm:hidden transition-all duration-300 ${
          showFloatingCta
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#0e0c1f]/95 backdrop-blur-xl border border-[#6C4DFF]/40 shadow-2xl shadow-black/80">
          <a
            id="mobile-floating-primary-cta"
            href={mobileTargetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#6C4DFF] to-[#8E72FF] text-white shadow-md active:scale-95 transition-all"
          >
            <div className="flex items-center gap-2.5">
              <img
                src="/app-assets/icon.png"
                alt="VERBIXO"
                className="w-7 h-7 rounded-lg shadow-sm"
              />
              <div className="text-left">
                <span className="block text-xs font-bold leading-tight">
                  VERBIXO
                </span>
                <span className="block text-[10px] text-white/80 leading-tight">
                  {mobileLabel}
                </span>
              </div>
            </div>

            <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-sm">
              Get App
            </span>
          </a>

          {/* Direct secondary button if user wants the other platform */}
          <a
            href={isIOS ? PLAY_STORE_URL : IOS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold whitespace-nowrap active:scale-95 transition-all"
            title={isIOS ? 'Android version' : 'iOS version'}
          >
            {isIOS ? 'Android' : 'iOS Web'}
          </a>
        </div>
      </div>
    </div>
  );
}

