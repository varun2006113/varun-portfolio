import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personalData } from '../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf8f5] border-t border-stone-300 pt-16 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-300 items-start">
          
          {/* Brand Colophon */}
          <div className="md:col-span-6 space-y-3">
            <span className="font-serif text-2xl font-extrabold tracking-tight text-stone-900">
              {personalData.name}
            </span>
            <p className="scientific-annotation text-teal-800 font-bold block">
              B.TECH BIOTECHNOLOGY • LOVELY PROFESSIONAL UNIVERSITY
            </p>
            <p className="font-sans text-xs text-stone-600 max-w-md leading-relaxed">
              Designed as a Digital Scientific Journal exploring the intersection of biology, computational algorithms, bioinformatics, and artificial intelligence.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-3">
            <span className="scientific-annotation text-stone-400">
              DIRECT CHANNELS
            </span>
            <div className="flex items-center space-x-4">
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.contact.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 scientific-annotation text-[10px] text-stone-500">
          <p>© {currentYear} VARUN VENKATESH. ALL RIGHTS RESERVED.</p>
          <p>ORIGIN: KOVILPATTI, TAMIL NADU • B.TECH BIOTECHNOLOGY & COMPUTATIONAL BIOLOGY</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
