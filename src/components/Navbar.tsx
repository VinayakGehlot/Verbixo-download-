import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { APP_INFO, PLAY_STORE_URL, IOS_APP_URL } from '../data/content';
import { GooglePlayButton } from './GooglePlayButton';
import { AppleAppStoreButton } from './AppleAppStoreButton';
import { useDevice } from '../utils/useDevice';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isIOS } = useDevice();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Categories', href: '#categories' },
    { label: 'Why VERBIXO', href: '#why-verbixo' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07070d]/85 backdrop-blur-xl border-b border-[#6C4DFF]/20 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Link */}
        <a
          id="brand-logo-link"
          href="#hero"
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#6C4DFF] to-[#A28FFF] shadow-md shadow-[#6C4DFF]/30 transition-transform duration-300 group-hover:scale-105">
              <img
                src={APP_INFO.iconUrl}
                alt="VERBIXO App Icon"
                className="w-full h-full object-cover rounded-[10px]"
                loading="eager"
              />
            </div>
            <span className="absolute -inset-1 rounded-xl bg-[#6C4DFF] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
                VERBIXO
              </span>
              <span className="hidden xs:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-[#6C4DFF]/20 text-[#A28FFF] border border-[#6C4DFF]/30">
                English
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-400 -mt-0.5 hidden sm:block">
              Spoken English App
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-[#121020]/70 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Google Play + iOS CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {isIOS ? (
            <AppleAppStoreButton
              id="top-direct-ios-cta"
              variant="compact"
              label="GET FOR"
              sublabel="iOS / Web"
              className="hidden sm:inline-flex"
            />
          ) : (
            <GooglePlayButton
              id="top-direct-playstore-cta"
              variant="compact"
              className="hidden sm:inline-flex"
            />
          )}

          {/* Secondary platform icon button for desktop */}
          <div className="hidden md:flex items-center gap-1.5 pl-1">
            <a
              href={isIOS ? PLAY_STORE_URL : IOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all"
              title={isIOS ? 'Android version on Google Play' : 'iOS version on verbixo.in'}
            >
              {isIOS ? 'Android' : 'iOS Web'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0815]/95 backdrop-blur-2xl border-b border-[#6C4DFF]/25 px-5 pt-4 pb-6 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
              <a
                id="mobile-menu-playstore-btn"
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-gradient-to-r from-[#6C4DFF] to-[#8E72FF] text-white font-semibold text-sm shadow-lg shadow-[#6C4DFF]/30"
              >
                <span>Google Play (Android)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                id="mobile-menu-ios-btn"
                href={IOS_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-[#1D173A] border border-[#6C4DFF]/50 text-white font-semibold text-sm shadow-md"
              >
                <span>iOS / Web (verbixo.in)</span>
                <ArrowUpRight className="w-4 h-4 text-[#A28FFF]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
