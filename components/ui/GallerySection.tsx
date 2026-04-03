"use client";

import React, { useState } from 'react';
import { 
  Camera, 
  Trophy, 
  Users, 
  BookOpen, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const BRAND_TEAL = "#008d96";

const categories = [
  { id: "all", name: "All Moments", icon: Camera },
  { id: "tournaments", name: "Tournaments", icon: Trophy },
  { id: "certificate", name: "Certificates", icon: Users },
  { id: "events", name: "Academy Life", icon: BookOpen },
];

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/21.jpeg", alt: "Tournament", category: "tournaments", title: "Award Ceremony", description: "Students winning at various competitions." },
  { id: 2, src: "/26.jpeg", alt: "Beginner Class", category: "events", title: "Young Minds", description: "Acknowledge the potential of our young learners." },
  { id: 3, src: "/25.jpeg", alt: "Fide Arbiter", category: "events", title: "Young Prodigy", description: "Acknowledge the potential of our young learners." },
  { id: 4, src: "/coach.jpeg", alt: "Chess Workshop", category: "events", title: "Vaibhav Sir", description: "Our experienced coach." },
  { id: 5, src: "/1.jpeg", alt: "Award Ceremony", category: "tournaments", title: "Focussed Minds", description: "Students focusing on their game." },
  { id: 6, src: "/2.jpeg", alt: "Tournament Hall", category: "tournaments", title: "Tournament Spirit", description: "The intense atmosphere of the tournaments." },
  { id: 7, src: "/23.jpeg", alt: "Trophy", category: "certificate", title: "Our champion team.", description: "Bringing top minds together." },
  { id: 8, src: "/22.jpeg", alt: "Trophy", category: "certificate", title: "Victory Moments", description: "Smiles of success." },
  { id: 9, src: "/21.jpeg", alt: "Chess Move", category: "certificate", title: "Champion Minds", description: "Calculating the winning sequence." },
  { id: 10, src: "/27.jpeg", alt: "Mentorship", category: "tournaments", title: "Events", description: "Winning at every level under expert guidance." },
  { id: 11, src: "/3.jpeg", alt: "Future Masters", category: "tournaments", title: "Top Masters", description: "The generation of Best players." },
  { id: 12, src: "/4.jpeg", alt: "Triumph", category: "tournaments", title: "Triumph", description: "Achievement in the local district rounds." },
  { id: 13, src: "/5.jpeg", alt: "First Steps", category: "tournaments", title: "Young Champions", description: "Taking the first steps into competitive play." },
  { id: 14, src: "/24.jpeg", alt: "Award", category: "tournaments", title: "Grand Awards", description: "Consistent winners in the state-level events." },
  { id: 15, src: "/20.jpeg", alt: "Focussed Minds", category: "tournaments", title: "Focussed Minds", description: "Patience and discipline in action." },
  { id: 16, src: "/16.jpeg", alt: "Ceremony", category: "tournaments", title: "Award Ceremony", description: "Celebrating strategic excellence." },
  { id: 17, src: "/17.jpeg", alt: "Victory", category: "tournaments", title: "Victory Stand", description: "Taking home the gold." },
  { id: 18, src: "/19.jpeg", alt: "Academy Pride", category: "tournaments", title: "Academy Pride", description: "Coaches and students celebrating together." },
  { id: 19, src: "/18.jpeg", alt: "Awarded", category: "tournaments", title: "Best Moves Award", description: "Creativity recognized on the board." },
  { id: 21, src: "/15.jpeg", alt: "Winner", category: "certificate", title: "Our Master", description: "Advancing to the next tier of mastery." },
  { id: 22, src: "/14.jpeg", alt: "Winner", category: "certificate", title: "Chess introduction", description: "Introducing the game to new players." },
  { id: 23, src: "/13.jpeg", alt: "Winner", category: "certificate", title: "Guest Speaker", description: "Helping new players develop their skills." },
  { id: 24, src: "/12.jpeg", alt: "Winner", category: "tournaments", title: "Our Champions", description: "Our student proving their worth." },
  { id: 25, src: "/11.jpeg", alt: "Winner", category: "tournaments", title: "Game Analysis", description: "Analysing every move." },
  { id: 26, src: "/10.jpeg", alt: "Winner", category: "tournaments", title: "Champion moments", description: "Winning at every level." },
  { id: 27, src: "/9.jpeg", alt: "Winner", category: "tournaments", title: "Keeping track", description: "Tracking progress and achievements." },
  { id: 28, src: "/8.jpeg", alt: "Winner", category: "tournaments", title: "Analysing Performance", description: "Personal development and growth." },
  { id: 29, src: "/7.jpeg", alt: "Winner", category: "tournaments", title: "Best Performer", description: "Checking in the moves." },
  { id: 30, src: "/6.jpeg", alt: "Winner", category: "tournaments", title: "Our Senior Wizards", description: "Concentrating on the game." },
];

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const navigateImage = (direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length 
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-8xl">
        
        {/* --- Header --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
               <div className="h-[2px] w-12 bg-[#008d96]"></div>
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-xs">Visual Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Captured <span style={{ color: BRAND_TEAL }}>Moments.</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg font-medium">
              A glimpse into D’Square Chess Academy’s journey, global events, and student victories.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100 h-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-[#008d96] text-white shadow-lg shadow-[#008d96]/20"
                    : "text-slate-500 hover:bg-white hover:text-[#008d96]"
                }`}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- Uniform Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
                       <Maximize2 size={12} strokeWidth={3} />
                    </div>
                    <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">
                       {categories.find(c => c.id === image.category)?.name}
                    </span>
                 </div>
                 <h3 className="text-white text-lg font-black leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.title}
                 </h3>
                 <p className="text-slate-300 text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium line-clamp-2">
                   {image.description}
                 </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Empty State --- */}
        {filteredImages.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
             <Camera className="mx-auto mb-4 text-slate-300" size={48} />
             <p className="text-slate-400 text-xl font-bold italic tracking-tight">No moments found in this category yet.</p>
          </div>
        )}
      </div>

      {/* --- PRO LIGHTBOX --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:bg-white/10 p-3 rounded-full transition-all"
          >
            <X size={32} />
          </button>

          {/* Navigation Controls */}
          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 p-4 rounded-full transition-all"
            onClick={(e) => navigateImage('prev', e)}
          >
            <ChevronLeft size={40} />
          </button>

          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 p-4 rounded-full transition-all"
            onClick={(e) => navigateImage('next', e)}
          >
             <ChevronRight size={40} />
          </button>

          {/* Lightbox Card */}
          <div 
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Port */}
            <div className="w-full lg:w-2/3 bg-slate-100 flex items-center justify-center relative">
               <img 
                 src={selectedImage.src} 
                 alt={selectedImage.alt} 
                 className="max-h-[50vh] lg:max-h-[90vh] w-full object-contain"
               />
            </div>

            {/* Info Port */}
            <div className="w-full lg:w-1/3 p-10 bg-white flex flex-col justify-center">
              <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest self-start mb-6">
                {categories.find(c => c.id === selectedImage.category)?.name}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {selectedImage.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                {selectedImage.description}
              </p>
              
              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#008d96]">
                    <Trophy size={24} />
                 </div>
                 <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Captured by</p>
                    <p className="font-bold text-slate-900">D’Square Academy</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;