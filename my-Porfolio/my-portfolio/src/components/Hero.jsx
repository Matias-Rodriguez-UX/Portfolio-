import React from 'react';
import { useTranslation } from 'react-i18next';
import cvEs from '../CV-Matias-Rodriguez-ESP.pdf';
import cvEn from '../CV-Matias-Rodriguez-ENG.pdf';
import { Reveal, Led, DimLine, IconArrowDown, IconDownload } from './ui';

/* Solo lugares donde efectivamente trabajó. La UNLP salió de acá porque es
   donde estudió, no donde trabajó: ya figura en Formación y en la ficha. */
const PROOF = ['Batuta', 'TMS Ingeniería', 'Henry', 'La Cardeuse', 'EEST N.º 1'];

export default function Hero() {
  const [t, i18n] = useTranslation('global');
  const filas = t('hero.ficha.filas', { returnObjects: true });
  const cv = i18n.language === 'es' ? cvEs : cvEn;

  return (
    <header className="hero">
      <div className="hero__arcs" aria-hidden="true" />
      <div className="wrap hero__inner">
        <div className="hero__pitch">
          <Reveal as="h1" className="hero__title">
            {t('hero.titulo')}
          </Reveal>

          <Reveal as="p" className="hero__sub" delay={60}>
            {t('hero.subtitulo')}
          </Reveal>

          <Reveal className="hero__actions" delay={120}>
            <a href="#proyectos" className="btn btn--primary">
              {t('hero.ctaPrimario')}
              <IconArrowDown />
            </a>
            <a href="#contacto" className="btn btn--ghost">{t('hero.ctaSecundario')}</a>
            {/* El CV sigue al idioma elegido, no hay que pensarlo. */}
            <a href={cv} download className="btn btn--ghost btn--sm">
              {t('hero.ctaCv')}
              <IconDownload />
            </a>
          </Reveal>

          <Reveal className="hero__dim" delay={180}>
            <DimLine>{t('hero.cota')}</DimLine>
          </Reveal>
        </div>

        {/* La ficha técnica: el plano de una pieza, aplicado a una persona.
            Reemplaza a los chips de estado que estaban arriba del título, que
            decían lo mismo con menos precisión y en tres cápsulas sueltas.
            Es una <dl> de verdad: cada fila es un término y su definición. */}
        <Reveal className="panel spec" delay={140}>
          <div className="spec__head">
            <span className="lbl lbl--accent">{t('hero.ficha.titulo')}</span>
            <span className="tiny">{t('hero.ficha.hoja')}</span>
          </div>

          <dl className="spec__rows">
            {filas.map((f) => (
              <div className="spec__row" key={f.k}>
                <dt className="spec__k">{f.k}</dt>
                <dd className={`spec__v${f.mono ? ' spec__v--mono' : ''}`}>
                  {/* El único LED que late en la ficha es el de disponible:
                      es el único dato que puede cambiar mañana. */}
                  {f.led && <Led tone="ok" live />}
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="proof" delay={260}>
          <span className="proof__lbl">{t('hero.pruebaSocialEtiqueta')}</span>
          {PROOF.map((name) => (
            <span className="proof__item" key={name}>{name}</span>
          ))}
        </Reveal>
      </div>
    </header>
  );
}
