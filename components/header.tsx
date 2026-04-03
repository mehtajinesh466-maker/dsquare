"use client";

import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, ArrowRightIcon } from "./ui/BannerIcon";
import { ChevronDown, Globe, MapPin } from "lucide-react"; // Icons for dropdown
import { useDemoModal } from "@/context/DemoContext";

// --- Configuration & Constants ---
const BRAND_COLORS = {
  primary: "#008d96",
  bright: "#00b4bf",
  lightBg: "#f0fafb",
};

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Classes", 
    href: "#",
    submenu: [
      { name: "Online Classes", href: "/online-classes", icon: Globe },
      { name: "Offline Classes", href: "/offline-classes", icon: MapPin },
    ]
  },
  { name: "Curriculum", href: "/curriculum" },
  { name: "Achievement", href: "/achievements" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

// --- Sub-Components ---

const Logo = ({ scrolled }: { scrolled: boolean }) => (
  <a href="/" className="flex items-center group shrink-0" aria-label="D'Square Home">
    <div className={`relative transition-all duration-500 ease-in-out ${
      scrolled ? "w-16 h-16" : "w-20 h-20 md:w-28 md:h-28"
    }`}>
      <img
        src="/logo3.png"
        alt="D'Square Chess Academy"
        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
      />
    </div>
  </a>
);

/**
 * Desktop Navigation with Dropdown support
 */
const DesktopNav = () => (
  <nav className="hidden xl:flex items-center gap-x-1 p-1.5 bg-gray-50/80 rounded-full border border-gray-200/50 backdrop-blur-sm">
    {NAV_ITEMS.map((item) => (
      <div key={item.name} className="relative group">
        {item.submenu ? (
          // Dropdown Trigger
          <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-bold text-gray-600 rounded-full hover:bg-white hover:text-[#008d96] transition-all duration-200 whitespace-nowrap">
            {item.name}
            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </button>
        ) : (
          // Standard Link
          <a
            href={item.href}
            className="px-4 py-2 text-[13px] font-bold text-gray-600 rounded-full hover:bg-white hover:text-[#008d96] transition-all duration-200 whitespace-nowrap"
          >
            {item.name}
          </a>
        )}

        {/* Dropdown Menu */}
        {item.submenu && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 p-2 z-50">
            {item.submenu.map((sub) => (
              <a
                key={sub.name}
                href={sub.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-[#f0fafb] hover:text-[#008d96] transition-all"
              >
                <sub.icon size={16} className="text-[#00b4bf]" />
                {sub.name}
              </a>
            ))}
          </div>
        )}
      </div>
    ))}
  </nav>
);

const BookDemoBtn = ({ scrolled, onClick }: { scrolled: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    style={{ backgroundColor: BRAND_COLORS.primary }}
    className={`hidden md:flex items-center gap-2 text-white rounded-full font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-[#00b4bf]/40 hover:brightness-110 hover:-translate-y-0.5 ${
      scrolled ? "px-6 py-2.5" : "px-8 py-3.5"
    }`}
  >
    Book Demo
    <ArrowRightIcon className="w-4 h-4" />
  </button>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 left-0 right-0 ${
        scrolled
          ? "top-3 mx-4 md:mx-auto max-w-7xl rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,180,191,0.15)] border border-[#00b4bf]/20"
          : "top-0 bg-white "
      }`}
    >
      <div className="px-4 lg:px-8 mx-auto">
        <div className="flex items-center justify-between py-1">
          <Logo scrolled={scrolled} />
          <DesktopNav />
          <div className="flex items-center gap-4">
            <BookDemoBtn scrolled={scrolled} onClick={openDemoModal} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2.5 rounded-xl transition-all duration-300 ${
                isMobileMenuOpen ? "bg-red-50 text-red-500" : "bg-[#e6f7f8] text-[#008d96]"
              }`}
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <div
        className={`xl:hidden absolute left-0 right-0 top-[calc(100%+12px)] mx-4 bg-white rounded-3xl shadow-2xl border border-[#00b4bf]/10 overflow-hidden transition-all duration-500 origin-top ${
          isMobileMenuOpen ? "max-h-[90vh] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button 
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    className="flex items-center justify-between w-full p-4 rounded-2xl text-gray-700 font-bold hover:bg-[#f0fafb]"
                  >
                    {item.name}
                    <ChevronDown size={18} className={`transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen ? "max-h-40" : "max-h-0"}`}>
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="flex items-center gap-3 p-4 pl-8 rounded-2xl text-gray-500 font-bold hover:text-[#008d96]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <sub.icon size={16} />
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="flex items-center justify-between p-4 rounded-2xl text-gray-700 font-bold hover:bg-[#f0fafb]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          
          <div className="pt-4 mt-2 border-t border-gray-100">
            <button
              onClick={() => { setIsMobileMenuOpen(false); openDemoModal(); }}
              style={{ backgroundColor: BRAND_COLORS.primary }}
              className="w-full text-center py-4 rounded-2xl text-white font-extrabold uppercase tracking-widest"
            >
              Book Your Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;