"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2, Star, ChevronUp, Plus } from 'lucide-react';

const BRAND_TEAL = "#008d96";

// Expanded Hubs List (Total 24: 9 Initial + 15 Additional)
const hubs = [
  { name: "USA", code: "us" },
  { name: "UK", code: "gb" },
  { name: "UAE", code: "ae" },
  { name: "Australia", code: "au" },
  { name: "Singapore", code: "sg" },
  { name: "Canada", code: "ca" },
  { name: "Germany", code: "de" },
  { name: "Oman", code: "om" },
  { name: "Qatar", code: "qa" },
  // Additional 15
  { name: "India", code: "in" },
  { name: "Ireland", code: "ie" },
  { name: "France", code: "fr" },
  { name: "Japan", code: "jp" },
  { name: "South Africa", code: "za" },
  { name: "Brazil", code: "br" },
  { name: "New Zealand", code: "nz" },
  { name: "Netherlands", code: "nl" },
  { name: "Switzerland", code: "ch" },
  { name: "Spain", code: "es" },
  { name: "Italy", code: "it" },
  { name: "Norway", code: "no" },
  { name: "Sweden", code: "se" },
  { name: "Denmark", code: "dk" },
  { name: "Belgium", code: "be" }
];

const GlobalPresence = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the array
  const initialHubs = hubs.slice(0, 9);
  const additionalHubs = hubs.slice(9);

  return (
    <section className="py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center">
          
          {/* LEFT COLUMN: INFO & STATS */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008d96]/10 text-[#008d96] font-black text-[10px] uppercase tracking-widest mb-4">
                <Globe2 size={12} />
                <span>Global Reach</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-[1000] text-slate-900 tracking-tighter uppercase leading-[1.1] mb-4">
                A Truly <br/><span style={{ color: BRAND_TEAL }}>Global Classroom.</span>
              </h2>
              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-xl">
                From New York to Dubai, our students compete and grow together in a diverse international arena across 50+ nations.
              </p>
            </div>

            {/* Hub Badges Container */}
            <div className="flex flex-wrap gap-3 items-center min-h-[100px]">
              {/* Initial 9 Badges */}
              {initialHubs.map((country, idx) => (
                <HubBadge key={country.code} country={country} />
              ))}

              {/* Staggered Additional Badges */}
              <AnimatePresence>
                {isExpanded && additionalHubs.map((country, idx) => (
                  <motion.div
                    key={country.code}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    <HubBadge country={country} />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Toggle Button */}
              <motion.button
                layout
                onClick={() => setIsExpanded(!isExpanded)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-[11px] uppercase tracking-tight transition-all shadow-sm ${
                    isExpanded 
                    ? "bg-slate-800 text-white hover:bg-slate-900" 
                    : "bg-[#008d96] text-white hover:bg-[#00767d]"
                }`}
              >
                {isExpanded ? (
                  <><ChevronUp size={14} /> Show Less</>
                ) : (
                  <><Plus size={14} /> +15 More</>
                )}
              </motion.button>
            </div>

            {/* Compact Stats Row */}
            <div className="flex items-center gap-8 py-6 border-t border-slate-200 pt-8">
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
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Global Rating</p>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE MAP */}
          <div className="lg:col-span-6 relative lg:block hidden">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 p-2 md:p-6 bg-white rounded-[2.5rem] shadow-2xl border border-white"
            >
              <div className="relative">
                <img 
                  src="/mapworld.png" 
                  alt="Global Presence Map"
                  className="w-full h-auto object-contain opacity-90 grayscale-[0.2]"
                />
                <MapHotspot top="30%" left="22%" delay={0} />
                <MapHotspot top="25%" left="48%" delay={1} />
                <MapHotspot top="45%" left="62%" delay={0.5} />
                <MapHotspot top="55%" left="75%" delay={1.5} />
                <MapHotspot top="75%" left="85%" delay={2} />
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-[#008d96]/10 blur-[100px] rounded-full -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Country Badge Sub-component
const HubBadge = ({ country }) => (
  <motion.span 
    layout
    whileHover={{ y: -2 }}
    className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl shadow-sm font-bold text-slate-700 text-[11px] uppercase tracking-tight"
  >
    <img 
      src={`https://flagcdn.com/${country.code}.svg`} 
      alt={country.name} 
      className="w-4 h-3 object-cover rounded-sm shadow-xs"
    />
    {country.name}
  </motion.span>
);

// Pulsing dot Sub-component
const MapHotspot = ({ top, left, delay }) => (
  <motion.div 
    style={{ top, left }}
    className="absolute w-3 h-3 md:w-4 md:h-4 flex items-center justify-center"
  >
    <span className="absolute inline-flex h-full w-full rounded-full bg-[#008d96] opacity-75 animate-ping" style={{ animationDelay: `${delay}s` }}></span>
    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[#008d96] shadow-[0_0_10px_#008d96]"></span>
  </motion.div>
);

export default GlobalPresence;