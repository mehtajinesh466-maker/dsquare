"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Brain, 
  Search, 
  Trophy, 
  ChevronRight,
  Monitor,
  Zap
} from 'lucide-react';

const BRAND_TEAL = "#008d96";

const methods = [
  {
    id: "01",
    title: "Initial Assessment",
    desc: "We begin by deconstructing the student's current gameplay to identify tactical gaps and calculation speed.",
    icon: Search,
    image: "/ini.jpg",
    features: ["Strength Evaluation", "Calculation Drills", "Learning Style Map"]
  },
  {
    id: "02",
    title: "Interactive Theory",
    desc: "Master-led sessions using advanced tactics to explain complex positional structures simply.",
    icon: Monitor,
    image: "/14.jpeg",
    features: ["Real-time Whiteboards", "Opening Repertoires", "Positional Logic"]
  },
  {
    id: "03",
    title: "Tactical Patterning",
    desc: "Focusing on muscle memory for the brain through curated puzzles that mirror high-level tournament positions.",
    icon: Zap,
    image: "/11.jpeg",
    features: ["Pattern Recognition", "Endgame Technique", "Daily Puzzle Sets"]
  },
  {
    id: "04",
    title: "Post-Game Analysis",
    desc: "The most critical step. We use engine-based reviews to analyze student blunders and build win-strategies.",
    icon: Brain,
    image: "/9.jpeg",
    features: ["Engine-Led Review", "Mistake Logging", "Strategy Tuning"]
  }
];

export default function TeachingMethodologySection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-12 md:mb-20 lg:mb-24 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6"
          >
            <span className="w-10 md:w-12 h-[2px] bg-orange-500"></span>
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Scientific Approach
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight max-w-3xl"
          >
            Engineering a <span style={{ color: BRAND_TEAL }}>Grandmaster Mindset</span> <br className="hidden md:block" />
            Through Structured Logic.
          </motion.h2>
        </div>

        {/* --- METHODOLOGY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {methods.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#fafcfc] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,141,150,0.1)] transition-all duration-500"
            >
              {/* Image Header Area - Height adjusts for mobile */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Floating ID Tag - Scaled for mobile */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center font-black text-[#008d96] text-lg border border-slate-50">
                  {item.id}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 lg:p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-3 md:gap-4 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#e6f4f5] flex items-center justify-center text-[#008d96] shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg md:text-2xl font-black text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 text-xs md:text-sm lg:text-base font-medium leading-relaxed mb-6 md:mb-8 flex-grow">
                  {item.desc}
                </p>

                {/* Features Pill Tags - Better wrapping for mobile */}
                <div className="flex flex-wrap gap-2 pt-4 md:pt-6 border-t border-slate-100">
                  {item.features.map((feat, i) => (
                    <span 
                      key={i} 
                      className="px-2 md:px-3 py-1 md:py-1.5 bg-white border border-slate-200 rounded-full text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:border-[#008d96]/30 group-hover:text-[#008d96] transition-colors"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}