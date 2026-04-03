"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Trophy, Target, ChevronRight, Zap } from 'lucide-react';

const AcademyPhilosophy: React.FC = () => {
  const BRAND_TEAL = "#008d96";

  const values = [
    {
      title: "Consistent Improvement",
      desc: "We focus on the 'Compound Interest of Logic'—small, systematic daily gains that lead to massive rating breakthroughs.",
      icon: Target,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Competitive Exposure",
      desc: "Our students don't just learn; they compete. We facilitate global tournament entry to build real-world resilience.",
      icon: Trophy,
      color: "text-[#008d96]",
      bg: "bg-[#e6f4f5]"
    },
    {
      title: "Strategic Reasoning",
      desc: "Deconstructing the board into logical systems. We teach students to calculate 3-5 moves ahead with engineering precision.",
      icon: Brain,
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT SIDE: THE PHILOSOPHY --- */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-orange-500"></div>
                <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                  The D’Square Protocol
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 leading-[1.1] tracking-tighter uppercase italic">
                ENGINEERING A <br /> <span className="text-slate-300 not-italic">GRANDMASTER MINDSET.</span>
              </h2>

              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-slate-100 pl-8">
                Founded by engineers, we believe chess is more than a game—it’s a <strong className="text-slate-950 italic"> gym for the mind.</strong> We deconstruct the complexities of the 64 squares into structured, logical systems.
              </p>
            </div>

            {/* Value Pillars List */}
            <div className="space-y-8">
              {values.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className={`shrink-0 w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                    <item.icon size={26} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-semibold leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: THE LOGIC CARD --- */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#0a1118] p-10 md:p-14 rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
            >
               {/* Background Watermark */}
               <div className="absolute top-[-10%] right-[-10%] opacity-[0.03] pointer-events-none">
                  <Trophy size={300} />
               </div>

               <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-3">
                     <Zap className="text-orange-500" size={20} />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Methodology</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-tight">
                    Beyond the <br /> <span className="text-[#00b4bf]">Borders.</span>
                  </h3>

                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    With students in over 50 countries, we create a global arena where young thinkers connect, compete, and grow together.
                  </p>

                  <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                     <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <span>Curriculum Logic</span>
                        <span>100%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#008d96] w-full" />
                     </div>
                  </div>

                  <button className="w-full py-4 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#008d96] hover:text-white transition-all">
                    Explore Programs <ChevronRight size={16} />
                  </button>
               </div>
            </motion.div>

            {/* Decorative Grid Accent */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 opacity-5">
              <svg width="100%" height="100%" fill="none" viewBox="0 0 100 100">
                <pattern id="phi-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" stroke="black" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#phi-grid)" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademyPhilosophy;