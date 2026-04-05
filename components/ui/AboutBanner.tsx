"use client";

import React from 'react';
import { ChevronRight, Home, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

const AboutHero: React.FC = () => {
  const brandTeal = "#008d96";

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row items-center">
      
      {/* --- IMAGE SIDE: Set to order-1 for mobile (appears first) --- */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center order-1 bg-white pt-0 md:pt-0">
        
        {/* The Main Image */}
        <div className="relative z-10 w-full h-full flex items-end justify-center px-4 md:-translate-y-12 transition-transform duration-700">
          <img 
            src="/abh.png" 
            alt="Chess Journey" 
            className="w-auto h-[85%] md:h-[90%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          />
        </div>
        
      </div>

      {/* --- TEXT SIDE: Set to order-2 for mobile (appears second) --- */}
      <div className="relative w-full md:w-1/2 flex items-center bg-white order-2 px-6 md:px-12 lg:px-20 py-12 md:py-0">
        
        {/* Subtle Grid Background */}
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
            <span style={{ color: brandTeal }}>OUR STORY</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic mb-6 md:mb-8">
            THE <span style={{ color: brandTeal }} className="not-italic">CHESS</span> <br />
            JOURNEY
          </h1>

          {/* Description */}
          <div className="relative mb-10 md:mb-14">
            <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed max-w-md">
              Founded by engineers in 2015, we deconstructed the game of kings into logic-driven coaching to shape the next generation of global thinkers.
            </p>
            <div className="absolute top-0 -left-6 bottom-0 w-1 bg-gradient-to-b from-[#008d96] to-transparent rounded-full opacity-30"></div>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
  
  {/* Contact Page */}
  <Link 
    href="/contact"
    style={{ backgroundColor: brandTeal }}
    className="w-full sm:w-auto px-10 py-4 md:py-5 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:brightness-110 hover:-translate-y-1 active:scale-95 transition-all shadow-[#008d96]/30"
  >
    JOIN THE SQUAD
    <ChevronRight size={18} strokeWidth={3} />
  </Link>

  {/* Curriculum Page */}
  <Link 
    href="/curriculum"
    className="flex items-center gap-2 text-slate-900 font-black text-[11px] uppercase tracking-widest hover:text-[#008d96] transition-colors group"
  >
    Explore Courses
    <MousePointer2 size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </Link>

</div>

        </div>
      </div>

    </section>
  );
};

export default AboutHero;