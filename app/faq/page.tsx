"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  ChevronRight, 
  MessageSquare,
  Globe,
  Brain,
  Trophy,
  Users,
  Building2
} from "lucide-react";
import  Navbar  from "@/components/header";
import { Footer } from "@/components/footer";

const BRAND_TEAL = "#008d96";

const faqCategories = [
  { id: "general", name: "General", icon: HelpCircle },
  { id: "logistics", name: "Class Logistics", icon: Users },
  { id: "curriculum", name: "Growth & Curriculum", icon: Brain },
  { id: "tournaments", name: "Results & Ratings", icon: Trophy },
];

const fullFaqData = [
  // --- GENERAL ---
  {
    category: "general",
    question: "What is the right age to start learning chess?",
    answer: "Children can start learning chess as early as 4–5 years old. At D’Square Chess Academy, we use age-appropriate methods to make learning fun and engaging for young kids."
  },
  {
    category: "general",
    question: "My child is a complete beginner. Can they join?",
    answer: "Absolutely! Our Beginner Level is specially designed for students who have no prior knowledge of chess. We start from the basics and gradually build their skills."
  },
  {
    category: "general",
    question: "How do you decide my child’s level?",
    answer: "We conduct a free assessment session to understand your child’s current level and then place them in the most suitable batch."
  },
  {
    category: "general",
    question: "How do I enroll my child?",
    answer: "You can fill out the 'Enroll Now' form on our website, and our team will contact you for the next steps and a free assessment."
  },
  {
    category: "general",
    question: "Do you offer demo classes?",
    answer: "Yes! We offer a free demo/assessment session to help you understand our teaching approach and see if it's the right fit for your child."
  },

  // --- LOGISTICS ---
  {
    category: "logistics",
    question: "How many students are there in one batch?",
    answer: "We keep small batch sizes (5–6 students) to ensure personal attention and better learning outcomes for every individual."
  },
  {
    category: "logistics",
    question: "Are online classes effective for learning chess?",
    answer: "Yes! Our online classes are highly interactive, using advanced tools, digital boards, and a structured curriculum, making them as effective as offline learning."
  },
  {
    category: "logistics",
    question: "Do you also offer offline classes?",
    answer: "Yes, we conduct offline classes in Pune and Kharadi (Maharashtra), where students get hands-on learning and direct tournament exposure."
  },
  {
    category: "logistics",
    question: "What if my child misses a class?",
    answer: "We try to provide support or adjustments, and parents can coordinate with the coach for possible solutions or makeup materials."
  },
  {
    category: "logistics",
    question: "Do you teach international students?",
    answer: "Yes, we have trained students from 50+ countries, including the USA, UK, UAE, Australia, Singapore, and many more."
  },
  {
    category: "logistics",
    question: "What are the class timings?",
    answer: "We offer flexible timings, including weekday and weekend batches, based on student availability and time zones."
  },
  {
    category: "logistics",
    question: "What tools are required for online classes?",
    answer: "A laptop or tablet, a stable internet connection, and a free chess account on platforms like Chess.com or Lichess are all you need."
  },

  // --- CURRICULUM ---
  {
    category: "curriculum",
    question: "What benefits will my child get from learning chess?",
    answer: "Chess helps improve concentration, memory, logical thinking, decision-making skills, patience, discipline, and problem-solving abilities from an early age."
  },
  {
    category: "curriculum",
    question: "How long does it take to become good at chess?",
    answer: "It depends on the child’s consistency and practice. With regular training, students usually start seeing significant improvement within 3–6 months."
  },
  {
    category: "curriculum",
    question: "Do you offer personal coaching (1:1)?",
    answer: "Yes, we offer personalized 1:1 coaching for students who want faster improvement or have specific competitive goals."
  },
  {
    category: "curriculum",
    question: "Do you give homework or practice material?",
    answer: "Yes, students receive regular practice assignments, access to curated chess puzzles, and game analysis feedback."
  },
  {
    category: "curriculum",
    question: "How can parents track their child’s progress?",
    answer: "We provide regular feedback, performance insights, and guidance so parents can clearly see their child’s path to improvement."
  },

  // --- TOURNAMENTS ---
  {
    category: "tournaments",
    question: "Do you prepare students for tournaments?",
    answer: "Yes, we train students for both online and offline tournaments, including district, state, and national-level rated competitions."
  },
  {
    category: "tournaments",
    question: "Can my child become a rated player?",
    answer: "Yes! We guide students step-by-step to participate in official tournaments and achieve FIDE, USCF, or other official ratings."
  },
  {
    category: "tournaments",
    question: "Does my child need prior tournament experience?",
    answer: "No, beginners can start without any experience. We gradually prepare them for the competitive environment through practice matches."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = fullFaqData.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafcfc] font-sans pb-20">
      <Navbar />
      
      {/* --- HERO HEADER --- */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden">
        {/* Background Structural Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#008d96 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-12 h-[2px] bg-orange-500"></span>
                <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Support Center</span>
              </motion.div>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter uppercase italic">
                HOW CAN WE <br />
                <span style={{ color: BRAND_TEAL }}>HELP YOU?</span>
              </h1>
            </div>

            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#008d96] transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search by keyword (age, online, fees)..."
                className="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-200/40 outline-none focus:ring-4 focus:ring-[#008d96]/5 focus:border-[#008d96] transition-all font-medium text-slate-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- SIDEBAR CATEGORIES --- */}
          <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-32">
            <button 
              onClick={() => setActiveCategory("all")}
              className={`w-full flex items-center justify-between p-6 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all ${activeCategory === 'all' ? 'bg-[#0a191a] text-white shadow-2xl scale-[1.02]' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
            >
              All Questions <ChevronRight size={18} />
            </button>
            {faqCategories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                className={`w-full flex items-center gap-5 p-6 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all ${activeCategory === cat.id ? 'bg-[#008d96] text-white shadow-2xl scale-[1.02]' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
              >
                <div className={`p-2 rounded-xl ${activeCategory === cat.id ? 'bg-white/20' : 'bg-slate-50 text-slate-400'}`}>
                  <cat.icon size={18} />
                </div>
                {cat.name}
              </button>
            ))}

            {/* Quick Contact Card */}
            <div className="mt-12 p-8 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10">
                 <MessageSquare className="text-[#00b4bf] mb-6" size={36} />
                 <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">Still Curious?</h4>
                 <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed text-balance">
                   Connect with our technical planning department for a free 1:1 strategy audit.
                 </p>
                 <a 
                   href="https://wa.me/918130627389" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 px-8 py-4 bg-[#008d96] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#00b4bf] transition-all"
                 >
                   Chat on WhatsApp <ChevronRight size={14} />
                 </a>
               </div>
               {/* Background Watermark */}
               <Trophy className="absolute bottom-[-10%] right-[-10%] text-white/5 w-48 h-48 -rotate-12" />
            </div>
          </div>

          {/* --- FAQ ACCORDION LIST --- */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {filteredFaqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className={`group bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${openIndex === idx ? 'border-[#008d96] shadow-2xl shadow-[#008d96]/5' : 'border-slate-100'}`}
                  >
                    <button 
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-7 md:p-10 text-left outline-none"
                    >
                      <span className={`text-xl md:text-2xl font-black tracking-tight leading-tight uppercase italic ${openIndex === idx ? 'text-[#008d96]' : 'text-slate-900'}`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-[#008d96] text-white rotate-180 shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white'}`}>
                        {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-7 md:px-10 pb-10 pt-0">
                            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium border-t border-slate-50 pt-8">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
                    <Search className="mx-auto text-slate-200 mb-6" size={80} />
                    <p className="text-slate-400 text-xl font-bold italic tracking-tight">No intelligence found for this search.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* --- FOOTER CTA (Global Community) --- */}
      <div className="container mx-auto px-6 max-w-7xl mt-32">
        <div className="bg-[#0a191a] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16 shadow-[0_40px_100px_-20px_rgba(0,141,150,0.3)]">
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                 <Globe className="text-[#00b4bf] animate-pulse" size={48} />
                 <div className="h-[2px] w-12 bg-[#008d96]"></div>
              </div>
              <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic leading-[0.9]">Serving a <br /> Global Arena.</h3>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                Our deconstructed curriculum is currently powering the strategic growth of <span className="text-white font-bold underline decoration-[#008d96] underline-offset-8">1500+ students</span> across 50+ nations.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="flex -space-x-5">
                 {[1,2,3,4,5].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?u=gawo${i}`} alt="Student" className="w-16 h-16 rounded-full border-4 border-[#0a191a] shadow-2xl" />
                 ))}
              </div>
              <button 
                style={{ backgroundColor: BRAND_TEAL }}
                className="px-12 py-6 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#00b4bf] hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                Join the Movement
              </button>
            </div>

            {/* Background Symbols */}
            <Building2 size={500} className="absolute bottom-[-20%] right-[-10%] text-white/5 -rotate-12 pointer-events-none" />
        </div>
      </div>

      <Footer />
    </div>
  );
}