import React from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Users,
  Mic,
  ArrowUpRight,
} from 'lucide-react';
import { TARGET_USERS } from '../data/content';

export const TargetUsersSection: React.FC = () => {
  const getUserIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#A28FFF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#A28FFF]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#A28FFF]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#A28FFF]" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-[#A28FFF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#A28FFF]" />;
    }
  };

  return (
    <section id="target-users" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#6C4DFF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C4DFF]/15 border border-[#6C4DFF]/30 text-xs font-semibold uppercase tracking-wider text-[#B8A6FF]">
            <span>Audience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Made For Everyday English Learners
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you are beginning your learning journey or building confidence for upcoming conversations, VERBIXO adapts to your real-life pace.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TARGET_USERS.map((user, idx) => (
            <div
              key={user.id}
              className={`group relative rounded-3xl p-8 bg-[#110E24]/80 backdrop-blur-xl border border-white/10 hover:border-[#6C4DFF]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/50 hover:shadow-[#6C4DFF]/20 flex flex-col justify-between ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Inner ambient card gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#6C4DFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1738] border border-[#6C4DFF]/30 flex items-center justify-center group-hover:scale-105 group-hover:border-[#6C4DFF] transition-transform duration-300">
                    {getUserIcon(user.icon)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#B8A6FF] bg-[#6C4DFF]/15 px-3 py-1 rounded-full border border-[#6C4DFF]/20">
                    {user.suitableFor}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight pt-1">
                  {user.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {user.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-slate-400">
                <span>Targeted Learning Path</span>
                <ArrowUpRight className="w-4 h-4 text-[#A28FFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
