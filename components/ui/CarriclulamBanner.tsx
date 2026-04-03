"use client";

import React from 'react';
import { ChevronRight, Home, Brain, ListChecks, Target } from 'lucide-react';

const CurriculumHero: React.FC = () => {
  const brandTeal = "#008d96";

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row items-center">
      
      {/* --- LEFT SIDE: IMAGE WITH ORGANIC BLOB & WAVE --- */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center order-2 md:order-1 bg-white">
        


   
        {/* The Main Illustration/Image */}
        <div className="relative z-10 w-full h-full flex items-end justify-center px-4 md:-translate-y-12 transition-transform duration-700">
          <img 
            src="/cur.png" 
            alt="D'Square Chess Curriculum" 
            className="w-auto h-[80%] md:h-[85%] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
          />
        </div>

   

     
      </div>

      {/* --- RIGHT SIDE: CONTENT --- */}
      <div className="relative w-full md:w-1/2 flex items-center bg-white order-1 md:order-2 px-6 md:px-12 lg:px-20 py-12 md:py-0">
        
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
          <div className="grid grid-cols-2 gap-6 mb-12">
             <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-50">
                   <ListChecks size={20} style={{ color: brandTeal }} />
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-700">5 Structured Levels</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-50">
                   <Target size={20} className="text-orange-500" />
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-700">Tournament Ready</span>
             </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-8">
            <button 
              style={{ backgroundColor: brandTeal }}
              className="w-full sm:w-auto px-10 py-4 md:py-5 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#008d96]/30 hover:brightness-110 hover:-translate-y-1 active:scale-95 transition-all"
            >
              VIEW FULL SYLLABUS
              <ChevronRight size={18} strokeWidth={3} />
            </button>
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