import React from 'react';
import { X, ShieldCheck, ExternalLink, Lock } from 'lucide-react';
import { APP_INFO, PLAY_STORE_URL } from '../data/content';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="privacy-policy-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#110E23] border border-[#6C4DFF]/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 space-y-6 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6C4DFF]/20 border border-[#6C4DFF]/40 flex items-center justify-center text-[#B8A6FF]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Privacy & Safety</h3>
              <p className="text-xs text-slate-400">
                {APP_INFO.name} • Official Privacy Policy
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Lock className="w-4 h-4 text-[#8E72FF]" />
              <span>Developer Privacy Commitment</span>
            </div>
            <p className="text-xs text-slate-300">
              VERBIXO is committed to providing an educational experience focused on language acquisition. The app adheres to Google Play developer policies and guidelines for data handling and user privacy.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-base mb-1">
              Data Collection & Usage
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              VERBIXO operates as a client-side learning companion. Educational activities, local practice streaks, and sentence repetition records are processed to enhance your learning habit and display your personal progress.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-base mb-1">
              Google Play Data Safety
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              You can review the full, official Data Safety disclosures directly on the official Google Play store listing page for VERBIXO.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              id="privacy-modal-playstore-link"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#6C4DFF] hover:bg-[#7D60FF] text-white text-xs font-semibold shadow-md transition-all"
            >
              <span>View On Google Play</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs font-semibold transition-all"
            >
              <span>Google Privacy Standards</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
