"use client";

import React from 'react';
import { 
  Eye, 
  Target, 
  Heart, 
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
    <section className="py-12 md:py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* --- Vision & Mission Row --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {/* Vision Card */}
          <div className="relative p-8 md:p-10 rounded-[2rem] md:rounded-[3.5rem] bg-slate-50 border border-slate-100 group hover:shadow-xl transition-all duration-500">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#008d96]">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              Our <span style={{ color: BRAND_TEAL }}>Vision</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              To make chess a part of every child’s learning journey and empower them with 
              critical thinking, discipline, and confidence through the game.
            </p>
            {/* Decorative Icon - Hidden on mobile to keep it clean */}
            <div className="absolute top-6 right-8 text-slate-200/50 group-hover:text-[#008d96]/10 transition-colors pointer-events-none hidden lg:block">
              <Eye size={120} strokeWidth={1} />
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 text-[#00b4bf]">
                <Target size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-6">Our Mission</h2>
              <ul className="space-y-3 md:space-y-4">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#00b4bf] mt-1 shrink-0" />
                    <span className="text-sm md:text-base text-slate-300 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-[#008d96] opacity-20 blur-[60px] md:blur-[80px]"></div>
          </div>
        </div>

        {/* --- Why Chess Matters (Benefits Grid) --- */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <div className="flex items-center gap-2 mb-3">
               <div className="h-[2px] w-6 md:w-8 bg-[#008d96]"></div>
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">The Impact</span>
               <div className="h-[2px] w-6 md:w-8 bg-[#008d96]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              🚀 Why <span style={{ color: BRAND_TEAL }}>Chess Matters</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 hover:border-[#008d96]/30 hover:bg-[#f0fafb]/50 transition-all group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 text-slate-400 group-hover:bg-[#008d96] group-hover:text-white transition-all">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Beyond the Board (Split Text & Image) --- */}
        <div className="relative rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-[#f0fafb] border border-[#008d96]/10 mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            
            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm">
                  <Heart size={18} fill="currentColor" />
                </div>
                <span className="text-[#008d96] font-black uppercase tracking-widest text-[10px] md:text-sm">Social Responsibility</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6">Beyond the Board</h2>
              
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">
                At D’Square Chess Academy, we believe in giving back to society. Along with our regular programs, 
                we actively run social initiatives to introduce chess to <span className="text-slate-900 font-bold">underprivileged children and communities</span>, 
                ensuring that financial limitations never become a barrier to learning.
              </p>

              <div className="flex items-center gap-4 p-3 md:p-4 bg-white/60 rounded-xl md:rounded-2xl border border-white self-start">
                <Globe className="text-[#008d96]" size={20} />
                <p className="text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Inclusivity at our core</p>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative min-h-[300px] md:min-h-[450px] lg:min-h-full order-1 lg:order-2">
              <img 
                src="/13.jpeg" 
                alt="Social Initiative - D'Square Academy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Image Overlay Badge - Hidden on small mobile to save space */}
              <div className="absolute bottom-6 right-6 left-6 md:bottom-8 md:left-8 md:right-8 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-white/50 hidden sm:block">
                 <p className="text-[#008d96] font-black text-[10px] md:text-xs uppercase tracking-widest mb-1">Empowering Lives</p>
                 <p className="text-slate-900 font-bold text-xs md:text-sm leading-snug">
                   Chess is a language of logic that belongs to everyone, regardless of their background.
                 </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- Commitment Footer --- */}
        <div className="text-center bg-slate-50 rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 border border-dashed border-slate-200">
           <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-md text-[#008d96] mb-6">
              {/* w-7 is 28px, md:w-9 is 36px */}
<ShieldCheck className="w-7 h-7 md:w-9 md:h-9" />
           </div>
           <h2 className="text-xl md:text-3xl font-black text-slate-900 max-w-4xl mx-auto leading-tight px-2">
            🌟 <span style={{ color: BRAND_TEAL }}>Our Commitment:</span> We are not just building chess players—we are shaping thinkers, leaders, and confident individuals ready to face the challenges of the real world.
           </h2>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;