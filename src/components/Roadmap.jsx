import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, Activity } from 'lucide-react';
import { roadmapData } from '../data/roadmap';

// Biologically Accurate Mature mRNA Triplet Codon Translation Map
// Ribosome (80S: 60S Large + 40S Small Subunit) translocates 5' → 3' along mature mRNA.
// Each Triplet Codon specifies an amino acid residue added to the nascent polypeptide career chain.
const mrnaCodons = [
  {
    codon: 'AUG',
    anticodon: 'UAC',
    aminoAcid: 'Methionine (Met)',
    role: 'Translation Initiation / Start Codon',
    phase: 'INITIATION',
    locus: 'CODON 01',
    symbol: 'M',
    color: 'bg-emerald-600 text-white'
  },
  {
    codon: 'GCU',
    anticodon: 'CGA',
    aminoAcid: 'Alanine (Ala)',
    role: 'Polypeptide Elongation Residue 1',
    phase: 'ELONGATION',
    locus: 'CODON 02',
    symbol: 'A',
    color: 'bg-teal-600 text-white'
  },
  {
    codon: 'CGA',
    anticodon: 'GCU',
    aminoAcid: 'Arginine (Arg)',
    role: 'Polypeptide Elongation Residue 2',
    phase: 'ELONGATION',
    locus: 'CODON 03',
    symbol: 'R',
    color: 'bg-cyan-600 text-white'
  },
  {
    codon: 'UAC',
    anticodon: 'AUG',
    aminoAcid: 'Tyrosine (Tyr)',
    role: 'Polypeptide Elongation Residue 3',
    phase: 'ELONGATION',
    locus: 'CODON 04',
    symbol: 'Y',
    color: 'bg-indigo-600 text-white'
  },
  {
    codon: 'GAC',
    anticodon: 'CUG',
    aminoAcid: 'Aspartate (Asp)',
    role: 'Polypeptide Elongation Residue 4',
    phase: 'ELONGATION',
    locus: 'CODON 05',
    symbol: 'D',
    color: 'bg-purple-600 text-white'
  },
  {
    codon: 'CAG',
    anticodon: 'GUC',
    aminoAcid: 'Glutamine (Gln)',
    role: 'Active Elongation Residue 5',
    phase: 'ACTIVE',
    locus: 'CODON 06',
    symbol: 'Q',
    color: 'bg-amber-600 text-white'
  },
  {
    codon: 'UAA',
    anticodon: 'RF-1',
    aminoAcid: 'Release Factor (RF)',
    role: 'Translation Termination / Stop Codon',
    phase: 'TERMINATION',
    locus: 'CODON 07',
    symbol: '★',
    color: 'bg-rose-600 text-white'
  },
];

const categoryColors = {
  academic: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  skills: 'bg-teal-50 text-teal-800 border-teal-200',
  activity: 'bg-cyan-50 text-cyan-800 border-cyan-200',
  internship: 'bg-indigo-50 text-indigo-800 border-indigo-200',
  project: 'bg-purple-50 text-purple-800 border-purple-200',
  'next-steps': 'bg-amber-50 text-amber-800 border-amber-200',
  goal: 'bg-rose-50 text-rose-800 border-rose-200',
};

