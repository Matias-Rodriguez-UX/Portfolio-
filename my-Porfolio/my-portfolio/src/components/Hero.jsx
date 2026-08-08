import React from 'react';
import { useTranslation } from 'react-i18next';
import cvEs from '../CV-Matias-Rodriguez-ESP.pdf';
import cvEn from '../CV-Matias-Rodriguez-ENG.pdf';
import { Reveal, Chip, DimLine, IconArrowDown, IconDownload } from './ui';

const PROOF = ['Metabase Q', 'TMS Ingeniería', 'Henry', 'UNLP', 'EEST N.º 1'];

export default function Hero() {
  const [t, i18n] = useTranslation('global');
  const chips = t('hero.chips', { returnObjects: true });
  const readouts = t('hero.readouts', { returnObjects: true });
  const cv = i18n.language === 'es' ? cvEs : cvEn;

  return (
    <header className="hero">
      <div className="hero__arcs" aria-hidden="true" />
      <div className="wrap hero__inner">
        <Reveal className="hero__status">
          <Chip tone="accent" led="ok" live>{chips[0]}</Chip>
          <Chip>{chips[1]}</Chip>
          <Chip tone="signal">{chips[2]}</Chip>
        </Reveal>

        <Reveal as="h1" className="hero__title" delay={60}>
          {t('hero.titulo')}
        </Reveal>

        <Reveal as="p" className="hero__sub" delay={120}>
          {t('hero.subtitulo')}
        </Reveal>

        <Reveal className="hero__actions" delay={180}>
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

        <Reveal className="hero__dim" delay={220}>
          <DimLine>{t('hero.cota')}</DimLine>
        </Reveal>

        <Reveal className="readouts" delay={260}>
          {readouts.map((r, i) => (
            <div className="card readout" key={i}>
              <span className={`readout__n${r.palabra ? ' readout__n--word' : ''}`}>{r.valor}</span>
              <span className="readout__k">{r.etiqueta}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="proof" delay={320}>
          <span className="proof__lbl">{t('hero.pruebaSocialEtiqueta')}</span>
          {PROOF.map((name) => (
            <span className="proof__item" key={name}>{name}</span>
          ))}
        </Reveal>
      </div>
    </header>
  );
}
