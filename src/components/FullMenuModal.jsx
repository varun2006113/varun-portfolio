import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/personal';

const navLinks = [
  { num: '01', name: 'ABOUT', href: '#about', desc: 'Academic background & career vision' },
  { num: '02', name: 'ROADMAP', href: '#roadmap', desc: 'Scroll-driven vertical journey' },
  { num: '03', name: 'SKILLS', href: '#skills', desc: 'Interdisciplinary capabilities map' },
  { num: '04', name: 'INTERNSHIP', href: '#internship', desc: 'Pharmaceutical QA/QC industrial case study' },
  { num: '05', name: 'PROJECTS', href: '#projects', desc: 'AI Research Summariser & feature tools' },
  { num: '06', name: 'CERTIFICATES', href: '#certifications', desc: 'Curated digital certificate archive' },
  { num: '07', name: 'ACCOMPLISHMENTS', href: '#accomplishments', desc: 'Hackathons & technical workshops' },
  { num: '08', name: 'ACHIEVEMENTS', href: '#achievements', desc: 'Honors & participation highlights' },
  { num: '09', name: 'CONTACT', href: '#contact', desc: 'Direct inquiry & CV download' },
];

const FullMenuModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#faf8f5]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
      >
        {/* Top Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-300">
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
              {personalData.name}
            </span>
            <span className="block scientific-annotation text-[10px] text-teal-800 font-semibold mt-0.5">
              DIGITAL SCIENTIFIC JOURNAL & ARCHIVE
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 hover:border-stone-900 text-xs font-mono tracking-wider transition-colors cursor-pointer"
            aria-label="Close menu index"
          >
            <span>[ CLOSE ]</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Links Navigation Matrix */}
        <div className="py-12 max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group flex items-start justify-between py-3 border-b border-stone-200 hover:border-teal-700 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-teal-800 font-bold">{link.num}</span>
                <div>
                  <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-teal-800 transition-colors">
                    {link.name}
                  </span>
                  <span className="block text-xs text-stone-500 font-sans mt-0.5">{link.desc}</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-teal-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="scientific-annotation text-stone-500">
            VARUN V • B.TECH BIOTECHNOLOGY (LPU)
          </span>

          <a
            href={personalData.cvPath}
            download="Varun-V-CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 hover:bg-teal-800 text-white text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FullMenuModal;
