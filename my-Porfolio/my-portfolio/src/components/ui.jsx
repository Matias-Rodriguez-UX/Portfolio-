import React from 'react';
import useReveal from '../hooks/useReveal';

/* ── Reveal ───────────────────────────────────────────────────────────
   Envuelve cualquier bloque para que entre al viewport. El retardo se pasa
   en ms y sale por la variable --d, que es la que lee la transición. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`rv ${className}`.trim()}
      style={delay ? { ...style, '--d': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── LED ──────────────────────────────────────────────────────────────
   El color dice el estado y el latido dice "esto sigue vigente". El texto
   de al lado ya nombra el estado, así que para el lector de pantalla es
   decorativo. */
export function Led({ tone = 'accent', live = false }) {
  return (
    <span
      className={`led led--${tone}${live ? ' led--live' : ''}`}
      aria-hidden="true"
    />
  );
}

export function Chip({ tone, led, live, children }) {
  return (
    <span className={`chip${tone ? ` chip--${tone}` : ''}`}>
      {led && <Led tone={led} live={live} />}
      {children}
    </span>
  );
}

/* ── Cabecera de sección ──────────────────────────────────────────────
   Número de hoja + cota en magenta + label mono + título. La cota es el
   injerto de plano técnico que separa esto de cualquier otro portfolio
   oscuro; el número lo completa, porque un plano viene numerado.

   El número es decorativo: las secciones ya están en orden en el DOM y un
   lector de pantalla no gana nada oyendo "cero uno" antes de cada título. */
export function SectionHead({ n, label, title, intro, wide = false }) {
  return (
    <Reveal className="sec-head">
      <div className="sec-mark">
        {n && <span className="sec-n" aria-hidden="true">{n}</span>}
        <span className="dim" aria-hidden="true" />
        <span className="lbl">{label}</span>
      </div>
      <h2 className={`sec-title${wide ? ' sec-title--wide' : ''}`}>{title}</h2>
      {intro && <p className="sec-intro">{intro}</p>}
    </Reveal>
  );
}

/* Línea de cota con su etiqueta. Las flechas son decorativas. */
export function DimLine({ children, style }) {
  return (
    <div style={style}>
      <div className="dimline" aria-hidden="true" />
      <span className="dimtag">
        <span aria-hidden="true">↤ </span>
        {children}
        <span aria-hidden="true"> ↦</span>
      </span>
    </div>
  );
}

/* Flecha de enlace externo: nunca leída, un lector diría "flecha noreste". */
export const Ext = () => <span aria-hidden="true"> ↗</span>;

/* ── Iconos ───────────────────────────────────────────────────────── */
export const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

export const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06C21.6 8.58 23 10.9 23 14.16V21h-4v-6.06c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.2V21h-4V9z" />
  </svg>
);

export const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const IconArrowDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

export const IconDownload = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v13M18 11l-6 6-6-6M4 21h16" />
  </svg>
);

export const IconCopy = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
);

export const IconCheck = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12.5l5.5 5.5L20 6.5" />
  </svg>
);

export const IconMail = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M3.5 7.5l8.5 6 8.5-6" />
  </svg>
);

export const IconCalendar = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5.5" width="18" height="15.5" rx="2" />
    <path d="M8 2.5v4M16 2.5v4M3 11h18" />
  </svg>
);

export const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
