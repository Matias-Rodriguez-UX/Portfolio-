import React from 'react';
import { useTranslation } from 'react-i18next';
import certificates from '../data/certificates';
import cvEs from '../CV-Matias-Rodriguez-ESP.pdf';
import cvEn from '../CV-Matias-Rodriguez-ENG.pdf';
import { Reveal, SectionHead, Ext, IconDownload } from './ui';

/* Formación y certificados en una sola sección: son antecedentes, y a esta
   altura de la página alguien ya decidió si le interesa. Antes eran dos
   secciones separadas con el mismo peso que Proyectos. */
export default function Education() {
  const [t] = useTranslation('global');
  const titulos = t('formacion.titulos', { returnObjects: true });

  return (
    <section className="section" id="formacion">
      <div className="wrap">
        <SectionHead label={t('formacion.etiqueta')} title={t('formacion.titulo')} />

        <Reveal className="back">
          <div>
            {titulos.map((d, i) => (
              <div className="edu__row" key={i}>
                <div>
                  <div className="edu__t">{d.titulo}</div>
                  <div className="edu__i">{d.institucion}</div>
                </div>
                <div className="edu__d">{d.periodo}</div>
              </div>
            ))}

            <div className="cv-box">
              <span className="lbl">{t('formacion.cvEtiqueta')}</span>
              <div className="cv-row">
                <a href={cvEs} download className="btn btn--ghost btn--sm">
                  {t('formacion.cvEs')}<IconDownload />
                </a>
                <a href={cvEn} download className="btn btn--ghost btn--sm">
                  {t('formacion.cvEn')}<IconDownload />
                </a>
              </div>
              <p className="tiny">{t('formacion.idiomas')}</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="lbl">{t('formacion.certificadosEtiqueta')}</span>
            <div className="certs">
              {certificates.map((c) => (
                <a className="cert" href={c.link} target="_blank" rel="noreferrer" key={c.id}>
                  <span className="cert__n">{t(`formacion.certificados.${c.id}`)}</span>
                  <span className="cert__o">{c.org}<Ext /></span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
