import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { featured, index as indexProjects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { Reveal, SectionHead, Led, Chip } from './ui';

export default function Projects() {
  const [t] = useTranslation('global');
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="proyectos">
      <div className="wrap">
        <SectionHead label={t('proyectos.etiqueta')} title={t('proyectos.titulo')} wide />

        <div className="work-grid">
          {featured.map((p, i) => {
            const copy = t(`proyectos.destacados.${p.id}`, { returnObjects: true });
            return (
              <Reveal as="article" className="card work" delay={i * 70} key={p.id}>
                <span className="work__crop work__crop--tl" aria-hidden="true" />
                <span className="work__crop work__crop--br" aria-hidden="true" />

                <div className={`work__thumb work__thumb--${p.thumb}`}>
                  <span className="work__glyph" aria-hidden="true">{p.glyph}</span>
                </div>

                <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap' }}>
                  {copy.chips.map((c, ci) => (
                    ci === 0 && p.state
                      ? <Chip key={c} tone={p.state === 'ok' ? 'accent' : undefined} led={p.state} live={p.state === 'ok'}>{c}</Chip>
                      : <Chip key={c} tone={ci === 0 && !p.state ? 'signal' : undefined}>{c}</Chip>
                  ))}
                </div>

                <h3>{p.name}</h3>
                <p>{copy.texto}</p>

                <div className="work__meta">
                  {p.tech.slice(0, 4).map((tech) => <Chip key={tech}>{tech}</Chip>)}
                </div>

                {/* Una sola acción por tarjeta: abrir el caso. Los enlaces
                    externos viven adentro del modal, así no compiten. */}
                <button type="button" className="work__open" onClick={() => setOpen(p)}>
                  {t('proyectos.modal.abrir')} <span aria-hidden="true">→</span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="index">
          {indexProjects.map((p) => (
            <button type="button" className="index__row" key={p.id} onClick={() => setOpen(p)}>
              <span className="index__name"><Led tone="muted" /> {p.name}</span>
              <span className="index__tech">{t(`proyectos.indice.${p.id}`)}</span>
              <span className="index__yr">{p.year}</span>
            </button>
          ))}
        </Reveal>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
