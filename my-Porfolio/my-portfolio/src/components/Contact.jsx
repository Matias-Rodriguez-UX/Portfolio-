import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, Led } from './ui';
import ContactActions from './ContactActions';

/* Contacto directo, sin formulario.
   El formulario está armado y el endpoint también (api/contact.js), pero
   depende de una clave de Resend que todavía no existe: un formulario que
   falla al enviar es peor que no tenerlo. Cuando la clave esté, vuelve.

   Mientras tanto la acción principal es copiar el mail, no leerlo: la sección
   se llama "Escribime" y tiene que poder cumplirlo sin salir del sitio. */
export default function Contact() {
  const [t] = useTranslation('global');

  return (
    <section className="section" id="contacto">
      <div className="wrap">
        <Reveal className="panel contact contact--direct">
          <div className="contact__arcs" aria-hidden="true" />

          <div className="contact__aside">
            {/* Contacto no usa SectionHead (su cabecera vive adentro del panel),
                así que el número de hoja se arma acá con el mismo primitivo. */}
            <div className="sec-mark">
              <span className="sec-n" aria-hidden="true">05</span>
              <span className="lbl lbl--signal">
                <Led tone="signal" live />
                {t('contacto.etiqueta')}
              </span>
            </div>

            <h2 className="contact__title">{t('contacto.titulo')}</h2>
            <p className="prose">{t('contacto.intro')}</p>

            {/* El pedido concreto va antes de los botones: dice qué escribir,
                que es la parte que frena a cualquiera frente a un mail en
                blanco. */}
            <p className="contact__ask">{t('contacto.pedido')}</p>

            <ContactActions />

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
