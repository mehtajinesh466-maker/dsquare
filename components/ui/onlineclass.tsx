"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Lightbulb, 
  Gamepad2, 
  MessageSquareQuote, 
  BarChart3,
  ChevronRight
} from 'lucide-react';

const BRAND_TEAL = "#008d96";

const steps = [
  {
    number: "01",
    title: "Join Session",
    desc: "One-click access to our high-definition virtual classroom. No complex setup required—just log in and meet your expert coach.",
    icon: Video,
    image: "/join1.jpg",
    color: "bg-blue-50"
  },
  {
    number: "02",
    title: "Learn Concept",
    desc: "Interactive demonstrations on professional digital boards. Coaches break down complex strategies into easy-to-digest tactical patterns.",
    icon: Lightbulb,
    image: "/join.png",
    color: "bg-amber-50"
  },
  {
    number: "03",
    title: "Real-Time Practice",
    desc: "Solve curated puzzles and play practice games against peers of the same skill level while the coach observes your thought process.",
    icon: Gamepad2,
    image: "/practice.jpg",
    color: "bg-emerald-50"
  },
  {
    number: "04",
    title: "Instant Feedback",
    desc: "Immediate move-by-move analysis. We don't just tell you what's wrong; we explain the 'Why' behind every mistake.",
    icon: MessageSquareQuote,
    image: "/dash.webp",
    color: "bg-purple-50"
  },
  {
    number: "05",
    title: "Track Progress",
    desc: "Receive a detailed performance report after every session. Monitor your rating growth and tactical accuracy through our dashboard.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    color: "bg-rose-50"
  }
];

const HowOnlineClassesWork = () => {
  return (
    <section className="py-16 md:py-32 bg-[#fafcfc] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
             <div className="h-[2px] w-8 md:w-12 bg-[#008d96]"></div>
             <span className="text-[#008d96] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">
                The Roadmap
             </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-[1000] text-slate-900 tracking-tighter uppercase leading-none">
            How Online <br />
            <span style={{ color: BRAND_TEAL }}>Classes Work.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line Connector - Visible on all screens, adjusted for mobile icon center */}
          <div className="absolute left-[27px] md:left-[31px] top-0 bottom-0 w-[2px] bg-slate-200 z-0"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col lg:flex-row items-start gap-6 md:gap-16"
              >
                {/* Step Number & Icon Circle */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border-2 border-slate-100 shadow-lg group shrink-0">
                  <step.icon className="text-slate-400 group-hover:text-[#008d96] transition-colors" size={24} />
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-slate-900 text-white text-[9px] md:text-[10px] font-black rounded-md">
                    {step.number}
                  </span>
                </div>

                {/* Content Block */}
                <div className="flex-1 pl-4 md:pl-0">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                    
                    {/* Text Area */}
                    <div className="lg:max-w-md">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight flex items-center gap-2">
                        {step.title}
                        <ChevronRight size={18} className="text-[#008d96] hidden md:block" />
                      </h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-lg mb-6 lg:mb-0">
                        {step.desc}
                      </p>
                    </div>

                    {/* Image Area */}
                    <div className="w-full lg:w-[380px] h-48 md:h-64 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl relative border border-slate-100">
                      <div className={`absolute inset-0 opacity-10 ${step.color}`}></div>
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      {/* Subtle Mobile Overlay Number */}
                      <span className="absolute bottom-2 right-4 text-4xl font-black text-black/5 pointer-events-none lg:hidden">
                        {step.number}
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Bottom CTA */}
        <div className="mt-16 md:hidden">
            <button className="w-full py-5 bg-[#008d96] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg">
                Book a Free Demo Class
            </button>
        </div>

      </div>
    </section>
  );
};

export default HowOnlineClassesWork;