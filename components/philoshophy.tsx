"use client";

import React from 'react';
import { 
  Eye, 
  Target, 
  Heart, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2, 
  Brain, 
  Zap, 
  Users, 
  Timer,
  Globe
} from 'lucide-react';

const BRAND_TEAL = "#008d96";

const PhilosophySection = () => {
  const missionPoints = [
    "Provide high-quality chess education worldwide",
    "Nurture strategic thinking and problem-solving",
    "Make learning simple, structured, and enjoyable",
    "Build a global community of future leaders"
  ];

  const benefits = [
    { icon: Timer, title: "Concentration", desc: "Improving focus and memory retention." },
    { icon: Brain, title: "Logical Thinking", desc: "Enhancing analytical and spatial reasoning." },
    { icon: Zap, title: "Decision Making", desc: "Building patience and calculated risks." },
    { icon: Users, title: "Sportsmanship", desc: "Boosting confidence and resilience." },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* --- Vision & Mission Row --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:shadow-xl transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#008d96]">
              <Eye size={30} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Our <span style={{ color: BRAND_TEAL }}>Vision</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              To make chess a part of every child’s learning journey and empower them with 
              critical thinking, discipline, and confidence through the game.
            </p>
            <div className="absolute top-6 right-8 text-slate-100 group-hover:text-[#008d96]/10 transition-colors pointer-events-none">
              <Eye size={120} strokeWidth={1} />
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 text-[#00b4bf]">
                <Target size={30} />
              </div>
              <h2 className="text-3xl font-black mb-6">Our Mission</h2>
              <ul className="space-y-4">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#00b4bf] mt-1 shrink-0" />
                    <span className="text-slate-300 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#008d96] opacity-20 blur-[80px]"></div>
          </div>
        </div>

        {/* --- Why Chess Matters (Benefits Grid) --- */}
        <div className="mb-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-2 mb-3">
               <div className="h-[2px] w-8 bg-[#008d96]"></div>
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-xs">The Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              🚀 Why <span style={{ color: BRAND_TEAL }}>Chess Matters</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] border border-slate-100 hover:border-[#008d96]/30 hover:bg-[#f0fafb]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 text-slate-400 group-hover:bg-[#008d96] group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Beyond the Board (Split Text & Image) --- */}
        <div className="relative rounded-[3rem] overflow-hidden bg-[#f0fafb] border border-[#008d96]/10 mb-20">
          <div className="grid lg:grid-cols-2 items-stretch">
            
            {/* Left Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm">
                  <Heart size={20} fill="currentColor" />
                </div>
                <span className="text-[#008d96] font-black uppercase tracking-widest text-sm">Social Responsibility</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Beyond the Board</h2>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                At D’Square Chess Academy, we believe in giving back to society. Along with our regular programs, 
                we actively run social initiatives to introduce chess to <strong>underprivileged children and communities</strong>, 
                ensuring that financial limitations never become a barrier to learning.
              </p>

              <div className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-white">
                <Globe className="text-[#008d96]" size={24} />
                <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Inclusivity at our core</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px] lg:min-h-full">
              <img 
                src="/13.jpeg" // REPLACE WITH YOUR IMAGE PATH
                alt="Social Initiative - D'Square Academy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Image Overlay Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/50 hidden md:block">
                 <p className="text-[#008d96] font-black text-xs uppercase tracking-widest mb-1">Empowering Lives</p>
                 <p className="text-slate-900 font-bold text-sm leading-snug">
                   Chess is a language of logic that belongs to everyone, regardless of their background.
                 </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- Commitment Footer --- */}
        <div className="text-center bg-slate-50 rounded-[3rem] p-12 border border-dashed border-slate-200">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md text-[#008d96] mb-6">
              <ShieldCheck size={32} />
           </div>
           <h2 className="text-2xl md:text-3xl font-black text-slate-900 max-w-4xl mx-auto leading-tight">
            🌟 <span style={{ color: BRAND_TEAL }}>Our Commitment:</span> We are not just building chess players—we are shaping thinkers, leaders, and confident individuals ready to face the challenges of the real world.
           </h2>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;