import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { Brain, LineChart, Megaphone, Bot, Puzzle } from 'lucide-react';

export const Value = () => {
  const { t } = useLanguage();
  
  const icons = [Brain, LineChart, Megaphone, Bot, Puzzle];

  return (
    <section className="py-24 relative z-10 bg-zuni-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.value.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {t.value.items.map((item, index) => {
            const Icon = icons[index];
            
            let gridClass = "col-span-1 md:col-span-2 lg:col-span-2";
            if (index === 3) {
              gridClass += " lg:col-start-2";
            } else if (index === 4) {
              gridClass += " md:col-start-2 lg:col-start-auto";
            }

            return (
              <motion.div 
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-[#0a0a12] border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-zuni-purple/60 hover:shadow-[0_0_25px_rgba(157,0,255,0.4)] transition-all duration-300 ${gridClass}`}
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zuni-purple-light group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
