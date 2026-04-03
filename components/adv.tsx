"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  GraduationCap, 
  Globe2, 
  Medal, 
  LineChart, 
  ChevronRight,
  Zap
} from 'lucide-react';

const BRAND_TEAL = "#008d96";

const LearningAdvantage = () => {
  const advantages = [
    {
      icon: GraduationCap,
      title: "Structured Curriculum",
      desc: "A logical, step-by-step path from absolute beginner to advanced mastery.",
      color: "#008d96"
    },
    {
      icon: ShieldCheck,
      title: "10+ Years Expertise",
      desc: "Learn from veteran coaches with over a decade of professional training experience.",
      color: "#0ea5e9"
    },
    {
      icon: Globe2,
      title: "Global Exposure",
      desc: "Join a diverse community of students connecting from over 50+ countries.",
      color: "#6366f1"
    },
    {
      icon: Medal,
      title: "Tournament Success",
      desc: "Proven strategies for winning in both online arenas and offline rated events.",
      color: "#a855f7"
    },
    {
      icon: LineChart,
      title: "Precision Tracking",
      desc: "Personalized attention with detailed performance analytics and progress reports.",
      color: "#f59e0b"
    }
  ];

  return (
    /* FIXED: Changed overflow-hidden to overflow-x-clip and added w-full max-w-full */
    <section className="relative w-full max-w-full py-16 md:py-24 bg-slate-50 overflow-x-clip font-sans">
      
      {/* FIXED: Moved background blob inside a relative wrapper at the top of the section */}
      <div className="absolute top-0 right-0 pointer-events-none z-0">
        <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#008d96]/5 rounded-full blur-[80px] md:blur-[120px] translate-x-1/3 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* --- Left Side: Header --- */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
               <Zap size={18} fill={BRAND_TEAL} className="text-[#008d96]" />
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">The D’Square Edge</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              OUR LEARNING <br />
              <span style={{ color: BRAND_TEAL }}>ADVANTAGE.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 font-medium text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We don’t just teach moves; we build the mindset. Our academy combines 
              global reach with personalized precision to ensure every student excels.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-all hover:scale-105 shadow-xl active:scale-95"
              style={{ backgroundColor: BRAND_TEAL, boxShadow: `0 20px 40px -10px ${BRAND_TEAL}40` }}
            >
              Explore Curriculum
              <ChevronRight size={16} strokeWidth={3} />
            </motion.button>
          </div>

          {/* --- Right Side: Advantage Tiles --- */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 ${idx === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12"
                    style={{ backgroundColor: `${adv.color}10`, color: adv.color }}
                  >
                    <adv.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#008d96] transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningAdvantage;