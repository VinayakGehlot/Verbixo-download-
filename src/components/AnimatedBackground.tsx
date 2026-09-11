import React from 'react';

/**
 * AnimatedBackground Component
 * High-performance ambient blur system featuring multiple floating,
 * soft-edged gradient blobs that drift slowly across the canvas behind the main content.
 * Built with GPU-accelerated CSS transform3d transitions, non-linear easing,
 * and varying opacities for a futuristic, deep-space luxury atmosphere.
 */
export const AnimatedBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none -z-20 select-none"
    >
      {/* Deep Obsidian Black Base */}
      <div className="absolute inset-0 bg-[#040408]" />

      {/* Floating Ambient Mesh Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1: Deep Royal Amethyst / Primary Violet Glow - Top Left / Center */}
        <div
          className="absolute -top-[12%] -left-[5%] w-[620px] sm:w-[900px] h-[620px] sm:h-[900px] rounded-full blur-[130px] sm:blur-[170px] animate-blob-1"
          style={{
            background:
              'radial-gradient(circle at 45% 45%, rgba(124, 58, 237, 0.75) 0%, rgba(108, 77, 255, 0.5) 45%, rgba(99, 102, 241, 0.2) 70%, transparent 100%)',
          }}
        />

        {/* Blob 2: Radiant Electric Orchid / Fuchsia Glow - Upper Right */}
        <div
          className="absolute top-[18%] -right-[12%] w-[580px] sm:w-[850px] h-[580px] sm:h-[850px] rounded-full blur-[140px] sm:blur-[180px] animate-blob-2"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.65) 0%, rgba(147, 51, 234, 0.45) 40%, rgba(108, 77, 255, 0.18) 70%, transparent 100%)',
          }}
        />

        {/* Blob 3: Deep Cyber Indigo / Oceanic Violet Glow - Bottom Left */}
        <div
          className="absolute -bottom-[15%] left-[5%] w-[540px] sm:w-[820px] h-[540px] sm:h-[820px] rounded-full blur-[120px] sm:blur-[160px] animate-blob-3"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.6) 0%, rgba(79, 70, 229, 0.4) 45%, rgba(124, 58, 237, 0.15) 75%, transparent 100%)',
          }}
        />

        {/* Blob 4: Luminous Amethyst Core Highlighter - Mid Screen Center */}
        <div
          className="absolute top-[48%] left-[28%] w-[460px] sm:w-[720px] h-[460px] sm:h-[720px] rounded-full blur-[110px] sm:blur-[150px] animate-blob-4"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.5) 0%, rgba(124, 58, 237, 0.3) 45%, transparent 75%)',
          }}
        />

        {/* Blob 5: Twilight Nebula Glow - Lower Right Horizon */}
        <div
          className="absolute top-[68%] -right-[8%] w-[500px] sm:w-[760px] h-[500px] sm:h-[760px] rounded-full blur-[130px] sm:blur-[170px] animate-blob-5"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.55) 0%, rgba(91, 33, 182, 0.35) 50%, transparent 80%)',
          }}
        />

        {/* Blob 6: Deep Cosmic Purple Accent - Upper Center Header Backdrop */}
        <div
          className="absolute top-[2%] left-[42%] w-[420px] sm:w-[650px] h-[420px] sm:h-[650px] rounded-full blur-[120px] sm:blur-[150px] animate-blob-6"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(108, 77, 255, 0.45) 0%, rgba(67, 56, 202, 0.25) 50%, transparent 75%)',
          }}
        />
      </div>

      {/* Subtle Micro-Grid Texture for high-tech dimension */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,#000_60%,transparent_100%)] opacity-50" />

      {/* Smooth Center-Focused Radial Vignette for ultimate readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,4,8,0.4)_65%,rgba(4,4,8,0.85)_100%)]" />
    </div>
  );
};
