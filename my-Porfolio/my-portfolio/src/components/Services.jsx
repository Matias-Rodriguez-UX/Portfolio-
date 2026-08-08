import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, SectionHead, Led, Chip } from './ui';

export default function Services() {
  const [t] = useTranslation('global');
  const items = t('servicios.items', { returnObjects: true });

  return (
    <section className="section" id="servicios">
      <div className="wrap">
        <SectionHead
          label={t('servicios.etiqueta')}
          title={t('servicios.titulo')}
          intro={t('servicios.intro')}
        />

        <div className="svc-grid">
          {items.map((item, i) => (
            <Reveal as="article" className="card svc" delay={i * 70} key={i}>
              <span className="lbl lbl--accent">
                <Led tone="accent" />
                {item.etiqueta}
              </span>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <div className="svc__stack">
                {item.stack.map((tech) => <Chip key={tech}>{tech}</Chip>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
