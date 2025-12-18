"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Trophy, Medal, Brain, Target, Star, Quote } from "lucide-react"

export default function TeamSection() {
  const achievements = [
    "2017: 1st Rank in All India Below 1600 Chess Championship, Kottayam",
    "2013: 2nd Rank in U.P. (Category Prize) at All India International Rating Tournament",
    "2011: 9th Rank in National U-20 Chess Championship, Udaipur",
    "2011: 4th Rank in U.P. State U-20 Chess Tournament, Ghaziabad",
    "2023: Awarded National Chess Instructor Title",
    "Multiple participations in All India Open tournaments & State championships"
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* TOP SECTION: Split Layout (Image vs Bio) */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* LEFT: Image (Takes up 5 columns) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24" // Keeps image in view if text is long
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white aspect-[3/4]">
                 {/* Replaced with a placeholder closer to a professional headshot aspect ratio */}
                 <Image 
                  src="/viveksir.jpeg" 
                  alt="Vivek Singh" 
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                    <h3 className="text-white text-2xl font-bold">Vivek Singh</h3>
                    <p className="text-purple-200 font-medium">Founder & Head Coach</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-purple-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg text-white">
                  <Star fill="currentColor" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900 leading-none">12+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase">Years Exp.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Bio & Philosophy (Takes up 7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 font-semibold text-sm mb-6">
                <Medal className="w-4 h-4" />
                <span>International Rated Player</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Mastering the Game with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Checkmate Sensei
                </span>
              </h2>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Vivek Singh is an International Chess Player and a dedicated professional chess coach with over 12 years of coaching experience. He has trained students across all levels—from beginners taking their first steps in chess to competitive players participating in state and national-level tournaments.
                </p>
              </div>

              {/* Philosophy Box - Highlights specific teaching style */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 relative">
                <Quote className="absolute top-6 right-6 text-purple-200 w-10 h-10 rotate-180" />
                <h4 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                  Coaching Philosophy
                </h4>
                <p className="text-gray-700 leading-relaxed font-medium">
                  "I focus on building a strong thinking process rather than rote memorization. My goal is to instill deep calculation, visualization, planning, and disciplined decision-making in every student."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM SECTION: Achievements (Full Width Grid) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px bg-gray-200 flex-1"></div>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-amber-500" />
              Achievements & Career Highlights
            </h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item, i) => (
              <div 
                key={i}
                className="group p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-3"
              >
                <div className="mt-1 min-w-[24px]">
                  <Target className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}