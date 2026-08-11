import React from 'react';
import { useTranslation } from 'react-i18next';

const LINKS = [
  { id: 'proyectos', key: 'nav.proyectos' },
  { id: 'proceso', key: 'nav.proceso' },
  { id: 'experiencia', key: 'nav.experiencia' },
  { id: 'contacto', key: 'nav.contacto' },
];

/* Va fuera de <main> a propósito: un footer dentro de main no cuenta como
   landmark y se pierde para quien navega por regiones.

   Sin bloque de contacto: la sección 06 es la última del sitio y queda
   inmediatamente arriba, así que repetir los botones acá era pedir dos veces
   lo mismo en la misma pantalla. */
export default function Footer() {
  const [t] = useTranslation('global');

  return (
    <footer className="foot-outer">
      <div className="wrap">
        <div className="foot">
          <span className="tiny">
            {t('footer.copyright', { anio: new Date().getFullYear() })}
          </span>
          <div className="foot__links">
            {LINKS.map(({ id, key }) => (
              <a href={`#${id}`} key={id}>{t(key)}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
