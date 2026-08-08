import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Lenis from 'lenis';

import { setLenis } from './lib/scrollLock';
import Ambient from './components/Ambient';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import HowIWork from './components/HowIWork';
import SystemCase from './components/SystemCase';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const NAV_OFFSET = 86;

export default function App() {
  const { t, i18n } = useTranslation('global');
  const lenisRef = useRef(null);

  // El idioma del documento y el título siguen al selector: sin esto un
  // lector de pantalla leería el inglés con fonética española.
  useEffect(() => {
    document.documentElement.lang = i18n.language === 'es' ? 'es-AR' : 'en';
    document.title = t('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));
  }, [i18n.language, t]);

  // Scroll con inercia. Con prefers-reduced-motion no se instancia: ahí el
  // scroll nativo es el comportamiento correcto, no una degradación. En
  // táctil tampoco, porque el momentum del sistema es mejor que cualquier
  // emulación y además es lo que la persona espera de su teléfono.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduce || coarse) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      // La misma curva que --ease-expo: arranca rápido y frena largo.
      easing: (x) => Math.min(1, 1.001 - 2 ** (-10 * x)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    setLenis(lenis);   // para que el modal pueda frenar el scroll de fondo

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  // Un solo listener delegado para todas las anclas de la página, en vez de
  // pasar un scrollTo por props a cada sección.
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      if (lenisRef.current) lenisRef.current.scrollTo(y);
      else window.scrollTo({ top: y, behavior: 'smooth' });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <a className="skip" href="#contenido">{t('a11y.skip')}</a>
      <Ambient />
      <Nav />

      <main id="top">
        <div id="contenido" tabIndex={-1} />
        <Hero />
        <Services />
        <HowIWork />
        <SystemCase />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
