"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Globe, Brain, Star, CheckCircle, Play, Calendar, Crown } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

const BRAND_TEAL = "#008d96";

export default function SideBySideHero() {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="relative min-h-screen bg-[#fdfdfd] pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden flex items-center">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute top-20 right-[10%] opacity-5 -z-10 select-none animate-pulse">
        <Crown size={120} color={BRAND_TEAL} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-8xl">
        {/* Changed from grid to flex-col-reverse for mobile ordering */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 text-center lg:text-left z-20"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e6f4f5] text-[#008d96] font-extrabold text-[10px] md:text-xs mb-6 tracking-widest uppercase">
              <Globe size={14} />
              Global Training in 50+ Countries
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Building The Next <br className="hidden lg:block" />
              Generation Of <br className="hidden lg:block" />
              <span style={{ color: BRAND_TEAL }}>Global Thinkers</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Founded by passionate engineers, we use <span className="text-slate-900 font-bold">logic-driven coaching</span> to help your child master chess, discipline, and critical thinking.
            </p>

            {/* CTA & Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button
                onClick={openDemoModal}
                style={{ backgroundColor: BRAND_TEAL }}
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 text-white rounded-2xl font-black text-base md:text-lg shadow-2xl shadow-[#008d96]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase"
              >
                BOOK FREE CLASS
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=student${i}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">4.9/5 Rating</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: VISUALS (Will be Top on Mobile) --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center lg:justify-end">
            
            {/* Floating Card (Hidden on mobile to avoid clutter) */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-4 top-10 z-30 hidden xl:flex items-center gap-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0" style={{ backgroundColor: BRAND_TEAL }}>
                <Play fill="currentColor" size={16} />
              </div>
              <h4 className="font-black text-[10px] leading-tight uppercase tracking-tight text-slate-700">
                LIVE INTERACTIVE<br/>CLASSES
              </h4>
            </motion.div>

            {/* Central Visual Stack */}
            <div className="relative w-full max-w-[450px] lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <img 
                  src="/hero.png" 
                  alt="Online Chess Class" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* Decorative Faint Background Circle */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full -z-10 opacity-5"
                style={{ backgroundColor: BRAND_TEAL }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}