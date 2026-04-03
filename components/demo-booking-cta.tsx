"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck, Trophy, Brain } from "lucide-react";

const BRAND_TEAL = "#008d96";

const CompactDemoCTA: React.FC = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-white font-sans">
      <div 
        className="max-w-7xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl shadow-[#008d96]/20"
        style={{ backgroundColor: BRAND_TEAL }}
      >
        {/* --- Background Grid Pattern --- */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-compact" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-compact)" />
          </svg>
        </div>

        {/* Changed to flex-col for mobile and grid for desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center relative z-10">
          
          {/* Left Side: Text & CTA */}
          <div className="w-full lg:col-span-7 p-8 md:p-12 lg:p-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4 tracking-tight text-white">
              Ready to Master the <br className="hidden sm:block" />
              64 Squares?
            </h2>
            
            <p className="text-base md:text-lg text-white/80 max-w-md mb-8 font-medium mx-auto lg:mx-0">
              Experience the future of chess education with our engineering-led curriculum. 
              Book your free assessment today!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8">
              <a 
                href="/book-demo"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-black text-base flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-lg active:scale-95"
              >
                Book Free Demo
                <ArrowRight size={18} strokeWidth={3} />
              </a>

              <a 
                href="tel:+918130627389"
                className="flex items-center gap-3 text-white font-bold hover:text-white/80 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-all">
                   <Phone size={18} fill="currentColor" />
                </div>
                <span className="text-sm uppercase tracking-widest">Call a Coach</span>
              </a>
            </div>
          </div>

          {/* Right Side: Compact Image Cards - Now visible on md (tablets) and lg */}
          <div className="w-full lg:col-span-5 relative h-[350px] md:h-[450px] hidden md:flex items-center justify-center overflow-hidden lg:pr-8 pb-10 lg:pb-0">
            
            {/* Background Decorative Card */}
            <div className="absolute w-56 h-72 md:w-60 md:h-80 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 rotate-[-10deg] -translate-x-12 translate-y-6 flex flex-col p-6 text-white/40">
                <Brain size={32} className="mb-4" />
                <div className="h-3 w-24 bg-white/20 rounded-full mb-2" />
                <div className="h-3 w-16 bg-white/20 rounded-full" />
            </div>

            {/* Main Mastery Card with IMAGE */}
            <div className="absolute w-60 h-72 md:w-64 md:h-80 bg-white rounded-[2rem] shadow-2xl rotate-6 translate-x-10 flex flex-col p-5 border border-slate-100 group">
               
               {/* Card Header */}
               <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#008d96] flex items-center justify-center">
                       <Trophy size={12} className="text-white" />
                    </div>
                    <span className="text-slate-900 font-black text-[10px] uppercase tracking-tighter">Mastery Card</span>
                  </div>
                  <ShieldCheck size={16} className="text-[#008d96]" />
               </div>

               {/* --- THE IMAGE AREA --- */}
               <div className="w-full h-28 md:h-32 bg-slate-100 rounded-2xl overflow-hidden mb-4 border border-slate-50 relative">
                  <img 
                    src="/20.jpeg" 
                    alt="Student Mastery"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               </div>

               {/* Card Details */}
               <div className="space-y-3">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Current Level</p>
                    <p className="text-lg font-black text-slate-900 leading-none">Intermediate II</p>
                  </div>

                  <div className="pt-3 border-t border-slate-50">
                    <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] font-bold text-slate-600">Calculated Logic</span>
                        <span className="text-[10px] font-black text-[#008d96]">85%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#008d96] w-[85%]" />
                    </div>
                  </div>
               </div>

               <div className="mt-auto">
                  <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-center">D'Square Chess Academy</p>
               </div>
            </div>

          </div>

        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default CompactDemoCTA;