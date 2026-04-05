import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const Packages = () => {
  const { t } = useLanguage();

  const packages = [
    {
      ...t.packages.starter,
      highlight: false,
    },
    {
      ...t.packages.growth,
      highlight: true,
    },
    {
      ...t.packages.domination,
      highlight: false,
    }
  ];

  return (
    <section id="packages" className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.packages.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-white/10 to-white/5 border border-zuni-purple/50 glow-box transform md:-translate-y-4' 
                  : 'glass-panel'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-zuni-purple text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              
              <div className="my-8 flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-1 rounded-full p-1 ${pkg.highlight ? 'bg-zuni-purple/20 text-zuni-purple-light' : 'bg-white/10 text-gray-300'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-semibold text-center transition-all ${
                  pkg.highlight 
                    ? 'bg-white text-zuni-navy hover:bg-gray-100' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {t.packages.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
