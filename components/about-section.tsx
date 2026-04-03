"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import { 
  Globe2, 
  Target, 
  Users2, 
  Award, 
  BookOpen, 
  Cpu,
  ShieldCheck,
  Trophy
} from "lucide-react";

const BRAND_TEAL = "#008d96";

export default function AboutSection() {
  const features = [
    {
      icon: Cpu,
      title: "Analytical Excellence",
      description: "Rooted in engineering backgrounds, we bring a highly logical and structured approach to chess.",
    },
    {
      icon: Globe2,
      title: "Global Community",
      description: "Proudly training students across 50+ countries, creating a diverse international learning environment.",
    },
    {
      icon: Target,
      title: "Strategic Impact",
      description: "Our goal is to make chess accessible, engaging, and impactful for students worldwide.",
    },
    {
      icon: ShieldCheck,
      title: "Proven Foundation",
      description: "Founded in 2015, we have a decade of experience in shaping young minds through competitive play.",
    },
  ];

  const stats = [
    { label: "Countries Reached", value: "50+", icon: Globe2 },
    { label: "Years of Excellence", value: "8+", icon: Trophy },
    { label: "Global Students", value: "1000+", icon: Users2 },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* --- Main Story Section --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
               <img
                src="/chess-academy-instructor-teaching-students.jpg" // Ensure this image exists or replace
                alt="D'Square Academy Training"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
              />
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#f0fafb] rounded-full -z-10 blur-3xl opacity-60"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="h-[2px] w-12 bg-[#008d96]"></div>
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-xs">Our Legacy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
              From Passion to a <span style={{ color: BRAND_TEAL }}>Global Mission.</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>
                D’Square Chess Academy was founded in 2015 by a passionate group of coaches who believe 
                that chess is more than just a game—it is a powerful tool to shape young minds. 
              </p>
              <p>
                While we come from <span className="text-slate-900 font-bold">engineering backgrounds</span>, 
                our true calling has always been chess. What started as a passion has now transformed into 
                a global mission.
              </p>
              <p>
                Today, we proudly train students from over <span style={{ color: BRAND_TEAL }} className="font-black underline decoration-2 underline-offset-4">50 countries</span> through 
                our online platform, creating a truly global learning environment where young minds connect, 
                compete, and grow together.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-100">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Core Values Section --- */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black text-slate-900 mb-4">The D’Square Belief</h3>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Every child deserves the opportunity to learn and benefit from chess. 
            We reimagined the traditional chess learning experience to develop a strong foundation for future success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 rounded-[2.5rem] bg-slate-50 border-none hover:bg-white hover:shadow-xl hover:shadow-[#008d96]/10 transition-all duration-500 group"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                style={{ backgroundColor: 'white', color: BRAND_TEAL, boxShadow: '0 10px 30px -10px rgba(0,141,150,0.2)' }}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="font-black text-slate-900 mb-3 text-xl">{feature.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}