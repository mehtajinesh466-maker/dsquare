"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Globe2, 
  HeartHandshake, 
  ChevronRight,
  Target
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const BRAND_TEAL = "#008d96";

  const pillars = [
    {
      icon: Cpu,
      title: "Engineering Roots",
      desc: "Logic-driven curriculum designed by passionate engineers.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Globe2,
      title: "Global Reach",
      desc: "Empowering students across 50+ countries via online learning.",
      color: "text-[#008d96]",
      bg: "bg-[#e6f4f5]"
    },
    {
      icon: HeartHandshake,
      title: "Social Impact",
      desc: "Making chess accessible to underprivileged communities.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT SIDE: THREE-IMAGE COMPOSITION --- */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[550px]">
            {/* Background Grid Pattern */}
            <div className="absolute -top-6 -left-6 w-32 h-32 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" fill="none" viewBox="0 0 100 100">
                <pattern id="grid-p" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill={BRAND_TEAL} />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-p)" />
              </svg>
            </div>

            {/* Image 1: Main Large Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute top-0 left-0 w-[75%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img 
                src="/4.jpeg" 
                alt="Main Chess Focus"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </motion.div>

            {/* Image 2: Medium Overlapping Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-12 right-0 w-[45%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20"
            >
              <img 
                src="/26.jpeg" 
                alt="Chess Study Session"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 3: Small Accent Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-0 right-12 w-[35%] h-[35%] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white z-30"
            >
              <img 
                src="/10.jpeg" 
                alt="Success Moment"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Experience Badge */}
            <div className="absolute bottom-8 left-[-10px] z-40 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                  <Target size={20} />
               </div>
               <div>
                  <p className="text-xl font-black text-slate-900 leading-none">9+</p>
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Years of Excellence</p>
               </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-orange-500 rounded-full"></span>
                <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                  The D’Square Mission
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Engineering Minds <br />
                <span style={{ color: BRAND_TEAL }}>Through Chess.</span>
              </h2>
              
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                Founded by engineers, D’Square Chess Academy transforms the game of kings into a powerful tool for young thinkers. We apply analytical structures to help children connect, compete, and grow in a global community.
              </p>
            </div>

            {/* Concise Pillar List */}
            <div className="space-y-5">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-5 group items-start">
                  <div className={`shrink-0 w-12 h-12 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                    <pillar.icon size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900 mb-0.5">{pillar.title}</h4>
                    <p className="text-slate-500 text-xs font-semibold leading-snug max-w-sm">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Area */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
               <button 
                className="group px-8 py-4 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#008d96]/20 hover:-translate-y-1 flex items-center gap-2"
                style={{ backgroundColor: BRAND_TEAL }}
               >
                 Discover More
                 <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>

               <div className="flex items-center gap-3 border-l border-slate-100 pl-6 hidden sm:flex">
                  <img src="/vaibhav.jpg" className="w-10 h-10 rounded-full border-2 border-[#008d96]/20 p-0.5" alt="Founder" />
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Lead Coach</p>
                    <p className="text-xs font-bold text-slate-900">Vaibhav Deshmukh</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;