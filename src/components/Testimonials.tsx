import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../lib/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Split testimonials into two rows
  const half = Math.ceil(t.testimonials.items.length / 2);
  const row1 = t.testimonials.items.slice(0, half);
  const row2 = t.testimonials.items.slice(half);

  // Duplicate items to create a seamless infinite loop (4 copies to fill wide screens)
  // Translating by -50% will move exactly 2 copies, creating a seamless loop
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  const TestimonialCard = ({ item }: { item: any }) => (
    <div className="bg-[#0a0a12] border border-white/10 p-6 rounded-2xl w-[350px] md:w-[400px] flex-shrink-0 mx-3 flex flex-col justify-between hover:border-zuni-purple/60 hover:shadow-[0_0_25px_rgba(157,0,255,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-default group">
      <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors line-clamp-4">"{item.quote}"</p>
      <div className="flex items-center gap-4">
        <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-zuni-purple/50 transition-colors" referrerPolicy="no-referrer" />
        <div>
          <h4 className="font-bold text-white text-sm">{item.name}</h4>
          <p className="text-zuni-purple-light text-xs">{item.handle}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full mb-6"></div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 text-zuni-purple hover:text-white font-medium transition-colors group"
          >
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative flex flex-col gap-6 pause-on-hover overflow-hidden -mx-4 px-4 py-4">
          {/* Left/Right fading edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zuni-navy to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zuni-navy to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 - scrolling left */}
          <div className="flex w-max animate-marquee-left">
            {duplicatedRow1.map((item, idx) => (
              <TestimonialCard key={`row1-${idx}`} item={item} />
            ))}
          </div>

          {/* Row 2 - scrolling right */}
          <div className="flex w-max animate-marquee-right">
            {duplicatedRow2.map((item, idx) => (
              <TestimonialCard key={`row2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Modal - Rendered via Portal to break out of z-index context */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm" 
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zuni-navy border border-white/10 rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
              >
                {/* Close Button inside modal */}
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all z-50 backdrop-blur-md border border-white/10 hover:scale-110 hover:border-zuni-purple/50"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="p-6 md:p-8 border-b border-white/10 bg-zuni-navy/80 backdrop-blur-md sticky top-0 z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{t.testimonials.title}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue rounded-full mt-4"></div>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t.testimonials.items.map((item: any, idx: number) => (
                    <div key={idx} className="bg-[#0a0a12] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-zuni-purple/60 hover:shadow-[0_0_25px_rgba(157,0,255,0.4)] transition-all duration-300 group">
                      <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">"{item.quote}"</p>
                      <div className="flex items-center gap-4">
                        <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-zuni-purple/50 transition-colors" referrerPolicy="no-referrer" />
                        <div>
                          <h4 className="font-bold text-white text-sm">{item.name}</h4>
                          <p className="text-zuni-purple-light text-xs">{item.handle}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};
