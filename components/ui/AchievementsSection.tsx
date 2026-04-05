"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Star, Target, Medal } from 'lucide-react';

interface Achiever {
  id: number;
  name: string;
  rating: string;
  image?: string;
  achievement: string;
}

// Group 1: With Images (Carousel)
const featuredAchievers: Achiever[] = [
  { 
    id: 12, 
    name: "Harsh Sonawane", 
    rating: "Rated", 
    image: "/harsh.jpeg", 
    achievement: "Prize Winner: 2nd Sandip Rapid Tournament & Nashik Open Event" 
  },
  { 
    id: 13, 
    name: "Harshit Lade", 
    rating: "Rated", 
    image: "/harshit.jpeg", 
    achievement: "Prize Winner: Under 16 Category & Nashik Open Event" 
  },
  { 
    id: 14, 
    name: "Avadhoot Deshpande", 
    rating: "Active", 
    image: "/avadhoot.jpeg", 
    achievement: "Under 16 Prize Winner - Recent Tournament Success" 
  },
  { 
    id: 15, 
    name: "Om Maheshwari", 
    rating: "US Chess", 
    image: "/om.jpeg", 
    achievement: "Selected for US States Selection" 
  },
  { 
    id: 16, 
    name: "Rajveer Sagar", 
    rating: "US Chess", 
    image: "/rajveer.jpeg", 
    achievement: "Elite Member - Selected for US Squads" 
  },
  { 
    id: 17, 
    name: "Kartiki Gosavi", 
    rating: "Active", 
    image: "/team.jpeg", 
    achievement: "Prize Winner in Nashik Open Event" 
  },
  { 
    id: 18, 
    name: "Parth Palekar", 
    rating: "Active", 
    image: "/parth.jpeg", 
    achievement: "Emerging Talent & Competitive Tournament Performer" 
  }
];

// Group 2: Text Only (Grid)
const textOnlyAchievers: Achiever[] = [
  { id: 1, name: "Abhishek Kapse", rating: "1540", achievement: "Under 17 District Champion & District Junior Champion" },
  { id: 2, name: "Piyush Atre", rating: "1580", achievement: "Consistently Ranked Competitive Tournament Player" },
  { id: 3, name: "Areen Kulkarni", rating: "1600", achievement: "Winner of multiple local and International Rated Events" },
  { id: 4, name: "Daksh Patel", rating: "1664", achievement: "Top Tier International Rated Performer - UAE" },
  { id: 5, name: "Chaitanya Dahanke", rating: "1516", achievement: "Nashik Open Event Prize Winner & National Level Performer" },
  { id: 6, name: "Samarth Patil", rating: "1517", achievement: "Ranked Professional with Consistent Tournament Growth" },
  { id: 7, name: "Priyanka Gavli", rating: "1500", achievement: "Distinguished Rated Player in Women's Competitive Chess" },
  { id: 8, name: "Alfred Philips", rating: "1490", achievement: "Prominent International Rated Talent - UAE" },
  { id: 9, name: "Shaurya Lokhande", rating: "1472", achievement: "Rising Star in Junior Rated Championships" },
  { id: 10, name: "Vedant Nargund", rating: "1465", achievement: "Calculated Performer in Rated Professional Circuits" },
  { id: 11, name: "Aditya Palkhede", rating: "1408", achievement: "Emerging Talent in Competitive Rated Chess" }
];

const AchievementsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; 
      const gap = 24;
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-white overflow-hidden font-sans">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#008d96 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
               <div className="h-[2px] w-8 md:w-10 bg-[#008d96]"></div>
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Global Success</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              D’Square Hall of <span className="text-[#008d96]">Fame.</span>
            </h2>
            <p className="mt-3 md:mt-4 text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
              Celebrating our champions who have translated strategy into international titles and FIDE rankings.
            </p>
          </div>

         <div className="flex justify-center md:justify-end gap-3">
  <button 
    onClick={() => scroll('left')} 
    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white bg-[#008d96] hover:bg-[#00767d] transition-all shadow-md"
  >
    <ChevronLeft />
  </button>

  <button 
    onClick={() => scroll('right')} 
    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white bg-[#008d96] hover:bg-[#00767d] transition-all shadow-md"
  >
    <ChevronRight />
  </button>
</div>
        </div>

        {/* --- Featured Carousel (With Images) --- */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-2 scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredAchievers.map((person) => (
            <div key={person.id} className="snap-center shrink-0 w-[80vw] xs:w-[280px] sm:w-[300px] md:w-[320px]">
              <div className="bg-white rounded-[2rem] p-3 md:p-4 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,141,150,0.12)] transition-all duration-500 group flex flex-col h-full">
                <div className="relative h-[220px] sm:h-[280px] w-full rounded-[1.5rem] overflow-hidden mb-4 bg-slate-50">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl flex items-center gap-1.5 border border-[#008d96]/10">
                    <Target size={12} className="text-[#008d96]" />
                    <span className="text-[10px] md:text-xs font-black text-slate-900">{person.rating}</span>
                  </div>
                </div>
                <div className="px-2 pb-3 text-center flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-2">{person.name}</h3>
                  <p className="text-slate-500 text-[11px] md:text-sm font-bold leading-relaxed line-clamp-2">{person.achievement}</p>
                </div>
                <div className="pt-3 border-t border-slate-50 flex items-center justify-center gap-2 text-[#008d96] font-black text-[10px] uppercase tracking-widest">
                  <Trophy size={12} /> Featured Champion
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Text-Only Achievers Grid --- */}
        <div className="mt-16 md:mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xl md:text-2xl font-black text-slate-800 whitespace-nowrap">Distinguished Rated Players</h3>
            <div className="h-[1px] w-full bg-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {textOnlyAchievers.map((person) => (
              <div 
                key={person.id} 
                className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:shadow-xl hover:border-[#008d96]/20 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm group-hover:bg-[#008d96] transition-colors">
                    <Medal size={18} className="text-[#008d96] group-hover:text-white" />
                  </div>
                  <span className="text-[10px] font-black bg-[#008d96]/10 text-[#008d96] px-2 py-1 rounded-md">
                    FIDE {person.rating}
                  </span>
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-1">{person.name}</h4>
                <p className="text-slate-500 text-xs font-bold leading-relaxed">
                  {person.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Support Text */}
        <div className="mt-16 md:mt-20 text-center px-4">
           <p className="text-slate-400 font-bold text-[10px] md:text-sm uppercase tracking-widest leading-relaxed">
             + Our global academy community includes 100+ students from India, UAE & beyond
           </p>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;