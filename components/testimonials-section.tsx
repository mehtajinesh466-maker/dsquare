"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Quote, 
  Star, 
  Heart,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Eshan Gupta",
    role: "Parent of Student",
    text: "Humble, kind, and truly dedicated. My child loves his classes clear explanations, great patience, and real passion for chess. Amazing progress in just weeks.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=eshan"
  },
  {
    id: 2,
    name: "Shalini Kanth",
    role: "Mother of Lavith (Age 7)",
    text: "Had a great experience with Coach Vivek Singh. He's very passionate towards chess and extremely hardworking with small children.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=shalini"
  },
  {
    id: 3,
    name: "Tarun Aggarwal",
    role: "Father of Student",
    text: "Exceptional. If you want your child to grow fast in chess, you should consider this academy. The logic-driven approach is visible in my son's game.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=tarun"
  }
];

const BRAND_TEAL = "#008d96";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-12 md:py-20 bg-[#f8fafc] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#008d96]/5 rounded-full blur-[80px] md:blur-[100px] -mr-32 -mt-32 md:-mr-48 md:-mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-[#008d96]/5 rounded-full blur-[80px] md:blur-[100px] -ml-32 -mb-32 md:-ml-40 md:-mb-40" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-[#008d96] text-xs font-black uppercase tracking-widest mb-4 md:mb-6">
            <Heart size={14} className="fill-[#008d96]" />
            Wall of Love
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 mb-3 md:mb-4 tracking-tight">
            You're in <span style={{ color: BRAND_TEAL }}>good hands.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-bold px-4">
            Don't just take our word for it. Listen to our global community.
          </p>
        </div>

        {/* --- Animated Card Stack --- */}
        {/* Container height is larger on mobile to prevent text clipping */}
        <div className="relative h-[480px] sm:h-[450px] md:h-[400px] flex items-center justify-center">
          
          {/* Navigation Arrows - Hidden on extra small mobile, smaller on small screens */}
          <button 
            onClick={prevStep}
            className="absolute left-0 md:left-4 z-30 p-2 md:p-3 bg-white rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-[#008d96] transition-all active:scale-90"
            aria-label="Previous"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="relative w-full max-w-2xl h-full flex items-center justify-center touch-pan-y">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 100 : -100,
                    opacity: 0,
                    scale: 0.9,
                    rotate: direction > 0 ? 5 : -5
                  }),
                  center: {
                    zIndex: 20,
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                  },
                  exit: (direction: number) => ({
                    zIndex: 0,
                    x: direction < 0 ? 100 : -100,
                    opacity: 0,
                    scale: 0.9,
                    rotate: direction < 0 ? 5 : -5
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                // Add drag for mobile swipe navigation
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -1000) nextStep();
                    else if (swipe > 1000) prevStep();
                }}
                className="absolute w-full px-2 sm:px-4 cursor-grab active:cursor-grabbing"
              >
                {/* The Review Card */}
                <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-50 relative">
                  <Quote size={40} className="absolute top-4 left-4 md:top-8 md:left-8 text-slate-50 md:scale-150 opacity-10" />
                  
                  <div className="relative z-10">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 leading-relaxed mb-6 md:mb-8 italic">
                      "{testimonials[index].text}"
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-slate-50 pt-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src={testimonials[index].avatar} 
                          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#008d96]/20 p-0.5" 
                          alt={testimonials[index].name} 
                        />
                        <div>
                          <h4 className="text-slate-900 font-black text-sm sm:text-lg leading-tight">{testimonials[index].name}</h4>
                          <p className="text-[#008d96] font-bold text-xs sm:text-sm">{testimonials[index].role}</p>
                        </div>
                      </div>
                      
                      <div className="sm:ml-auto flex gap-0.5 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Background Card (Hidden on mobile for clarity) */}
              <div className="absolute w-[92%] -z-10 bg-white/50 border border-slate-100 h-[90%] rounded-[1.5rem] sm:rounded-[2.5rem] rotate-3 translate-x-2 md:translate-x-4 blur-[0.5px] hidden sm:block" />
            </AnimatePresence>
          </div>

          <button 
            onClick={nextStep}
            className="absolute right-0 md:right-4 z-30 p-2 md:p-3 bg-white rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-[#008d96] transition-all active:scale-90"
            aria-label="Next"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* --- View All Button --- */}
        <div className="flex justify-center mt-6 md:mt-10">
            <Link 
              href="/reviews"
              className="flex items-center gap-2 text-slate-900 font-black text-xs sm:text-sm uppercase tracking-widest hover:text-[#008d96] transition-colors group"
            >
                View More Wall of Love
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

      </div>
    </section>
  );
}