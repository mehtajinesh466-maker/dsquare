"use client";

import React from 'react';

const BRAND_TEAL = "#008d96";

const benefits = [
  {
    title: 'Expert Coaches',
    description: 'FIDE-rated masters with 10+ years of teaching experience.',
    icon: '/stra.png', 
    color: 'bg-amber-400',
    cardBg: 'bg-amber-50/50',
    rotation: 'lg:rotate-[-2deg]',
    offset: 'lg:translate-y-2'
  },
  {
    title: 'Custom Path',
    description: 'Personalized plans tailored for every unique student.',
    icon: '/path.png',
    color: 'bg-violet-500',
    cardBg: 'bg-violet-50/50',
    rotation: 'lg:rotate-[3deg]',
    offset: 'lg:-translate-y-2'
  },
  {
    title: 'Logic Based',
    description: 'Engineering-led focus on structured critical thinking.',
    icon: '/logic.png',
    color: 'bg-emerald-500',
    cardBg: 'bg-emerald-50/50',
    rotation: 'lg:rotate-[-1deg]',
    offset: 'lg:translate-y-4'
  },
  {
    title: 'Global Reach',
    description: 'Connect with young thinkers from 50+ countries.',
    icon: '/map.png',
    color: 'bg-blue-500',
    cardBg: 'bg-blue-50/50',
    rotation: 'lg:rotate-[2deg]',
    offset: 'lg:-translate-y-4'
  },
  {
    title: 'Small Batches',
    description: 'Limited to 5-6 students per batch for personal attention.',
    icon: '/small.png',
    color: 'bg-pink-500',
    cardBg: 'bg-pink-50/50',
    rotation: 'lg:rotate-[-3deg]',
    offset: 'lg:translate-y-2'
  },
  {
    title: 'Proven Success',
    description: 'Consistent winners in state and national tournaments.',
    icon: '/sucess.png',
    color: 'bg-orange-500',
    cardBg: 'bg-orange-50/50',
    rotation: 'lg:rotate-[1deg]',
    offset: 'lg:translate-y-0'
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-white font-sans">
      
      {/* Connecting Lines Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800" fill="none">
          <path 
            d="M150 300 Q 400 100 600 350 T 1050 300 M100 550 Q 450 750 750 450 T 1100 600" 
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="10 10" 
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Header - Compact Sizes */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            Why <span style={{ color: BRAND_TEAL }}>Choose</span> D’Square?
          </h2>
          <p className="text-sm md:text-lg text-slate-500 max-w-xl mx-auto font-bold uppercase tracking-[0.2em] opacity-60">
            Shaping thinkers, one move at a time
          </p>
        </div>

        {/* --- GRID: 2 COL MOBILE, 3 COL DESKTOP --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex justify-center transition-all duration-700 hover:z-20 ${benefit.rotation} ${benefit.offset}`}
            >
              <div className="relative w-full group h-full">
                
                {/* --- CENTERED TOP BLOB --- */}
                <div className={`
                  absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md z-30
                  flex items-center justify-center transition-transform group-hover:scale-110
                  ${benefit.color}
                `}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-[1px]" />
                </div>

                {/* --- MAIN CARD --- */}
                <div className="
                  bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-3 md:p-6 
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] 
                  border border-slate-100 transition-all duration-500 
                  group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)]
                  h-full
                ">
                  
                  {/* TINTED AREA - CENTERED CONTENT */}
                  <div className={`rounded-[1rem] md:rounded-[2rem] p-5 md:p-8 h-full flex flex-col items-center text-center ${benefit.cardBg}`}>
                    
                    {/* Centered Image Icon - User Sizes */}
                    <div className="mb-4 w-14 h-14 md:w-24 md:h-24 flex items-center justify-center">
                      <img 
                        src={benefit.icon} 
                        alt={benefit.title}
                        className="w-full h-full object-contain filter drop-shadow-sm"
                      />
                    </div>

                    <h3 className="text-base md:text-xl font-black text-slate-800 mb-2 md:mb-3 tracking-tight leading-tight">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-[10px] md:text-sm text-slate-500 font-bold leading-relaxed max-w-[200px] md:max-w-none">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-[#e6f7f8] rounded-full blur-[80px] -z-10 opacity-50" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-violet-50 rounded-full blur-[90px] -z-10 opacity-40" />

    </section>
  );
}