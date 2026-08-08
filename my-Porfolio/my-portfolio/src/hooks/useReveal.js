import { useEffect, useRef } from 'react';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Marca un elemento para que entre al viewport con la curva del sistema.
 *
 * Son treinta líneas en vez de una librería de animación: acá no hay modales
 * con salida animada ni gestos, que es donde Motion o React Spring pagan su
 * peso. El acordeón anima con grid-template-rows y el resto son transiciones
 * CSS, así que una librería sería bundle sin uso.
 *
 * Con prefers-reduced-motion el contenido aparece visible de entrada: no se
 * degrada, simplemente no se mueve.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (prefersReduced() || !('IntersectionObserver' in window)) {
      el.classList.add('in');
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
