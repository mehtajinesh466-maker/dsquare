"use client";

import React from "react";
import { Globe, Users, Trophy, GraduationCap } from "lucide-react";

const BRAND_TEAL = "#008d96";

const stats = [
  {
    number: "50+",
    label: "Global Countries",
    icon: <Globe size={32} />,
  },
  {
    number: "1500+",
    label: "Students Trained",
    icon: <Users size={32} />,
  },
  {
    number: "25+",
    label: "FIDE Rated Students",
    icon: <GraduationCap size={32} />,
  },
  {
    number: "9+",
    label: "Years Excellence",
    icon: <Trophy size={32} />,
  },
];

export default function AcademyStats() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpeg')" }} // Add your background image here
      >
        {/* Deep Teal Overlay (Matches your brand) */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{ backgroundColor: BRAND_TEAL }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              {/* Organic Orange Blob Icon */}
              <div className="relative mb-6">
                {/* The "Blob" Shape */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  {stat.icon}
                </div>
                
                {/* Decorative White Ring around blob */}
                <div className="absolute -inset-2 border-2 border-white/30 rounded-[70%_30%_30%_70%/70%_70%_30%_30%] -z-10 animate-pulse"></div>
              </div>

              {/* Stat Number */}
              <h3 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
                {stat.number}
              </h3>

              {/* Label */}
              <div className="flex items-center gap-2">
                <span className="text-orange-400 font-bold text-lg">+</span>
                <p className="text-white/90 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}