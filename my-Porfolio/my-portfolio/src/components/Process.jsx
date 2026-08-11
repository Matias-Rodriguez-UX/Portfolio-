import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, SectionHead } from './ui';

/* Una sola sección donde antes había dos: "lo que hago" listaba capacidades y
   "cómo trabajo" explicaba el rol, y las dos terminaban diciendo lo mismo con
   otras palabras. Acá el qué vive adentro del cuándo: cada capacidad aparece
   en la etapa del proceso donde realmente se usa.

   Va segunda, después de Proyectos. El método no convence a nadie que todavía
   no te crea; confirma a quien ya vio la prueba. Por eso también se acortó:
   los dos bloques de IA que estaban acá repetían lo que ya dice el subtítulo
   del hero, y la IA ahora se nombra una sola vez en todo el sitio.

   La numeración semántica la da el <ol>. El "01" visible es decorativo: un
   lector de pantalla ya anuncia la posición y no hace falta que la lea dos
   veces. */
export default function Process() {
  const [t] = useTranslation('global');
  const etapas = t('proceso.etapas', { returnObjects: true });

  return (
    <section className="section" id="proceso">
      <div className="wrap">
        <SectionHead
          n="02"
          label={t('proceso.etiqueta')}
          title={t('proceso.titulo')}
          intro={t('proceso.intro')}
          wide
        />

        <ol className="proc">
          {etapas.map((e, i) => (
            <Reveal as="li" className="proc__step" delay={i * 90} key={e.fase}>
              <span className="proc__node" aria-hidden="true" />

              <p className="proc__mark">
                <span className="proc__n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="proc__fase">{e.fase}</span>
              </p>

              <h3 className="proc__t">{e.titulo}</h3>
              <p className="proc__p">{e.texto}</p>

              <ul className="proc__out">
                {e.salidas.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
