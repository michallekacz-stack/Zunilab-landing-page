import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zuni-purple/10 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] border-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              {t.finalCta.headline}
            </h2>
            <a 
              href="#contact-form" 
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white text-zuni-navy font-bold text-lg hover:scale-105 transition-transform group"
            >
              {t.finalCta.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-black/80">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <span className="font-display font-black text-xl tracking-[0.15em] uppercase">ZUNILAB</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-400">
          <a href={`mailto:${t.footer.email}`} className="hover:text-white transition-colors">{t.footer.email}</a>
          <a href={`tel:${t.footer.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{t.footer.phone}</a>
        </div>
        
        <div className="text-sm text-gray-500">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
