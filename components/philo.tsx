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
    <section className="py-16 md:py-24 lg:py-32 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* --- LEFT SIDE: THE PHILOSOPHY --- */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 md:w-10 h-[2px] bg-orange-500"></div>
                <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                  The D’Square Protocol
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-950 leading-tight md:leading-[1.1] tracking-tighter uppercase italic">
                ENGINEERING A <br className="hidden sm:block" /> <span className="text-slate-300 not-italic">GRANDMASTER MINDSET.</span>
              </h2>

              <p className="text-slate-600 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-0 lg:border-l-4 border-slate-100 lg:pl-8">
                Founded by engineers, we believe chess is more than a game—it’s a <strong className="text-slate-950 italic"> gym for the mind.</strong> We deconstruct the complexities of the 64 squares into structured, logical systems.
              </p>
            </div>

            {/* Value Pillars List */}
            <div className="space-y-6 md:space-y-8">
              {values.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row items-center lg:items-start gap-4 md:gap-6 group text-center sm:text-left"
                >
                  <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${item.bg} ${item.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg md:text-xl font-black text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: THE LOGIC CARD --- */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#0a1118] p-8 sm:p-10 md:p-14 rounded-[2rem] md:rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
            >
               {/* Background Watermark - Hidden on tiny screens for clarity */}
               <div className="absolute top-[-10%] right-[-10%] opacity-[0.03] pointer-events-none hidden sm:block">
                  <Trophy size={300} />
               </div>

               <div className="relative z-10 space-y-6 md:space-y-8">
                  <div className="flex items-center gap-3">
                     <Zap className="text-orange-500" size={20} />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Methodology</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-tight">
                    Beyond the <br /> <span className="text-[#00b4bf]">Borders.</span>
                  </h3>

                  <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                    With students in over 50 countries, we create a global arena where young thinkers connect, compete, and grow together.
                  </p>

                  <div className="pt-4 md:pt-6 border-t border-white/10 flex flex-col gap-3 md:gap-4">
                     <div className="flex items-center justify-between text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <span>Curriculum Logic</span>
                        <span>100%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-[#008d96]" 
                        />
                     </div>
                  </div>

                  <button className="w-full py-4 bg-white text-slate-950 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#008d96] hover:text-white transition-all active:scale-95">
                    Explore Programs <ChevronRight size={16} />
                  </button>
               </div>
            </motion.div>

            {/* Decorative Grid Accent - Hidden on mobile */}
            <div className="absolute -z-10 -bottom-10 -left-6 md:-left-10 w-32 md:w-40 h-32 md:h-40 opacity-5 hidden sm:block">
              <svg width="100%" height="100%" fill="none" viewBox="0 0 100 100">
                <pattern id="phi-grid-responsive" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" stroke="black" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#phi-grid-responsive)" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademyPhilosophy;