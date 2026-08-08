import React, { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, SectionHead, Led } from './ui';

/* Estado por rol: los dos primeros siguen vigentes y su LED late. */
const TONES = ['ok', 'ok', 'muted', 'muted'];
const LIVE = [true, true, false, false];

export default function Experience() {
  const [t] = useTranslation('global');
  const items = t('experiencia.items', { returnObjects: true });
  const [open, setOpen] = useState(0);   // el rol actual arranca abierto
  const uid = useId();

  return (
    <section className="section" id="experiencia">
      <div className="wrap">
        <SectionHead
          label={t('experiencia.etiqueta')}
          title={t('experiencia.titulo')}
          intro={t('experiencia.intro')}
        />

        <Reveal className="exp">
          {items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${uid}-exp-${i}`;
            return (
              <div className={`exp__item${i === 0 ? ' exp__item--lead' : ''}`} key={i}>
                <button
                  type="button"
                  className="exp__btn"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>
                    <span className="exp__role">{item.titular}</span>
                    <span className="exp__meta">
                      <Led tone={TONES[i]} live={LIVE[i]} />
                      {item.meta}
                    </span>
                  </span>
                  <span className="exp__sign" aria-hidden="true">+</span>
                </button>

                <div className="exp__panel" data-open={isOpen} id={panelId}>
                  <div>
                    <div className="exp__inner">
                      <p className="exp__impact">{item.detalle}</p>
                      <ul className="exp__proofs">
                        {item.pruebas.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
