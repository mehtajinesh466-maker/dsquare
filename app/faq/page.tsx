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
  Users
} from "lucide-react";

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
    answer: "Yes, we conduct offline classes in Pune and Kharadi, where students get hands-on learning and direct tournament exposure."
  },
  {
    category: "logistics",
    question: "What if my child misses a class?",
    answer: "We try to provide support or adjustments, and parents can coordinate with the coach for possible solutions or makeup materials."
  },
  {
    category: "logistics",
    question: "Do you teach international students?",
    answer: "Yes, we have trained students from 50+ countries, including the USA, UK, UAE, Australia, Singapore, Switzerland, and many more."
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
  {
    category: "logistics",
    question: "Do you offer personal coaching (1:1)?",
    answer: "Yes, we offer personalized 1:1 coaching for students who want faster improvement or have specific competitive goals."
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
    question: "Do you give homework or practice material?",
    answer: "Yes, students receive regular practice assignments, access to curated chess puzzles, and game analysis feedback."
  },
  {
    category: "curriculum",
    question: "How can parents track their child’s progress?",
    answer: "We provide regular feedback, performance insights, and guidance so parents can clearly see their child’s path to improvement."
  },

  // --- TOURNAMENTS & RATINGS ---
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
    answer: "No, beginners can start without any experience. We gradually prepare them for the competitive environment through in-house practice matches."
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
    <div className="min-h-screen bg-[#fafcfc] font-sans pb-20 pt-32 md:pt-40">
      
      {/* --- HERO HEADER --- */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-orange-500"></span>
              <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Help Center</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Common <br />
              <span style={{ color: BRAND_TEAL }}>Questions.</span>
            </h1>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search FAQs..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-[#008d96]/20 focus:border-[#008d96] transition-all font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- SIDEBAR CATEGORIES --- */}
          <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-32">
            <button 
              onClick={() => setActiveCategory("all")}
              className={`w-full flex items-center justify-between p-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${activeCategory === 'all' ? 'bg-[#0a191a] text-white shadow-xl' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
            >
              All Topics <ChevronRight size={18} />
            </button>
            {faqCategories.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                className={`w-full flex items-center gap-4 p-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${activeCategory === cat.id ? 'bg-[#008d96] text-white shadow-xl' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
              >
                <cat.icon size={20} />
                {cat.name}
              </button>
            ))}

            <div className="mt-8 p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100">
               <MessageSquare className="text-orange-600 mb-4" size={32} />
               <h4 className="text-lg font-black text-slate-900 mb-2">Need more help?</h4>
               <p className="text-slate-500 text-sm font-medium mb-6">Our team is available on WhatsApp to answer your specific queries.</p>
               <a 
                 href="https://wa.me/918130627389" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-orange-600 font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
               >
                 Chat with Us <ChevronRight size={16} />
               </a>
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
                    className={`bg-white rounded-[2rem] border transition-all duration-300 ${openIndex === idx ? 'border-[#008d96] shadow-xl shadow-[#008d96]/5' : 'border-slate-100'}`}
                  >
                    <button 
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                    >
                      <span className={`text-lg md:text-xl font-bold tracking-tight pr-4 ${openIndex === idx ? 'text-[#008d96]' : 'text-slate-800'}`}>
                        {faq.question}
                      </span>
                      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-[#008d96] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                        {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0">
                            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium border-t border-slate-50 pt-6">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
                    <Search className="mx-auto text-slate-200 mb-4" size={64} />
                    <p className="text-slate-400 font-bold italic">No matching results for your search.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* --- GLOBAL PRESENCE FOOTER --- */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mt-24">
        <div className="bg-[#0a191a] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <Globe className="text-[#00b4bf] mb-6 mx-auto md:mx-0" size={48} />
              <h3 className="text-3xl md:text-5xl font-black mb-4">A Global Community.</h3>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                Join <span className="text-white font-bold">1500+ students</span> from across <span className="text-white font-bold">50+ countries</span> who are currently mastering the game with D’Square Chess Academy.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="flex -space-x-4">
                 {[1,2,3,4,5].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?u=student${i}`} alt="Student" className="w-14 h-14 rounded-full border-4 border-[#0a191a]" />
                 ))}
              </div>
              <button 
                style={{ backgroundColor: BRAND_TEAL }}
                className="px-10 py-5 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                Book Free Assessment
              </button>
            </div>

            {/* Decorative Background Icon */}
            <div className="absolute right-[-5%] top-[-10%] opacity-10 pointer-events-none">
              <Trophy size={400} />
            </div>
        </div>
      </div>
    </div>
  );
}