const Roadmap = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState('ribosome'); // 'ribosome' | 'grid'

  // Auto-play ribosome translation cycle
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % roadmapData.length);
      }, 3200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const currentMilestone = roadmapData[activeStep];
  const currentCodon = mrnaCodons[activeStep % mrnaCodons.length];

  return (
    <section id="roadmap" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-stone-300 mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono mb-3">
              <Activity className="w-4 h-4 text-teal-700 animate-pulse" />
              <span>02 / MATURE mRNA TRANSLATION — Ribosomal Career Pathway</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
              Translational <span className="biotech-gradient-text">mRNA Pathway</span>
            </h2>
            <p className="text-sm font-sans text-stone-600 mt-2 max-w-2xl leading-relaxed">
              Ribosomal translocation (5' → 3') along mature mRNA codons. Each triplet codon synthesizes a polypeptide amino acid residue in Varun's career evolution.
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-4 py-2 text-xs font-mono tracking-wider border rounded-full flex items-center gap-2 transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-teal-900 text-white border-teal-900 shadow-md'
                  : 'bg-white text-stone-800 border-stone-300 hover:border-stone-800'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-teal-300 animate-pulse" /> : <Play className="w-3.5 h-3.5 text-stone-700" />}
              <span>{isPlaying ? 'PAUSE RIBOSOME' : 'TRANSLOCATE RIBOSOME'}</span>
            </button>

            <div className="bg-stone-200/80 p-1 rounded-full flex items-center gap-1 border border-stone-300">
              <button
                onClick={() => setViewMode('ribosome')}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all cursor-pointer ${
                  viewMode === 'ribosome' ? 'bg-white text-stone-900 shadow-sm font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                RIBOSOME VIEW
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-stone-900 shadow-sm font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                CODON MATRIX
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Codon Ribbon Navigation */}
        <div className="mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-stone-200">
            {roadmapData.map((item, idx) => {
              const isActive = activeStep === idx;
              const cd = mrnaCodons[idx % mrnaCodons.length];
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`px-4 py-2.5 text-xs font-mono tracking-wider transition-all duration-300 shrink-0 border rounded-lg flex items-center gap-2.5 cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 font-bold shadow-lg scale-105'
                      : 'bg-white text-stone-700 border-stone-300 hover:border-stone-800 hover:text-stone-900'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-teal-400 animate-ping' : 'bg-stone-400'}`} />
                  <span className="font-bold">{item.year}</span>
                  <span className="opacity-70 text-[10px] hidden sm:inline">{item.title.substring(0, 18)}...</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${isActive ? 'bg-teal-800 text-teal-100' : 'bg-stone-100 text-stone-700'}`}>
                    {cd.codon}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* View Mode 1: Interactive Ribosome Translocation Visualizer + Clean Milestone Card */}
        {viewMode === 'ribosome' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Interactive Animated Ribosome & Mature mRNA Strand Visualizer */}
            <div className="lg:col-span-6 bg-white border border-stone-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[500px]">
              
              {/* mRNA Strand Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-700 animate-pulse" />
                  <span className="scientific-annotation text-teal-900 font-bold">
                    MATURE mRNA (5' m⁷G CAP → 3' POLY-A TAIL)
                  </span>
                </div>
                <span className="text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 border border-stone-200 rounded">
                  {currentCodon.aminoAcid}
                </span>
              </div>

              {/* Animated SVG Ribosome Machine Translocating along Codons */}
              <div className="relative py-6 flex-1 flex items-center justify-center">
                <svg className="w-full h-80 overflow-visible" viewBox="0 0 480 320">
                  <defs>
                    <linearGradient id="mrnaBackboneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0f766e" />
                      <stop offset="50%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <filter id="ribosomeGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 1. mRNA Strand Ribonucleotide Backbone */}
                  <g>
                    {/* 5' Cap Tag */}
                    <rect x="10" y="190" width="36" height="24" rx="4" fill="#0f766e" />
                    <text x="28" y="206" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">5' m⁷G</text>

                    {/* Backbone Line */}
                    <line x1="46" y1="202" x2="434" y2="202" stroke="url(#mrnaBackboneGrad)" strokeWidth="4" />

                    {/* 3' Poly(A) Tail Tag */}
                    <rect x="434" y="190" width="38" height="24" rx="4" fill="#334155" />
                    <text x="453" y="206" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">Poly(A)</text>
                  </g>

                  {/* 2. Codon Slots along the mRNA Strand */}
                  {(() => {
                    const totalPoints = roadmapData.length;
                    const startX = 64;
                    const stepX = (360) / (totalPoints - 1);
                    const y = 202;

                    return (
                      <g>
                        {mrnaCodons.map((cd, i) => {
                          const cx = startX + i * stepX;
                          const isActive = activeStep === i;

                          return (
                            <g key={`codon-${i}`} className="cursor-pointer" onClick={() => { setActiveStep(i); setIsPlaying(false); }}>
                              {/* Codon nucleotide box */}
                              <rect
                                x={cx - 18}
                                y={y - 12}
                                width={36}
                                height={24}
                                rx={4}
                                fill={isActive ? '#0f766e' : '#ffffff'}
                                stroke={isActive ? '#0d9488' : '#cbd5e1'}
                                strokeWidth={isActive ? 2 : 1}
                                className="transition-all duration-300"
                              />
                              <text
                                x={cx}
                                y={y + 4}
                                textAnchor="middle"
                                fontSize="11"
                                fontFamily="monospace"
                                fontWeight="bold"
                                fill={isActive ? '#ffffff' : '#334155'}
                              >
                                {cd.codon}
                              </text>
                            </g>
                          );
                        })}

                        {/* 3. Ribosome Complex (80S: 60S Large Subunit + 40S Small Subunit) Sliding to Active Codon */}
                        {(() => {
                          const activeX = startX + activeStep * stepX;
                          return (
                            <g className="transition-all duration-500 ease-in-out">
                              {/* 40S Small Subunit (Bottom Platform) */}
                              <path
                                d={`M ${activeX - 32} 218 Q ${activeX} 232 ${activeX + 32} 218 Q ${activeX + 28} 242 ${activeX} 244 Q ${activeX - 28} 242 ${activeX - 32} 218 Z`}
                                fill="#0f766e"
                                opacity="0.85"
                              />
                              <text x={activeX} y={235} textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">40S SUBUNIT</text>

                              {/* 60S Large Subunit (Top Dome with A, P, E Sites) */}
                              <path
                                d={`M ${activeX - 44} 186 C ${activeX - 44} 120, ${activeX + 44} 120, ${activeX + 44} 186 C ${activeX + 30} 190, ${activeX - 30} 190, ${activeX - 44} 186 Z`}
                                fill="#0d9488"
                                opacity="0.25"
                                stroke="#0f766e"
                                strokeWidth="1.5"
                              />

                              {/* tRNA Anticodon in P-Site */}
                              <line x1={activeX} y1={188} x2={activeX} y2={150} stroke="#0f766e" strokeWidth="2.5" strokeDasharray="3 2" />
                              <rect x={activeX - 18} y={150} width={36} height={18} rx={3} fill="#0f766e" />
                              <text x={activeX} y={162} textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">
                                tRNA: {currentCodon.anticodon}
                              </text>

                              {/* Nascent Polypeptide Amino Acid Chain Floating Above 60S Subunit */}
                              <g>
                                {mrnaCodons.slice(0, activeStep + 1).map((aa, aIdx) => {
                                  const px = activeX - (activeStep - aIdx) * 14;
                                  const py = 112 - Math.sin((activeStep - aIdx) * 0.5) * 12;
                                  return (
                                    <g key={`aa-${aIdx}`}>
                                      {aIdx > 0 && (
                                        <line
                                          x1={activeX - (activeStep - (aIdx - 1)) * 14}
                                          y1={112 - Math.sin((activeStep - (aIdx - 1)) * 0.5) * 12}
                                          x2={px}
                                          y2={py}
                                          stroke="#0f766e"
                                          strokeWidth="2"
                                        />
                                      )}
                                      <circle cx={px} cy={py} r="9" fill={aIdx === activeStep ? '#0f766e' : '#334155'} stroke="#ffffff" strokeWidth="1.5" />
                                      <text x={px} y={py + 3} textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="monospace" fontWeight="bold">
                                        {aa.symbol}
                                      </text>
                                    </g>
                                  );
                                })}
                              </g>
                            </g>
                          );
                        })()}
                      </g>
                    );
                  })()}
                </svg>
              </div>

              {/* Ribosome Translocation Status Footer */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-mono text-stone-600">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-700" />
                  TRANSCRIPTION: MATURE mRNA ENZYMATIC TRANSLOCATION
                </span>
                <span>STEP: 0{activeStep + 1} / 0{roadmapData.length}</span>
              </div>
            </div>

            {/* Right Column: Neat, Clean, Premium Milestone Detail Card (Facts Removed) */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-white border border-stone-300 p-8 sm:p-10 shadow-sm space-y-6 h-full flex flex-col justify-between rounded-none"
                >
                  <div>
                    {/* Top Codon & Category Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-stone-200 gap-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${categoryColors[currentMilestone.type] || 'bg-stone-100 text-stone-800 border-stone-300'}`}>
                          {currentMilestone.type.toUpperCase()}
                        </span>
                        <span className="scientific-annotation text-teal-900 font-bold">
                          {currentCodon.locus} :: {currentCodon.codon} ({currentCodon.aminoAcid})
                        </span>
                      </div>

                      <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-3 py-1 border border-stone-300 rounded">
                        YEAR {currentMilestone.year}
                      </span>
                    </div>

                    {/* Milestone Title & Year */}
                    <div className="mt-6 space-y-2">
                      <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                        {currentMilestone.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-teal-800">
                        <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                        <span>ROLE: {currentCodon.role.toUpperCase()}</span>
                      </div>
                    </div>

                    {/* Description Prose */}
                    <p className="font-sans text-base text-stone-700 leading-relaxed mt-4">
                      "{currentMilestone.description}"
                    </p>

                    {/* Specialized Focus Areas */}
                    {currentMilestone.focusAreas && (
                      <div className="mt-6 pt-6 border-t border-stone-200">
                        <span className="scientific-annotation text-teal-800 font-bold block mb-3 uppercase tracking-wider">
                          COMPETENCY TARGETS:
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {currentMilestone.focusAreas.map((skill, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-2.5 bg-[#faf8f5] border border-stone-200 text-xs font-mono font-medium text-stone-800 flex items-center gap-2 rounded"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                              <span className="truncate">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation Action Footer */}
                  <div className="pt-6 border-t border-stone-200 flex items-center justify-between gap-4 mt-8">
                    <button
                      onClick={() => {
                        setActiveStep((prev) => Math.max(0, prev - 1));
                        setIsPlaying(false);
                      }}
                      disabled={activeStep === 0}
                      className="px-4 py-2 border border-stone-300 text-xs font-mono tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-900 hover:text-white transition-colors cursor-pointer flex items-center gap-2 rounded"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>PREVIOUS CODON</span>
                    </button>

                    <div className="hidden sm:flex items-center gap-1.5">
                      {roadmapData.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { setActiveStep(i); setIsPlaying(false); }}
                          className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                            activeStep === i ? 'bg-teal-700 w-6' : 'bg-stone-300 hover:bg-stone-500'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setActiveStep((prev) => Math.min(roadmapData.length - 1, prev + 1));
                        setIsPlaying(false);
                      }}
                      disabled={activeStep === roadmapData.length - 1}
                      className="px-4 py-2 bg-stone-900 text-white border border-stone-900 text-xs font-mono tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:bg-teal-800 transition-colors flex items-center gap-2 cursor-pointer rounded"
                    >
                      <span>NEXT CODON</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        ) : (
          /* View Mode 2: Codon Matrix Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapData.map((item, idx) => {
              const isActive = activeStep === idx;
              const cd = mrnaCodons[idx % mrnaCodons.length];

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    setActiveStep(idx);
                    setViewMode('ribosome');
                  }}
                  className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between bg-white ${
                    isActive
                      ? 'border-teal-800 ring-2 ring-teal-800/20 shadow-md'
                      : 'border-stone-300 hover:border-stone-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                      <span className="font-mono text-xs font-bold text-teal-800">
                        {cd.locus} // CODON: {cd.codon}
                      </span>
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-stone-100 border border-stone-200">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 mt-4 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-500">
                    <span>{item.type.toUpperCase()}</span>
                    <span className="text-teal-700 font-bold flex items-center gap-1">
                      TRANSLATE CODON →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default Roadmap;
