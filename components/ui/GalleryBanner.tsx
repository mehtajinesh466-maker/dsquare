"use client";

import React from 'react';
import { ChevronRight, Home, Image as ImageIcon, LayoutGrid, Trophy } from 'lucide-react';

const GalleryHero: React.FC = () => {
  const brandTeal = "#008d96";

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row items-center">
      
      {/* --- LEFT SIDE: THE FLOATING IMAGE --- */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 order-2 md:order-1">
        {/* 
            "Free" Image: 
            - No border, no rounded corners, no shadow.
            - md:-translate-y-16: Moves the image up on desktop.
        */}
        <div className="relative z-10 w-full flex justify-center transform md:-translate-y-0 transition-transform duration-700">
          <img 
            src="/gal.png" 
            alt="D'Square Chess Moments" 
            className="w-auto h-auto max-h-[70vh] md:max-h-[85vh] object-contain"
          />
        </div>

        {/* Minimal background watermark to keep the side from looking too empty */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-50 font-black text-[20vw] select-none -z-10 opacity-40">
          SNAP
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
            <span className="text-[#008d96]">GALLERY</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic mb-6 md:mb-8">
            CAPTURED <br />
            <span style={{ color: brandTeal }} className="not-italic">MOMENTS</span>
          </h1>

          {/* Description */}
          <div className="relative mb-10 md:mb-12">
            <p className="text-slate-500 text-sm md:text-xl font-medium leading-relaxed max-w-md">
              A visual journey through the silent battles, the strategic triumphs, and the 
              smiles of success that define D’Square Chess Academy.
            </p>
            <div className="absolute top-0 -left-6 bottom-0 w-1 bg-gradient-to-b from-[#008d96] to-transparent rounded-full opacity-30"></div>
          </div>

          {/* Gallery Categories Preview */}
          <div className="flex flex-wrap gap-4 mb-10">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                <Trophy size={16} className="text-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Tournaments</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                <ImageIcon size={16} className="text-[#008d96]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Certificates</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                <LayoutGrid size={16} className="text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Events</span>
             </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button 
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-[#008d96] text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-[#008d96]/30 hover:shadow-[#008d96]/50 hover:-translate-y-1 active:scale-95 transition-all"
            >
              BROWSE ALL PHOTOS
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Decorative Side Progress Bar */}
        <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-slate-50 hidden md:block">
           <div className="h-[60%] w-full bg-[#008d96] rounded-b-full shadow-[0_0_15px_rgba(0,141,150,0.1)]"></div>
        </div>
        
        {/* Background Page Number */}
        <div className="absolute bottom-12 right-12 hidden lg:block -z-10">
           <p className="text-[140px] font-black text-slate-50 leading-none select-none tracking-tighter">05</p>
        </div>
      </div>

    </section>
  );
};

export default GalleryHero;