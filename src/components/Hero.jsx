import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDownRight, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personalData } from '../data/personal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.08,
    },
  },
};

const Hero = () => {
  const handleScroll = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-[#faf8f5]">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Hero Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-4 lg:py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          
          {/* Left Column: Clean Editorial Typography & Smooth Entrance */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Annotation Tag */}
            <motion.div variants={itemVariants} className="scientific-annotation text-teal-800 font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-700 animate-pulse" />
              <span>• PERSONAL RESEARCH PORTFOLIO</span>
            </motion.div>

            {/* Editorial Title */}
            <motion.h1 variants={titleVariants} className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[0.92]">
              <span className="group relative inline-block cursor-pointer">
                <span className="inline-block transition-all duration-300 group-hover:text-stone-950 group-hover:translate-x-1">
                  VARUN
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-stone-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
              <br />
              <span className="group relative inline-block cursor-pointer mt-1">
                <span className="inline-block italic font-normal text-stone-700 transition-all duration-300 group-hover:text-stone-900 group-hover:translate-x-1">
                  VENKATESH
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="font-sans text-base sm:text-lg font-bold text-stone-800 max-w-xl leading-snug">
              B.Tech Biotechnology Student | Aspiring Computational Biologist | Bioinformatics & AI Enthusiast
            </motion.p>

            {/* Location Tag */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 scientific-annotation text-teal-900 font-bold group cursor-default">
              <span className="group-hover:text-teal-700 transition-colors">ORIGIN: KOVILPATTI, TAMIL NADU (கோவில்பட்டி)</span>
              <span>•</span>
              <span className="group-hover:text-teal-700 transition-colors">LPU, PUNJAB</span>
            </motion.div>

            {/* Narrative Summary */}
            <motion.p variants={itemVariants} className="font-sans text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed hover:text-stone-900 transition-colors duration-300">
              "Biotechnology student passionate about combining biology, computational methods, programming, and artificial intelligence to solve problems in life sciences."
            </motion.p>

            {/* Career Vision Block */}
            <motion.div variants={itemVariants} className="p-4 rounded-r-xl border-l-2 hover:border-l-4 border-teal-800 bg-stone-100/80 max-w-xl transition-all duration-300 hover:bg-stone-200/60 cursor-default">
              <span className="scientific-annotation text-teal-900 font-bold block mb-1">CAREER VISION</span>
              <p className="text-xs text-stone-700 font-sans italic leading-relaxed">
                "Building toward a career at the intersection of Biotechnology, Computational Biology, Bioinformatics, and Artificial Intelligence."
              </p>
            </motion.div>

            {/* Tamil Scientific Philosophy Quote — Crystal Clear Tamil Script */}
            <motion.div variants={itemVariants} className="p-5 rounded-xl border border-amber-300/80 hover:border-amber-400 bg-amber-50/90 hover:bg-amber-100/80 max-w-xl shadow-2xs hover:shadow-md transition-all duration-300 cursor-default">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-200/80">
                <span className="scientific-annotation text-amber-900 font-bold">
                  தமிழ் தத்துவக் கோட்பாடு • RESEARCH PHILOSOPHY
                </span>
                <span className="text-[11px] font-mono text-amber-900 font-bold">— அவ்வையார் (Avvaiyar)</span>
              </div>

              {/* Intact Tamil Text */}
              <p className="font-serif text-lg sm:text-xl font-extrabold text-stone-900 leading-snug tracking-normal">
                "கற்றது கைமண் அளவு, கல்லாதது உலகளவு"
              </p>

              <p className="text-xs text-stone-700 font-mono mt-2 italic">
                "What we have learned is a handful of sand; what we have not learned is the size of the world."
              </p>
            </motion.div>

            {/* Editorial Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => handleScroll('about')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-stone-900 hover:bg-teal-800 text-white text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer shadow-md"
              >
                <span>EXPLORE JOURNEY</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <a
                href={personalData.cvPath}
                download="Varun-Venkatesh-CV.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-mono tracking-wider transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4 text-teal-800" />
                <span>DOWNLOAD CV (PDF)</span>
              </a>
            </motion.div>

            {/* Minimal Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-4 border-t border-stone-200 w-full">
              <span className="scientific-annotation text-stone-400">CONNECT:</span>
              
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-stone-600 hover:text-teal-800 transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-stone-600 hover:text-teal-800 transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalData.contact.email}`}
                aria-label="Email"
                className="text-stone-600 hover:text-teal-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Portrait Crop Top-Aligned Side-by-Side to Name with Silky Smooth Fade In */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 flex flex-col items-center lg:items-end pt-1"
          >
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Top Annotation Tag */}
              <div className="flex items-center justify-between pb-2 border-b border-stone-300 mb-3 transition-colors duration-300 group-hover:border-teal-800">
                <span className="scientific-annotation">FIG. 1.0 — SUBJECT PORTRAIT</span>
                <span className="scientific-annotation text-teal-800 font-bold">VARUN VENKATESH</span>
              </div>

              {/* Portrait Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 rounded-none border border-stone-300 shadow-xl transition-all duration-500 group-hover:border-teal-800 group-hover:shadow-2xl">
                
                {/* Portrait Image */}
                <img
                  src={personalData.profilePhoto}
                  alt="Varun Venkatesh Portrait"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.03] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                />

                {/* Subtle Framing Corner Accents on Hover */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-teal-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-teal-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-teal-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-teal-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-stone-500">
                <span>B.TECH BIOTECHNOLOGY STUDENT</span>
                <span>LOVELY PROFESSIONAL UNIVERSITY</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
