import React from 'react';
import { motion } from 'framer-motion';
import ScientificArtifact3D from './ScientificArtifact3D';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Annotation */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-12">
          <span className="scientific-annotation text-teal-800 font-bold">
            01 / WHO I AM — சுயவிவரம் (ACADEMIC STATEMENT)
          </span>
          <span className="scientific-annotation text-stone-400">
            RESEARCH INTERSECTIONS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Annotations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Large Statement Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
              "I work at the intersection of biology and computation."
            </h2>

            {/* Prose Body */}
            <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              I am a B.Tech Biotechnology student at Lovely Professional University with a growing interest in Computational Biology, Bioinformatics, Artificial Intelligence and scientific computing.
            </p>

            <p className="font-sans text-sm text-stone-600 leading-relaxed max-w-2xl">
              My academic background provides me with a foundation in biological sciences, while my programming and technical experience allows me to explore computational approaches to biological problems. I am continuously developing my skills in programming, biological data analysis, AI, scientific research, and computational biology.
            </p>

            {/* Side Typography Annotations (No generic cards!) */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div>
                <span className="scientific-annotation text-stone-400 block mb-1">HOMETOWN</span>
                <span className="font-serif text-sm font-bold text-stone-900">Kovilpatti, TN</span>
              </div>

              <div>
                <span className="scientific-annotation text-stone-400 block mb-1">EDUCATION</span>
                <span className="font-serif text-sm font-bold text-stone-900">B.Tech Biotech</span>
              </div>

              <div>
                <span className="scientific-annotation text-stone-400 block mb-1">UNIVERSITY</span>
                <span className="font-serif text-sm font-bold text-stone-900">LPU India</span>
              </div>

              <div>
                <span className="scientific-annotation text-stone-400 block mb-1">ACADEMIC CGPA</span>
                <span className="font-mono text-lg font-extrabold text-teal-800">9.0 / 10.0</span>
              </div>

              <div>
                <span className="scientific-annotation text-stone-400 block mb-1">PRIMARY FOCUS</span>
                <span className="font-serif text-sm font-bold text-stone-900">Computational Bio</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three.js Interactive 3D Molecular Lattice Artifact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full bg-[#faf8f5] border border-stone-200 p-4 shadow-sm relative">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 mb-2">
                <span className="scientific-annotation text-teal-800">ARTIFACT 3D — LATTICE NETWORK</span>
                <span className="scientific-annotation text-stone-400">THREE.JS</span>
              </div>

              {/* Three.js Canvas Container */}
              <ScientificArtifact3D />

              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-stone-500 border-t border-stone-200">
                <span>INTERACTIVE MOLECULAR MODEL</span>
                <span>MOVE CURSOR TO TILT</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
