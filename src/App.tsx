import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Value } from './components/Value';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Packages } from './components/Packages';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { FinalCTA, Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-zuni-navy text-white font-sans selection:bg-zuni-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Value />
        <Services />
        <Portfolio />
        <Packages />
        <Process />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
