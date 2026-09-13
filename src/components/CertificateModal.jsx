import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, ShieldCheck } from 'lucide-react';

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl shadow-teal-950/40 z-10 overflow-hidden"
          role="dialog"
          aria-labelledby="certificate-modal-title"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 id="certificate-modal-title" className="text-lg font-bold text-slate-100">
                  {certificate.title}
                </h3>
                <p className="text-xs text-teal-400">
                  Issued by {certificate.issuer} • {certificate.date}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Preview */}
          <div className="flex-1 bg-slate-950 p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-center min-h-[350px]">
            {certificate.fileUrl ? (
              certificate.fileUrl.match(/\.(png|jpe?g|webp|svg)$/i) ? (
                <img
                  src={certificate.fileUrl}
                  alt={certificate.title}
                  className="max-h-[550px] w-auto object-contain rounded-lg border border-slate-800 shadow-lg"
                />
              ) : (
                <iframe
                  src={`${certificate.fileUrl}#toolbar=0`}
                  title={certificate.title}
                  className="w-full h-[500px] rounded-lg border border-slate-800 bg-white"
                />
              )
            ) : (
              <div className="text-center p-8">
                <FileText className="w-16 h-16 mx-auto text-slate-600 mb-4" />
                <p className="text-slate-300 font-medium">Certificate Document Preview</p>
                <p className="text-xs text-slate-500 mt-1">{certificate.title} - {certificate.issuer}</p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/90 gap-3">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              Official Academic & Technical Credential
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={certificate.fileUrl}
                download
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a
                href={certificate.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-lg shadow-teal-500/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open Full Screen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
