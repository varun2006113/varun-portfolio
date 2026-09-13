import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Eye } from 'lucide-react';
import { internshipData } from '../data/internship';

const Internship = ({ onOpenCertificate }) => {
  return (
    <section id="internship" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-300 mb-16">
          <span className="scientific-annotation text-teal-800 font-bold">
            04 / WHAT I EXPERIENCED — தொழில்துறை பயிற்சி (INDUSTRIAL CASE STUDY)
          </span>
          <span className="scientific-annotation text-stone-400">
            PHARMACEUTICAL QA/QC PROTOCOLS
          </span>
        </div>

        {/* Case Study Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-stone-300 p-8 sm:p-12 shadow-sm relative space-y-10"
        >
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-stone-200">
            <div>
              <span className="scientific-annotation text-teal-800 font-bold block mb-1">
                CASE STUDY — PHARMACEUTICAL QUALITY SYSTEMS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
                {internshipData.company}
              </h3>
              <p className="font-sans text-sm font-semibold text-stone-700 mt-1">
                {internshipData.role} • <span className="font-mono text-xs text-teal-800">{internshipData.period}</span>
              </p>
            </div>

            {onOpenCertificate && (
              <button
                onClick={() =>
                  onOpenCertificate({
                    title: `QC & QA Industrial Internship Certificate`,
                    issuer: internshipData.company,
                    date: internshipData.period,
                    fileUrl: internshipData.certificateUrl
                  })
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-teal-800 text-white text-xs font-mono tracking-wider transition-colors shadow-2xs shrink-0 cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>VIEW INTERNSHIP CERTIFICATE</span>
              </button>
            )}
          </div>

          {/* Summary Quote */}
          <p className="font-serif italic text-lg text-stone-700 pb-6 border-b border-stone-200 leading-relaxed">
            "{internshipData.summary}"
          </p>

          {/* Industrial Laboratory Gallery Section */}
          {internshipData.galleryImages && (
            <div className="pb-8 border-b border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="scientific-annotation text-teal-800 font-bold flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  INDUSTRIAL LABORATORY PHOTOGRAPHY & OPERATIONS
                </span>
                <span className="scientific-annotation text-stone-400">TAP / HOVER TO ENLARGE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {internshipData.galleryImages.map((img, gIdx) => (
                  <motion.div
                    key={gIdx}
                    whileHover={{ scale: 1.02 }}
                    onClick={() =>
                      onOpenCertificate({
                        title: img.title,
                        issuer: internshipData.company,
                        date: internshipData.period,
                        fileUrl: img.imageUrl
                      })
                    }
                    className="group bg-stone-50 border border-stone-200 p-3 hover:border-teal-800 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200 mb-3 border border-stone-200">
                      <img
                        src={img.imageUrl}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    <span className="font-serif text-sm font-bold text-stone-900 block group-hover:text-teal-800 transition-colors">
                      {img.title}
                    </span>
                    <p className="text-[11px] font-sans text-stone-600 leading-normal mt-1">
                      {img.caption}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Four Case Study Pillars Grid */}
          <div className="py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Environment */}
            <div>
              <span className="scientific-annotation text-teal-800 font-bold block mb-2">
                01 — ENVIRONMENT
              </span>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">Pharmaceutical Manufacturing</h4>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Industrial formulation facility adhering to cGMP, GLP regulatory standards, cleanroom protocols, and active production lines.
              </p>
            </div>

            {/* Exposure */}
            <div>
              <span className="scientific-annotation text-teal-800 font-bold block mb-2">
                02 — EXPOSURE
              </span>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">Quality Control & Assurance</h4>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Routine laboratory procedures, sample analysis, regulatory audit compliance, and analytical testing methodologies.
              </p>
            </div>

            {/* Documentation */}
            <div>
              <span className="scientific-annotation text-teal-800 font-bold block mb-2">
                03 — DOCUMENTATION
              </span>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">BMR, ADS & Water Reports</h4>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Batch Manufacturing Records (BMR), Analytical Data Sheet (ADS) entries, and microbial/purified water analysis logs.
              </p>
            </div>

            {/* Testing */}
            <div>
              <span className="scientific-annotation text-teal-800 font-bold block mb-2">
                04 — TESTING
              </span>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">In-Process Testing</h4>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Weight variation, friability analysis, disintegration testing, Loss on Drying (LOD), and sample collection protocols.
              </p>
            </div>

          </div>

          {/* Detailed Experiences List */}
          <div className="pt-6 border-t border-stone-200">
            <span className="scientific-annotation text-stone-400 block mb-4">SPECIFIC OPERATIONAL PROCEDURES:</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {internshipData.experiences.map((exp, idx) => (
                <div key={idx} className="p-3 bg-stone-50 border border-stone-200 text-xs">
                  <span className="font-mono text-teal-800 font-bold mr-2">[{idx + 1}]</span>
                  <strong className="text-stone-900">{exp.title}:</strong>
                  <span className="text-stone-600 ml-1">{exp.description}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Internship;
