"use client";

import React from 'react';
import { 
  MapPin, 
  Users, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Award, 
  UserCheck,
  MessageSquare,
  Sparkles,
  Map,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const BRAND_TEAL = "#008d96";

const OfflineClassesPage = () => {
  const conductFeatures = [
    { icon: UserCheck, title: "In-Person Training", desc: "Direct mentorship from experienced and patient coaches." },
    { icon: Sparkles, title: "Real Chessboards", desc: "Tactile learning with physical boards for better spatial understanding." },
    { icon: Users, title: "Practical Games", desc: "Real-time, over-the-board matches against peers." },
    { icon: MessageSquare, title: "Instant Feedback", desc: "Immediate move-by-move correction during live play." },
    { icon: Clock, title: "Regular Practice", desc: "Consistent sessions to strengthen and internalize concepts." },
  ];

  const locations = [
    { city: "Pune", status: "Active Centers", desc: "Multiple locations across the city for easy access." },
    { city: "Nashik", status: "Active Centers", desc: "Dedicated training hubs with professional infrastructure." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#008d96]/20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008d96]/10 border border-[#008d96]/20 text-[#008d96] font-black text-xs uppercase tracking-widest mb-8">
                <MapPin size={14} />
                <span>Premier Offline Coaching</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-[1000] text-slate-900 leading-[1] tracking-tighter mb-8 uppercase italic">
                LEARN. PLAY. <br />
                <span style={{ color: BRAND_TEAL }} className="not-italic">COMPETE.</span>
              </h1>
              
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-10">
                Experience chess beyond the screen. Our offline centers in <span className="text-slate-900 font-bold">Pune and Nashik</span> provide 
                a focused, physical environment where logic meets the wooden board.
              </p>

              <div className="flex flex-wrap gap-4">
                {locations.map((loc, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-[#f0fafb] flex items-center justify-center text-[#008d96]">
                       <Map size={20} />
                    </div>
                    <div>
                       <p className="text-sm font-black text-slate-900">{loc.city} Center</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{loc.status}</p>
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
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[5/4] bg-slate-200">
                <img 
                  src="/12.jpeg" // Ensure this image exists in your public folder
                  alt="Offline Class Training" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating Badge */}
              
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- HOW WE CONDUCT CLASSES --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">The Offline <span style={{ color: BRAND_TEAL }}>Edge.</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              In-person sessions allow our experienced coaches to observe body language, focus, and 
              etiquette—elements that are crucial for professional tournament play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {conductFeatures.map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#008d96] mb-6 group-hover:bg-[#008d96] group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BATCH STRUCTURE & TOURNAMENT EXPOSURE --- */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Batch Structure */}
            <div className="p-12 md:p-16 rounded-[3.5rem] bg-white border border-slate-100 relative">
               <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                 <Users size={32} className="text-[#008d96]" />
                 Batch Structure
               </h2>
               <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-1.5 h-auto bg-[#008d96] rounded-full opacity-20" />
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Skill-Based Groups</h4>
                      <p className="text-slate-500 font-medium">Small batches organized from Beginner to Advanced levels for optimized learning.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-1.5 h-auto bg-[#008d96] rounded-full opacity-20" />
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Flexible Timings</h4>
                      <p className="text-slate-500 font-medium">Convenient batch schedules designed to suit students’ academic commitments.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-1.5 h-auto bg-[#008d96] rounded-full opacity-20" />
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">Personal Tracking</h4>
                      <p className="text-slate-500 font-medium">Individual attention to monitor every student’s tactical and strategic progress.</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Tournament Exposure */}
            <div className="p-12 md:p-16 rounded-[3.5rem] bg-slate-900 text-white relative shadow-2xl">
               <div className="relative z-10">
                 <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                   <Trophy size={32} className="text-[#00b4bf]" />
                   Tournament Exposure
                 </h2>
                 <p className="text-slate-400 font-medium mb-10">
                   We transition students from the classroom to the championship hall by providing real competitive platforms.
                 </p>
                 <ul className="space-y-4">
                    {[
                      "Regular offline & in-house competitions",
                      "Preparation for District & State levels",
                      "Training in tournament etiquette",
                      "Clock management & game recording"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                         <CheckCircle2 size={18} className="text-[#00b4bf] shrink-0" />
                         <span className="text-slate-200 font-bold">{item}</span>
                      </li>
                    ))}
                 </ul>
                 
                 <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#00b4bf] flex items-center justify-center text-slate-900">
                       <ShieldCheck size={24} />
                    </div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Official FIDE Etiquette Standards</p>
                 </div>
               </div>
               {/* Background Glow */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00b4bf]/10 rounded-full blur-[100px]"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative rounded-[4rem] bg-[#008d96] p-12 md:p-20 text-center overflow-hidden shadow-2xl shadow-[#008d96]/30">
            <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                 READY TO VISIT OUR <br />ACADEMY CENTERS?
               </h2>
               <p className="text-white/80 font-medium text-lg mb-10 max-w-2xl mx-auto">
                 Find a center near you in Pune or Nashik and start your journey toward becoming a certified chess champion.
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-10 py-5 bg-white text-[#008d96] rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105 active:scale-95">
                    Find Center Location
                  </button>
                  <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                    Request a Demo <ChevronRight size={16} />
                  </button>
               </div>
            </div>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OfflineClassesPage;