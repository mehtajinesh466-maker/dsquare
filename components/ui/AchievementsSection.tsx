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
  {
    id: 1,
    name: "Abhishek Kapse",
    rating: "1540",
    image: "/demo1.jpg",
    achievement: "Under 17 District Champion & District Junior Champion",
  },
  {
    id: 2,
    name: "Piyush Atre",
    rating: "1580",
    image: "/demo2.jpg",
    achievement: "Consistently Ranked Competitive Tournament Player",
  },
  {
    id: 3,
    name: "Areen Kulkarni",
    rating: "1600",
    image: "/demo3.jpg",
    achievement: "Winner of multiple local and International Rated Events",
  },
  {
    id: 4,
    name: "Daksh Patel",
    rating: "1664",
    image: "/demo4.jpg",
    achievement: "Top Tier International Rated Performer - UAE",
  },
  {
    id: 5,
    name: "Chaitanya Dahanke",
    rating: "1516",
    image: "/demo5.jpg",
    achievement: "Strategic Performance in National Level Open Events",
  },
  {
    id: 6,
    name: "Samarth Patil",
    rating: "1517",
    image: "/demo6.jpg",
    achievement: "Ranked Professional with Consistent Tournament Growth",
  },
  {
    id: 7,
    name: "Priyanka Gavli",
    rating: "1500",
    image: "/demo7.jpg",
    achievement: "Distinguished Rated Player in Women's Competitive Chess",
  },
  {
    id: 8,
    name: "Alfred Philips",
    rating: "1490",
    image: "/demo8.jpg",
    achievement: "Prominent International Rated Talent - UAE",
  },
  {
    id: 9,
    name: "Shaurya Lokhande",
    rating: "1472",
    image: "/demo9.jpg",
    achievement: "Rising Star in Junior Rated Championships",
  },
  {
    id: 10,
    name: "Vedant Nargund",
    rating: "1465",
    image: "/demo10.jpg",
    achievement: "Calculated Performer in Rated Professional Circuits",
  },
  {
    id: 11,
    name: "Aditya Palkhede",
    rating: "1408",
    image: "/demo11.jpg",
    achievement: "Emerging Talent in Competitive Rated Chess",
  }
];

const AchievementsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; 
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden font-sans">
      
      {/* Subtle Professional Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#008d96 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
               <div className="h-[2px] w-10 bg-[#008d96]"></div>
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-xs">Global Success</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              D’Square Hall of <span className="text-[#008d96]">Fame.</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg font-medium leading-relaxed">
              Celebrating our champions who have translated strategy into international FIDE ratings and championship titles.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#008d96] hover:text-white hover:border-[#008d96] transition-all duration-300 shadow-sm group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-active:scale-90" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#008d96] hover:text-white hover:border-[#008d96] transition-all duration-300 shadow-sm group"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-active:scale-90" />
            </button>
          </div>
        </div>

        {/* --- Card Carousel --- */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {achievers.map((person) => (
            <div 
              key={person.id}
              className="snap-center shrink-0 w-[85vw] sm:w-[320px]"
            >
              <div className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,141,150,0.12)] transition-all duration-500 group flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative h-[280px] w-full rounded-[2rem] overflow-hidden mb-6 bg-slate-50">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Rating Badge Overlay */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur shadow-lg px-4 py-2 rounded-2xl flex items-center gap-2 border border-[#008d96]/10">
                    <Target size={14} className="text-[#008d96]" />
                    <span className="text-sm font-black text-slate-900">FIDE {person.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-3 pb-4 text-center">
                  <div className="flex justify-center mb-3">
                     <div className="flex text-orange-400">
                        {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                     </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">
                    {person.name}
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-bold leading-relaxed mb-6 px-2 min-h-[40px]">
                    {person.achievement}
                  </p>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-center gap-2 text-[#008d96] font-black text-xs uppercase tracking-widest">
                    <Trophy size={14} />
                    Ranked Achiever
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Support Text */}
        <div className="mt-12 text-center">
           <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">
             + Our global academy community includes 100+ students from India & UAE
           </p>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;