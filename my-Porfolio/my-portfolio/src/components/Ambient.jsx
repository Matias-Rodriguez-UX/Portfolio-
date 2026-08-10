import React, { useEffect, useRef } from 'react';

/* Capa de fondo: retícula de puntos, cuatro focos que derivan muy lento, y el
   encendido de los puntos alrededor del puntero. El detalle de por qué se
   anima solo transform en los focos está junto a las reglas, en index.css.

   Todo acá es decorativo y sale entero del árbol de accesibilidad. */
export default function Ambient() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Sin puntero fino no hay cursor que seguir: en un teléfono esto sería
    // trabajo de pintado a cambio de nada.
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;

    // Destino (el cursor) y posición actual del halo. La luz persigue al
    // puntero con inercia en vez de pegarse a él: siguiéndolo exacto, cada
    // punto se prendía y apagaba de golpe. Con el retardo, el borde suave de
    // la máscara barre la retícula y los puntos entran y salen graduales.
    // Es el mismo criterio que el scroll: arranca rápido y frena largo.
    let tx = 0; let ty = 0;
    let cx = 0; let cy = 0;
    let raf = null;
    let started = false;

    const EASE = 0.12;    // cuánto se acerca al destino en cada frame
    const SNAP = 0.4;     // umbral en px para dar el viaje por terminado

    const loop = () => {
      cx += (tx - cx) * EASE;
      cy += (ty - cy) * EASE;
      el.style.setProperty('--mx', `${cx.toFixed(1)}px`);
      el.style.setProperty('--my', `${cy.toFixed(1)}px`);

      // El bucle se corta solo al llegar: con el cursor quieto no queda un
      // rAF vivo repintando la capa para nada.
      raf = (Math.abs(tx - cx) > SNAP || Math.abs(ty - cy) > SNAP)
        ? requestAnimationFrame(loop)
        : null;
    };

    const onMove = (e) => {
      // .ambient es fixed a viewport completo, así que las coordenadas de
      // cliente ya están en su mismo sistema: no hace falta convertir.
      tx = e.clientX;
      ty = e.clientY;

      if (!started) {
        // En el primer movimiento el halo nace donde está el cursor. Sin esto
        // viajaría desde la esquina superior izquierda al entrar a la página.
        started = true;
        cx = tx; cy = ty;
        el.dataset.cursor = 'true';
      }
      if (!raf) raf = requestAnimationFrame(loop);
    };

    // Al salir de la ventana se apaga el halo y además se resetea `started`.
    // Sin ese reset, al volver el cursor `onMove` veía started === true, no
    // reponía data-cursor y la luz no aparecía nunca más. De paso, arrancar
    // de cero hace que el halo renazca donde entró el puntero en vez de
    // cruzar toda la pantalla desde donde se había ido.
    const onLeave = () => {
      el.dataset.cursor = 'false';
      started = false;
    };

    // pointerout con relatedTarget nulo es el que dispara de verdad al salir
    // por el borde de la ventana; pointerleave sobre <html> cubre el resto.
    const onOut = (e) => { if (!e.relatedTarget) onLeave(); };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerout', onOut);
    window.addEventListener('blur', onLeave);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerout', onOut);
      window.removeEventListener('blur', onLeave);
    };
  }, []);

  return (
    <div className="ambient" ref={ref} data-cursor="false" aria-hidden="true">
      <div className="ambient__glow" />
      <div className="orb orb--a"><i /></div>
      <div className="orb orb--b"><i /></div>
      <div className="orb orb--c"><i /></div>
      <div className="orb orb--d"><i /></div>
    </div>
  );
}
