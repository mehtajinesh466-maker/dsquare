"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Star, Target } from 'lucide-react';

interface Achiever {
  id: number;
  name: string;
  rating: string;
  image: string;
  achievement: string;
}

const achievers: Achiever[] = [
  { id: 1, name: "Abhishek Kapse", rating: "1540", image: "/demo1.jpg", achievement: "Under 17 District Champion & District Junior Champion" },
  { id: 2, name: "Piyush Atre", rating: "1580", image: "/demo2.jpg", achievement: "Consistently Ranked Competitive Tournament Player" },
  { id: 3, name: "Areen Kulkarni", rating: "1600", image: "/demo3.jpg", achievement: "Winner of multiple local and International Rated Events" },
  { id: 4, name: "Daksh Patel", rating: "1664", image: "/demo4.jpg", achievement: "Top Tier International Rated Performer - UAE" },
  { id: 5, name: "Chaitanya Dahanke", rating: "1516", image: "/demo5.jpg", achievement: "Strategic Performance in National Level Open Events" },
  { id: 6, name: "Samarth Patil", rating: "1517", image: "/demo6.jpg", achievement: "Ranked Professional with Consistent Tournament Growth" },
  { id: 7, name: "Priyanka Gavli", rating: "1500", image: "/demo7.jpg", achievement: "Distinguished Rated Player in Women's Competitive Chess" },
  { id: 8, name: "Alfred Philips", rating: "1490", image: "/demo8.jpg", achievement: "Prominent International Rated Talent - UAE" },
  { id: 9, name: "Shaurya Lokhande", rating: "1472", image: "/demo9.jpg", achievement: "Rising Star in Junior Rated Championships" },
  { id: 10, name: "Vedant Nargund", rating: "1465", image: "/demo10.jpg", achievement: "Calculated Performer in Rated Professional Circuits" },
  { id: 11, name: "Aditya Palkhede", rating: "1408", image: "/demo11.jpg", achievement: "Emerging Talent in Competitive Rated Chess" }
];

const AchievementsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Logic to scroll by the width of one card + gap
      const cardWidth = 320; 
      const gap = 24;
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-white overflow-hidden font-sans">
      
      {/* Background Decoration */}
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
              Celebrating our champions who have translated strategy into international FIDE ratings and championship titles.
            </p>
          </div>

          {/* Navigation Controls - Hidden on small mobile to favor natural swipe */}
          <div className="flex justify-center md:justify-end gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#008d96] hover:text-white hover:border-[#008d96] transition-all duration-300 shadow-sm group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-active:scale-90" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#008d96] hover:text-white hover:border-[#008d96] transition-all duration-300 shadow-sm group"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-active:scale-90" />
            </button>
          </div>
        </div>

        {/* --- Card Carousel --- */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {achievers.map((person) => (
            <div 
              key={person.id}
              className="snap-center shrink-0 w-[80vw] xs:w-[280px] sm:w-[300px] md:w-[320px]"
            >
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,141,150,0.12)] transition-all duration-500 group flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative h-[220px] sm:h-[250px] md:h-[280px] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 md:mb-6 bg-slate-50">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Rating Badge Overlay */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur shadow-lg px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-1.5 md:gap-2 border border-[#008d96]/10">
                    <Target size={12} className="text-[#008d96] md:w-3.5 md:h-3.5" />
                    <span className="text-[10px] md:text-sm font-black text-slate-900">FIDE {person.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 pb-3 md:pb-4 text-center flex-grow flex flex-col">
                  <div className="flex justify-center mb-2 md:mb-3">
                     <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} className="md:w-3.5 md:h-3.5" fill="currentColor" />)}
                     </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight">
                    {person.name}
                  </h3>
                  
                  <p className="text-slate-500 text-[11px] md:text-sm font-bold leading-relaxed mb-4 md:mb-6 px-1 line-clamp-2 md:line-clamp-none flex-grow">
                    {person.achievement}
                  </p>

                  <div className="pt-3 md:pt-4 border-t border-slate-50 flex items-center justify-center gap-2 text-[#008d96] font-black text-[10px] md:text-xs uppercase tracking-widest">
                    <Trophy size={12} className="md:w-3.5 md:h-3.5" />
                    Ranked Achiever
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Support Text */}
        <div className="mt-8 md:mt-12 text-center px-4">
           <p className="text-slate-400 font-bold text-[10px] md:text-sm uppercase tracking-widest leading-relaxed">
             + Our global academy community includes 100+ students from India, UAE & beyond
           </p>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;