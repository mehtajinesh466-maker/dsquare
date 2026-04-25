"use client";

import React from 'react';
import { 
  MapPin, 
  Users, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  UserCheck,
  MessageSquare,
  Sparkles,
  Map,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useDemoModal } from '@/context/DemoContext';
import Link from 'next/link';
const BRAND_TEAL = "#008d96";

const OfflineClassesPage = () => {
  const { openDemoModal } = useDemoModal();
  const conductFeatures = [
    { icon: UserCheck, title: "In-Person Training", desc: "Direct mentorship from experienced FIDE-rated coaches." },
    { icon: Sparkles, title: "Real Chessboards", desc: "Tactile learning with physical boards for better spatial logic." },
    { icon: Users, title: "Practical Games", desc: "Real-time, over-the-board matches against peer groups." },
    { icon: MessageSquare, title: "Instant Feedback", desc: "Immediate move-by-move correction during live matches." },
    { icon: Clock, title: "Regular Practice", desc: "Consistent sessions to strengthen and internalize concepts." },
  ];

  const locations = [
    { city: "Pune", status: "Active Centers", desc: "Multiple premium locations including Kharadi." },
    { city: "Nashik", status: "Active Centers", desc: "Dedicated training hubs with professional equipment." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#008d96]/20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-24 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008d96]/10 border border-[#008d96]/20 text-[#008d96] font-black text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8">
                <MapPin size={14} />
                <span>Premier Offline Coaching</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-[1000] text-slate-900 leading-[1.1] tracking-tighter mb-6 md:mb-8 uppercase italic">
                LEARN. PLAY. <br />
                <span style={{ color: BRAND_TEAL }} className="not-italic">COMPETE.</span>
              </h1>
              
              <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed mb-8 md:mb-10">
                Experience chess beyond the screen. Our offline centers in <span className="text-slate-900 font-bold">Pune and Nashik</span> provide 
                a focused environment where engineered logic meets the wooden board.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                {locations.map((loc, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-[#f0fafb] flex items-center justify-center text-[#008d96] shrink-0">
                       <Map size={20} />
                    </div>
                    <div className="text-left">
                       <p className="text-sm font-black text-slate-900">{loc.city} Center</p>
                       <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{loc.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[5/4] bg-slate-200 group">
                <img 
                  src="/12.jpeg" 
                  alt="Offline Class Training" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- THE OFFLINE EDGE (Features Grid) --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 uppercase italic">The Offline <span style={{ color: BRAND_TEAL }}>Edge.</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-sm md:text-base">
              In-person sessions allow our coaches to observe body language, focus, and 
              professional etiquette—critical elements for tournament success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {conductFeatures.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#008d96] mb-6 group-hover:bg-[#008d96] group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 leading-tight uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BATCH & TOURNAMENT SECTION --- */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            
            {/* Batch Structure */}
            <div className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] bg-white border border-slate-100 relative">
               <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                 <Users size={28} className="text-[#008d96]" />
                 Batch Structure
               </h2>
               <div className="space-y-6 md:space-y-8">
                  {[
                    { t: "Skill-Based Groups", d: "Small batches organized from Beginner to Advanced levels." },
                    { t: "Flexible Timings", d: "Convenient schedules designed to suit school and academic work." },
                    { t: "Personal Tracking", d: "1:1 attention to monitor tactical and strategic progress." }
                  ].map((batch, i) => (
                    <div key={i} className="flex gap-4 md:gap-6">
                      <div className="w-1 md:w-1.5 h-auto bg-[#008d96] rounded-full opacity-20" />
                      <div>
                        <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">{batch.t}</h4>
                        <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">{batch.d}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Tournament Exposure */}
            <div className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-900 text-white relative shadow-2xl overflow-hidden group">
               <div className="relative z-10">
                 <h2 className="text-2xl md:text-3xl font-black mb-8 flex items-center gap-4">
                   <Trophy size={28} className="text-[#00b4bf]" />
                   Tournament Exposure
                 </h2>
                 <p className="text-slate-400 font-medium text-sm md:text-base mb-10 leading-relaxed">
                   We transition students from the academy room to the championship hall through real competitive exposure.
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Regular in-house monthly competitions",
                      "Preparation for District & State levels",
                      "Professional clock & notation management",
                      "Game recording & post-match analysis"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                         <CheckCircle2 size={18} className="text-[#00b4bf] shrink-0" />
                         <span className="text-slate-200 font-bold text-xs md:text-sm">{item}</span>
                      </li>
                    ))}
                 </ul>
                 
                 <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#00b4bf] flex items-center justify-center text-slate-900 shrink-0">
                       {/* w-5 is 20px, md:w-6 is 24px */}
<ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Official FIDE Etiquette Training</p>
                 </div>
               </div>
               {/* Background Glow */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00b4bf]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#00b4bf]/20 transition-all duration-700"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative rounded-[2.5rem] md:rounded-[4rem] bg-[#008d96] p-8 md:p-20 text-center overflow-hidden shadow-2xl shadow-[#008d96]/30">
            <div className="relative z-10">
               <h2 className="text-2xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight uppercase italic">
                 READY TO VISIT OUR <br />ACADEMY CENTERS?
               </h2>
               <p className="text-white/80 font-medium text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
                 Find a center near you in Pune or Nashik and start your logic-driven journey toward chess mastery.
               </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">

  {/* Find Center Location */}
  <Link
    href="/contact"
    className="px-8 py-4 bg-white text-[#008d96] rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
  >
    Find Center Location
  </Link>

  {/* Request Demo */}
  <button
    onClick={openDemoModal}
    className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
  >
    Request a Demo <ChevronRight size={14} />
  </button>

</div>
            </div>
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfflineClassesPage;