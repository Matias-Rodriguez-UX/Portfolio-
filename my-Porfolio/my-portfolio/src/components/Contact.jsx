import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, Led } from './ui';

const EMAIL = 'rodriguez.matias.g@gmail.com';

/* Contacto directo, sin formulario.
   El formulario está armado y el endpoint también (api/contact.js), pero
   depende de una clave de Resend que todavía no existe: un formulario que
   falla al enviar es peor que no tenerlo. Cuando la clave esté, vuelve.
   Mientras tanto el mail es la acción principal y no depende de nada. */
export default function Contact() {
  const [t] = useTranslation('global');

  return (
    <section className="section" id="contacto">
      <div className="wrap">
        <Reveal className="panel contact contact--direct">
          <div className="contact__arcs" aria-hidden="true" />

          <div className="contact__aside">
            <span className="lbl lbl--signal">
              <Led tone="signal" live />
              {t('contacto.etiqueta')}
            </span>
            <h2 className="contact__title">{t('contacto.titulo')}</h2>
            <p className="prose">{t('contacto.intro')}</p>

            {/* La dirección es la etiqueta del botón: se ve antes de hacer
                clic y sirve para copiarla sin abrir el cliente de mail. */}
            <a className="btn btn--primary contact__mail" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>

            <div className="contact__direct">
              <a href="https://www.linkedin.com/in/matias-g-rodriguez/" target="_blank" rel="noreferrer">
                linkedin.com/in/matias-g-rodriguez<span aria-hidden="true"> ↗</span>
              </a>
              <a href="https://github.com/Matias-Rodriguez-UX" target="_blank" rel="noreferrer">
                github.com/Matias-Rodriguez-UX<span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
