import React, { useState, useEffect } from 'react';
import { Download, Menu } from 'lucide-react';
import { personalData } from '../data/personal';
import FullMenuModal from './FullMenuModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf8f5]/90 backdrop-blur-md border-b border-stone-200 py-3 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Top-Left Brand */}
          <a href="#home" className="flex flex-col group focus:outline-none">
            <span className="font-serif text-lg font-extrabold tracking-tight text-stone-900 group-hover:text-teal-800 transition-colors">
              {personalData.name}
            </span>
            <span className="scientific-annotation text-[9px] text-teal-800 font-semibold tracking-widest uppercase">
              BIOTECHNOLOGY / COMPUTATION
            </span>
          </a>

          {/* Top-Right Navigation & Actions */}
          <div className="flex items-center space-x-3">
            <a
              href={personalData.cvPath}
              download="Varun-V-CV.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 hover:border-stone-900 bg-white hover:bg-stone-900 hover:text-white text-xs font-mono tracking-wider transition-all duration-200 shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 hover:bg-teal-800 text-white text-xs font-mono tracking-wider transition-colors shadow-xs cursor-pointer"
              aria-label="Open Navigation Index"
            >
              <Menu className="w-3.5 h-3.5" />
              <span>[ INDEX — 09 ]</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Index Overlay */}
      <FullMenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
