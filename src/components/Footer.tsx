import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-black/80">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <a href="#" className="relative group flex items-center h-4">
            <img 
              src="./portfolio/zunilab-logo.png" 
              alt="Zunilab" 
              className="h-4 w-auto transition-opacity duration-300 group-hover:opacity-0" 
            />
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-zuni-purple to-zuni-blue"
              style={{
                maskImage: `url(/portfolio/zunilab-logo.png)`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center',
                WebkitMaskImage: `url(/portfolio/zunilab-logo.png)`,
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
