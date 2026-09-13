import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Accomplishments from './components/Accomplishments';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CertificateModal from './components/CertificateModal';

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 relative font-sans">
      {/* Sticky Editorial Header */}
      <Navbar />

      {/* Main Journal Story Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Roadmap />
        <Skills />
        <Internship onOpenCertificate={handleOpenCertificate} />
        <Projects />
        <Accomplishments onOpenCertificate={handleOpenCertificate} />
        <Certifications onOpenCertificate={handleOpenCertificate} />
        <Achievements />
        <Contact />
      </main>

      {/* Journal Colophon Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />

      {/* Reusable Certificate Lightbox Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
