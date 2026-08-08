import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, SectionHead, Led, Chip, DimLine } from './ui';

/* Los valores que se muestran son los tokens reales del sitio. Si alguno
   cambia en tokens/, esta muestra queda desactualizada a propósito visible:
   es la única lista que hay que tocar a mano, y está acá para que se note. */
const SAMPLE = [
  ['--accent', '#61DEED'],
  ['--signal', '#FF4DC2'],
  ['--blur-panel', 'blur(24px)'],
  ['--radius-xl', '20px'],
  ['--ease-expo', '(.16, 1, .3, 1)'],
  ['--dur-enter', '720ms'],
];

const SWATCHES = ['--bg', '--field', '--accent', '--signal', '--ok', '--warn'];

export default function SystemCase() {
  const [t] = useTranslation('global');
  const chips = t('sistema.chips', { returnObjects: true });
  const como = t('sistema.como', { returnObjects: true });
  const estados = t('sistema.estados', { returnObjects: true });

  return (
    <section className="section" id="sistema">
      <div className="wrap">
        <SectionHead
          label={t('sistema.etiqueta')}
          title={t('sistema.titulo')}
          intro={t('sistema.intro')}
        />

        <Reveal className="panel case">
          <div className="case__body">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
              <Chip tone="accent" led="accent" live>{chips[0]}</Chip>
              <Chip>{chips[1]}</Chip>
              <Chip>{chips[2]}</Chip>
            </div>

            <div className="case__block">
              <h3>{t('sistema.problemaEtiqueta')}</h3>
              <p>{t('sistema.problema')}</p>
            </div>

            <div className="case__block">
              <h3>{t('sistema.comoEtiqueta')}</h3>
              <ul className="case__steps">
                {como.map((linea) => <li key={linea}>{linea}</li>)}
              </ul>
            </div>

            <div className="case__block">
              <h3>{t('sistema.resultadoEtiqueta')}</h3>
              <p>{t('sistema.resultado')}</p>
            </div>
          </div>

          <div className="sysdemo">
            <span className="lbl">{t('sistema.muestraEtiqueta')}</span>

            <div className="sysdemo__strip" aria-hidden="true">
              {SWATCHES.map((token) => (
                <i key={token} style={{ background: `var(${token})` }} />
              ))}
            </div>

            <div className="sysdemo__row">
              <Chip led="ok" live>{estados[0]}</Chip>
              <Chip tone="warn" led="warn">{estados[1]}</Chip>
              <Chip tone="accent" led="accent">{estados[2]}</Chip>
            </div>

            <div className="card sysdemo__panel">
              {SAMPLE.map(([token, value]) => (
                <div className="sysdemo__kv" key={token}>
                  <span>{token}</span>
                  <b>{value}</b>
                </div>
              ))}
            </div>

            <DimLine style={{ maxWidth: '14rem' }}>{t('sistema.cota')}</DimLine>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
