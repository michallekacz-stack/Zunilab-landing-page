import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

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
            <motion.div 
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 glass-panel">
                <div className="absolute inset-0 bg-zuni-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={`https://picsum.photos/seed/${project.imageSeed}/800/600`} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20 border border-white/20">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-zuni-purple-light transition-colors">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.brief}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
