import React from 'react';
import { Sparkles, MessageCircle, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { APP_INFO, PLAY_STORE_URL, IOS_APP_URL } from '../data/content';
import { GooglePlayButton } from './GooglePlayButton';
import { AppleAppStoreButton } from './AppleAppStoreButton';
import { useDevice } from '../utils/useDevice';

export const Hero: React.FC = () => {
  const { isIOS, isAndroid } = useDevice();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glow & Mesh Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] sm:h-[600px] bg-gradient-to-b from-[#6C4DFF]/25 via-[#4A32B3]/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-5 w-72 h-72 bg-[#6C4DFF]/15 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#3B2999]/20 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography, App Identity, CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 z-10">
            {/* App Icon + Official App Pill */}
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-lg shadow-black/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <img
                src={APP_INFO.iconUrl}
                alt="VERBIXO Icon"
                className="w-7 h-7 rounded-lg shadow-sm"
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                VERBIXO Official
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C4DFF] animate-pulse" />
              <span className="text-xs font-medium text-[#B8A6FF]">
                Android & iOS
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Speak English With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A68EFF] via-[#8565FF] to-[#6C4DFF] drop-shadow-sm">
                  Confidence.
                </span>
              </h1>

              {/* Supporting Line */}
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 tracking-tight flex items-center justify-center lg:justify-start gap-2">
                <span>Learn.</span>
                <span className="text-[#8E72FF]">•</span>
                <span>Practice.</span>
                <span className="text-[#8E72FF]">•</span>
                <span>Communicate.</span>
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              {APP_INFO.shortDescription}
            </p>

            {/* Dual Smart CTA: Google Play (Android) & iOS / Web (verbixo.in) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
              <div className="relative w-full sm:w-auto">
                {isAndroid && (
                  <span className="absolute -top-2.5 right-4 z-20 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500 text-black shadow-md">
                    Your Device
                  </span>
                )}
                <GooglePlayButton
                  id="hero-direct-top-cta"
                  label="GET IT ON"
                  sublabel="Google Play"
                  variant={isIOS ? 'secondary' : 'primary'}
                  className="w-full sm:w-auto justify-center"
                />
              </div>

              <div className="relative w-full sm:w-auto">
                {isIOS && (
                  <span className="absolute -top-2.5 right-4 z-20 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#A855F7] text-white shadow-md">
                    Your Device
                  </span>
                )}
                <AppleAppStoreButton
                  id="hero-direct-ios-cta"
                  label="OPEN FOR"
                  sublabel="iOS / Web"
                  variant={isIOS ? 'primary' : 'secondary'}
                  className="w-full sm:w-auto justify-center"
                />
              </div>

              <a
                href="#screenshots"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 w-full sm:w-auto"
              >
                <span>Screens</span>
                <ArrowRight className="w-4 h-4 text-[#A28FFF]" />
              </a>
            </div>

            {/* Trust Line */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#6C4DFF] flex-shrink-0" />
              <span>{APP_INFO.trustBadge}</span>
            </div>

            {/* Interactive Feature Highlights Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 w-full max-w-lg">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-lg sm:text-xl font-bold text-white">Daily</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Spoken Sentences</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-lg sm:text-xl font-bold text-white">9+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Real Categories</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-lg sm:text-xl font-bold text-white">Interactive</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Active Practice</div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Premium Smartphone Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Phone Backdrop Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6C4DFF]/40 to-[#A28FFF]/20 rounded-full blur-[70px] -z-10 scale-90" />

            {/* Smartphone Container with 3D Depth */}
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] transition-transform duration-500 hover:scale-[1.02]">
              {/* Outer Phone Frame */}
              <div className="relative rounded-[46px] p-3 bg-gradient-to-b from-[#342D63] via-[#1C1838] to-[#0D0B1C] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(108,77,255,0.35)] border border-white/20">
                {/* Speaker & Camera Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center space-x-2">
                  <div className="w-10 h-1 bg-white/20 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-white/30 rounded-full" />
                </div>

                {/* Phone Screen with Authentic Screenshot 1 */}
                <div className="relative rounded-[36px] overflow-hidden bg-[#0A071E] aspect-[9/18.5] shadow-inner border border-black/40">
                  <img
                    src="/app-assets/screenshot-1.png"
                    alt="VERBIXO App Dashboard Screenshot"
                    className="w-full h-full object-cover select-none"
                    loading="eager"
                  />

                  {/* Subtle Screen Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: Real-Life Practice */}
              <div className="absolute -left-6 sm:-left-10 top-1/4 p-3 sm:p-3.5 rounded-2xl bg-[#121024]/90 backdrop-blur-xl border border-[#6C4DFF]/40 shadow-xl shadow-black/60 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-9 h-9 rounded-xl bg-[#6C4DFF]/20 flex items-center justify-center text-[#A28FFF] border border-[#6C4DFF]/30">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">
                    Real-Life Sentences
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Daily Spoken Practice
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Practice Streak */}
              <div className="absolute -right-4 sm:-right-8 bottom-20 p-3 sm:p-3.5 rounded-2xl bg-[#121024]/90 backdrop-blur-xl border border-[#6C4DFF]/40 shadow-xl shadow-black/60 flex items-center gap-3 animate-bounce [animation-duration:6s] [animation-delay:1s]">
                <div className="w-9 h-9 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">
                    Habit & Streaks
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Stay Consistent Daily
                  </p>
                </div>
              </div>

              {/* Floating Badge 3: Confidence */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 px-4 py-2 rounded-full bg-gradient-to-r from-[#181335] via-[#241A4C] to-[#181335] border border-[#6C4DFF]/50 shadow-lg text-center backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                <Sparkles className="w-4 h-4 text-[#A28FFF]" />
                <span className="text-xs font-semibold text-white">
                  Designed for Practical Speaking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
