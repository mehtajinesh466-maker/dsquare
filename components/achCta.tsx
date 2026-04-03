"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const BRAND_TEAL = "#008d96";

  return (
    <section className="py-10 md:py-20 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-6xl">
        
        {/* --- COMPACT COMMAND CARD --- */}
        <div className="relative bg-[#0a1118] rounded-[2rem] md:rounded-[4rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Background Structural Decor - Hidden on small mobile to keep text legible */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="cta-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Side: The Hook */}
            <div className="w-full lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Sparkles className="text-orange-500" size={16} />
                <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">
                  Your First Move
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15] md:leading-[1.1] tracking-tighter uppercase italic">
                READY TO START <br />
                <span className="text-slate-500 not-italic">YOUR JOURNEY?</span>
              </h2>

              <p className="text-slate-400 text-sm md:text-base font-medium max-w-md leading-relaxed mx-auto lg:mx-0">
                Experience our engineering-led logic first-hand. Book a <span className="text-white">free assessment</span> and join a community of thinkers across 50+ countries.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-2 opacity-60">
                 <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest">
                    <ShieldCheck size={12} className="text-[#008d96]" /> Global Standard
                 </div>
                 <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest">
                    <Zap size={12} className="text-[#008d96]" /> Instant Activation
                 </div>
              </div>
            </div>

            {/* Right Side: Conversion Buttons */}
            <div className="w-full lg:col-span-5 flex flex-col gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ backgroundColor: BRAND_TEAL }}
                className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl text-white font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-[#008d96]/20 flex items-center justify-center gap-3 transition-all group"
              >
                BOOK FREE DEMO
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <a 
                  href="https://wa.me/919588617808"
                  target="_blank"
                  className="py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-all group"
                >
                  <MessageSquare size={18} className="text-[#25D366]" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">WhatsApp</span>
                </a>
                
                <button 
                  className="py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-all group"
                >
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">Pricing info</span>
                </button>
              </div>

              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-tighter text-center mt-2">
                No credit card required for demo session
              </p>
            </div>

          </div>

          {/* Decorative Bottom Spine */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#008d96] to-transparent opacity-30" />
        </div>

        {/* --- FOOTER TAGS --- */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center sm:text-left">
              D’Square Academy © 2024
           </p>
           <div className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#008d96]" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;