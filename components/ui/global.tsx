"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Star, MapPin } from 'lucide-react';

const BRAND_TEAL = "#008d96";

const hubs = ["USA", "UK", "UAE", "Australia", "Singapore", "Canada", "Germany", "Oman", "Qatar"];

const GlobalPresence = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: INFO & STATS (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008d96]/10 text-[#008d96] font-black text-[10px] uppercase tracking-widest mb-4">
                <Globe2 size={12} />
                <span>Global Reach</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[1.1] mb-4">
                A Truly <br/><span style={{ color: BRAND_TEAL }}>Global Classroom.</span>
              </h2>
              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                From New York to Dubai, our students compete and grow together in a diverse international arena.
              </p>
            </div>

            {/* Compact Hub Badges */}
            <div className="flex flex-wrap gap-2">
              {hubs.map((country, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg font-bold text-slate-600 text-[10px] uppercase tracking-tight">
                  {country}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-slate-200 rounded-lg font-bold text-slate-500 text-[10px] uppercase tracking-tight">
                +10 More
              </span>
            </div>

            {/* Compact Stats Row */}
            <div className="flex items-center gap-8 py-6 border-t border-slate-200">
               <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">3000+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Students</p>
               </div>
               <div className="w-[1px] h-8 bg-slate-200"></div>
               <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">50+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Countries</p>
               </div>
               <div className="w-[1px] h-8 bg-slate-200"></div>
               <div>
                  <div className="flex items-center gap-1">
                    <p className="text-2xl font-black text-slate-900 leading-none">4.9</p>
                    <Star size={14} className="fill-orange-400 text-orange-400" />
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Rating</p>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE MAP (7 Cols) */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 p-2 md:p-4 bg-white rounded-[2.5rem] shadow-xl border border-white"
            >
              <img 
                src="/mapworld.png" 
                alt="Global Presence Map"
                className="w-full h-auto object-contain"
              />
              
         
            </motion.div>

            {/* Decorative Background Glow */}
            <div className="absolute inset-0 bg-[#008d96]/10 blur-[100px] rounded-full -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;