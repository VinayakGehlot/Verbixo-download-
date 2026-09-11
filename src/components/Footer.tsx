import React, { useState } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { APP_INFO } from '../data/content';
import { GooglePlayButton } from './GooglePlayButton';
import { AppleAppStoreButton } from './AppleAppStoreButton';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Categories', href: '#categories' },
    { label: 'Why VERBIXO', href: '#why-verbixo' },
    { label: 'Download', href: '#download' },
  ];

  return (
    <footer id="footer" className="relative bg-[#05050A] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top purple line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6C4DFF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08] items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#6C4DFF] to-[#A28FFF]">
                <img
                  src={APP_INFO.iconUrl}
                  alt="VERBIXO App Icon"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wider">
                  VERBIXO
                </span>
                <span className="block text-xs font-semibold text-[#A28FFF]">
                  English Learning
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Practical English speaking and communication skills with daily-use sentences and real-life conversations.
            </p>

            <div className="text-xs font-semibold text-slate-300">
              Available on Android & iOS Web
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Legal Column */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-white text-left md:text-right">
              Get VERBIXO
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 items-start md:items-end">
              <GooglePlayButton
                id="footer-playstore-cta"
                variant="compact"
                label="FREE ON"
                sublabel="Google Play"
              />
              <AppleAppStoreButton
                id="footer-ios-cta"
                variant="compact"
                label="OPEN ON"
                sublabel="iOS / Web"
              />
            </div>

            <button
              id="privacy-policy-link"
              onClick={() => setPrivacyOpen(true)}
              className="text-xs text-slate-400 hover:text-[#B8A6FF] transition-colors underline underline-offset-4 cursor-pointer pt-1"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} VERBIXO. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </footer>
  );
};
