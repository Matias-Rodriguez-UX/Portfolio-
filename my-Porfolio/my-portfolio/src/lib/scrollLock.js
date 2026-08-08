/* Un puntero al Lenis vivo, para que el modal pueda frenar el scroll de fondo
   sin que App tenga que pasar la instancia por props hasta la tarjeta.

   Hace falta porque <dialog> bloquea la interacción con el fondo pero no los
   eventos de rueda: sin esto, scrollear con el modal abierto movía la página
   de atrás. En táctil Lenis no se instancia, así que ahí el freno lo pone
   overflow: hidden. */

let lenis = null;

export const setLenis = (instance) => { lenis = instance; };

export const lockScroll = () => {
  if (lenis) lenis.stop();
  else document.body.style.overflow = 'hidden';
};

export const unlockScroll = () => {
  if (lenis) lenis.start();
  else document.body.style.overflow = '';
};
