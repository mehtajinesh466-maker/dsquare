"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Clock, Target, Trophy, Star, Crown, Flame, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const courseData = [
  {
    level: "Level 1",
    title: "Beginner",
    duration: "4 Months",
    image: "/101.jpg",
    description: "Designed for students who are completely new to chess. This course builds a strong foundation from scratch.",
    features: [
      "Rules of chess & piece movements",
      "Basic checkmates & objectives",
      "Intro to openings & endgames",
      "Basic tactics (fork, pin, skewer)",
      "Board vision & planning"
    ],
    outcome: "Play complete games confidently",
    theme: "#008d96", // Teal
    bgLight: "bg-teal-50/50",
    icon: <Star size={18} />
  },
  {
    level: "Level 2",
    title: "Advanced Beginner",
    duration: "4-5 Months",
    image: "/102.jpg",
    description: "Students apply knowledge in real games and develop tactical awareness through structured play.",
    features: [
      "Stronger opening principles",
      "Tactical combos in real games",
      "Basic positional understanding",
      "Game analysis & identification",
      "Improved match-play thinking"
    ],
    outcome: "Structured games & tactical awareness",
    theme: "#0ea5e9", // Sky
    bgLight: "bg-sky-50/50",
    icon: <Target size={18} />
  },
  {
    level: "Level 3",
    title: "Intermediate 1",
    duration: "5-6 Months",
    image: "/103.webp",
    description: "Focused on preparing students for competitive tournaments and reaching sub-1500 ratings.",
    features: [
      "Advanced tactical patterns",
      "Tournament strategies",
      "Time management skills",
      "Opening repertoire basics",
      "Better game execution"
    ],
    outcome: "Ready for sub-1500 tournaments",
    theme: "#6366f1", // Indigo
    bgLight: "bg-indigo-50/50",
    icon: <Trophy size={18} />
  },
  {
    level: "Level 4",
    title: "Intermediate 2",
    duration: "6 Months",
    image: "/104.jpg",
    description: "Prepares students for offline rated tournaments and provides deeper strategic game understanding.",
    features: [
      "Opening prep strategies",
      "Middlegame & positional play",
      "Endgame techniques",
      "Tournament mindset",
      "Competitive environment prep"
    ],
    outcome: "Compete in offline rated events",
    theme: "#a855f7", // Purple
    bgLight: "bg-purple-50/50",
    icon: <Crown size={18} />
  },
  {
    level: "Level 5",
    title: "Advanced",
    duration: "Ongoing",
    image: "/105.jpg",
    description: "For serious players aiming to increase rating and compete at high professional levels.",
    features: [
      "Advanced opening repertoires",
      "Deep game analysis",
      "Opponent-based strategies",
      "Psychological edge",
      "Professional understanding"
    ],
    outcome: "High-level rating & mastery",
    theme: "#1e293b", // Slate
    bgLight: "bg-slate-100/50",
    icon: <Flame size={18} />
  },
  {
    level: "Special",
    title: "Personal (1:1)",
    duration: "Flexible",
    image: "/106.webp",
    description: "A highly personalized training program designed to accelerate progress based on your unique goals.",
    features: [
      "Customized training plan",
      "Deep analysis of personal games",
      "Targeted improvement areas",
      "Flexible tactical focus",
      "Goal-oriented coaching"
    ],
    outcome: "Maximum growth potential",
    theme: "#f97316", // Orange
    bgLight: "bg-orange-50/50",
    icon: <Sparkles size={18} />
  },
];
import { useDemoModal } from "@/context/DemoContext";

export default function CoursesSection() {
  const { openDemoModal } = useDemoModal();

  const BRAND_TEAL = "#008d96";

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-slate-50 font-black text-6xl md:text-[10rem] select-none -z-10 tracking-tighter opacity-60">
            CURRICULUM
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] mb-4 shadow-sm">
            <BookOpen size={12} className="text-[#008d96]" />
            Structured Learning Path
          </div>
          
          <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 leading-[1] tracking-tighter uppercase italic mb-6">
            CHAMPIONSHIP <br />
            <span style={{ color: BRAND_TEAL }} className="not-italic">LEVELS.</span>
          </h2>
          
          <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            From absolute basics to advanced competitive play, our logic-driven modules are designed to build champions step-by-step.
          </p>
        </div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {courseData.map((course, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col h-full bg-white rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full mb-8">
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 border border-slate-50">
                   <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                </div>
                
                {/* Floating Level Label */}
                <div className="absolute -bottom-6 left-8 flex items-center gap-3 bg-white p-2 rounded-2xl shadow-xl border border-slate-50">
                   <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: course.theme }}>
                      {course.icon}
                   </div>
                   <div className="pr-4">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{course.level}</p>
                      <p className="text-[11px] font-black text-slate-900 uppercase tracking-tighter">Certified Course</p>
                   </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Clock size={12} /> {course.duration}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex-grow px-4 flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tighter uppercase italic group-hover:text-[#008d96] transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-500 text-[14px] font-medium leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Features List */}
                <div className={`${course.bgLight} rounded-[2rem] p-6 mb-0 border border-slate-100/30 flex-grow`}>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">What You Will Learn</p>
                  <ul className="space-y-3.5">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${course.theme}20` }}>
                           <CheckCircle2 size={11} style={{ color: course.theme }} />
                        </div>
                        <span className="text-slate-700 font-bold text-[13px] leading-tight tracking-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                   <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Outcome</p>
                      <p className="text-slate-900 font-black text-[11px] uppercase tracking-tight max-w-[180px]">
                        {course.outcome}
                      </p>
                   </div>
                   
                   <Button

  onClick={openDemoModal}
  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-105 active:scale-90 shadow-lg"
  style={{ 
    backgroundColor: course.theme,
    boxShadow: `0 10px 25px -5px ${course.theme}50`
  }}
>
  <ArrowRight size={20} strokeWidth={3} />
</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}