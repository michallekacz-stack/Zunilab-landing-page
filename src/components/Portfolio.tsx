import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioCard = ({ project, index }: { project: any, index: number, key?: React.Key }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 glass-panel group/carousel">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={project.images[currentIndex]} 
            alt={`${project.title} - Image ${currentIndex + 1}`}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage} 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-20 backdrop-blur-md border border-white/10 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-20 backdrop-blur-md border border-white/10 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {project.images.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80 w-2'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-zuni-purple-light transition-colors">{project.title}</h3>
        <p className="text-gray-400 leading-relaxed">{project.brief}</p>
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-zuni-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.portfolio.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-md">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.portfolio.projects.map((project, index) => (
            <PortfolioCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
