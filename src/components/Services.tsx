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
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-zuni-purple-light font-medium tracking-wider uppercase text-sm mb-3 block">
            {t.services.kicker}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
                className="bg-[#0a0a12] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-zuni-purple/60 hover:shadow-[0_0_25px_rgba(157,0,255,0.4)] transition-all duration-300 h-full"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zuni-purple-light group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
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
