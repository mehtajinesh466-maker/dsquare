"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { useDemoModal } from "@/context/DemoContext";

const BRAND_TEAL = "#008d96";

const CompactCTA = () => {
    const { openDemoModal } = useDemoModal();
  return (
    
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-slate-950 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#008d96]/20 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* TEXT AREA */}
            <div className="text-center lg:text-left space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#00b4bf] font-black text-[10px] uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4bf] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b4bf]"></span>
                </span>
                Next Batch Starting Soon
              </div>
              
              <h2 className="text-2xl md:text-4xl font-[1000] text-white tracking-tighter uppercase leading-tight">
                Ready to make <br className="hidden md:block"/> your <span style={{ color: BRAND_TEAL }}>first move?</span>
              </h2>
              
              <p className="text-slate-400 text-sm md:text-base font-medium">
                Join 1,500+ global students. Start with a free 60-minute assessment and demo session with our expert coaches.
              </p>
            </div>

            {/* BUTTONS AREA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <button onClick={openDemoModal} className="group w-full sm:w-auto px-8 py-5 bg-[#008d96] text-white rounded-2xl font-black uppercase tracking-[0.15em] text-xs shadow-xl shadow-[#008d96]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                <Calendar size={18} />
                Book Free Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full sm:w-auto px-8 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <MessageCircle size={18} className="text-emerald-400" />
                WhatsApp Us
              </button>
            </div>

          </div>

          {/* Bottom Footer (Within the card) */}
          <div className="relative z-10 mt-10 pt-8 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-8 opacity-40 grayscale">
             <div className="flex items-center gap-2">
                <span className="text-white text-[9px] font-black uppercase tracking-widest">Global Schedules</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-white text-[9px] font-black uppercase tracking-widest">Expert Coaching</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-white text-[9px] font-black uppercase tracking-widest">Interactive Dashboard</span>
             </div>
          </div>
        </motion.div>

        {/* Small sub-text outside */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
           <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
              ))}
           </div>
           <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
             Loved by 500+ parents across 15 countries
           </p>
        </div>

      </div>
    </section>
  );
};

export default CompactCTA;