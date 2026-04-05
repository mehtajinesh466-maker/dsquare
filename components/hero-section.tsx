"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Globe, Brain, Star, CheckCircle } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

const BRAND_TEAL = "#008d96";

const hangingPhotos = [
  { src: "/22.jpeg", angle: -5, clip: "#ef4444" },        // Shown on Mobile
  { src: "/coach1.jpeg", angle: 2, clip: "#10b981" }, // Shown on Mobile
  { src: "/21.jpeg", angle: -2, clip: "#3b82f6" }, // Shown on Mobile
  { src: "/coach2.jpeg", angle: 4, clip: "#f59e0b" },  // Desktop Only
  { src: "/10.jpeg", angle: -3, clip: "#008d96" }, // Desktop Only
];

export default function HangingHero() {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="relative min-h-screen bg-[#fdfdfd] pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      
      {/* --- TOP: THE HANGING GALLERY --- */}
      <div className="relative w-full mb-12 md:mb-16 px-2 md:px-4">
        {/* The Rope (SVG Curve) - Adjusted for responsiveness */}
        <svg 
          className="absolute top-2 left-0 w-full h-20 md:h-24 -z-10 text-gray-200" 
          viewBox="0 0 1440 100" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path d="M0 10 Q 720 110 1440 10" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        </svg>

        {/* Gallery Container: Uses justify-around for mobile, justify-between for desktop */}
        <div className="max-w-6xl mx-auto flex justify-around md:justify-between items-start pt-4 gap-1 md:gap-4">
          {hangingPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.05, y: 5 }}
              style={{ rotate: `${photo.angle}deg` }}
              // SHOW 3 ON MOBILE: i < 3 shows always, i >= 3 hidden until medium screens
              className={`relative group cursor-pointer ${i >= 3 ? "hidden md:block" : "block"}`}
            >
              {/* The Clip */}
              <div 
                className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-2 md:w-3 h-6 md:h-8 rounded-full z-20 shadow-sm"
                style={{ backgroundColor: photo.clip }}
              />
              
              {/* The Polaroid Frame: Smaller on mobile (w-24), larger on desktop (md:w-48) */}
              <div className="bg-white p-1.5 pb-6 md:p-3 md:pb-12 shadow-xl border border-gray-100 rounded-sm w-[28vw] max-w-[110px] md:max-w-none md:w-44 lg:w-48 transition-shadow group-hover:shadow-2xl">
                <div className="aspect-square w-full bg-gray-100 overflow-hidden rounded-sm">
                  <img 
                    src={photo.src} 
                    alt="Chess Student" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- CENTER: MAIN TEXT CONTENT --- */}
      <div className="container mx-auto px-4 text-center max-w-4xl relative">
        
        {/* Floating Icons (Hidden on Mobile for cleaner UI) */}
        <div className="absolute -left-20 top-0 opacity-10 animate-pulse hidden lg:block">
           <Brain size={100} color={BRAND_TEAL} />
        </div>
        <div className="absolute -right-20 bottom-0 opacity-10 animate-bounce hidden lg:block">
           <Trophy size={100} color={BRAND_TEAL} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e6f4f5] text-[#008d96] font-extrabold text-[10px] md:text-xs mb-6 tracking-widest uppercase">
            <Globe size={14} />
            Global Training in 50+ Countries
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] mb-6">
            Building The Next Generation Of <br className="hidden md:block" />
            <span style={{ color: BRAND_TEAL }} className="relative inline-block">
              Global Thinkers
              
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-10 leading-relaxed px-2 md:px-0">
            Founded by passionate engineers, we use <span className="text-slate-900 font-bold">logic-driven coaching</span> to help your child master chess, discipline, and critical thinking.
          </p>

          {/* Value Tags */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-12">
            {[
              { icon: Brain, text: "Engineering Logic" },
              { icon: Trophy, text: "FIDE Rated Coaches" },
              { icon: CheckCircle, text: "Structured Levels" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-700 font-bold text-xs md:text-base">
                <item.icon size={16} className="md:w-5 md:h-5" style={{ color: BRAND_TEAL }} />
                {item.text}
              </div>
            ))}
          </div>

          {/* CTA Button Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openDemoModal}
              style={{ backgroundColor: BRAND_TEAL }}
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 text-white rounded-2xl font-black text-base md:text-lg shadow-2xl shadow-[#008d96]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              BOOK FREE TRIAL CLASS
              <ArrowRight className="w-5 h-5" />
            </button>
            
            {/* Social Proof Mini-Section */}
            <div className="flex items-center gap-3 py-2">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?u=student${i}`} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                 ))}
               </div>
               <div className="text-left">
                 <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                 </div>
                 <p className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-tighter">4.9/5 Student Rating</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}