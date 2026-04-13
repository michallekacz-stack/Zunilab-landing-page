import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';

const AdobeIcon = ({ letters, color, name }: { letters: string, color: string, name: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm" style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}40` }}>
      {letters}
    </div>
    <span className="text-white font-medium text-lg">{name}</span>
  </div>
);

export const Technologies = () => {
  const { t } = useLanguage();

  const row1 = [
    {
      name: 'ChatGPT',
      content: (
        <div className="flex items-center gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" className="w-8 h-8" referrerPolicy="no-referrer" />
          <span className="text-white font-medium text-lg">ChatGPT</span>
        </div>
      )
    },
    {
      name: 'Gemini',
      content: (
        <div className="flex items-center gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" alt="Gemini" className="w-8 h-8" referrerPolicy="no-referrer" />
          <span className="text-white font-medium text-lg">Gemini</span>
        </div>
      )
    },
    {
      name: 'Canva',
      content: (
        <div className="flex items-center gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" className="w-8 h-8" referrerPolicy="no-referrer" />
          <span className="text-white font-medium text-lg">Canva</span>
        </div>
      )
    },
    {
      name: 'Figma',
      content: (
        <div className="flex items-center gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="w-6 h-8 object-contain" referrerPolicy="no-referrer" />
          <span className="text-white font-medium text-lg">Figma</span>
        </div>
      )
    }
  ];

  const row2 = [
    {
      name: 'Photoshop',
      content: <AdobeIcon letters="Ps" color="#31A8FF" name="Photoshop" />
    },
    {
      name: 'Illustrator',
      content: <AdobeIcon letters="Ai" color="#FF9A00" name="Illustrator" />
    },
    {
      name: 'InDesign',
      content: <AdobeIcon letters="Id" color="#FF3366" name="InDesign" />
    },
    {
      name: 'Adobe XD',
      content: <AdobeIcon letters="Xd" color="#FF61F6" name="Adobe XD" />
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-zuni-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.technologies.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col gap-6">
          {/* Row 2 (Now First) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {row2.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center justify-center bg-[#0a0a12] border border-white/10 hover:border-zuni-purple/60 hover:shadow-[0_0_25px_rgba(157,0,255,0.4)] rounded-2xl px-6 py-4 transition-all duration-300"
              >
                {tech.content}
              </motion.div>
            ))}
          </div>

          {/* Row 1 (Now Second) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {row1.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 4) * 0.1 }}
                className="flex items-center justify-center bg-[#0a0a12] border border-white/10 hover:border-zuni-purple/60 hover:shadow-[0_0_25px_rgba(157,0,255,0.4)] rounded-2xl px-6 py-4 transition-all duration-300"
              >
                {tech.content}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
