/* Los proyectos viven acá, no en el CSS.
   La versión anterior tenía una clase por proyecto (.project-img1 … 11)
   repetida en cinco breakpoints: 415 líneas para once tarjetas iguales. Ahora
   es una entrada en este array.

   Acá va solo lo que no se traduce: identidad, stack, imágenes y enlaces. El
   caso de estudio completo vive en los global.json de translates, bajo
   proyectos.casos.<id>, y se muestra en el modal.

   baja: true marca los proyectos cuya base de datos o tokens de IA se dieron
   de baja al vencer las licencias. El modal muestra el aviso. */

export const featured = [
  {id: 'metabaseq', name: 'Metabase Q', glyph: 'MQ', thumb: 'a', state: 'ok', hasNote: true, links: ['https://www.batuta.com/batuta-the-next-chapter-in-the-evolution-of-metabase-q/'], images: [], tech: ['React', 'TypeScript', 'Tailwind', 'Material UI', 'Figma']},
  {id: 'streetart', name: 'StreetArt Wine Club', glyph: 'SA', thumb: 'c', state: 'accent', baja: true, links: ['https://streetart-wine-club.vercel.app/', 'https://github.com/Matias-Rodriguez-UX/PF_StreetArt_Wine_Club_FrontEnd', 'https://github.com/Matias-Rodriguez-UX/PF_StreetArt_Wine_Club_BackEnd', 'https://www.youtube.com/watch?v=flG88Nem_2Q'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/streetArt/page1_ecfhkb.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159199/assets/streetArt/page2_dlehnm.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/streetArt/page3_u3lkwf.jpg'], tech: ['React', 'JavaScript', 'Bootstrap', 'Material UI', 'NodeJs', 'Express', 'Postgres', 'Sequelize', 'Redux']},
  {id: 'tms', name: 'TMS Ingeniería', glyph: 'TMS', thumb: 'b', links: ['https://tmsingenieria.netlify.app/'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1684589523/assets/TMS/TMSportada_bldwvl.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1684589523/assets/TMS/TMSmain_ckarjr.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1684589523/assets/TMS/TMScuerpo_v07edf.jpg'], tech: ['React.js', 'SCSS', 'Locomotive Scroll', 'Cloudinary', 'Gatsby', 'Netlify']},
];

export const index = [
  {id: 'dalle', name: 'Dall·E MgR', year: '2023', baja: true, links: ['https://dalle-clone-mgr.vercel.app/'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1680802349/assets/OpenAi/portada_AI_mfgjuv.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1680802344/assets/OpenAi/crear_AI_uhcb4s.png'], tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind', 'OpenAI', 'Cloudinary', 'Render', 'Vercel']},
  {id: 'alura', name: 'Alura', year: '2022', links: ['https://github.com/Matias-Rodriguez-UX/Alura'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159203/assets/alura/apeperia_uail8h.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159192/assets/alura/encriptador_pszasw.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159211/assets/alura/frutosyfrutas_qyydqs.png'], tech: ['HTML', 'JavaScript', 'CSS', 'Figma']},
  {id: 'pokedex', name: 'Pokédex', year: '2022', baja: true, links: ['https://github.com/Matias-Rodriguez-UX/PI-Pokemon', 'https://www.behance.net/gallery/161734639/Pokedex'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159203/assets/pokemon/landing_ekuimt.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/pokemon/page1_dlrogb.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/pokemon/page1_dlrogb.png'], tech: ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Postgres', 'Sequelize', 'Express', 'NodeJS']},
  {id: 'altamira', name: 'Altamira', year: '2021', links: ['https://www.behance.net/gallery/157400955/Rediseno-de-Pagina-de-colegio-Privado'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159193/assets/altamira/altamiralogos_qavrqm.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159193/assets/altamira/altamira_original_tyxbg1.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159195/assets/altamira/pagina_danes_nfcubz.jpg'], tech: ['Figma']},
  {id: 'dewey', name: 'Dewey', year: '2020', links: ['https://www.behance.net/gallery/127396351/Dewey-Extracurricular-activities'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159196/assets/dewey/dewey3_gf6aef.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159196/assets/dewey/dewey2_j49kx5.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159200/assets/dewey/dewey1_dbn7p0.png'], tech: ['Figma', 'AdobeXD', 'Adobe Illustrator']},
  {id: 'cardeuse', name: 'La Cardeuse', year: '2020', links: [], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159195/assets/lacardeuse/LC_vjxsje.jpg'], tech: ['Rhinoceros', 'Corel Draw']},
  {id: 'setentayseis', name: '76treinta Wine Club', year: '2023', links: ['https://www.instagram.com/7630clubdevinos/?igshid=MGNiNDI5ZTU%3D'], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159205/assets/wineclub/Baner_marzo_22_a7foae.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159212/assets/wineclub/Cabernet_27_de_agosto_verqyw.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159203/assets/wineclub/ENologo_2020_fg8bvt.jpg'], tech: ['Corel Draw', 'Adobe Illustrator']},
  {id: 'nomade', name: 'Nomade', year: '2019', links: [], images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159200/assets/unlp/Tesis1_qeyshw.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159199/assets/unlp/Tesis2_arx2zh.jpg'], tech: ['Corel Draw', 'Adobe Illustrator', 'Rhinoceros', 'Autocad']},
];

/* Todos, para buscar por id desde el modal. */
export const all = [...featured, ...index];
export const byId = (id) => all.find((p) => p.id === id);
