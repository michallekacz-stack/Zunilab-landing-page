import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const Packages = () => {
  const { t, language } = useLanguage();

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

  const getWhatsAppLink = (packageName: string) => {
    const phoneNumber = "48571431666";
    const message = language === 'pl' 
      ? `Cześć! Jestem zainteresowany/a pakietem ${packageName}. Proszę o więcej informacji.`
      : `Hi! I'm interested in the ${packageName} package. Please provide more information.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="packages" className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.packages.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-[#10081d] to-[#0a0512] shadow-[0_0_40px_rgba(157,0,255,0.15)] transform md:-translate-y-4 ring-1 ring-zuni-purple/50' 
                  : 'glass-panel hover:bg-white/10'
              }`}
            >
              {pkg.highlight && (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zuni-purple/20 via-transparent to-transparent rounded-3xl pointer-events-none opacity-60 z-0"></div>
                  
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-zuni-purple to-zuni-blue blur-md opacity-70 rounded-full"></div>
                      <div className="relative px-6 py-1.5 bg-[#050511] border border-zuni-purple/60 rounded-full flex items-center gap-2 shadow-xl whitespace-nowrap">
                        <svg className="w-3.5 h-3.5 text-zuni-purple-light drop-shadow-[0_0_8px_rgba(196,102,255,0.8)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#f8f8f8]">{t.packages.mostPopular}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              <div className="relative z-10">
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
                  href={getWhatsAppLink(pkg.name)} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group border ${
                    pkg.highlight 
                      ? 'bg-white text-zuni-navy border-transparent hover:bg-gray-100 hover:border-zuni-purple/60 hover:shadow-[0_0_25px_rgba(157,0,255,0.4)]' 
                      : 'bg-[#0a0a12] border-white/10 text-white hover:border-zuni-purple/60 hover:shadow-[0_0_25px_rgba(157,0,255,0.4)]'
                  }`}
                >
                  <svg className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {t.packages.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {t.packages.footerText}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
