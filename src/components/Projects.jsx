import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { projectsData } from '../data/projects';

const Projects = () => {
  const project = projectsData[0]; // Featured project AI Research Summariser

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-16">
          <span className="scientific-annotation text-teal-800 font-bold">
            05 / WHAT I BUILT — ஆராய்ச்சித் திட்டங்கள் (FEATURE RESEARCH STORY)
          </span>
          <span className="scientific-annotation text-stone-400">
            SCIENTIFIC NLP PIPELINE
          </span>
        </div>

        {/* Feature Story Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#faf8f5] border border-stone-300 p-8 sm:p-12 shadow-sm relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="scientific-annotation text-teal-800 font-bold block">
                SCIENTIFIC LITERATURE / NLP PROCESSING
              </span>

              <h3 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                {project.title}
              </h3>

              <p className="font-sans text-base text-stone-700 leading-relaxed">
                "{project.description}"
              </p>

              {/* Problem / Approach / Technology Breakdown */}
              <div className="space-y-4 pt-4 border-t border-stone-200">
                <div>
                  <span className="scientific-annotation text-stone-400 block mb-1">PROBLEM STATEMENT</span>
                  <p className="font-sans text-xs text-stone-800 font-semibold">
                    Lengthy scientific papers and dense biomedical literature require substantial time to review and extract critical biological findings.
                  </p>
                </div>

                <div>
                  <span className="scientific-annotation text-stone-400 block mb-1">COMPUTATIONAL APPROACH</span>
                  <p className="font-sans text-xs text-stone-800 font-semibold">
                    Employs Hugging Face Transformers API and Natural Language Processing pipelines to extract core methodologies, abstract takeaways, and structural conclusions.
                  </p>
                </div>

                <div>
                  <span className="scientific-annotation text-stone-400 block mb-1">TECHNOLOGY STACK</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-white border border-stone-200 text-stone-800 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-teal-800 text-white text-xs font-mono tracking-wider transition-colors shadow-2xs"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>GITHUB REPOSITORY</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Abstract Paper Transformation Visualizer */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full bg-white border border-stone-300 p-6 space-y-4 shadow-sm">
                
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="scientific-annotation text-teal-800 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    DOCUMENT TRANSFORMATION
                  </span>
                  <span className="scientific-annotation text-stone-400">INPUT → OUTPUT</span>
                </div>

                {/* Raw Input Paper Representation */}
                <div className="p-3 bg-stone-50 border border-stone-200 text-[11px] font-mono text-stone-600">
                  <span className="text-stone-400 font-bold block mb-1">RAW SCIENTIFIC PAPER (45 PAGES):</span>
                  "CRISPR-Cas9 genomic sequencing data analysis in mammalian cellular models..."
                </div>

                <div className="flex justify-center text-teal-800">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>

                {/* AI Condensed Output Representation */}
                <div className="p-3 bg-teal-50/60 border border-teal-200 text-[11px] font-mono text-teal-950">
                  <span className="text-teal-800 font-bold block mb-1">STRUCTURED AI SUMMARY:</span>
                  "• Method: Deep sequencing assay.<br/>• Key Result: 94.2% cleavage efficiency.<br/>• Conclusion: Suitable for gene therapy."
                </div>

                <div className="text-[10px] font-mono text-stone-400 text-right pt-2 border-t border-stone-100">
                  NLP LITERATURE PIPELINE
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
