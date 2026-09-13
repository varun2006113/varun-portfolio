import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { accomplishmentsData } from '../data/accomplishments';

const Accomplishments = ({ onOpenCertificate }) => {
  return (
    <section id="accomplishments" className="py-24 bg-white relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-16">
          <span className="scientific-annotation text-teal-800 font-bold">
            07 / ACCOMPLISHMENTS — சாதனைகள் (HACKATHONS & WORKSHOPS)
          </span>
          <span className="scientific-annotation text-stone-400">
            CHRONOLOGICAL TECHNICAL ENGAGEMENT
          </span>
        </div>

        {/* Hackathons Editorial List */}
        <div className="mb-16">
          <h3 className="scientific-annotation text-stone-400 mb-6 block">
            HACKATHONS & COMPETITIONS
          </h3>

          <div className="space-y-6">
            {accomplishmentsData.hackathons.map((h, idx) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 bg-[#faf8f5] border border-stone-200 hover:border-teal-800 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-teal-800">{h.date}</span>
                    <span className="scientific-annotation text-[10px] text-stone-500">{h.type}</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-1">{h.title}</h4>
                  <p className="font-sans text-xs text-teal-800 font-semibold mb-2">{h.organization}</p>
                  <p className="font-sans text-xs text-stone-600 max-w-2xl leading-relaxed">{h.description}</p>
                </div>

                {h.certificateUrl && onOpenCertificate && (
                  <button
                    onClick={() => onOpenCertificate({ title: h.title, issuer: h.organization, date: h.date, fileUrl: h.certificateUrl })}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-mono tracking-wider transition-colors shrink-0 cursor-pointer"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ArrowUpRight className="w-4 h-4 text-teal-800" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workshops Editorial List */}
        <div>
          <h3 className="scientific-annotation text-stone-400 mb-6 block">
            WORKSHOPS & AI AUTOMATION PROJECTS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accomplishmentsData.workshops.map((w, idx) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 bg-[#faf8f5] border border-stone-200 hover:border-teal-800 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 mb-3">
                    <span className="font-mono text-xs font-bold text-teal-800">{w.date}</span>
                    <span className="scientific-annotation text-[10px]">{w.type}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">{w.title}</h4>
                  <p className="font-sans text-xs text-teal-800 font-semibold mb-2">{w.organization}</p>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">{w.description}</p>
                </div>

                {w.certificateUrl && onOpenCertificate && (
                  <button
                    onClick={() => onOpenCertificate({ title: w.title, issuer: w.organization, date: w.date, fileUrl: w.certificateUrl })}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-800 hover:underline pt-2 border-t border-stone-200 cursor-pointer"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Accomplishments;
