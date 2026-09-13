import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-300 mb-16">
          <span className="scientific-annotation text-teal-800 font-bold">
            08 / ACHIEVEMENTS — HONORS & RECOGNITIONS
          </span>
          <span className="scientific-annotation text-stone-400">
            VERIFIED PARTICIPATION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 bg-white border border-stone-200 shadow-2xs hover:border-teal-800 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-3">
                  <span className="scientific-annotation text-teal-800 font-bold">
                    {ach.badge}
                  </span>
                  <span className="font-mono text-xs text-stone-400">
                    {ach.date}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  {ach.title}
                </h4>
                
                <p className="scientific-annotation text-stone-500 mb-2">
                  {ach.category}
                </p>

                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 scientific-annotation text-teal-800 font-bold">
                ✓ VERIFIED EVENT
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
