import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  const { t, language } = useLanguage();

  const getWhatsAppLink = () => {
    const phoneNumber = "48571431666";
    const message = language === 'pl' 
      ? `Cześć! Jestem zainteresowany/a współpracą. Proszę o więcej informacji.`
      : `Hi! I'm interested in working with you. Please provide more information.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

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
              href={getWhatsAppLink()} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white text-zuni-navy font-bold text-lg hover:scale-105 transition-transform group"
            >
              <svg className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t.finalCta.cta}
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
          <a href="/" className="relative group flex items-center h-4">
            <img 
              src="./portfolio/zunilab-logo.png" 
              alt="Zunilab" 
              className="h-4 w-auto transition-opacity duration-300 group-hover:opacity-0" 
            />
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-zuni-purple to-zuni-blue"
              style={{
                maskImage: 'url(/portfolio/zunilab-logo.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center',
                WebkitMaskImage: 'url(/portfolio/zunilab-logo.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center',
              }}
            />
          </a>
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
