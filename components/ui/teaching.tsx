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
    <section className="py-20 md:py-32 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="w-12 h-[2px] bg-orange-500"></span>
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">
              Scientific Approach
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight max-w-3xl">
            Engineering a <span style={{ color: BRAND_TEAL }}>Grandmaster Mindset</span> <br className="hidden md:block" />
            Through Structured Logic.
          </h2>
        </div>

        {/* --- METHODOLOGY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {methods.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#fafcfc] rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-[0_30px_60px_rgba(0,141,150,0.1)] transition-all duration-500"
            >
              {/* Image Header Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Floating ID Tag */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center font-black text-[#008d96] text-xl border border-slate-50">
                  {item.id}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f4f5] flex items-center justify-center text-[#008d96]">
                    <item.icon size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>

                {/* Features Pill Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                  {item.features.map((feat, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:border-[#008d96]/30 group-hover:text-[#008d96] transition-colors"
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