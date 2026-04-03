"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  ArrowUp,
  MessageCircle,
  Trophy,
  MapPin,
  Star,
  Moon,
  Cloud,
  ChevronRight,
  Globe,
  ShieldCheck
} from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/dsquarechessacademy?igsh=MXMwaDZieGhqaHpiNQ==" },
  { icon: Facebook, href: "https://facebook.com/yourpage" },
];

const countries = [
  "INDIA", "USA", "MIDDLE EAST", "SINGAPORE", "UAE", 
  "UNITED KINGDOM", "AUSTRALIA", "CANADA", "EUROPEAN UNION"
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Achievements", href: "/achievements" },
  ];

  const academyLinks = [
    { name: "Curriculum", href: "/curriculum" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a191a] to-[#040d0d] text-white overflow-hidden font-sans border-t border-[#008d96]/30">
      
      {/* =======================
          VISUAL DECORATION (Replaced Owl)
         ======================= */}
      
      {/* Majestic Chess King Graphic */}
      <div className="absolute top-0 right-10 md:right-20 z-0 pointer-events-none opacity-40 hidden sm:block">
        <div className="relative w-40 h-40 animate-float-slow">
           <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#008d96]">
              <path d="M5 22H19M7 18H17M12 18V15M12 7V3M10 5H14M8 15C8 15 7 11 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 11 16 15 16 15H8Z" stroke="currentColor" strokeWidth="1" />
              <path d="M12 11V13" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
           </svg>
        </div>
      </div>

      {/* Twinkling Stars & Clouds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none">
        <Star size={12} className="absolute top-10 left-10 text-yellow-300 animate-twinkle" fill="currentColor" />
        <Star size={8} className="absolute top-40 right-40 text-yellow-200 animate-twinkle delay-700" fill="currentColor" />
        <Star size={16} className="absolute bottom-20 left-20 text-yellow-400 animate-twinkle delay-300" fill="currentColor" />
        <Cloud size={64} fill="white" className="absolute top-10 right-1/3 opacity-5 animate-pulse-slow" />
        <Moon size={24} className="absolute top-8 left-1/4 text-yellow-100 opacity-20 rotate-12" fill="currentColor" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
               <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <img src="/logo3.png" alt="D'Square" className="w-11 h-11 object-contain" />
               </div>
               <div>
                  <h3 className="text-xl font-black text-white tracking-tight">D’Square</h3>
                  <p className="text-[9px] font-bold text-[#00b4bf] tracking-widest uppercase">Chess Academy</p>
               </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Logic-driven coaching shaping young minds across the globe. Join the movement of elite chess players.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#008d96] hover:text-white transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
             <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
               <span className="w-4 h-0.5 bg-[#008d96]"></span>
               Navigation
             </h4>
             <ul className="space-y-3">
                {quickLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="flex items-center gap-2 text-slate-400 hover:text-[#00b4bf] transition-all text-xs font-bold">
                         <ChevronRight size={12} className="text-[#008d96]" />
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 3: Online Chess (NEW) */}
          <div>
             <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
               <span className="w-4 h-0.5 bg-blue-500"></span>
               Online Chess
             </h4>
             <ul className="grid grid-cols-1 gap-2">
                {countries.map(country => (
                   <li key={country}>
                      <a href="/contact" className="flex items-center gap-2 text-slate-400 hover:text-[#00b4bf] transition-all text-[11px] font-bold group">
                         <Globe size={12} className="text-blue-500 group-hover:rotate-12 transition-transform" />
                         {country}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 4: Learning */}
          <div>
             <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
               <span className="w-4 h-0.5 bg-yellow-500"></span>
               Learning
             </h4>
             <ul className="space-y-3">
                {academyLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="flex items-center gap-2 text-slate-400 hover:text-[#00b4bf] transition-all text-xs font-bold">
                         <ChevronRight size={12} className="text-yellow-500" />
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
             <h4 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
               <span className="w-4 h-0.5 bg-[#00b4bf]"></span>
               Contact
             </h4>
             <div className="space-y-4">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                   <p className="text-[10px] text-slate-400 leading-relaxed">
                       <span className="font-bold text-white block mb-1">Main Centers</span>
                       Pune & Nashik, India
                   </p>
                </div>
                <div className="space-y-2">
                    <a href="tel:+919588617808" className="text-xs font-bold text-slate-300 hover:text-[#00b4bf] flex items-center gap-2">
                        <Phone size={12} /> +91 95886 17808
                    </a>
                    <a href="mailto:info@dsquare.com" className="text-xs font-bold text-slate-300 hover:text-[#00b4bf] flex items-center gap-2">
                        <Mail size={12} /> info@dsquare.com
                    </a>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 bg-black/40 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                 © {new Date().getFullYear()} D’Square Chess Academy.
              </p>
              <p className="text-[9px] text-slate-600 uppercase tracking-widest mt-1">
                  Built by <a href="https://wa.me/917851988964" className="text-[#008d96] font-black">jinesh mehta</a>
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase">
                <div className="flex items-center gap-1 text-[#008d96]">
                    <ShieldCheck size={12} />
                    <span>Certified Training</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                    <Trophy size={12} />
                    <span>Est. 2015</span>
                </div>
            </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <a
         href="https://wa.me/919588617808"
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all"
      >
         <MessageCircle size={20} fill="currentColor" />
         <span className="font-black text-[10px] uppercase tracking-widest">Chat with Coach</span>
      </a>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-white text-[#0a191a] rounded-full shadow-2xl transition-all ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <ArrowUp size={20} strokeWidth={3} />
      </button>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}