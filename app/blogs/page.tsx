"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  Search,
  BookOpen,
  ArrowRight,
  Sparkles,
  Trophy,
  Brain,
  ChevronRight
} from "lucide-react";
import { format } from "date-fns";
import BlogHero from "@/components/ui/blogBanner";

const BRAND_TEAL = "#008d96";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Chess Pieces: Understanding Their Powers",
      excerpt: "Master the unique movements and tactical values of the King, Queen, Rook, and more.",
      author: "Vaibhav Deshmukh",
      date: "2025-09-10",
      readTime: "12 min",
      category: "Basics",
      tags: ["Beginner", "Rules"],
      image: "/b1.jpeg",
      color: "from-[#008d96] to-[#00b4bf]"
    },
    {
      id: 2,
      title: "Why Engineers Excel at Chess",
      excerpt: "How a structured engineering mindset translates into superior tactical calculation on the board.",
      author: "D'Square Team",
      date: "2025-09-12",
      readTime: "8 min",
      category: "Philosophy",
      tags: ["Logic", "Mindset"],
      image: "/b2.jpg",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 3,
      title: "Top 5 Openings for Young Champions",
      excerpt: "The most reliable opening repertoires that help beginners control the center early.",
      author: "Pushkar Jadhav",
      date: "2025-09-15",
      readTime: "10 min",
      category: "Openings",
      tags: ["Strategy", "Tournament"],
      image: "/b3.webp",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Mastering the King & Pawn Endgame",
      excerpt: "Learn the concept of 'Opposition' and how to convert a single pawn advantage into a win.",
      author: "Gurujeet Singh",
      date: "2025-09-18",
      readTime: "15 min",
      category: "Endgames",
      tags: ["Advanced", "Calculation"],
      image: "/b4.webp",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 5,
      title: "Handling Tournament Pressure",
      excerpt: "Psychological tips for students playing their first FIDE rated offline tournament.",
      author: "Aayuti",
      date: "2025-09-20",
      readTime: "7 min",
      category: "Psychology",
      tags: ["Confidence", "Events"],
      image: "/b5.webp",
      color: "from-rose-500 to-pink-500"
    },
    {
      id: 6,
      title: "The Sicilian Defense: A Deep Dive",
      excerpt: "Unpacking one of the most popular and aggressive responses for black against 1.e4.",
      author: "Vaibhav Deshmukh",
      date: "2025-09-22",
      readTime: "20 min",
      category: "Openings",
      tags: ["Intermediate", "Theory"],
      image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=800&auto=format&fit=crop",
      color: "from-slate-700 to-slate-900"
    },
    {
      id: 7,
      title: "Parent's Guide to FIDE Ratings",
      excerpt: "Everything you need to know about how Elo ratings work and how students can earn them.",
      author: "Academy Staff",
      date: "2025-09-25",
      readTime: "6 min",
      category: "Parent Guide",
      tags: ["Ratings", "FIDE"],
      image: "/b6.jpeg",
      color: "from-cyan-500 to-[#008d96]"
    },
    {
      id: 8,
      title: "Tactical Patterns: Forks & Pins",
      excerpt: "The bread and butter of chess tactics. Learn to spot these winning combinations in every game.",
      author: "Pushkar Jadhav",
      date: "2025-09-28",
      readTime: "11 min",
      category: "Basics",
      tags: ["Tactics", "Patterns"],
      image: "/b7.webp",
      color: "from-violet-500 to-purple-500"
    }
  ];

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "Basics", name: "Basics" },
    { id: "Openings", name: "Openings" },
    { id: "Endgames", name: "Endgames" },
    { id: "Philosophy", name: "Engineering Logic" },
    { id: "Parent Guide", name: "Parent Guide" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white py-10 font-sans">
      
      {/* Hero Header */}
      <BlogHero/>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-slate-100 py-6 px-4 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search articles, strategies, tactics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 border-slate-200 rounded-xl focus:ring-[#008d96]"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-[#008d96] text-white shadow-lg shadow-[#008d96]/20"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group border-none shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,141,150,0.15)] transition-all duration-500 rounded-[2.5rem] overflow-hidden flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${post.color} border-none text-white font-black text-[10px] px-3 py-1 uppercase`}>
                  {post.category}
                </Badge>
              </div>

              {/* Card Body */}
              <CardContent className="p-8 flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-[#008d96]" />
                    {format(new Date(post.date), "MMM dd, yyyy")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-[#008d96]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-[#008d96] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>

              {/* Card Footer */}
              <CardFooter className="p-8 pt-0 mt-auto">
                <div className="flex items-center justify-between w-full border-t border-slate-50 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#e6f4f5] flex items-center justify-center text-[#008d96]">
                       <Brain size={16} />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{post.author}</span>
                  </div>
                  <Button variant="ghost" className="p-0 text-[#008d96] hover:bg-transparent group/btn">
                     <span className="text-xs font-black uppercase tracking-widest mr-1">Read</span>
                     <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <Search className="mx-auto mb-4 text-slate-300" size={48} />
            <h3 className="text-xl font-black text-slate-400 italic">No strategies found matching your search.</h3>
          </div>
        )}
      </section>
    </div>
  );
}