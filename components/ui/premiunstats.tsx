"use client";
import React from "react";
import { Trophy, Users, Target, Award } from "lucide-react";

export default function PremiumStats() {
  const stats = [
    { 
      value: "100+", 
      label: "Tournament Champions", 
      icon: Trophy,
      color: "text-amber-600",
      bg: "bg-amber-50" 
    },
    { 
      value: "20+", 
      label: "Expert Coaches", 
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50" 
    },
    { 
      value: "21+", 
      label: "Tournaments Won", 
      icon: Target,
      color: "text-emerald-600",
      bg: "bg-emerald-50" 
    },
    { 
      value: "20+", 
      label: "Years of Experience", 
      icon: Award,
      color: "text-indigo-600",
      bg: "bg-indigo-50" 
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration to prevent it looking "flat" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-slate-50/50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500"
            >
              {/* Icon with a proper container */}
              <div className={`w-14 h-14 md:w-16 md:h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon size={28} strokeWidth={2.5} />
              </div>
              
              {/* Value with better typography */}
              <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </div>
              
              {/* Label with better spacing */}
              <div className="text-slate-500 font-semibold text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </div>

              {/* Subtle hover decoration */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}