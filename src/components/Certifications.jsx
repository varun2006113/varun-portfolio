import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { certificationsData, certificationCategories } from '../data/certifications';

const Certifications = ({ onOpenCertificate }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCert, setHoveredCert] = useState(null);
  const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });

  // Filter certificates based on selected category tab
  const filteredCerts = selectedCategory === "All"
    ? certificationsData
    : certificationsData.filter(cert => {
        if (selectedCategory === "Certifications") return ["Programming", "Web Development", "Databases", "Skills"].includes(cert.category);
        return cert.category === selectedCategory;
      });

  const handleMouseMove = (e) => {
    // Positioning popover cleanly near cursor
    const x = Math.min(e.clientX + 24, window.innerWidth - 340);
    const y = Math.min(e.clientY - 100, window.innerHeight - 260);
    setPopoverPos({ x: Math.max(20, x), y: Math.max(20, y) });
  };

  return (
    <section id="certifications" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-300 mb-12">
          <span className="scientific-annotation text-teal-800 font-bold">
            06 / CERTIFICATE ARCHIVE — சான்றிதழ்கள் (CURATED DIGITAL CATALOGUE)
          </span>
          <span className="scientific-annotation text-stone-400">
            SORTED NEWEST → OLDEST ({filteredCerts.length} ITEMS)
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {certificationCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-colors border ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white border-stone-900 font-bold'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Digital Archive List Composition */}
        <div className="border-t border-stone-300">
          {filteredCerts.map((cert, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                onMouseEnter={(e) => {
                  setHoveredCert(cert);
                  handleMouseMove(e);
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredCert(null)}
                onClick={() => onOpenCertificate(cert)}
                className="group py-5 px-4 border-b border-stone-200 hover:bg-white hover:border-teal-700 transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Number & Title */}
                <div className="flex items-baseline gap-4 md:w-3/5">
                  <span className="font-mono text-xs font-bold text-teal-800 shrink-0">
                    {num}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-teal-800 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-sans mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Date & Category Tag */}
                <div className="flex items-center justify-between md:justify-end gap-6 md:w-2/5">
                  <span className="scientific-annotation text-stone-500">
                    {cert.date}
                  </span>

                  <span className="px-2.5 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[10px] font-mono uppercase">
                    {cert.category}
                  </span>

                  <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-teal-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Desktop Hover Floating Image Preview Popover */}
      <AnimatePresence>
        {hoveredCert && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{
              position: 'fixed',
              left: popoverPos.x,
              top: popoverPos.y,
              pointerEvents: 'none',
              zIndex: 50
            }}
            className="hidden md:block w-80 bg-white border border-stone-300 p-3 shadow-2xl"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 border border-stone-200 mb-2">
              <img
                src={hoveredCert.fileUrl}
                alt={hoveredCert.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-1">
              <p className="font-serif text-xs font-bold text-stone-900 truncate">{hoveredCert.title}</p>
              <p className="scientific-annotation text-[10px] text-teal-800">{hoveredCert.issuer} • {hoveredCert.date}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
