"use client";

import React from 'react';
import { 
  ShieldCheck, 
  GraduationCap, 
  Globe2, 
  Medal, 
  LineChart, 
  ChevronRight,
  Zap
} from 'lucide-react';

const BRAND_TEAL = "#008d96";

const LearningAdvantage = () => {
  const advantages = [
    {
      icon: GraduationCap,
      title: "Structured Curriculum",
      desc: "A logical, step-by-step path from absolute beginner to advanced mastery.",
      color: "#008d96"
    },
    {
      icon: ShieldCheck,
      title: "10+ Years Expertise",
      desc: "Learn from veteran coaches with over a decade of professional training experience.",
      color: "#0ea5e9"
    },
    {
      icon: Globe2,
      title: "Global Exposure",
      desc: "Join a diverse community of students connecting from over 50+ countries.",
      color: "#6366f1"
    },
    {
      icon: Medal,
      title: "Tournament Success",
      desc: "Proven strategies for winning in both online arenas and offline rated events.",
      color: "#a855f7"
    },
    {
      icon: LineChart,
      title: "Precision Tracking",
      desc: "Personalized attention with detailed performance analytics and progress reports.",
      color: "#f59e0b"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* --- Left Side: Header --- */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
               <Zap size={18} fill={BRAND_TEAL} className="text-[#008d96]" />
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-xs">The D’Square Edge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 leading-[1.1] mb-6">
              OUR LEARNING <br />
              <span style={{ color: BRAND_TEAL }}>ADVANTAGE.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
              We don’t just teach moves; we build the mindset. Our academy combines 
              global reach with personalized precision to ensure every student excels.
            </p>
            
            <button 
              className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-black uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-xl"
              style={{ backgroundColor: BRAND_TEAL, boxShadow: `0 20px 40px -10px ${BRAND_TEAL}40` }}
            >
              Explore Curriculum
              <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>

          {/* --- Right Side: Advantage Tiles --- */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((adv, idx) => (
              <div 
                key={idx} 
                className={`group p-8 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 ${idx === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12"
                    style={{ backgroundColor: `${adv.color}10`, color: adv.color }}
                  >
                    <adv.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#008d96] transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#008d96]/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default LearningAdvantage;