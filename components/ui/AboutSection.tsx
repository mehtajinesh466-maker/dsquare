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
import Link from 'next/link';

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
    <section className="py-12 md:py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* --- LEFT SIDE: THREE-IMAGE COMPOSITION --- */}
          {/* Height is responsive: 400px on mobile, 550px on desktop */}
          <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[450px] md:h-[550px]">
            
            {/* Background Grid Pattern - Hidden on very small screens for cleanliness */}
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 opacity-10 pointer-events-none hidden sm:block">
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
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-[70%] h-[80%] md:w-[75%] md:h-[85%] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10"
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
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute top-10 right-0 w-[45%] h-[45%] md:top-12 md:w-[45%] md:h-[50%] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20"
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
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 right-8 w-[35%] h-[30%] md:bottom-0 md:right-12 md:w-[35%] md:h-[35%] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white z-30"
            >
              <img 
                src="/10.jpeg" 
                alt="Success Moment"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 -left-2 md:bottom-8 md:left-[-10px] z-40 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3"
            >
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white shrink-0">
                  <Target size={18} />
               </div>
               <div>
                  <p className="text-lg md:text-xl font-black text-slate-900 leading-none">9+</p>
                  <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest">Years of Excellence</p>
               </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 md:w-10 bg-orange-500 rounded-full"></span>
                <span className="text-orange-600 font-black uppercase tracking-[0.2em] text-[9px] md:text-xs">
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
            <div className="space-y-5 md:space-y-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 md:gap-5 group items-start">
                  <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                    <pillar.icon size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-black text-slate-900 mb-0.5">{pillar.title}</h4>
                    <p className="text-slate-500 text-[11px] md:text-xs font-semibold leading-snug max-w-sm">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Area */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
             <Link href="/gallery">
  <button 
    className="w-full sm:w-auto group px-8 py-4 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#008d96]/20 hover:-translate-y-1 flex items-center justify-center gap-2"
    style={{ backgroundColor: BRAND_TEAL }}
  >
    Discover More
    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
  </button>
</Link>

               <div className="flex items-center gap-3 border-l-0 sm:border-l border-slate-100 sm:pl-6">
                  <div className="w-10 h-10 rounded-full border-2 border-[#008d96]/20 p-0.5 shrink-0">
                    <img src="/vaibhav.jpg" className="w-full h-full object-cover rounded-full" alt="Founder" />
                  </div>
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