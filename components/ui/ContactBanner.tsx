"use client";

import React from 'react';
import { ChevronRight, Home, Phone, MapPin } from 'lucide-react';

const ContactHero: React.FC = () => {
  const brandTeal = "#008d96";

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row md:items-center">
      
      {/* --- IMAGE SIDE: order-1 on mobile (Appears first at the TOP) --- */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 order-1 md:order-1 h-[45vh] md:h-screen pt-10 md:pt-0">
        
        {/* "Free" Image */}
        <div className="relative z-10 w-full h-full flex justify-center items-center transform md:-translate-y-2 transition-transform duration-700">
          <img 
            src="/b5.webp " 
            alt="Contact D'Square Chess Academy" 
            className="max-w-full h-auto max-h-full object-contain rounded-2xl"
          />
        </div>

        {/* Minimal background watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-50 font-black text-[20vw] md:text-[15vw] select-none -z-10 opacity-60 uppercase italic">
          HELLO
        </div>
      </div>

      {/* --- TEXT SIDE: order-2 on mobile (Appears BELOW image) --- */}
      <div className="relative w-full md:w-1/2 flex items-center bg-white order-2 md:order-2 px-6 md:px-12 lg:px-20 py-12 md:py-0">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(${brandTeal} 1.2px, transparent 1.2px)`, backgroundSize: '35px 35px' }}>
        </div>

        <div className="relative z-10 w-full max-w-xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6 md:mb-10">
            <a href="/" className="hover:text-[#008d96] flex items-center gap-1.5 transition-colors group">
              <Home size={12} className="group-hover:-translate-y-0.5 transition-transform" /> HOME
            </a>
            <span className="w-1 h-1 rounded-full bg-[#008d96]"></span>
            <span className="text-[#008d96]">CONTACT US</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic mb-6 md:mb-8">
            CONNECT <br />
            <span style={{ color: brandTeal }} className="not-italic">WITH US</span>
          </h1>

          {/* Description */}
          <div className="relative mb-10 md:mb-14">
            <p className="text-slate-500 text-sm md:text-xl font-medium leading-relaxed max-w-md">
              Ready to start your strategic journey? Whether you have questions about our 
              curriculum or want a free assessment, our team is just one move away.
            </p>
            {/* Smooth side accent line */}
            <div className="absolute top-0 -left-6 bottom-0 w-1 bg-gradient-to-b from-[#008d96] to-transparent rounded-full opacity-30"></div>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-6 mb-12">
             <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#e6f4f5] flex items-center justify-center text-[#008d96] transition-all group-hover:bg-[#008d96] group-hover:text-white group-hover:-translate-y-1 shrink-0">
                   <Phone size={20} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Call / WhatsApp</p>
                   <p className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#008d96] transition-colors tracking-tight">+91 95886 17808</p>
                </div>
             </div>
             
             <div className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#fff7ed] flex items-center justify-center text-orange-500 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:-translate-y-1 shrink-0">
                   <MapPin size={20} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Our Centers</p>
                   <p className="text-sm md:text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight">Pune & Nashik, Maharashtra</p>
                </div>
             </div>
          </div>

      
        </div>

        {/* Decorative Side Progress Bar - Hidden on mobile */}
        <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-slate-50 hidden md:block">
           <div className="h-full w-full bg-gradient-to-b from-[#008d96] via-[#00b4bf] to-slate-200 rounded-b-full opacity-50"></div>
        </div>
        
        {/* Background Page Number - Hidden on mobile */}
        <div className="absolute bottom-12 right-12 hidden lg:block -z-10">
           <p className="text-[140px] font-black text-slate-50 leading-none select-none tracking-tighter">04</p>
        </div>
      </div>

    </section>
  );
};

export default ContactHero;