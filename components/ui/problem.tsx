"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertCircle, Target, TrendingUp, UserCheck } from 'lucide-react';

const BRAND_TEAL = "#008d96";

const ProblemSolution = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-[1000] text-slate-900 tracking-tighter uppercase mb-4">
            Stop Wandering. <span style={{ color: BRAND_TEAL }}>Start Winning.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Online chess is more than just moving pieces on a screen. It’s about the right guidance at the right time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl">
          
          {/* THE PROBLEM SIDE */}
          <div className="relative p-8 md:p-16 bg-slate-50 group">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 font-black text-[10px] uppercase tracking-widest mb-6">
                <AlertCircle size={14} />
                <span>The Struggle</span>
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
                Why most young <br />players <span className="text-red-500 underline decoration-wavy">plateau.</span>
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <XCircle className="text-red-400 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Kids lose focus easily</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Without a coach, online chess feels like just another video game, leading to short attention spans.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <XCircle className="text-red-400 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Random YouTube learning</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Watching random videos creates "knowledge gaps" and confusion about which concepts to apply.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <XCircle className="text-red-400 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">No structured growth</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Playing hundreds of games without analysis only reinforces bad habits and mistakes.</p>
                  </div>
                </div>
              </div>

              {/* Problem Image */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                className="mt-12 rounded-2xl overflow-hidden grayscale contrast-125 opacity-50 border border-slate-200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                  alt="Frustrated student"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* THE SOLUTION SIDE */}
          <div className="relative p-8 md:p-16 bg-slate-900 text-white">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#008d96]/20 blur-[100px] rounded-full"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008d96]/20 text-[#00e3f0] font-black text-[10px] uppercase tracking-widest mb-6">
                <Target size={14} />
                <span>Our Solution</span>
              </div>
              
              <h3 className="text-3xl font-black mb-8 leading-tight">
                The Guided Path to <br />
                <span style={{ color: BRAND_TEAL }}>Chess Mastery.</span>
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#008d96] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Structured Curriculum</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">A step-by-step roadmap from Beginner to Grandmaster, ensuring no concept is left behind.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#008d96] flex items-center justify-center shrink-0">
                    <UserCheck className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Personal Live Coaching</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Interactive sessions where coaches identify and fix weaknesses in real-time.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#008d96] flex items-center justify-center shrink-0">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Measurable Improvement</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Data-driven progress reports and regular tournament participation to track growth.</p>
                  </div>
                </div>
              </div>

              {/* Solution Image */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                className="mt-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#008d96]/20"
              >
                <img 
                  src="/online1.webp" 
                  alt="Focused chess student"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
          </div>

        </div>

       
      </div>
    </section>
  );
};

export default ProblemSolution;