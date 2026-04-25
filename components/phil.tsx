"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Brain, Target, Cpu, Crown, Quote, MoveUpRight } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

const BRAND_TEAL = "#008d96";

export default function BalancedChessPhilosophy() {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: THE TACTICAL COLLAGE --- */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 items-end">
              
              {/* Main Vertical Frame */}
              <div className="relative">
                <div className="rounded-t-[100px] rounded-bl-[100px] rounded-br-2xl overflow-hidden h-[380px] md:h-[480px] shadow-2xl border-b-[6px] border-[#008d96]">
                  <img 
                    src="/7.jpeg" 
                    alt="Chess Tactical Session" 
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Floating Rank Badge */}
              
              </div>

              {/* Secondary Frames */}
              <div className="space-y-6">
                {/* Board Vision Circle */}
                <div className="w-36 h-36 md:w-52 md:h-52 rounded-full border-[8px] border-[#e6f7f8] shadow-xl overflow-hidden mx-auto lg:ml-0 group">
                  <img 
                    src="/2.jpeg" 
                    alt="Analytical Focus" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Tournament Entry Image */}
                <div className="rounded-tr-[80px] rounded-bl-[80px] rounded-tl-2xl rounded-br-2xl overflow-hidden h-[200px] md:h-[260px] shadow-lg border-l-8 border-orange-500">
                  <img 
                    src="/8.jpeg" 
                    alt="Tournament Environment" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE STRATEGIC DNA --- */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[3px] bg-orange-500 rounded-full"></div>
                <span className="text-orange-600 font-black uppercase tracking-[0.25em] text-xs md:text-sm">
                  Our Strategic DNA
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Calculated Logic. <br />
                <span style={{ color: BRAND_TEAL }}>Masterful Execution.</span>
              </h2>
              
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                D’Square was built on a simple premise: Chess is the ultimate gymnasium for the mind. Using our <strong>Engineering backgrounds</strong>, we’ve deconstructed the game into a logic-driven curriculum that prepares students to calculate precision lines and dominate the 64 squares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Tactical Advantage Points */}
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="bg-[#e6f7f8] p-3.5 rounded-2xl text-[#008d96] shrink-0 h-fit transition-all group-hover:bg-[#008d96] group-hover:text-white">
                    <Cpu size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Precision Calculation</h4>
                    <p className="text-sm text-slate-500 font-bold leading-snug">Engineering a systematic approach to eliminate tactical blunders.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="bg-[#e6f7f8] p-3.5 rounded-2xl text-[#008d96] shrink-0 h-fit transition-all group-hover:bg-[#008d96] group-hover:text-white">
                    <Crown size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Endgame Mastery</h4>
                    <p className="text-sm text-slate-500 font-bold leading-snug">Converting advantages into wins with professional-grade technique.</p>
                  </div>
                </div>
              </div>

              {/* The "Grandmaster" Quote Box */}
              <div className="bg-slate-900 p-7 md:p-9 rounded-[2.5rem] relative shadow-2xl border-b-8 border-orange-500 lg:mt-0 mt-4">
                <Quote size={40} className="text-white/10 absolute top-4 right-4" />
                <p className="text-white font-bold text-lg leading-relaxed relative z-10 italic">
                  "Every pawn is a potential queen. All it takes is the right sequence of logic."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-orange-500"></div>
                  <span className="text-[10px] font-black uppercase text-orange-200 tracking-[0.2em]">D'Square Philosophy</span>
                </div>
              </div>
            </div>

            {/* CTA & Helpline */}
            <div className="flex flex-col sm:flex-row items-center gap-10 pt-4">
              
  <button 
  onClick={openDemoModal}
    style={{ backgroundColor: BRAND_TEAL }}
    className="group w-full sm:w-auto px-9 py-5 text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 transition-all"
  >
    MAKE YOUR MOVE
    <MoveUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
  </button>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-inner">
                  <Phone size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Master's Helpline</p>
                  <p className="text-xl font-black text-slate-900 leading-none">+91 95886 17808</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}