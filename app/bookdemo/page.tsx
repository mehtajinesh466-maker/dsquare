"use client";

import React from "react";
import { 
  Calendar, 
  Clock, 
  Target,
  BookOpen,
  Trophy,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";
// 1. Import the global hook
import { useDemoModal } from "@/context/DemoContext";

export default function BookDemoPage() {
  // 2. Initialize the global trigger
  const { openDemoModal } = useDemoModal();

  const features = [
    { icon: <Clock className="w-6 h-6" />, text: "30-minute interactive session", subtext: "Live with expert coach" },
    { icon: <Target className="w-6 h-6" />, text: "Skill assessment", subtext: "Personalized feedback" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Sample lesson", subtext: "Experience our teaching" },
    { icon: <Trophy className="w-6 h-6" />, text: "Growth roadmap", subtext: "Custom learning plan" },
  ];

  const successStories = [
    { 
      name: "Aarav Mehta", 
      achievement: "Under-12 State Champion", 
      rating: "+400 points in 6 months",
      avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400"
    },
    { 
      name: "Diya Sharma", 
      achievement: "Rapid Rating 1650+", 
      rating: "First tournament win in 3 months",
      avatar: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=400"
    },
    { 
      name: "Rohan Patel", 
      achievement: "National Finalist 2024", 
      rating: "From beginner to champion",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-sans pt-20">
      
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You'll{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Experience
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-amber-200 to-yellow-200 transform rotate-[-1deg] z-0"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our free demo class gives you a complete taste of our teaching methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.text}</h3>
                <p className="text-gray-600">{feature.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our students transformed from beginners to champions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((student, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-full object-cover border-2 border-purple-100" />
                  <div>
                    <h3 className="font-bold text-gray-900">{student.name}</h3>
                    <p className="text-xs text-purple-600 font-semibold">{student.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">"{student.rating}"</p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-semibold text-amber-300">Limited Slots Available This Week</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Chess Journey?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* 3. Button now triggers the global modal */}
            <button 
              onClick={openDemoModal}
              className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-bold py-5 px-12 rounded-xl text-lg flex items-center gap-3 shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Free Demo Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white/30 text-white font-bold py-5 px-12 rounded-xl text-lg flex items-center gap-3 hover:bg-white/10 transition-all">
              <span>View All Programs</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* NOTE: Local Modal UI has been deleted. It is now handled globally via Layout.tsx */}
    </div>
  );
}