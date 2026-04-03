"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Trophy,
  CheckCircle2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const BRAND_TEAL = "#008d96";

const outcomes = [
  {
    title: 'Critical Thinking',
    desc: 'Engineering-led analytical drills that improve logical reasoning.',
    icon: Brain,
    improvement: '85% Growth',
    milestones: ['Pattern Recognition', 'Decision Logic']
  },
  {
    title: 'Strategy Mapping',
    desc: 'Mastering long-term planning and positional board control.',
    icon: Target,
    improvement: '+150 Elo Avg.',
    milestones: ['Opening Systems', 'Endgame Tech']
  },
  {
    title: 'Performance Rating',
    desc: 'A systematic approach to climbing global chess rating ladders.',
    icon: TrendingUp,
    improvement: 'Consistent Gains',
    milestones: ['Beginner to Rated', 'Rated to Expert']
  },
  {
    title: 'Tournament Edge',
    desc: 'Psychological and tactical prep for competitive FIDE play.',
    icon: Trophy,
    improvement: '94% Win Rate',
    milestones: ['Time Management', 'Pressure Control']
  },
];

export default function SkillOutcomesSection() {
  return (
    <section className="py-12 md:py-20 bg-white font-sans overflow-hidden border-t border-slate-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
               <ShieldCheck size={16} className="text-[#008d96]" />
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-[10px]">Measurable Success</span>
            </div>
            {/* Mobile: 3xl (1.875rem), Desktop: 5xl (3rem) */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Expected <span style={{ color: BRAND_TEAL }}>Skill Outcomes.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm md:text-base font-medium max-w-sm leading-relaxed"
          >
            We deconstruct progress into logical milestones, ensuring guaranteed improvement at every stage of the 64 squares.
          </motion.p>
        </div>

        {/* --- OUTCOMES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {outcomes.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 bg-[#fafcfc] rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,141,150,0.1)] transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#008d96] mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={24} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-xs font-bold leading-relaxed mb-6 flex-grow">{item.desc}</p>

              <div className="space-y-2 mb-6">
                {item.milestones.map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <CheckCircle2 size={12} className="text-orange-500 shrink-0" />
                    {m}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-black text-[#008d96] uppercase tracking-tighter">Avg Impact</span>
                <span className="text-xs font-bold text-slate-900 bg-white px-2 py-1 rounded-lg shadow-sm">{item.improvement}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- STATS STRIP (Optimized for Mobile) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0a191a] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center gap-8 overflow-hidden relative shadow-2xl"
        >
           {/* Decorative Background Element */}
           <div className="absolute right-0 top-0 w-32 h-full bg-[#008d96]/10 skew-x-[-20deg] translate-x-10 pointer-events-none hidden md:block" />
           
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full lg:w-auto">
             {[
               { val: "3x", label: "Faster Progress", sub: "Engineered logic" },
               { val: "94%", label: "Success Rate", sub: "Tournament ready" },
               { val: "150+", label: "Elo Increase", sub: "Avg per 6 months" },
             ].map((stat, i) => (
               <div key={i} className="relative z-10 text-center md:text-left flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-4xl md:text-5xl font-black text-white italic">{stat.val}</div>
                  <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
                  <div className="text-center sm:text-left">
                     <p className="text-orange-400 font-black text-[10px] uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                     <p className="text-white/40 text-[9px] font-bold uppercase tracking-tighter">{stat.sub}</p>
                  </div>
               </div>
             ))}
           </div>

           <button className="relative z-10 w-full lg:w-auto px-8 py-4 bg-[#008d96] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#00b4bf] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95">
              Join the Mission <ChevronRight size={16} strokeWidth={3} />
           </button>
        </motion.div>

      </div>
    </section>
  );
}