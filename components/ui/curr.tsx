"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Zap, 
  Target,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

const BRAND_TEAL = "#008d96";

const modules = [
  {
    title: "Core Foundations",
    desc: "Mastering board vision, piece coordination, and the fundamental laws of the game.",
    icon: Layers,
    preview: ["Rules & Etiquette", "Basic Mates", "Board Vision"]
  },
  {
    title: "Tactical Depth",
    desc: "Sharpening calculation skills and recognizing winning patterns in real-time.",
    icon: Zap,
    preview: ["Fork/Skewers", "Combination Play", "Attacking Kings"]
  },
  {
    title: "Strategic Mastery",
    desc: "Understanding long-term planning, positional nuances, and endgame precision.",
    icon: Target,
    preview: ["Pawn Structures", "Minor Piece Value", "Endgame Theory"]
  }
];

const CurriculumTeaser = () => {
  return (
    <section className="py-12 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#008d96]"></div>
              <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-[10px]">Syllabus</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[1.1]">
              A 5-Level <br />
              <span style={{ color: BRAND_TEAL }}>Learning Roadmap.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium md:max-w-[280px] text-sm md:text-base leading-relaxed border-l-2 border-slate-100 pl-4">
            Our curriculum is designed to evolve with the student, ensuring constant challenge and growth.
          </p>
        </div>

        {/* The 3 Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {modules.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#008d96] mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 md:mb-8">
                {item.desc}
              </p>

              <div className="space-y-2.5">
                {item.preview.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#008d96]" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Main Action Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-950 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#008d96]/20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="text-center lg:text-left relative z-10">
            <h4 className="text-white text-xl md:text-2xl font-black mb-2 uppercase tracking-tight">
              Want the full breakdown?
            </h4>
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-md">
              View our comprehensive 10-level syllabus, including weekly topics, assignments, and learning outcomes.
            </p>
          </div>

          <Link href="/curriculum" className="w-full lg:w-auto relative z-10">
            <button className="group w-full px-8 py-5 bg-[#008d96] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-xl shadow-[#008d96]/30 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3">
               Explore Full Curriculum
               <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CurriculumTeaser;