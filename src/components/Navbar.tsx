import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Globe } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="relative group flex items-center h-4">
            <img 
              src="/portfolio/zunilab-logo.png" 
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

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.services}</a>
          <a href="#portfolio" className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.portfolio}</a>
          <a href="#packages" className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.packages}</a>
          <a href="#process" className="text-sm text-gray-300 hover:text-white transition-colors">{t.nav.process}</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Globe className="w-4 h-4" />
            <button 
              onClick={() => setLanguage('en')} 
              className={`hover:text-white transition-colors ${language === 'en' ? 'text-white font-medium' : ''}`}
            >
              EN
            </button>
            <span className="text-gray-600">/</span>
            <button 
              onClick={() => setLanguage('pl')} 
              className={`hover:text-white transition-colors ${language === 'pl' ? 'text-white font-medium' : ''}`}
            >
              PL
            </button>
          </div>
          
          <a 
            href="#contact-form" 
            className="hidden md:flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full bg-white text-zuni-navy hover:bg-gray-100 transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
