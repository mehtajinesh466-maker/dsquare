"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Globe2, Lightbulb, Trophy, Star, CheckCircle } from 'lucide-react';

const BRAND_TEAL = "#008d96";

const CoachProfile = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* IMAGE SIDE */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              {/* Main Photo Container */}
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5]">
                <img 
                  src="/coach1.jpeg" // REPLACE WITH YOUR ACTUAL PHOTO PATH
                  alt="Pushkar Jadhav - Head Coach"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                
              </div>

              {/* Decorative background shape */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#008d96]/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>

          {/* CONTENT SIDE */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <div className="w-10 h-[2px] bg-[#008d96]"></div>
                   <span className="text-[#008d96] font-black uppercase tracking-[0.3em] text-xs">The Visionary</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none mb-4">
                  Pushkar {" "}
                  <span style={{ color: BRAND_TEAL }}>Jadhav.</span>
                </h2>
                <p className="text-xl font-bold text-slate-400 uppercase tracking-widest">
                  Head Coach | National Arbiter
                </p>
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                Pushkar Jadhav is not just a chess coach—he is a mentor who transforms complex strategies into engaging stories. 
                As a certified <span className="text-slate-900 font-bold underline decoration-[#008d96] decoration-2">National Arbiter</span> who secured the 
                <span className="text-[#008d96] font-bold"> 1st Rank in the National Arbiter Examination</span>, he brings a level of precision 
                and authority that is rare in the coaching world.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-[#008d96] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#f0fafb] flex items-center justify-center text-[#008d96] shrink-0 group-hover:bg-[#008d96] group-hover:text-white transition-all">
                    <Globe2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tight text-sm">Global Impact</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Successfully trained students across USA, UK, UAE, and 10+ other countries.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-[#008d96] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tight text-sm">Creative Pedagogy</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">Known for his unique, child-friendly ways to explain complex tactical patterns.</p>
                  </div>
                </div>

              </div>

              {/* Personal Quote */}
              <div className="p-8 rounded-[2rem] bg-slate-950 text-white relative overflow-hidden">
                <Star className="absolute -top-4 -right-4 text-white/5 w-24 h-24" />
                <p className="relative z-10 text-lg md:text-xl font-medium italic leading-relaxed opacity-90">
                  "My goal is to make sure every child doesn't just play chess, but falls in love with the logic and creativity behind every move."
                </p>
                <div className="flex items-center gap-3 mt-6">
                   <div className="h-[1px] w-8 bg-[#00b4bf]"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00b4bf]">Pushkar Jadhav</span>
                </div>
              </div>

              {/* Achievement List Small */}
              <div className="flex flex-wrap gap-4 md:gap-8 pt-4">
                 <div className="flex items-center gap-2 text-slate-400">
                    <CheckCircle size={16} className="text-[#008d96]" />
                    <span className="text-[11px] font-black uppercase tracking-widest">A-Grade Certification</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-400">
                    <CheckCircle size={16} className="text-[#008d96]" />
                    <span className="text-[11px] font-black uppercase tracking-widest">National Level Arbiter</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-400">
                    <CheckCircle size={16} className="text-[#008d96]" />
                    <span className="text-[11px] font-black uppercase tracking-widest">Expert Storytelling</span>
                 </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoachProfile;