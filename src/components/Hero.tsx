import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers
  const gridX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const gridY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020208]"
      onMouseMove={handleMouseMove}
    >
      {/* Grid Pattern */}
      <motion.div 
        style={{ x: gridX, y: gridY }}
        className="absolute inset-[-10%] w-[120%] h-[120%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] pointer-events-none"
      ></motion.div>

      {/* Glowing Nebulas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300px] bg-zuni-purple/10 blur-[100px] rotate-[-15deg] mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[150px] bg-zuni-blue/10 blur-[80px] rotate-[10deg] mix-blend-screen pointer-events-none"></div>

      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-zuni-navy to-transparent z-10 pointer-events-none"></div>

      {/* Text Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pointer-events-none">
        {/* Dark backdrop for text readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-zuni-navy/60 blur-[60px] rounded-full -z-10"></div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 pointer-events-auto border-zuni-purple/30 bg-black/40"
        >
          <span className="w-2 h-2 rounded-full bg-zuni-purple animate-pulse glow-box"></span>
          <span className="text-xs font-bold tracking-widest text-gray-200 uppercase">Premium Design Studio</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 pointer-events-auto drop-shadow-2xl"
        >
          {t.hero.headline.split('—').map((part, i, arr) => (
            <React.Fragment key={i}>
              {i === 0 ? <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{part}</span> : <><br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zuni-purple-light to-zuni-blue-light glow-text drop-shadow-[0_0_30px_rgba(157,0,255,0.5)]">— {part}</span></>}
            </React.Fragment>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 pointer-events-auto font-medium drop-shadow-lg"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
          <a 
            href="#packages" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white text-zuni-navy font-bold text-lg hover:scale-105 transition-transform group shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            {t.hero.primaryCta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 rounded-full glass-panel text-white font-bold text-lg hover:bg-white/10 transition-colors border-white/20"
          >
            {t.hero.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
