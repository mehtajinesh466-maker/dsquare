"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Trophy, 
  Brain, 
  Target, 
  Globe, 
  ShieldCheck, 
  Users, 
  Heart, 
  ChevronRight,
  Medal,
  Award,
  Star
} from "lucide-react"

export default function TeamSection() {
  const BRAND_TEAL = "#008d96";

  const mainCoachStats = [
    { label: "Global Students", value: "3000+", icon: Users },
    { label: "Rated Students", value: "50+", icon: Medal },
    { label: "Social Impact", value: "350+", icon: Heart },
    { label: "Years Coaching", value: "9+", icon: Trophy },
  ];

  const globalFootprint = [
    "India", "USA", "Switzerland", "Australia", "Singapore", 
    "Kuwait", "Oman", "Abu Dhabi", "Qatar", "Saudi Arabia", "Bahrain"
  ];

  const studentList = [
    "Prathmesh Sherla", "Nihira Koul", "Ashika Kale", "Sahil Shejal", 
    "Pratiti Khandelwal", "Alaukik Sinha", "Dhiraj Kurhe", "Vibhor Garg", 
    "Tanishq Dhingra (Canada)", "Jashank Dave (Canada)", "Tanishka Rathi", 
    "Yashwant Telang", "Sanika Telang", "Rohini Telang", "Arjun Chitalange", 
    "Ayushi Bhatia", "Samaira Thorat", "Rajnandini Pawar", "Bhuvan Shitole", "Swara Bhatawdekar"
  ];

  return (
    <section className="bg-white relative overflow-hidden font-sans">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#008d96 2px, transparent 2px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <div className="h-[2px] w-8 md:w-12 bg-[#008d96]"></div>
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Expert Mentorship</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-[1000] text-slate-900 leading-tight tracking-tighter">
              MEET OUR <br />
              <span style={{ color: BRAND_TEAL }}>GRANDMASTERS OF TEACHING.</span>
            </h2>
        </div>

        {/* --- FEATURED COACH: VAIBHAV DESHMUKH --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start mb-16 md:mb-24">
          
          {/* Coach Image - Sticky only on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-slate-50 aspect-[4/5] bg-slate-100">
                 <Image 
                  src="/coach.jpeg" 
                  alt="Vaibhav Deshmukh" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10">
                    <h3 className="text-white text-2xl md:text-4xl font-black tracking-tight">Vaibhav Deshmukh</h3>
                    <p className="text-[#00b4bf] font-bold uppercase tracking-widest text-[10px] md:text-sm mt-2 flex items-center gap-2">
                       <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" /> Lead Coach & FIDE Arbiter (FA)
                    </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coach Bio & Stats */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4 md:mb-6">
                International FIDE Rated Player
              </h4>

              <div className="prose prose-slate prose-sm md:prose-lg max-w-none space-y-4 md:space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Vaibhav Deshmukh brings a perfect blend of competitive experience and teaching expertise to D’Square Chess Academy. With over <span className="text-slate-900 font-bold">9+ years of coaching</span> and <span className="text-slate-900 font-bold">6+ years as an Arbiter</span>, he deconstructs professional chess for the next generation.
                </p>
                <p>
                  Specializing in nurturing minds aged <span className="text-[#008d96] font-bold">4 to 20</span>, Vaibhav is known for his immense patience and ability to connect with young learners, ensuring a strong foundation and a genuine love for the game.
                </p>
              </div>

              {/* Global Footprint - Better wrapping on Mobile */}
              <div className="mt-8">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Global Footprint</p>
                <div className="flex flex-wrap gap-2">
                   {globalFootprint.map((country, i) => (
                     <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] md:text-xs font-bold text-slate-600">
                       {country}
                     </span>
                   ))}
                </div>
              </div>

              {/* Stats Grid - 2 cols on mobile, 4 on md+ */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 md:mt-12">
                {mainCoachStats.map((stat, idx) => (
                  <div key={idx} className="p-4 md:p-6 bg-[#f0fafb] rounded-[1.5rem] md:rounded-[2rem] border border-[#008d96]/10 text-center">
                    <stat.icon className="mx-auto text-[#008d96] mb-2 md:mb-3 w-5 h-5 md:w-6 md:h-6" />
                    <p className="text-xl md:text-2xl font-black text-slate-900 leading-none">{stat.value}</p>
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- COMPACT MENTOR PROFILE: GURUJIT SINGH --- */}
        <div className="mb-16 md:mb-24">
            <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-10">
                <Brain className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 text-white/5 pointer-events-none" />
                
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 shrink-0 rounded-2xl md:rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-xl">
                   <Image 
                    src="/gurujit.jpg" 
                    alt="Gurujit Singh"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                   />
                </div>

                <div className="flex-1 text-white z-10 text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mb-4">
                        <span className="px-3 py-1 bg-orange-500 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 md:gap-2">
                           <Award size={12} /> President Awardee 1996
                        </span>
                        <span className="px-3 py-1 bg-blue-600 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                           FIDE Arbiter
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter mb-4 uppercase">FA GURUJIT SINGH</h3>
                    <p className="text-slate-400 text-sm md:text-base font-medium mb-6 max-w-2xl leading-relaxed">
                        A legendary figure with over 3 decades of experience. President Award winner (1996) and a globally recognized mentor for competitive excellence.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] md:text-xs font-bold text-[#00b4bf]">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#00b4bf]"></div> Certified by All India Chess Federation
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] md:text-xs font-bold text-[#00b4bf]">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#00b4bf]"></div> Senior Instructor (MCA)
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- STUDENT WALL OF PRIDE --- */}
        {/* <div className="pt-12 md:pt-20 border-t border-slate-100">
           <div className="text-center mb-10 md:mb-16">
              <h4 className="text-[8px] md:text-[10px] font-black text-[#008d96] uppercase tracking-[0.4em] mb-4">The Hall of Fame</h4>
              <h3 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">Our Proud Students.</h3>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {studentList.map((name, i) => (
                <div key={i} className="p-4 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 group hover:bg-[#008d96] hover:scale-[1.02] transition-all cursor-default">
                   <Star size={12} className="text-orange-400 group-hover:text-white shrink-0" fill="currentColor" />
                   <span className="text-[11px] md:text-xs font-bold text-slate-700 group-hover:text-white transition-colors">{name}</span>
                </div>
              ))}
           </div>
        </div> */}

      </div>
    </section>
  )
}