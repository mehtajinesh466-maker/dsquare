"use client";

import React from 'react';
import { ChevronRight, Home, BookOpen, PenTool, Sparkles, Newspaper } from 'lucide-react';

const BlogHero: React.FC = () => {
  const brandTeal = "#008d96";

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row items-center">
      
      {/* --- LEFT SIDE: THE FREE IMAGE --- */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 order-2 md:order-1">
        
        {/* 
            "Free" Image: 
            - No border, no rounded corners, no shadow.
            - md:-translate-y-12: Shifts the image up on desktop.
        */}
        <div className="relative z-10 w-full flex justify-center transform md:-translate-y-6 transition-transform duration-700">
          <img 
            src="/blog.png" 
            alt="Chess Strategy Research" 
            className="w-full  h-auto object-contain"
          />
        </div>

        {/* Insight Badge - Floating near the free image */}
  

        {/* Minimal background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-50 font-black text-[15vw] select-none -z-10 opacity-60">
          READ
        </div>
      </div>

      {/* --- RIGHT SIDE: THE CONTENT --- */}
      <div className="relative w-full md:w-1/2 flex items-center bg-white order-1 md:order-2 px-6 md:px-12 lg:px-20 py-12 md:py-0">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(${brandTeal} 1.2px, transparent 1.2px)`, backgroundSize: '35px 35px' }}>
        </div>

        <div className="relative z-10 w-full max-w-xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6 md:mb-10">
            <a href="/" className="hover:text-[#008d96] flex items-center gap-1.5 transition-colors group">
              <Home size={12} className="group-hover:-translate-y-0.5 transition-transform" /> HOME
            </a>
            <span className="w-1 h-1 rounded-full bg-[#008d96]"></span>
            <span className="text-[#008d96]">CHESS BLOG</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic mb-6 md:mb-8">
            STRATEGIC <br />
            <span style={{ color: brandTeal }} className="not-italic">CHRONICLES</span>
          </h1>

          {/* Description */}
          <div className="relative mb-10 md:mb-14">
            <p className="text-slate-500 text-sm md:text-xl font-medium leading-relaxed max-w-md">
              Dive deep into the logic behind the game. From opening analysis to endgame mastery, 
              discover articles written by engineers and FIDE-rated coaches.
            </p>
            {/* Smooth side accent line */}
            <div className="absolute top-0 -left-6 bottom-0 w-1 bg-gradient-to-b from-[#008d96] to-transparent rounded-full opacity-30"></div>
          </div>

          {/* Blog Topics Summary */}
          <div className="flex flex-wrap gap-6 mb-12">
             <div className="flex items-center gap-2 group cursor-default">
                <PenTool size={18} className="text-[#008d96] transition-transform group-hover:-rotate-12" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Expert Guides</span>
             </div>
             <div className="flex items-center gap-2 group cursor-default">
                <BookOpen size={18} className="text-orange-500 transition-transform group-hover:-rotate-12" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Tactical Theory</span>
             </div>
             <div className="flex items-center gap-2 group cursor-default">
                <Newspaper size={18} className="text-blue-500 transition-transform group-hover:-rotate-12" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Academy News</span>
             </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button 
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-[#008d96] text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#008d96]/30 hover:shadow-[#008d96]/50 hover:-translate-y-1 active:scale-95 transition-all"
            >
              START READING
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Decorative Side Progress Bar (Right Edge) */}
        <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-slate-50 hidden md:block">
           <div className="h-[25%] w-full bg-[#008d96] rounded-b-full shadow-[0_0_15px_rgba(0,141,150,0.15)]"></div>
        </div>
        
        {/* Background Page Number Watermark */}
        <div className="absolute bottom-12 right-12 hidden lg:block -z-10">
           <p className="text-[140px] font-black text-slate-50 leading-none select-none tracking-tighter">06</p>
        </div>
      </div>

    </section>
  );
};

export default BlogHero;