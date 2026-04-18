"use client";

import React from 'react';
import { ChevronRight, Home, ListChecks, Target } from 'lucide-react';

const CurriculumHero: React.FC = () => {
  const brandTeal = "#008d96";

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row items-center">
      
      {/* --- IMAGE SIDE: order-1 on mobile (appears first) --- */}
      <div className="relative w-full md:w-1/2 h-[45vh] md:h-screen flex items-center justify-center order-1 bg-white pt-0 md:pt-0">
        {/* The Main Illustration/Image */}
        <div className="relative z-10 w-full h-full flex items-end justify-center px-4 md:-translate-y-45 transition-transform duration-700">
          <img 
            src="/hero-1.png" 
            alt="D'Square Chess Curriculum" 
            className="max-w-full h-auto max-h-full object-contain rounded-2xl"
          />
        </div>
      </div>

      {/* --- TEXT SIDE: order-2 on mobile (appears second) --- */}
      <div className="relative w-full md:w-1/2 flex items-center bg-white order-2 px-6 md:px-12 lg:px-20 py-12 md:py-0">
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(${brandTeal} 1.2px, transparent 1.2px)`, backgroundSize: '35px 35px' }}>
        </div>

        <div className="relative z-30 w-full max-w-xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6 md:mb-10">
            <a href="/" className="hover:text-[#008d96] flex items-center gap-1.5 transition-colors group">
              <Home size={12} className="group-hover:-translate-y-0.5 transition-transform" /> HOME
            </a>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandTeal }}></span>
            <span style={{ color: brandTeal }}>CURRICULUM</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic mb-6 md:mb-8">
            DECODING THE <br />
            <span style={{ color: brandTeal }} className="not-italic">STRATEGY</span>
          </h1>

          {/* Description */}
          <div className="relative mb-10 md:mb-12">
            <p className="text-slate-500 text-sm md:text-xl font-medium leading-relaxed max-w-md">
              A meticulously structured learning path designed by engineers to take students from absolute basics to advanced competitive mastery across 5 distinct levels.
            </p>
            <div className="absolute top-0 -left-6 bottom-0 w-1 bg-gradient-to-b from-[#008d96] to-transparent rounded-full opacity-30"></div>
          </div>

          {/* Key Curriculum Pillars */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
             <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2 rounded-lg bg-slate-50 shrink-0">
                   <ListChecks size={18} style={{ color: brandTeal }} />
                </div>
                <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-slate-700">5 Structured Levels</span>
             </div>
             <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2 rounded-lg bg-slate-50 shrink-0">
                   <Target size={18} className="text-orange-500" />
                </div>
                <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-slate-700">Tournament Ready</span>
             </div>
          </div>

        
        </div>

        {/* Decorative Side Progress Bar (Right Edge) */}
        <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-slate-50 hidden md:block">
           <div className="h-full w-full bg-gradient-to-b from-[#008d96] via-orange-400 to-[#008d96] rounded-b-full shadow-[0_0_15px_rgba(0,141,150,0.2)]"></div>
        </div>
        
        {/* Background Page Number */}
        <div className="absolute bottom-12 right-12 hidden lg:block -z-10">
           <p className="text-[140px] font-black text-slate-50 leading-none select-none tracking-tighter">03</p>
        </div>
      </div>

    </section>
  );
};

export default CurriculumHero;