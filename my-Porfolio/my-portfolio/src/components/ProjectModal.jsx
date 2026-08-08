import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Chip, Led, Ext } from './ui';
import { lockScroll, unlockScroll } from '../lib/scrollLock';

const host = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
};

/* Modal de caso de estudio.
   Usa <dialog> nativo en vez de un div con overlay: trae gratis el trampa de
   foco, cerrar con Escape, el backdrop y el `inert` del resto de la página.
   Reimplementar eso a mano es donde se rompe la accesibilidad de la mayoría
   de los modales. */
export default function ProjectModal({ project, onClose }) {
  const [t] = useTranslation('global');
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    if (!dialog.open) dialog.showModal();
    lockScroll();
    // Ojo: acá NO se llama a dialog.close(). En StrictMode React monta, limpia
    // y vuelve a montar; ese close() disparaba el evento 'close', que llama a
    // onClose, que pone el estado en null y desmontaba el modal apenas se
    // abría. Al desmontarse el <dialog> sale solo del top layer, así que no
    // hace falta cerrarlo a mano.
    return () => unlockScroll();
  }, []);

  if (!project) return null;

  const caso = t(`proyectos.casos.${project.id}`, { returnObjects: true }) || {};
  const captions = Array.isArray(caso.captions) ? caso.captions : [];
  const [primary, ...rest] = project.links || [];

  return (
    <dialog
      className="modal"
      ref={ref}
      onClose={onClose}
      /* Clic en el backdrop: el evento apunta al <dialog>, no al contenido. */
      onClick={(e) => { if (e.target === ref.current) ref.current.close(); }}
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div className="modal__panel">
        <header className="modal__head">
          <div>
            <h2 className="modal__title" id={`modal-title-${project.id}`}>{project.name}</h2>
            {project.date && <span className="modal__date">{project.date}</span>}
          </div>
          <button type="button" className="icon-btn modal__close"
            onClick={() => ref.current.close()} aria-label={t('proyectos.modal.cerrar')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </header>

        {/* data-lenis-prevent: sin esto Lenis se queda con los eventos de rueda
            a nivel de ventana y el modal no scrollea nunca. Con el atributo,
            Lenis los ignora acá adentro y el navegador scrollea nativamente. */}
        <div className="modal__body" data-lenis-prevent>
          {/* Aviso de baja: honesto y antes de que alguien haga clic en una
              demo que no va a cargar datos. */}
          {project.baja && (
            <p className="modal__notice">
              <Led tone="warn" />
              {t('proyectos.modal.baja')}
            </p>
          )}
          {project.hasNote && (
            <p className="modal__notice modal__notice--nda">
              <Led tone="accent" />
              {t(`proyectos.destacados.${project.id}.nota`)}
            </p>
          )}

          {caso.contexto && (
            <section className="modal__block">
              <h3>{t('proyectos.modal.contexto')}</h3>
              <p>{caso.contexto}</p>
            </section>
          )}
          {caso.desafio && (
            <section className="modal__block">
              <h3>{t('proyectos.modal.desafio')}</h3>
              <p>{caso.desafio}</p>
            </section>
          )}
          {caso.proceso && (
            <section className="modal__block">
              <h3>{t('proyectos.modal.proceso')}</h3>
              <ul className="case__steps">
                {caso.proceso.map((paso, i) => <li key={i}>{paso}</li>)}
              </ul>
            </section>
          )}
          {caso.participacion && (
            <section className="modal__block">
              <h3>{t('proyectos.modal.participacion')}</h3>
              <p>{caso.participacion}</p>
            </section>
          )}

          {project.images.length > 0 && (
            <div className="modal__gallery">
              {project.images.map((src, i) => (
                <figure className="modal__shot" key={src + i}>
                  <a href={src} target="_blank" rel="noreferrer">
                    <img
                      src={src}
                      alt={captions[i] || t('proyectos.modal.captura', { name: project.name, i: i + 1 })}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  {captions[i] && <figcaption>{captions[i]}</figcaption>}
                </figure>
              ))}
            </div>
          )}

          {caso.resultado && (
            <section className="modal__block">
              <h3>{t('proyectos.modal.resultado')}</h3>
              <p>{caso.resultado}</p>
            </section>
          )}

          <section className="modal__block">
            <h3>{t('proyectos.modal.tecnologias')}</h3>
            <div className="modal__chips">
              {project.tech.map((tech) => <Chip key={tech}>{tech}</Chip>)}
            </div>
          </section>
        </div>

        <footer className="modal__foot">
          {primary ? (
            <>
              <a className="btn btn--primary" href={primary} target="_blank" rel="noreferrer">
                {t('proyectos.modal.verEnVivo')}<Ext />
              </a>
              {rest.map((url) => (
                <a className="btn btn--ghost btn--sm" href={url} target="_blank" rel="noreferrer" key={url}>
                  {host(url)}<Ext />
                </a>
              ))}
            </>
          ) : (
            <span className="tiny">{t('proyectos.modal.sinEnlaces')}</span>
          )}
        </footer>
      </div>
    </dialog>
  );
}
