import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Led, IconGitHub, IconLinkedIn, IconMenu } from './ui';

const SECTIONS = [
  { id: 'servicios', key: 'nav.servicios' },
  { id: 'como-trabajo', key: 'nav.comoTrabajo' },
  { id: 'sistema', key: 'nav.sistema' },
  { id: 'proyectos', key: 'nav.proyectos' },
  { id: 'experiencia', key: 'nav.experiencia' },
  { id: 'formacion', key: 'nav.formacion' },
  { id: 'contacto', key: 'nav.contacto' },
];

const NAV_OFFSET = 86;

export default function Nav() {
  const [t, i18n] = useTranslation('global');
  const [condensed, setCondensed] = useState(false);
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      setCondensed(window.scrollY > 24);

      // La sección activa es la última cuyo tope ya pasó por debajo de la nav.
      const probe = window.scrollY + NAV_OFFSET + 40;
      let current = null;
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      });
      setActive(current);
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className={`nav-shell${condensed ? ' nav-shell--condensed' : ''}`}>
      <nav className="nav" aria-label={t('a11y.nav')}>
        <a href="#top" className="brand">
          <Led tone="ok" live />
          Matías Rodríguez
        </a>

        <ul className="nav-links" data-open={open} id="nav-links">
          {SECTIONS.map(({ id, key }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-side">
          <div className="lang" role="group" aria-label={t('a11y.lang')}>
            {['es', 'en'].map((lng) => (
              <button
                key={lng}
                type="button"
                lang={lng}
                aria-pressed={i18n.language === lng}
                aria-label={t(lng === 'es' ? 'a11y.langEs' : 'a11y.langEn')}
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="https://github.com/Matias-Rodriguez-UX" target="_blank" rel="noreferrer"
            className="icon-btn" aria-label={t('a11y.github')}>
            <IconGitHub />
          </a>
          <a href="https://www.linkedin.com/in/matias-g-rodriguez/" target="_blank" rel="noreferrer"
            className="icon-btn" aria-label={t('a11y.linkedin')}>
            <IconLinkedIn />
          </a>

          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-label={t('a11y.menu')}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((v) => !v)}
          >
            <IconMenu />
          </button>
        </div>
      </nav>
    </div>
  );
}
