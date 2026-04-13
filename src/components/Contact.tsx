import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // WhatsApp formatting
      const phoneNumber = "48571431666"; // Zunilab phone number
      const text = `*Nowe zapytanie projektowe*\n\n*Imię / Nazwa firmy:* ${name}\n*Email:* ${email}\n*Telefon:* ${phone}\n\n*Wiadomość:*\n${message}\n\n_Wysłano ze strony Zunilab_`;
      const encodedText = encodeURIComponent(text);
      
      // Open WhatsApp in a new tab
      window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
      
      setIsSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error("Form submission error:", err);
      alert(t.contactForm.error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <section id="contact-form" className="py-24 relative z-10 bg-zuni-navy">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.contactForm.title}
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-zuni-purple to-zuni-blue mx-auto rounded-full"></div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border-white/10 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-zuni-purple/10 blur-[60px] pointer-events-none"></div>

          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.contactForm.success}</h3>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
            >
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 block">
                    {t.contactForm.name}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zuni-purple/50 focus:border-transparent transition-all"
                    placeholder={t.contactForm.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                    {t.contactForm.email}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zuni-purple/50 focus:border-transparent transition-all"
                    placeholder="jan@example.com"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="space-y-2"
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
              >
                <label htmlFor="phone" className="text-sm font-medium text-gray-300 block">
                  {t.contactForm.phone}
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zuni-purple/50 focus:border-transparent transition-all"
                  placeholder="+48 000 000 000"
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
              >
                <label htmlFor="message" className="text-sm font-medium text-gray-300 block">
                  {t.contactForm.message}
                </label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-zuni-purple/50 focus:border-transparent transition-all resize-none"
                  placeholder="..."
                ></textarea>
              </motion.div>

              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-zuni-purple to-zuni-blue text-white font-bold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-[0_0_20px_rgba(157,0,255,0.4)] hover:shadow-[0_0_30px_rgba(157,0,255,0.6)]"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    {t.contactForm.submit}
                    <WhatsAppIcon className="w-6 h-6 ml-2" />
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
