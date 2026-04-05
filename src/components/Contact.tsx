import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Paperclip } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact-form" className="py-24 relative z-10 bg-zuni-navy">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t.contactForm.title}
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border-white/10 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-zuni-purple/10 blur-[60px] pointer-events-none"></div>

          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.contactForm.success}</h3>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 block">
                    {t.contactForm.name}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zuni-purple/50 focus:border-transparent transition-all"
                    placeholder="Jan Kowalski / Zunilab"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                    {t.contactForm.email}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zuni-purple/50 focus:border-transparent transition-all"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300 block">
                  {t.contactForm.phone}
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zuni-purple/50 focus:border-transparent transition-all"
                  placeholder="+48 000 000 000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 block">
                  {t.contactForm.message}
                </label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zuni-purple/50 focus:border-transparent transition-all resize-none"
                  placeholder="..."
                ></textarea>
              </div>

              <div className="space-y-3 p-5 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-start gap-3">
                  <Paperclip className="w-5 h-5 text-zuni-purple mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {t.contactForm.brandbook}
                  </p>
                </div>
                <div className="pl-8">
                  <label className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg cursor-pointer transition-colors">
                    <span>Wybierz plik</span>
                    <input type="file" className="hidden" accept=".pdf,.zip,.rar,.ai,.psd,.fig" />
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-zuni-purple to-zuni-blue text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    {t.contactForm.submit}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
