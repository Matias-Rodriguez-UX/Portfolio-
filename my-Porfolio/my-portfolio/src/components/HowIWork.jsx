import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, SectionHead, Led } from './ui';

export default function HowIWork() {
  const [t] = useTranslation('global');
  const bloques = t('comoTrabajo.bloques', { returnObjects: true });

  return (
    <section className="section" id="como-trabajo">
      <div className="wrap">
        <SectionHead
          label={t('comoTrabajo.etiqueta')}
          title={t('comoTrabajo.titulo')}
          intro={t('comoTrabajo.intro')}
        />

        <div className="how-grid">
          {bloques.map((b, i) => (
            <Reveal as="article" className="card how" delay={i * 70} key={i}>
              {/* El bloque de IA en el producto lleva la firma magenta y late:
                  es la parte que más pesa y conviene que se note. */}
              <span className={`lbl ${b.destacado ? 'lbl--signal' : 'lbl--accent'}`}>
                <Led tone={b.destacado ? 'signal' : 'accent'} live={b.destacado} />
                {b.etiqueta}
              </span>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
