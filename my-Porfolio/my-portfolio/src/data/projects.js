/* Los proyectos viven acá, no en el CSS.
   La versión anterior tenía una clase por proyecto (.project-img1 … 11)
   repetida en cinco breakpoints: 415 líneas para once tarjetas iguales. Ahora
   es una entrada en este array.

   Acá va solo lo que no se traduce: identidad, stack, imágenes y enlaces. El
   caso de estudio completo vive en los global.json de translates, bajo
   proyectos.casos.<id>, y se muestra en el modal.

   baja: true marca los proyectos cuya base de datos o tokens de IA se dieron
   de baja al vencer las licencias. El modal muestra el aviso.

   ── Logos de las tarjetas ─────────────────────────────────────────────
   La miniatura de cada destacado lleva el logo del proyecto. Los archivos
   viven en src/assets/logos/ y entran por import, no desde public/: así Vite
   les pone hash para cachearlos y además quedan con nombres sin espacios (el
   original de Batuta era "logo blanco.svg", que en una URL hay que escapar).

   Los tres funcionan sobre fondo oscuro, que es el requisito: Batuta en su
   versión blanca, TMS en celeste claro y StreetArt en amarillo con contorno
   negro, que se sostiene tal cual.

   Los dos PNG están reducidos a 480 px de ancho. Los originales de public/
   venían a 1199 y 732 px para pintarse a ~200, y entre los dos eran 282 KB.
   Reducidos son 116 KB. El de Batuta es vectorial y Vite lo inlinea.

   El monograma (glyph) queda como respaldo: si el archivo no llega, la tarjeta
   vuelve a mostrar las iniciales en vez de un ícono de imagen rota. */

import logoBatuta from '../assets/logos/batuta.svg';
import logoStreetart from '../assets/logos/streetart.png';
import logoTms from '../assets/logos/tms.png';

/* Capturas de Batuta, todas con datos de ejemplo: no hay información de
   clientes. Van en este orden porque cuentan una escala descendente: primero
   el panorama, después el detalle denso, al final el estado de un campo.

   Quedaron afuera tres que también existen y se pueden sumar cuando estén
   corregidas: los estados vacíos de Patch Management y el detalle de Host
   (las dos dicen "Metabase Q" en el selector de organización, y la de Host
   muestra {{HOST.NAME}} sin renderizar) y el perfil con 2FA (el mail del
   usuario de ejemplo termina en @metabaseq.com y hay dos erratas visibles). */
const BATUTA_SHOTS = [
  'https://res.cloudinary.com/dcbax1feo/image/upload/v1786459397/de_afuera_hacia_adentro_quibyy.png',
  'https://res.cloudinary.com/dcbax1feo/image/upload/v1786459365/Activity_z4rspk.jpg',
  'https://res.cloudinary.com/dcbax1feo/image/upload/v1786460989/Frame_637_c2gadt.png',
  // Los fundamentos del sistema van al final a propósito: primero el producto
  // se gana la atención, después el sistema explica por qué es consistente.
  'https://res.cloudinary.com/dcbax1feo/image/upload/v1786461161/7ec76c2d-6fb9-4d0a-b98f-ccfdbec0e605.png',
];

/* Cloudinary devuelve la imagen redimensionada y en el mejor formato que
   soporte el navegador. Las capturas originales van de 118 a 376 KB cada una y
   la galería del modal las pintaba a tamaño completo: el PNG de 267 KB que ya
   medimos baja a 33 KB en AVIF a 1400 px.

   Solo toca URLs de Cloudinary; cualquier otra vuelve intacta. El enlace de
   "abrir en pestaña nueva" del modal sigue apuntando al original. */
export const cld = (url, w) => (
  url.includes('/upload/') ? url.replace('/upload/', `/upload/f_auto,q_auto,w_${w}/`) : url
);

