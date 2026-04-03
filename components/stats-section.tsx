"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Plus, Minus, ArrowRight } from "lucide-react";

// --- FAQ Data from your file (First 4 Questions) ---
const faqData = [
  {
    question: "What is the right age to start learning chess?",
    answer:
      "Children can start learning chess as early as 4–5 years old. At D’Square Chess Academy, we use age-appropriate methods to make learning fun and engaging for young kids.",
  },
  {
    question: "My child is a complete beginner. Can they join?",
    answer:
      "Absolutely! Our Beginner Level is specially designed for students who have no prior knowledge of chess. We start from the basics and gradually build their skills.",
  },
  {
    question: "Are online classes effective for learning chess?",
    answer:
      "Yes! Our online classes are highly interactive, using advanced tools, digital boards, and structured curriculum, making them as effective as offline learning.",
  },
  {
    question: "How many students are there in one batch?",
    answer:
      "We keep small batch sizes (5–6 students) to ensure personal attention and better learning outcomes.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const BRAND_TEAL = "#008d96";

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-[#f0f9fa] border border-[#008d96]/20 mb-4">
            <span className="text-[#008d96] font-black text-[10px] uppercase tracking-widest">
              D’Square Support
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* --- Accordion List --- */}
        <div className="space-y-4 mb-10">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-300 rounded-2xl border-l-[6px] ${
                openIndex === index 
                ? "bg-[#f8fafc] border-[#008d96] shadow-md" 
                : "bg-white border-slate-100 hover:border-[#008d96]/30 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 md:p-7 text-left focus:outline-none"
              >
                <span className={`text-base md:text-xl font-bold transition-colors ${
                  openIndex === index ? "text-[#008d96]" : "text-slate-700"
                }`}>
                  {item.question}
                </span>
                
                {/* Circular Chevron Button */}
                <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                  ? "bg-[#008d96] text-white rotate-180" 
                  : "bg-slate-100 text-slate-400 group-hover:bg-[#008d96]/10"
                }`}>
                  <ChevronDown size={20} strokeWidth={3} />
                </div>
              </button>
              
              {/* Animated Answer */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index 
                    ? "max-h-[300px] opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-6 md:px-7 md:pb-8">
                  <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed border-t border-slate-200/60 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- View More Button --- */}
        <div className="flex justify-center">
          <Link href="/faq">
            <button 
              className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#008d96] hover:scale-105 transition-all shadow-xl shadow-slate-200"
            >
              View All Questions
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}