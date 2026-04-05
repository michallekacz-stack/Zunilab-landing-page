import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';

export const Process = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.process.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {t.process.steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto bg-zuni-navy border-2 border-zuni-purple rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 relative z-10 glow-box">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
