import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';

export const Testimonials = () => {
  const { t } = useLanguage();

  // Split testimonials into two rows
  const half = Math.ceil(t.testimonials.items.length / 2);
  const row1 = t.testimonials.items.slice(0, half);
  const row2 = t.testimonials.items.slice(half);

  // Duplicate items to create a seamless infinite loop (4 copies to fill wide screens)
  // Translating by -50% will move exactly 2 copies, creating a seamless loop
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  const TestimonialCard = ({ item }: { item: any }) => (
    <div className="glass-panel p-6 rounded-2xl w-[350px] md:w-[400px] flex-shrink-0 mx-3 flex flex-col justify-between border border-white/5 hover:border-zuni-purple/40 hover:shadow-[0_0_40px_rgba(157,0,255,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default group">
      <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">"{item.quote}"</p>
      <div className="flex items-center gap-4">
        <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-zuni-purple/50 transition-colors" referrerPolicy="no-referrer" />
        <div>
          <h4 className="font-bold text-white text-sm">{item.name}</h4>
          <p className="text-zuni-purple-light text-xs">{item.handle}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-2 h-8 bg-zuni-purple rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold">{t.testimonials.title}</h2>
        </div>

        <div className="relative flex flex-col gap-6 pause-on-hover overflow-hidden -mx-4 px-4 py-4">
          {/* Left/Right fading edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zuni-navy to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zuni-navy to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 - scrolling left */}
          <div className="flex w-max animate-marquee-left">
            {duplicatedRow1.map((item, idx) => (
              <TestimonialCard key={`row1-${idx}`} item={item} />
            ))}
          </div>

          {/* Row 2 - scrolling right */}
          <div className="flex w-max animate-marquee-right">
            {duplicatedRow2.map((item, idx) => (
              <TestimonialCard key={`row2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
