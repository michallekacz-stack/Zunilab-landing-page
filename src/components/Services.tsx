import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { Box, Image as ImageIcon, Layout, MousePointerClick } from 'lucide-react';

export const Services = () => {
  const { t } = useLanguage();
  
  const icons = [Box, ImageIcon, Layout, MousePointerClick];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-zuni-purple-light font-medium tracking-wider uppercase text-sm mb-3 block">
              {t.services.kicker}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-md">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 md:p-10 hover:border-white/20 transition-colors"
              >
                {/* Abstract background glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-zuni-purple/10 rounded-full blur-[80px] group-hover:bg-zuni-purple/20 transition-colors duration-700"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
