"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users2, 
  Clock, 
  Calendar, 
  Puzzle,
  CheckCircle2
} from 'lucide-react';

const BRAND_TEAL = "#008d96";

const batchFeatures = [
  {
    icon: Users2,
    title: "Small Class Size",
    value: "5–6 Students",
    desc: "Ensuring individual attention for every move made.",
    position: "top-left"
  },
  {
    icon: Clock,
    title: "Session Duration",
    value: "60 Minutes",
    desc: "Optimized for peak concentration and active learning.",
    position: "top-right"
  },
  {
    icon: Calendar,
    title: "Weekly Frequency",
    value: "2 Sessions / Wk",
    desc: "Consistent practice to build long-term muscle memory.",
    position: "bottom-left"
  },
  {
    icon: Puzzle,
    title: "Skill Grouping",
    value: "Homogeneous",
    desc: "Students are grouped strictly by their current ELO/Level.",
    position: "bottom-right"
  }
];

const BatchStructure = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008d96]/5 border border-[#008d96]/10 text-[#008d96] font-black text-[10px] uppercase tracking-[0.2em] mb-6">
            <Users2 size={14} />
            <span>Optimized Learning Environment</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">
            The Perfect <span style={{ color: BRAND_TEAL }}>Batch Structure.</span>
          </h2>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
          
          {/* LEFT SIDE FEATURES (Desktop) */}
          <div className="hidden lg:flex flex-col gap-24 w-1/3 text-right pr-12">
            {[batchFeatures[0], batchFeatures[2]].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="flex flex-col items-end">
                   <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#008d96] mb-4 shadow-sm border border-slate-100">
                      <f.icon size={24} />
                   </div>
                   <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">{f.title}</h4>
                   <p className="text-2xl font-black text-slate-900 mb-2">{f.value}</p>
                   <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTRAL IMAGE */}
          <div className="relative w-full lg:w-1/3 max-w-[450px]">
            {/* Decorative Rings */}
            <div className="absolute inset-0 -m-8 border border-slate-100 rounded-full animate-[spin_20s_linear_infinite] hidden lg:block"></div>
            <div className="absolute inset-0 -m-16 border border-slate-50 rounded-full animate-[spin_30s_linear_infinite] hidden lg:block"></div>
            
            <div className="relative z-10 aspect-square rounded-[3rem] bg-slate-100 border-8 border-white shadow-2xl overflow-hidden group">
              <img 
                src="/batch.webp" 
                alt="Child learning chess online"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#008d96]/10 mix-blend-overlay"></div>
              
              
            </div>
          </div>

          {/* RIGHT SIDE FEATURES (Desktop) */}
          <div className="hidden lg:flex flex-col gap-24 w-1/3 pl-12">
            {[batchFeatures[1], batchFeatures[3]].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="flex flex-col items-start">
                   <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#008d96] mb-4 shadow-sm border border-slate-100">
                      <f.icon size={24} />
                   </div>
                   <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">{f.title}</h4>
                   <p className="text-2xl font-black text-slate-900 mb-2">{f.value}</p>
                   <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOBILE GRID (Visible only on mobile) */}
          <div className="grid grid-cols-2 gap-4 lg:hidden w-full">
            {batchFeatures.map((f, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <f.icon size={20} className="text-[#008d96] mb-3" />
                <h4 className="text-slate-400 font-black text-[8px] uppercase tracking-widest mb-1">{f.title}</h4>
                <p className="text-lg font-black text-slate-900 leading-tight mb-1">{f.value}</p>
                <p className="text-slate-500 text-[10px] leading-tight font-medium">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase">Interactive Boards</p>
           <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase">Recorded Sessions</p>
           <p className="font-black text-slate-900 text-xs tracking-[0.2em] uppercase">Live Analysis</p>
        </div>

      </div>
    </section>
  );
};

export default BatchStructure;