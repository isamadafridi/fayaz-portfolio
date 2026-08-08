import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import CaseStudy from './components/sections/CaseStudy';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Anchor link handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId) as HTMLElement;
          if (targetElement) {
            lenis.scrollTo(targetElement, { offset: -80 });
          }
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="bg-background text-white min-h-screen selection:bg-primary selection:text-white">
        <Helmet>
          <title>Fayaz Afridi | Graphic Designer & LinkedIn Strategist</title>
          <meta name="description" content="Helping founders, entrepreneurs, CEOs and professionals build powerful personal brands through strategic graphic design and LinkedIn optimization." />
          <meta property="og:title" content="Fayaz Afridi | Premium Portfolio" />
          <meta property="og:description" content="Professional Graphic Designer & LinkedIn Personal Branding Expert." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <CaseStudy />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
