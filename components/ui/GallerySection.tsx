"use client";

import React, { useState, useEffect } from 'react';
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

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

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
    <section className="py-12 md:py-20 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* --- Header --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 md:mb-4">
               <div className="h-[2px] w-8 md:w-12 bg-[#008d96]"></div>
               <span className="text-[#008d96] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Visual Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Captured <span style={{ color: BRAND_TEAL }}>Moments.</span>
            </h2>
            <p className="mt-3 md:mt-4 text-slate-500 text-sm md:text-lg font-medium">
              A glimpse into D’Square Chess Academy’s journey, global events, and student victories.
            </p>
          </div>

          {/* Categories Filter - Responsive Scrollable Bar */}
          <div className="flex overflow-x-auto lg:overflow-visible no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0 gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100 h-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-black transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-[#008d96] text-white shadow-lg shadow-[#008d96]/20"
                    : "text-slate-500 hover:bg-white hover:text-[#008d96]"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- Responsive Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay - Simplified for better mobile visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 lg:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 md:p-6">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
                       <Maximize2 className="w-2.5 h-2.5 md:w-3 md:h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black text-orange-400 uppercase tracking-widest">
                       {categories.find(c => c.id === image.category)?.name}
                    </span>
                 </div>
                 <h3 className="text-white text-base md:text-lg font-black leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {image.title}
                 </h3>
                 <p className="text-slate-300 text-[9px] md:text-[10px] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium line-clamp-2">
                   {image.description}
                 </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Empty State --- */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 md:py-32 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-slate-200">
             {/* w-10 = 40px, md:w-12 = 48px */}
<Camera className="mx-auto mb-4 text-slate-300 w-10 h-10 md:w-12 md:h-12" />
             <p className="text-slate-400 text-base md:text-xl font-bold italic tracking-tight">No moments found in this category yet.</p>
          </div>
        )}
      </div>

      {/* --- PRO LIGHTBOX --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-2 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:bg-white/10 p-2 md:p-3 rounded-full transition-all z-[110]"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Navigation Controls - Hidden on small mobile to avoid blocking image */}
          <button 
            className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 md:bg-white/5 p-2 md:p-4 rounded-full transition-all hidden sm:flex"
            onClick={(e) => navigateImage('prev', e)}
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button 
            className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 md:bg-white/5 p-2 md:p-4 rounded-full transition-all hidden sm:flex"
            onClick={(e) => navigateImage('next', e)}
          >
             <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Lightbox Card - Stacked on Mobile, Row on Desktop */}
          <div 
            className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl max-w-5xl w-full max-h-[95vh] flex flex-col lg:flex-row overflow-y-auto lg:overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Port */}
            <div className="w-full lg:w-2/3 bg-slate-100 flex items-center justify-center relative min-h-[300px] lg:min-h-auto">
               <img 
                 src={selectedImage.src} 
                 alt={selectedImage.alt} 
                 className="max-h-[60vh] lg:max-h-[85vh] w-full object-contain"
               />
            </div>

            {/* Info Port */}
            <div className="w-full lg:w-1/3 p-6 md:p-10 bg-white flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest self-start mb-4 md:mb-6">
                {categories.find(c => c.id === imageCategoryHelper(selectedImage.category))?.name}
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
                {selectedImage.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-lg">
                {selectedImage.description}
              </p>
              
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-100 flex items-center gap-3 md:gap-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#008d96]">
                    <Trophy className="w-5 h-5 md:w-6 md:h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Captured by</p>
                    <p className="text-sm md:text-base font-bold text-slate-900">D’Square Academy</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Small helper to ensure we find the right category name in the modal
const imageCategoryHelper = (cat: string) => {
  if (cat === 'acheivements') return 'tournaments'; // mapping typo if necessary
  return cat;
};

export default GallerySection;