export const featured = [
  {id: 'batuta', name: 'Batuta', glyph: 'BT', logo: logoBatuta, thumb: 'a', state: 'ok', hasNote: true, links: ['https://www.batuta.com/batuta-the-next-chapter-in-the-evolution-of-metabase-q/'], images: BATUTA_SHOTS, tech: ['React', 'TypeScript', 'Tailwind', 'Material UI', 'Figma']},
  {id: 'streetart', name: 'StreetArt Wine Club', glyph: 'SA', logo: logoStreetart, thumb: 'c', state: 'accent', baja: true, links: ['https://streetart-wine-club.vercel.app/', 'https://github.com/Matias-Rodriguez-UX/PF_StreetArt_Wine_Club_FrontEnd', 'https://github.com/Matias-Rodriguez-UX/PF_StreetArt_Wine_Club_BackEnd', 'https://www.youtube.com/watch?v=flG88Nem_2Q'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/streetArt/page1_ecfhkb.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159199/assets/streetArt/page2_dlehnm.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/streetArt/page3_u3lkwf.jpg'], tech: ['React', 'JavaScript', 'Bootstrap', 'Material UI', 'NodeJs', 'Express', 'Postgres', 'Sequelize', 'Redux']},
  {id: 'tms', name: 'TMS Ingeniería', glyph: 'TMS', logo: logoTms, thumb: 'b', links: ['https://tmsingenieria.netlify.app/'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1684589523/assets/TMS/TMSportada_bldwvl.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1684589523/assets/TMS/TMSmain_ckarjr.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1684589523/assets/TMS/TMScuerpo_v07edf.jpg'], tech: ['React.js', 'SCSS', 'Locomotive Scroll', 'Cloudinary', 'Gatsby', 'Netlify']},
];

/* Fechas reales, corregidas en agosto de 2026. Varias estaban corridas hacia
   adelante y eso es lo que más se parece a inflar un CV: cualquiera que cruce
   el sitio con LinkedIn encuentra el desfasaje en un minuto, y no compra nada.

   nota lleva el porqué de las más viejas. Una tesis de 2010 no resta: dice que
   hace dieciséis años que resuelve con restricciones. El dato sin contexto se
   lee como un hueco; con contexto, como recorrido.

   ── Qué quedó afuera ──────────────────────────────────────────────────
   De ocho pasó a cuatro. El criterio: cada uno tiene que probar algo que
   ningún otro prueba. Dall·E prueba IA de punta a punta, Dewey prueba proceso
   de UX, y La Cardeuse y Nomade sostienen el origen en diseño industrial, que
   es lo que la ficha declara arriba de todo.

   Salieron Alura (era un curso, no un proyecto), Pokédex (proyecto de bootcamp,
   lo tiene medio mundo), Altamira (rediseño de sitio y marca: lo mismo que TMS
   pero más flojo) y 76treinta (banners y reels, la disciplina más lejana a lo
   que este portfolio vende). Nada de eso sumaba una prueba nueva, y una lista
   larga de trabajos menores diluye a los que sí importan. */
export const index = [
  /* Este sitio va acá y no como cuarta tarjeta: cuatro en una grilla de tres
     dejan una huérfana colgando, y además no es un proyecto para un cliente,
     es la página que la persona está mirando en ese momento. Como fila dice lo
     que tiene que decir sin pedir el peso de una tarjeta. */
  {id: 'sitio', name: 'Este sitio', year: '2026', links: ['https://github.com/Matias-Rodriguez-MBQ/Portfolio-'], images: [], tech: ['React', 'Vite', 'CSS', 'Tokens', 'i18next']},
  {id: 'dalle', name: 'Dall·E MgR', year: '2023', baja: true, links: ['https://dalle-clone-mgr.vercel.app/'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1680802349/assets/OpenAi/portada_AI_mfgjuv.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1680802344/assets/OpenAi/crear_AI_uhcb4s.png'], tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind', 'OpenAI', 'Cloudinary', 'Render', 'Vercel']},
  {id: 'dewey', name: 'Dewey', year: '2021', links: ['https://www.behance.net/gallery/127396351/Dewey-Extracurricular-activities'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159196/assets/dewey/dewey3_gf6aef.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159196/assets/dewey/dewey2_j49kx5.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159200/assets/dewey/dewey1_dbn7p0.png'], tech: ['Figma', 'AdobeXD', 'Adobe Illustrator']},
  {id: 'cardeuse', name: 'La Cardeuse', year: '2010–2011', nota: 'primerTrabajo', links: [], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159195/assets/lacardeuse/LC_vjxsje.jpg'], tech: ['Rhinoceros', 'Corel Draw']},
  {id: 'nomade', name: 'Nomade', year: '2010', nota: 'tesis', links: [], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159200/assets/unlp/Tesis1_qeyshw.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159199/assets/unlp/Tesis2_arx2zh.jpg'], tech: ['Corel Draw', 'Adobe Illustrator', 'Rhinoceros', 'Autocad']},
];

/* Todos, para buscar por id desde el modal. */
export const all = [...featured, ...index];
export const byId = (id) => all.find((p) => p.id === id);
