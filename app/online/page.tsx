"use client";

import React from 'react';
import { 
  Globe2, 
  Monitor, 
  Video, 
  Binary, 
  Layout, 
  Gamepad2, 
  LineChart, 
  Users2, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Laptop,
  Wifi,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/ui/online';
import ProblemSolution from '@/components/ui/problem';
import HowOnlineClassesWork from '@/components/ui/onlineclass';
import CurriculumPreview from '@/components/ui/curr';
import BatchStructure from '@/components/ui/batch';
import GlobalPresence from '@/components/ui/global';
import FinalCTA from '@/components/ui/onlinecta';

const BRAND_TEAL = "#008d96";

const OnlineClassesPage = () => {
  const conductSteps = [
    { icon: Video, title: "Live Sessions", desc: "Interactive classes conducted by expert coaches in real-time." },
    { icon: Binary, title: "Advanced Software", desc: "Real-time analysis using professional chess engines and tools." },
    { icon: Layout, title: "Digital Boards", desc: "Clear explanations and demonstrations on high-definition boards." },
    { icon: Gamepad2, title: "Practice Games", desc: "Regular matches, assignments, and instant move-by-move feedback." },
    { icon: LineChart, title: "Performance Tracking", desc: "Continuous monitoring and data-driven improvement guidance." },
  ];

  const globalCountries = [
    "USA", "UK", "UAE", "Australia", "Singapore", "New Zealand", "Canada", 
    "Dubai", "Switzerland", "Oman", "Qatar", "Saudi Arabia", "Bahrain", "Kuwait"
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#008d96]/20">
      
      <HeroSection/>
      <ProblemSolution/>
      <HowOnlineClassesWork/>
      <CurriculumPreview/>
      <BatchStructure/>
      <GlobalPresence/>
      <FinalCTA/>


    </div>
  );
};

export default OnlineClassesPage;