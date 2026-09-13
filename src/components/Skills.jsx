import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-12">
          <span className="scientific-annotation text-teal-800 font-bold">
            03 / WHAT I CAN DO — திறன்கள் (SKILLS MAP)
          </span>
          <span className="scientific-annotation text-stone-400">
            INTERACTIVE CURSOR MATRIX
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 border cursor-pointer ${
              activeTab === 'all'
                ? 'bg-stone-900 text-white border-stone-900 font-bold shadow-xs'
                : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900'
            }`}
          >
            ALL COMPETENCIES
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 border cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-stone-900 text-white border-stone-900 font-bold shadow-xs'
                  : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900'
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Typographic Skills Layout with Cursor Spotlight Interaction */}
        <motion.div layout className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline pb-12 border-b border-stone-100 last:border-none"
              >
                {/* Category Header */}
                <div className="lg:col-span-4">
                  <span className="scientific-annotation text-teal-800 font-bold block mb-1">
                    0{idx + 1} — CATEGORY
                  </span>
                  <h3 className="font-serif text-2xl font-extrabold text-stone-900">
                    {category.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-sans mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Interactive Typographic Tag Cloud */}
                <div className="lg:col-span-8 flex flex-wrap gap-x-6 gap-y-4 items-baseline">
                  {category.skills.map((skill, sIdx) => {
                    const isHovered = hoveredSkill === skill.name;
                    const isAnyHoveredInCat = category.skills.some(s => s.name === hoveredSkill);

                    // Vary typography sizes naturally for editorial feel
                    const sizeClasses = [
                      "text-xl sm:text-2xl font-serif font-bold text-stone-900",
                      "text-lg sm:text-xl font-sans font-semibold text-stone-800",
                      "text-base font-sans font-medium text-stone-700",
                      "text-sm font-mono text-stone-600"
                    ][sIdx % 4];

                    return (
                      <motion.div
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        animate={{
                          scale: isHovered ? 1.08 : 1,
                          opacity: isAnyHoveredInCat ? (isHovered ? 1 : 0.45) : 1
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`group relative cursor-pointer px-3 py-1 rounded-md transition-all duration-200 ${
                          isHovered ? 'bg-teal-50 border border-teal-300 shadow-sm' : 'bg-transparent border border-transparent'
                        }`}
                      >
                        <span className={`${sizeClasses} ${isHovered ? 'text-teal-900' : 'text-stone-900'} transition-colors`}>
                          {skill.name}
                        </span>
                        
                        <span className={`text-[10px] font-mono ml-2 ${isHovered ? 'text-teal-800 font-bold' : 'text-stone-400'}`}>
                          /{skill.level}
                        </span>

                        {/* Interactive Floating Context Tooltip */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 6, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 4, scale: 0.9 }}
                              className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-stone-900 text-white text-[10px] font-mono rounded shadow-lg whitespace-nowrap z-30 pointer-events-none"
                            >
                              <span className="text-teal-400 font-bold">✓</span> {skill.name} ({skill.level})
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-stone-900 rotate-45" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
