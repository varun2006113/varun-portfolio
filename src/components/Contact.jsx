import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personalData } from '../data/personal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${personalData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-16">
          <span className="scientific-annotation text-teal-800 font-bold">
            09 / DIRECT INQUIRY — தொடர்பு கொள்ள (COLLABORATION)
          </span>
          <span className="scientific-annotation text-stone-400">
            CONTACT & ACADEMIC DIALOGUE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Links Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                LET'S CONNECT
              </h2>
              <p className="font-sans text-base text-stone-600 mt-4 max-w-lg leading-relaxed">
                "Interested in biotechnology, computational biology, bioinformatics, AI and scientific research?"
              </p>
            </div>

            {/* Direct Connect Typography Links */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              
              {/* Email */}
              <a
                href={`mailto:${personalData.contact.email}`}
                className="group flex items-center justify-between p-4 bg-[#faf8f5] border border-stone-200 hover:border-teal-800 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-800" />
                  <div>
                    <span className="scientific-annotation text-stone-400 block">DIRECT EMAIL</span>
                    <span className="font-serif text-lg font-bold text-stone-900 group-hover:text-teal-800 transition-colors">
                      {personalData.contact.email}
                    </span>
                  </div>
                </div>
                <span className="scientific-annotation text-teal-800 font-bold">[ SEND ]</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-[#faf8f5] border border-stone-200 hover:border-teal-800 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <LinkedInIcon className="w-5 h-5 text-teal-800" />
                  <div>
                    <span className="scientific-annotation text-stone-400 block">LINKEDIN PROFILE</span>
                    <span className="font-serif text-lg font-bold text-stone-900 group-hover:text-teal-800 transition-colors">
                      linkedin.com/in/varunvenkat2006
                    </span>
                  </div>
                </div>
                <span className="scientific-annotation text-teal-800 font-bold">[ VISIT ]</span>
              </a>

              {/* GitHub */}
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-[#faf8f5] border border-stone-200 hover:border-teal-800 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <GitHubIcon className="w-5 h-5 text-teal-800" />
                  <div>
                    <span className="scientific-annotation text-stone-400 block">GITHUB PROFILE</span>
                    <span className="font-serif text-lg font-bold text-stone-900 group-hover:text-teal-800 transition-colors">
                      github.com/varun2006113
                    </span>
                  </div>
                </div>
                <span className="scientific-annotation text-teal-800 font-bold">[ VISIT ]</span>
              </a>

            </div>

            {/* Download CV Editorial CTA */}
            <div className="pt-2">
              <a
                href={personalData.cvPath}
                download="Varun-Venkatesh-CV.pdf"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-stone-900 hover:bg-teal-800 text-white text-xs font-mono tracking-wider uppercase transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD COMPLETE CV (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <form onSubmit={handleSubmit} className="p-8 bg-[#faf8f5] border border-stone-300 space-y-5 shadow-2xs">
              <span className="scientific-annotation text-teal-800 font-bold block mb-2">
                EXPRESS INQUIRY FORM
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="scientific-annotation block mb-1.5">
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Alex Smith"
                    className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 placeholder-stone-400 text-xs font-mono focus:border-teal-800 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="scientific-annotation block mb-1.5">
                    YOUR EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 placeholder-stone-400 text-xs font-mono focus:border-teal-800 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="scientific-annotation block mb-1.5">
                  SUBJECT / TOPIC
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Research Collaboration / Internship Opportunity"
                  className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 placeholder-stone-400 text-xs font-mono focus:border-teal-800 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="scientific-annotation block mb-1.5">
                  MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-white border border-stone-300 text-stone-900 placeholder-stone-400 text-xs font-mono focus:border-teal-800 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-stone-900 hover:bg-teal-800 text-white text-xs font-mono tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH MESSAGE</span>
              </button>

              {submitted && (
                <div className="p-4 bg-teal-50 border border-teal-200 text-teal-900 text-xs font-mono">
                  ✓ Opening default email client to send message. Thank you!
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
