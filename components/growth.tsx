"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Swords, Layers, ChevronRight, CheckCircle2 } from 'lucide-react';

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
    <section className="py-16 md:py-24 lg:py-32 bg-[#fafcfc] font-sans overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-20 items-center lg:items-end">
          <div className="lg:col-span-8 text-center lg:text-left w-full">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
              <div className="w-8 md:w-10 h-[1.5px] bg-[#008d96]"></div>
              <span className="text-[#008d96] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                Student Trajectory
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-950 uppercase italic tracking-tighter leading-tight md:leading-none">
              BUILT FOR <br className="hidden sm:block" /> <span className="text-slate-200 not-italic">ASCENSION.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-center lg:text-right w-full">
             <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed italic max-w-md mx-auto lg:ml-auto lg:mr-0">
               "We don't just teach the game; we engineer the path to mastery."
             </p>
          </div>
        </div>

        {/* --- GROWTH PATH GRID --- */}
        {/* max-w-md mx-auto ensures cards don't get too wide on mobile before switching to 3-cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto lg:max-w-none">
          {paths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Top Meta Info */}
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-[#008d96] shadow-inner group-hover:bg-[#008d96] group-hover:text-white transition-all duration-500">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.id}</span>
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <p className="text-[#00b4bf] font-black text-[10px] uppercase tracking-widest mb-2">{item.label}</p>
                <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-slate-950 mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-6 md:mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Logic Tags */}
              <div className="space-y-2 pt-6 border-t border-slate-50">
                {item.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-orange-500 shrink-0" />
                    <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>

              {/* Hover Line - Adjusted for mobile visibility if desired, 
                  but strictly kept as hover for "Studio" aesthetic */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 hidden md:block">
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