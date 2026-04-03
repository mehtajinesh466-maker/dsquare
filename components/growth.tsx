"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Swords, Layers, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

const AcademyGrowth: React.FC = () => {
  const BRAND_TEAL = "#008d96";

  const paths = [
    {
      id: "PATH 01",
      title: "The Evolution",
      label: "Novice to Competitor",
      desc: "Our curriculum is designed for transition. We take students from the first move to their first professional rating through a deconstructed learning system.",
      icon: TrendingUp,
      tags: ["Rule Mastery", "Tactical Vision", "Opening Logic"]
    },
    {
      id: "PATH 02",
      title: "The Arena",
      label: "Internal Tournaments",
      desc: "Exposure is the best teacher. We host weekly internal tournaments that mimic FIDE standards, providing a safe but intense testing ground.",
      icon: Swords,
      tags: ["Clock Pressure", "Sportsmanship", "Game Analysis"]
    },
    {
      id: "PATH 03",
      title: "The System",
      label: "Structured Tiering",
      desc: "No random lessons. Our 5-level engineering syllabus ensures every student follows a verified roadmap with clear technical milestones.",
      icon: Layers,
      tags: ["Engineered Syllabus", "Phased Growth", "Performance Metrics"]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#fafcfc] font-sans overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1.5px] bg-[#008d96]"></div>
              <span className="text-[#008d96] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Student Trajectory
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">
              BUILT FOR <br /> <span className="text-slate-200 not-italic">ASCENSION.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
             <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed italic">
               "We don't just teach the game; we engineer the path to mastery."
             </p>
          </div>
        </div>

        {/* --- GROWTH PATH GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {paths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Top Meta Info */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#008d96] shadow-inner group-hover:bg-[#008d96] group-hover:text-white transition-all duration-500">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.id}</span>
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <p className="text-[#00b4bf] font-black text-[10px] uppercase tracking-widest mb-2">{item.label}</p>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-950 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Logic Tags */}
              <div className="space-y-2 pt-6 border-t border-slate-50">
                {item.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-orange-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                 <ChevronRight size={32} className="text-[#e6f4f5]" strokeWidth={3} />
              </div>
            </motion.div>
          ))}
        </div>

    

      </div>
    </section>
  );
};

export default AcademyGrowth;