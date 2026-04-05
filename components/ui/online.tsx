"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ArrowRight } from 'lucide-react';

const BRAND_TEAL = "#008d96";
// High-quality chess image for the background
const HERO_IMAGE = "/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-15">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Chess Board Background" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
        
        {/* Subtle Radial Glow */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 50% 50%, ${BRAND_TEAL}44 0%, transparent 70%)` 
          }}
        ></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008d96]/10 border border-[#008d96]/30 text-[#00e3f0] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
        >
          <Globe2 size={14} className="animate-pulse" />
          <span>Virtual Grandmaster Hub</span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-[4rem] font-[1000] text-white leading-[1.05] tracking-tighter mb-8"
        >
          LEARN CHESS FROM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008d96] to-[#00f2ff]">
            ANYWHERE ON EARTH.
          </span>
        </motion.h1>
        
        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-0"
        >
          Experience high-quality, interactive coaching designed for the digital age. 
          We have successfully trained <span className="text-white font-bold underline decoration-[#008d96]">1500+ students worldwide</span>, 
          bridging the gap between technology and traditional mastery.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 items-center"
        >
          <button className="group px-8 py-5 bg-[#008d96] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-[#008d96]/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2">
            Book a Free Online Demo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs backdrop-blur-md hover:bg-white/10 transition-all">
            View Global Schedules
          </button>
        </motion.div>

        {/* Quick Stats / Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60"
        >
           <div className="text-center">
              <p className="text-white font-black text-2xl tracking-tighter">15+</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Countries</p>
           </div>
           <div className="text-center">
              <p className="text-white font-black text-2xl tracking-tighter">24/7</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Learning Access</p>
           </div>
           <div className="text-center">
              <p className="text-white font-black text-2xl tracking-tighter">5-Star</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Curriculum</p>
           </div>
        </motion.div>
      </div>

      {/* Decorative Corner Glow (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#008d96]/20 blur-[150px] rounded-full -mr-64 -mb-64 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;