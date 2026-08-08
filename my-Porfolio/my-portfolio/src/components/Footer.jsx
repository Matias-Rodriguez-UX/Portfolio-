import React from 'react';
import { useTranslation } from 'react-i18next';

const LINKS = [
  { id: 'servicios', key: 'nav.servicios' },
  { id: 'como-trabajo', key: 'nav.comoTrabajo' },
  { id: 'sistema', key: 'nav.sistema' },
  { id: 'proyectos', key: 'nav.proyectos' },
  { id: 'contacto', key: 'nav.contacto' },
];

/* Va fuera de <main> a propósito: un footer dentro de main no cuenta como
   landmark y se pierde para quien navega por regiones. */
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
