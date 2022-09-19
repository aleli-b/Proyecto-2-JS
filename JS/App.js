const datos = [
  {
    id: 1,
    title: "Ciberpunk 2077",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1662623886",
    description: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
    date: "9 DIC 2020",
    developer: "CD PROJEKT RED",
    editor: "CD PROJEKT RED",
    tags: "Ciberpunk",
    multiplayer: false
  },
  {
    id: 2,
    title: "FIFA 22",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg?t=1653581021",
    description: "Powered by Football™. EA SPORTS™ FIFA 22 acerca aún más el juego a la realidad gracias a mejoras significativas en la jugabilidad y una nueva temporada de novedades en todos los modos.",
    date: "1 OCT 2021",
    developer: "EA Canada & EA Romania",
    editor: "Electronic Arts",
    tags: "Fútbol",
    multiplayer: true
  },
  {
    id: 3,
    title: "NBA 2K22",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1644960/header.jpg?t=1660885243",
    description: "NBA 2K22 pone todo el universo del baloncesto a tus pies. Cualquiera, en cualquier lugar, puede encestar en NBA 2K22.",
    date: "10 SEP 2021",
    developer: "Visual Concepts",
    editor: "2K",
    tags: "Deportes, Baloncesto, Simulación, Realistas",
    multiplayer: true
  },
  {
    id: 4,
    title: "Marvel Spider-Man",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1660316394",
    description: "En Marvel Spider-Man Remasterizado, la vida de Peter Parker se topa con la de Spider-Man en una historia original repleta de acción. Ponte en la piel de un Peter Parker veterano que ha pulido sus habilidades en la lucha contra el crimen y los villanos en la Nueva York de Marvel.",
    date: "12 AGO 2022",
    developer: "Insomniac Games, Nixxes Software",
    editor: "PlayStation PC LLC",
    tags: "Super héroes, Acción, Mundo abierto, Un jugador",
    multiplayer: false
  },
  {
    id: 5,
    title: "Red Dead Redemption 2",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305",
    description: "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.",
    date: "5 DIC 2019",
    developer: "Rockstar Games",
    editor: "Rockstar Games",
    tags: "Mundo abierto, Buena trama, Aventura, Vaqueros",
    multiplayer: true
  },
  {
    id: 6,
    title: "ELDEN RING",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1654259241",
    description: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
    date: "24 FEB 2022",
    developer: "FromSoftware Inc.",
    editor: "FromSoftware Inc. Bandai Namco Entertainment",
    tags: "Tipo «Dark Souls», Relajantes, Fantasía oscura",
    multiplayer: false
  },
  {
    id: 7,
    title: "Destiny 2",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header_spanish.jpg?t=1661876523",
    description: "Destiny 2 es un MMO de acción con un mundo único y dinámico al que tus amigos y tú os podéis unir en cualquier momento y desde cualquier lugar de forma totalmente gratuita.",
    date: "1 OCT 2019",
    developer: "Bungie",
    editor: "Bungie",
    tags: "Free to Play, Mundo abierto, Disparos y botín, JcJ",
    multiplayer: true
  },
  {
    id: 8,
    title: "Grand Theft Auto V",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444",
    description: "Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.",
    date: "14 ABR 2015",
    developer: "Rockstar North",
    editor: "Rockstar Games",
    tags: "Mundo abierto, Acción, Multijugador, Crimen",
    multiplayer: true
  },
  {
    id: 9,
    title: "Titanfall® 2",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1237970/header.jpg?t=1619804815",
    description: "Incluye todo el contenido de Digital Deluxe, el pack Arranque para subir de nivel y desbloquear artículos más rápido, y la pintura Underground personalizada para la carabina R-201.",
    date: "28 OCT 2016",
    developer: "Respawn Entertainment",
    editor: "Electronic Arts",
    tags: "FPS, Multijugador, Disparos, Mechas, Acción",
    multiplayer: true
  },
  {
    id: 10,
    title: "Total War: WARHAMMER III",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1142710/header.jpg?t=1662479539",
    description: "El final cataclísmico de la trilogía de Total War™: WARHAMMER® ha llegado. Reagrupa a tus fuerzas y adéntrate en el Reino del Caos, una dimensión de terrores horripilantes en la que se decidirá el destino del mundo. ¿Conquistarás a tus demonios... o los dirigirás?",
    date: "17 FEB 2022",
    developer: "CREATIVE ASSEMBLY, Feral Interactive",
    editor: "SEGA, Feral Interactive",
    tags: "Acceso anticipado, Estrategia, Estrategia por turnos",
    multiplayer: true
  },
  {
    id: 11,
    title: "Counter-Strike: Global Offensive",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1641233427",
    description: "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionero cuando salió hace más de 20 años. CS:GO incluye nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de Counter-Strike (de_dust2, etc.).",
    date: "21 AGO 2012",
    developer: "Valve, Hidden Path Entertainment",
    editor: "valve",
    tags: "FPS, Disparos, Multijugador, Competitivos, JcJ",
    multiplayer: true
  },
  {
    id: 12,
    title: "Call of Duty®: Modern Warfare® II",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg?t=1662612400",
    description: "En Call of Duty®: Modern Warfare® II, los jugadores se verán inmersos en un conflicto a escala global sin precedentes que incluye el regreso de Operadores icónicos de la fuerza operativa 141.",
    date: "28 OCT 2022",
    developer: "Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob",
    editor: "Activision",
    tags: "FPS, Acción, Disparos, Multijugador, Militares",
    multiplayer: true
  },
  {
    id: 13,
    title: "RESIDENT EVIL VILLAGE",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg?t=1662659934",
    description: "Vive el survival horror como nunca antes en la 8.ª entrega principal de la aclamada serie Resident Evil: Resident Evil Village. El terror más realista e inescapable, con gráficos hiperdetallados, intensa acción en 1.ª persona y una trama magistral.",
    date: "7 MAY 2021",
    developer: "CAPCOM Co., Ltd.",
    editor: "CAPCOM Co., Ltd.",
    tags: "Supervivencia / TerrorTerror, Primera persona",
    multiplayer: false
  },
  {
    id: 14,
    title: "Forza Horizon 5",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1661275467",
    description: "¡La aventura Horizon definitiva te espera! Explora los vibrantes paisajes de mundo abierto en constante evolución situado en México, y disfruta de una acción de conducción ilimitada y divertida con cientos de los mejores coches del mundo.",
    date: "9 NOV 2021",
    developer: "Playground Games",
    editor: "Xbox Game Studios",
    tags: "Carreras, Mundo abierto, Conducción, Aventura",
    multiplayer: true
  },
  {
    id: 15,
    title: "Stray",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1332010/header.jpg?t=1660855681",
    description: "Perdido, solo y separado de su familia, un gato callejero debe desentrañar un antiguo misterio para escapar de una ciberciudad olvidada y encontrar el camino a casa.",
    date: "19 JUL 2022",
    developer: "BlueTwelve Studio",
    editor: "Annapurna Interactive",
    tags: "Gatos, Aventura, Ciberpunk, Ambientales, Indie",
    multiplayer: false
  },
  {
    id: 16,
    title: "Dying Light",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/239140/header.jpg?t=1659436723",
    description: "Juego de supervivencia ambientado en un mundo abierto postapocalíptico cubierto de zombis hambrientos. Explora una ciudad arrasada por una misteriosa epidemia vírica. Busca suministros, fabrica armas y enfréntate a hordas de muertos.",
    date: "26 ENE 2015",
    developer: "Techland",
    editor: "Techland",
    tags: "Zombis, Supervivencia / Terror, Terror, Parkour",
    multiplayer: false
  },
  {
    id: 17,
    title: "DayZ",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/221100/header.jpg?t=1659598540",
    description: "¿Cuánto podrás sobrevivir en un mundo posapocalíptico? Es una tierra plagada de zombis infectados donde compites por recursos escasos. ¿Colaborarás con desconocidos y permaneceréis juntos? ¿O irás de lobo solitario para evitar traiciones? Esto es DayZ. Esta es tu historia.",
    date: "13 DIC 2018",
    developer: "Bohemia Interactive",
    editor: "Bohemia Interactive",
    tags: "Supervivencia, Zombis, Multijugador, Acción",
    multiplayer: true
  },
  {
    id: 18,
    title: "Rust",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg?t=1659365273",
    description: "The only aim in Rust is to survive. Everything wants you to die - the islands wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.",
    date: "8 FEB 2018",
    developer: "Facepunch Studios",
    editor: "Facepunch Studios",
    tags: "Supervivencia, Fabricación, Multijugador, JcJ",
    multiplayer: true
  },
  {
    id: 19,
    title: "F1® 22",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1692250/header.jpg?t=1662051802",
    description: "Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22, el videojuego oficial de FIA Formula One World Championship™ 2022",
    date: "1 JUL 2022",
    developer: "Codemasters",
    editor: "Electronic Arts",
    tags: "Carreras, Deportes, Multijugador, Cooperativos",
    multiplayer: true
  },
  {
    id: 20,
    title: "Dead by Daylight",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/381210/header.jpg?t=1661894604",
    description: "Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados y asesinados.",
    date: "14 JUN 2016",
    developer: "Behaviour Interactive Inc.",
    editor: "Behaviour Interactive Inc.",
    tags: "Terror, Supervivencia / Terror, Multijugador, Sigilo",
    multiplayer: true
  },
  {
    id: 21,
    title: "God of War",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420",
    description: "Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también.",
    date: "14 ENE 2022",
    developer: "Santa Monica Studio",
    editor: "PlayStation PC LLC",
    tags: "Acción, Aventura, Un jugador, Buena trama, 3D",
    multiplayer: false
  },
  {
    id: 22,
    title: "Hogwarts Legacy",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg?t=1661535551",
    description: "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.",
    date: "10 FEB 2023",
    developer: "Avalanche Software",
    editor: "Warner Bros. Games",
    tags: "Aventura, Magia, Mundo abierto, Fantasía, Rol",
    multiplayer: false
  },
  {
    id: 23,
    title: "Arma 3",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/107410/header.jpg?t=1655998601",
    description: "Combate realista en un enorme mundo abierto militar. Gran cantidad de contenido en solitario y multijugador, más de 20 vehículos y 40 armas e infinitas posibilidades de creación de contenido. El mejor juego militar para PC. Auténtico, diverso, abierto... Con Arma 3 vas a vivir la guerra.",
    date: "12 SEP 2013",
    developer: "Bohemia Interactive",
    editor: "Bohemia Interactive",
    tags: "Acción, Militares, Multijugador,Simulación FPS",
    multiplayer: true
  },
  {
    id: 24,
    title: "Hunt: Showdown",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/594650/header_alt_assets_13.jpg?t=1662450463",
    description: "Hunt: Showdown es un emocionante shooter de alto riesgo en primera persona para JcJcE. Elimina monstruos de pesadilla, mientras compites por las recompensas que te llevarán a alcanzar la gloria, el equipo y el oro en esta experiencia multijugador online implacable e inolvidable.",
    date: "27 AGO 2019",
    developer: "Crytek",
    editor: "Crytek",
    tags: "Mundo abierto, Tácticos, Ambientales, FPS",
    multiplayer: true
  },
  {
    id: 25,
    title: "Mass Effect™ Legendary Edition",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/1328670/header.jpg?t=1662047542",
    description: "Mass Effect™ Legendary Edition incluye el contenido básico para un jugador y más de 40 contenidos descargables aclamados de Mass Effect, Mass Effect 2 y Mass Effect 3, además de armas, armaduras y paquetes promocionales; todo remasterizado y optimizado para 4K Ultra HD.",
    date: "14 MAY 2021",
    developer: "BioWare",
    editor: "Electronic Arts",
    tags: "Buena tramam Rol, Las elecciones importan",
    multiplayer: false
  },
  {
    id: 26,
    title: "Call of Duty®: Black Ops III",
    url: "https://cdn.akamai.steamstatic.com/steam/apps/311210/header.jpg?t=1646763462",
    description: "Call of Duty® Black Ops III: Zombies Chronicles Edition incluye el juego original completo y la expansión de contenido Zombies Chronicles.",
    date: "6 NOV 2015",
    developer: "Treyarch, Aspyr (Mac)",
    editor: "Activision, Aspyr (Mac)",
    tags: "Multijugador, FPS, Zombis, Disparos, Acción",
    multiplayer: true
  }
]


localStorage.setItem('juegos', JSON.stringify(datos));
