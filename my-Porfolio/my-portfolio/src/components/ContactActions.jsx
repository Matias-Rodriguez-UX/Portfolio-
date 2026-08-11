import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconCopy, IconCheck, IconMail, IconCalendar, Led, Ext } from './ui';

export const EMAIL = 'rodriguez.matias.g@gmail.com';

/* Link de agenda. Vacío a propósito hasta que exista de verdad: el botón no se
   renderiza si no hay URL. Es el mismo criterio que dejó el formulario afuera
   —un botón que no lleva a ninguna parte es peor que un botón que no está—.
   Pegá acá el link de Cal.com o Calendly y el botón aparece solo. */
const AGENDA = '';

/* Copia al portapapeles con reserva.
   navigator.clipboard solo existe en contexto seguro (https o localhost), así
   que en http plano hay que caer al textarea + execCommand: está deprecado,
   pero es lo único que funciona ahí. Si las dos vías fallan, el estado de error
   le dice a la persona que seleccione el mail a mano, que es la verdad. */
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* sin permiso o sin foco: sigue por la reserva */
  }

  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  // Fuera de pantalla, pero no display:none: lo que no se renderiza no se
  // puede seleccionar, y sin selección execCommand no copia nada.
  ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
  document.body.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, text.length);   // iOS necesita el rango explícito
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

/* ── Bloque de acciones de contacto ───────────────────────────────────
   Tres acciones en orden de fricción: copiar el mail, abrirlo en el cliente
   de correo, agendar una llamada. Antes acá había un <span> con el mail y
   nada más: el razonamiento de no poner un mailto: suelto era correcto, pero
   la conclusión no era texto inerte, era un botón que copia y lo confirma.

   Va en Contacto y en el pie, así que la lógica vive una sola vez. Cada
   instancia lleva su propio estado: lo que confirma es el botón que tocaste. */
export default function ContactActions({ compact = false }) {
  const [t] = useTranslation('global');
  const [state, setState] = useState(null);    // null · 'ok' · 'error'
  const timer = useRef(null);

  // Sin esto, copiar y navegar rápido deja un setState apuntando a un
  // componente que ya no está montado.
  useEffect(() => () => clearTimeout(timer.current), []);

  const onCopy = async () => {
    const ok = await copyToClipboard(EMAIL);
    setState(ok ? 'ok' : 'error');
    clearTimeout(timer.current);
    // El error se queda más tiempo: hay que leer una instrucción, no un visto.
    timer.current = setTimeout(() => setState(null), ok ? 2600 : 6000);
  };

  const asunto = encodeURIComponent(t('contacto.asunto'));
  const to = encodeURIComponent(EMAIL);
  const mailto = `mailto:${EMAIL}?subject=${asunto}`;

  /* mailto: solo hace algo si el sistema tiene un cliente de correo
     registrado. Quien usa Gmail u Outlook en el navegador —que son la mayoría—
     hace clic y no pasa nada, sin ningún aviso. Y no hay forma confiable de
     detectar que falló desde JavaScript: el navegador no informa nada.

     Por eso los enlaces de composición web quedan siempre a la vista en vez de
     esconderse detrás de una detección que no existe. */
  const WEBMAIL = [
    { n: 'Gmail', url: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${asunto}` },
    { n: 'Outlook', url: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${asunto}` },
  ];

  const sm = compact ? ' btn--sm' : '';
  const copied = state === 'ok';

  return (
    <div className="cta">
      <div className="cta__row">
        {/* El label del botón cambia junto con el ícono: el lector de pantalla
            anuncia el cambio de nombre accesible del elemento que tiene el
            foco, así que no hace falta duplicarlo en una región aparte. */}
        <button
          type="button"
          className={`btn btn--primary${sm}`}
          data-copied={copied}
          onClick={onCopy}
        >
          {copied ? t('contacto.copiado') : t('contacto.copiar')}
          {copied ? <IconCheck /> : <IconCopy />}
        </button>

        <a className={`btn btn--ghost${sm}`} href={mailto}>
          {t('contacto.mailto')}
          <IconMail />
        </a>

        {AGENDA && (
          <a className={`btn btn--ghost${sm}`} href={AGENDA} target="_blank" rel="noreferrer">
            {t('contacto.agenda')}
            <IconCalendar />
          </a>
        )}
      </div>

      {/* La salida para quien usa correo web: abre el redactor con destinatario
          y asunto ya cargados, sin depender de nada instalado en la máquina. */}
      <p className="cta__web">
        <span className="cta__web-lbl">{t('contacto.webmail')}</span>
        {WEBMAIL.map((w) => (
          <a key={w.n} href={w.url} target="_blank" rel="noreferrer">
            {w.n}<Ext />
          </a>
        ))}
      </p>

      {/* El mail sigue a la vista y seleccionable: si el copiado falla, el dato
          está ahí igual. La región de estado existe siempre para que el aviso
          de error se anuncie cuando aparece. */}
      <p className="cta__mail">
        <span className="cta__addr">{EMAIL}</span>
        <span className="cta__status" role="status">
          {state === 'error' && (
            <>
              <Led tone="warn" />
              {t('contacto.copiarError')}
            </>
          )}
        </span>
      </p>
    </div>
  );
}
