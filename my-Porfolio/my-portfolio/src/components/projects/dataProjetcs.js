const dataProjects = [
    {
        id: 1,
        name: "StreetArt Wine Club",
        description: "Design and develop a wine club website that includes: authentication, searches, combined filtering, sorting, user banning, email sending, etc., creation of memberships, reviews, wishlist, route protection, etc.",
        whatIdo: "I was in charge of the visual development, its interface, user behavior, the home page, and the administrator's dashboard",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/streetArt/page1_ecfhkb.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159199/assets/streetArt/page2_dlehnm.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/streetArt/page3_u3lkwf.jpg'],
        tecnologies: ['React', 'JavaScript', 'Bootstrap', 'Material UI', 'NodeJs', 'Express', 'Postgres', 'Sequelize', 'Redux'],
        date: "February 2023",
        links: ["https://streetart-wine-club.vercel.app/", 'https://github.com/Matias-Rodriguez-UX/PF_StreetArt_Wine_Club_FrontEnd', 'https://github.com/Matias-Rodriguez-UX/PF_StreetArt_Wine_Club_BackEnd', 'https://www.youtube.com/watch?v=flG88Nem_2Q']
    },
    {
        id: 2,
        name: "Alura",
        description: "Practice course, where you work on front responsive development, the behavior of pure DOM components",
        whatIdo: "Practical work of the course, I was in charge of the development of components, their behavior and rendering of properties.",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159203/assets/alura/apeperia_uail8h.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159192/assets/alura/encriptador_pszasw.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159211/assets/alura/frutosyfrutas_qyydqs.png'],
        tecnologies: ['HTML', 'JavaScript', 'CSS', 'Figma'],
        date: "March 2023",
        links: ["https://github.com/Matias-Rodriguez-UX/Alura"]
    },
    {
        id: 3,
        name: "Pokemon",
        description: "Individual project in which we worked with APIs, databases, react, redux, etc.",
        whatIdo: "Design and develop a pokemons App that included: searches, combined filtering, ordering, creation and edition of pokemons.",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159203/assets/pokemon/landing_ekuimt.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/pokemon/page1_dlrogb.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159198/assets/pokemon/page1_dlrogb.png'],
        tecnologies: ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Postgres', 'Sequelize', 'Express', 'NodeJS'],
        date: "January 2023",
        links: ["https://github.com/Matias-Rodriguez-UX/PI-Pokemon", 'https://www.behance.net/gallery/161734639/Pokedex']
    },
    {
        id: 4,
        name: "Altamira",
        description: "Redesign of the logo and page of the educational institution Escuela Argentino Danesa Altamira",
        whatIdo: "Current page analysis, improvement proposal, image cleanup, user behavior analysis, landing page proposal",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159193/assets/altamira/altamiralogos_qavrqm.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159193/assets/altamira/altamira_original_tyxbg1.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159195/assets/altamira/pagina_danes_nfcubz.jpg'],
        tecnologies: ['Figma'],
        date: "October 2022",
        links: ["https://www.behance.net/gallery/157400955/Rediseno-de-Pagina-de-colegio-Privado"]
    },
    {
        id: 5,
        name: "Dewey",
        description: "Creation and development of an application to reserve extracurricular activities for children",
        whatIdo: "Development of the complete UX/UI design of the application, with integration of ux research, ui components, illustrations, story boards, wire frames, etc.",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159196/assets/dewey/dewey3_gf6aef.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159196/assets/dewey/dewey2_j49kx5.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159200/assets/dewey/dewey1_dbn7p0.png'],
        tecnologies: ['Figma', 'AdobeXD', 'Adobe Illustrator'],
        date: "February  2021",
        links: ["https://www.behance.net/gallery/127396351/Dewey-Extracurricular-activities"]
    },
    {
        id: 6,
        name: "La Cardeuse",
        description: "First job as an industrial designer, within the productive system",
        whatIdo: "Redesign of all production lines and updating of the aesthetics of fabrics, patterns and combinations. Development of new products and implementation of new technologies",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159195/assets/lacardeuse/LC_vjxsje.jpg'],
        tecnologies: ['Rhinoceros', 'Corel Draw'],
        date: "2010-2011",
        links: []
    },
    {
        id: 7,
        name: "76treinta Wine Club",
        description: "Local wine club, which promotes its services through social networks",
        whatIdo: "Creation of graphic pieces, logo and template redesign",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159205/assets/wineclub/Baner_marzo_22_a7foae.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159212/assets/wineclub/Cabernet_27_de_agosto_verqyw.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159203/assets/wineclub/ENologo_2020_fg8bvt.jpg'],
        tecnologies: ['Corel Draw', 'Adobe Illustrator'],
        date: "2018-2023",
        links: ["https://www.instagram.com/7630clubdevinos/?igshid=MGNiNDI5ZTU%3D"]
    },
    {
        id: 8,
        name: "Nomade",
        description: "University thesis, in which a device is developed to move people on the beach in cases of emergency",
        whatIdo: "Creation, development and realization of prototype of the developed product, together with its graphic pieces and its productive technical plans",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1679159200/assets/unlp/Tesis1_qeyshw.jpg', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1679159199/assets/unlp/Tesis2_arx2zh.jpg'],
        tecnologies: ['Corel Draw', 'Adobe Illustrator', 'Rhinoceros', 'Autocad'],
        date: "2010",
        links: []
    },
    {
        id: 9,
        name: "Dall-E MgR",
        description: "Artificial intelligence image generator.",
        whatIdo: "I created an application, using some of today's most demanded tools like Node.js, Express.js, MongoDB and React.js (MERN), Tailwind, today's most popular CSS framework, OpenAI's DALL-E Model, a deep learning model that generates images from text input, Cloudinary, as a cloud-based image storage service. The Backend was deployed in Render and the Frontend in Vercel",
        images: ['https://res.cloudinary.com/dcbax1feo/image/upload/v1680802349/assets/OpenAi/portada_AI_mfgjuv.png', 'https://res.cloudinary.com/dcbax1feo/image/upload/v1680802344/assets/OpenAi/crear_AI_uhcb4s.png'],
        tecnologies: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind', 'OpenAI', 'Cloudinary', 'Render', 'Vercel'],
        date: "2023",
        links: ['https://dalle-clone-mgr.vercel.app/']
    },
]

export default dataProjects