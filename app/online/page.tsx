"use client";

import React from 'react';
import { 
  Globe2, 
  Monitor, 
  Video, 
  Binary, 
  Layout, 
  Gamepad2, 
  LineChart, 
  Users2, 
  Puzzle, 
  Brain, 
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Laptop
} from 'lucide-react';
import { motion } from 'framer-motion';

const BRAND_TEAL = "#008d96";

const OnlineClassesPage = () => {
  const conductSteps = [
    { icon: Video, title: "Live Sessions", desc: "Interactive classes conducted by expert coaches in real-time." },
    { icon: Binary, title: "Advanced Software", desc: "Real-time analysis using professional chess engines and tools." },
    { icon: Layout, title: "Digital Boards", desc: "Clear explanations and demonstrations on high-definition boards." },
    { icon: Gamepad2, title: "Practice Games", desc: "Regular matches, assignments, and instant move-by-move feedback." },
    { icon: LineChart, title: "Performance Tracking", desc: "Continuous monitoring and data-driven improvement guidance." },
  ];

  const globalCountries = [
    "USA", "UK", "UAE", "Australia", "Singapore", "New Zealand", "Canada", 
    "Dubai", "Switzerland", "Oman", "Qatar", "Saudi Arabia", "Bahrain", "Kuwait"
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#008d96]/20 pt-16">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#008d96 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008d96]/10 border border-[#008d96]/20 text-[#00b4bf] font-black text-xs uppercase tracking-widest mb-8"
          >
            <Globe2 size={14} />
            <span>Virtual Grandmaster Hub</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-[1000] text-white leading-tight tracking-tighter mb-8">
            LEARN CHESS FROM <br />
            <span style={{ color: BRAND_TEAL }}>ANYWHERE ON EARTH.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Experience high-quality, interactive coaching designed for the digital age. 
            We have successfully trained <span className="text-white font-bold">1500+ students worldwide</span>, 
            bridging the gap between technology and traditional mastery.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
             <div className="px-8 py-4 bg-[#008d96] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-[#008d96]/30">
                Book a Free Online Demo
             </div>
             <div className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs backdrop-blur-md">
                View Global Schedules
             </div>
          </div>
        </div>
      </section>

      {/* --- HOW WE CONDUCT CLASSES --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                How We Conduct <br />
                <span style={{ color: BRAND_TEAL }}>Our Sessions.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                Using advanced chess training software and real-time analysis, we ensure online 
                learning is as effective as sitting across the board from a coach.
              </p>
              <div className="mt-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#008d96]">
                       <Laptop size={24} />
                    </div>
                    <p className="font-bold text-slate-800 italic leading-snug">"Seamless technology for an uninterrupted learning journey."</p>
                 </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {conductSteps.map((step, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group">
                  <step.icon className="text-[#008d96] mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-black text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SMALL BATCH & SMART LEARNING --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Small Batch Card */}
            <div className="p-10 md:p-16 rounded-[3rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden">
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-[#f0fafb] flex items-center justify-center text-[#008d96] mb-8">
                    <Users2 size={32} />
                 </div>
                 <h2 className="text-3xl font-black text-slate-900 mb-6">Small Batch <br/>Advantage</h2>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle size={18} className="text-[#008d96]" /> Small size (5–6 students per class)
                    </li>
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle size={18} className="text-[#008d96]" /> Grouping based on skill levels
                    </li>
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle size={18} className="text-[#008d96]" /> Active participation & doubt solving
                    </li>
                 </ul>
               </div>
               <Users2 className="absolute -bottom-10 -right-10 text-slate-50 w-64 h-64 -z-0" />
            </div>

            {/* Smart Learning Card */}
            <div className="p-10 md:p-16 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#00b4bf] mb-8">
                    <Brain size={32} />
                 </div>
                 <h2 className="text-3xl font-black mb-6">Smart Learning <br/>Approach</h2>
                 <p className="text-slate-400 font-medium mb-8">
                    Access to a curated database of chess puzzles tailored to each student's specific level and weaknesses.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <p className="text-[#00b4bf] font-black text-xl">Tactics</p>
                       <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Focus Area</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <p className="text-[#00b4bf] font-black text-xl">Logic</p>
                       <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Mental Training</p>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- GLOBAL ENVIRONMENT --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">A Truly Global Classroom</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
              Our virtual academy brings together young thinkers from across 15+ major countries, 
              providing international exposure and diverse competition.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {globalCountries.map((country, i) => (
              <div key={i} className="px-6 py-3 bg-slate-50 rounded-xl border border-slate-100 font-black text-slate-700 text-sm uppercase tracking-widest hover:bg-[#008d96] hover:text-white transition-all cursor-default shadow-sm hover:shadow-lg hover:shadow-[#008d96]/20">
                {country}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
             {[
               "Compete with international peers",
               "Learn diverse playing styles",
               "Build confidence in a global arena"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-4 p-6 bg-[#f0fafb] rounded-[2rem] border border-[#008d96]/10">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#008d96] shadow-sm shrink-0">
                     <ArrowRight size={20} />
                  </div>
                  <p className="font-black text-slate-800 uppercase tracking-tight text-sm">{text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#008d96] rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#008d96]/40">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Ready to make your <br/>first move?
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                 <button className="px-10 py-5 bg-white text-[#008d96] rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-transform hover:scale-105 active:scale-95">
                    Start Learning Now
                 </button>
              </div>
              <p className="mt-8 text-white/70 font-bold uppercase tracking-widest text-[10px]">
                Proven track record with international students
              </p>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OnlineClassesPage;