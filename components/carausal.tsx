"use client";

import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, src: "/12.jpeg", alt: "Tournament Prize Ceremony" },
  { id: 2, src: "/16.jpeg", alt: "Intense Training Session" },
  { id: 3, src: "/17.jpeg", alt: "FIDE rated event" },
  { id: 4, src: "/18.jpeg", alt: "Strategy Workshop" },
  { id: 5, src: "/19.jpeg", alt: "Victory Celebration" },
  { id: 6, src: "/20.jpeg", alt: "Classroom Focus" },
  { id: 7, src: "/21.jpeg", alt: "Award Ceremony" },
  { id: 8, src: "/22.jpeg", alt: "Champion Moment" },
];

// Duplicate images for a seamless infinite loop
const loopImages = [...galleryImages, ...galleryImages];

export default function PhotoHighlights() {
  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#008d96]"></div>
          <span className="text-[#008d96] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Academy Life
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tighter">
          VISUAL <span className="text-slate-200 not-italic">EVIDENCE.</span>
        </h2>
      </div>

      {/* --- CAROUSEL WRAPPER --- */}
      <div className="relative">
        {/* Left & Right Gradient Fades for a "Studio" look */}

        {/* --- INFINITE SCROLL TRACK --- */}
        <motion.div 
          className="flex gap-4 md:gap-6 w-fit"
          animate={{
            x: [0, -1920], // Adjust this based on total width of one set of images
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // Increase for slower, more professional motion
              ease: "linear",
            },
          }}
        >
          {loopImages.map((image, idx) => (
            <div 
              key={idx} 
              className="relative shrink-0 w-[280px] md:w-[400px] aspect-[6/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-slate-100 group shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              
            </div>
          ))}
        </motion.div>
      </div>

      {/* Optional: Descriptive Footer bar */}
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
           <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
             © D’Square Archive: 2015 — Present
           </p>
           <div className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#008d96]" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
           </div>
        </div>
      </div>
    </section>
  );
}