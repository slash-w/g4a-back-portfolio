import "../../config/database.js";
import "dotenv/config.js";
import Game from "../Games.js";

let games = [
  {
    name: "Street Fighter 6",
    detailed_description: "<h1>Street Fighter™ 6</h1><p><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1364780/extras/13_Custom-Images_ST.png?t=1694074938\" /><br><strong>Street Fighter™ 6</strong><br>・El juego completo</p><br><h1>Street Fighter™ 6 Deluxe Edition</h1><p><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1364780/extras/13_Custom-Images_DX.png?t=1694074938\" /><br><strong>Street Fighter™ 6 Deluxe Edition</strong><br>・El juego completo<br>・Character Pass para la temporada 1, que incluye:<br>- 4 personajes adicionales (Rashid, A.K.I., Ed, Akuma)<br>- 4 colores adicionales para personajes: atuendo 1 con colores 3-10<br>- Regalo por compra: 4200 Drive Tickets<br>* Se publicará contenido adicional progresivamente una vez que se lance el juego.<br>* Consulta el sitio web oficial para información acerca del producto y del calendario de lanzamiento.</p><br><h1>Street Fighter™ 6 Ultimate Edition</h1><p><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1364780/extras/13_Custom-Images_ULT.png?t=1694074938\" /><br><strong>Street Fighter™ 6 Ultimate Edition</strong><br>・El juego completo<br>・Ultimate Pass para la temporada 1, que incluye:<br>- 4 personajes adicionales (Rashid, A.K.I., Ed, Akuma)<br>- 4 colores adicionales para personajes: atuendo 1 con colores 3-10<br>- 4 colores adicionales para personajes: atuendo 2 con colores 1-10<br>- 4 colores adicionales para personajes: atuendo 3 con colores 1-10<br>- 2 escenarios adicionales<br>- Regalo por compra: 7700 Drive Tickets<br>* Se publicará contenido adicional progresivamente una vez que se lance el juego.<br>* Consulta el sitio web oficial para información acerca del producto y del calendario de lanzamiento.</p><br><h1>Acerca del juego</h1>¡Aquí llega el peso pesado de Capcom! Street Fighter™ 6 sale a la venta en todo el mundo el 2 de junio de 2023, y trae consigo una nueva evolución de la saga Street Fighter™.<br><br>Street Fighter 6 hace gala de la potencia del RE ENGINE de Capcom, e incluye tres modos de juego: World Tour, Fighting Ground y Battle Hub.<br><br>Un variado elenco de 18 luchadores<br>Juega con maestros legendarios y nuevos favoritos de los fans como Ryu, Chun-Li, Luke, Jamie, Kimberly y muchos más. En esta última edición verás sus últimos y sorprendentes rediseños, además de sus cinemáticas especiales.<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1364780/extras/SF6_18Characters_Steam.png?t=1694074938\" /><br><br>Domina el Fighting Ground<br>Street Fighter ofrece un sistema de combate muy avanzado con tres tipos de control (clásico, moderno y dinámico) que te permitirán rápidamente jugar de acuerdo con tu nivel de habilidad.<br>La nueva función de comentarios en tiempo real añade toda la emoción de los combates de competición, demás de explicaciones sencillas sobre tu forma de jugar.<br>El indicador Drive es un nuevo sistema para gestionar tus movimientos. Para poder conseguir la victoria deberás utilizarlo bien.<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1364780/extras/SF6_FightingGround_Steam.png?t=1694074938\" /><br><br>Explora la calles en World Tour<br>Descubre el significado de la fuerza en World Tour, un inmersivo modo historia para un jugador en el que podrás explorar Metro City y mucho más con tu avatar. Encuentra a maestros que te tomen bajo su tutela y te enseñen su estilos y técnicas.<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1364780/extras/SF6_WorldTour_Steam.png?t=1694074938\" /><br><br>Busca a rivales en el Battle Hub<br>El Battle Hub consisten en un modo central de Street Fighter 6 en el que los jugadores pueden reunirse, comunicarse y hacerse más fuerte juntos. Utiliza el avatar que creaste en World Tour para competir contra otros jugadores a través de las máquinas arcade del Battle Hub, o dirígete al salón arcade para disfrutar de algunos de los juegos clásicos de Capcom.<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1364780/extras/SF6_BattleHub_Steam.png?t=1694074938\" /><br><br>Tu camino para convertirte en un luchador de talla mundial empieza aquí.<br><br>Juego online<br>Capcom ofrece diversos servicios online para este juego, incluido el contenido exclusivamente online.<br>* No puedes acceder a determinados elementos de este juego sin una conexión a internet.<br>* Para usar el contenido exclusivamente online, es necesario tener un CAPCOM ID.<br>* Para obtener información sobre los servicios relacionados con CAPCOM ID y descubrir cómo usarlo, visita el sitio web oficial de CAPCOM ID <a href=\"https://steamcommunity.com/linkfilter/?url=https://cid.capcom.com/\" target=\"_blank\" rel=\" noopener\"  >https://cid.capcom.com/</a>. Ten en cuenta que es posible que el uso de CAPCOM ID a veces se encuentre restringido por limitaciones de edad.<br>* Capcom puede suspender temporalmente los servicios online en caso de circunstancias imprevistas.",
    short_description: "¡Aquí llega el peso pesado de Capcom! Street Fighter™ 6 sale a la venta en todo el mundo el 2 de junio de 2023, ¡y trae consigo una nueva evolución de la saga Street Fighter™! Street Fighter 6 incluye tres modos de juego: World Tour, Fighting Ground y Battle Hub.",
    supported_languages: "Inglés<strong>*</strong>, Japonés<strong>*</strong>, Francés, Italiano, Alemán, Español de España, Árabe, Portugués de Brasil, Polaco, Ruso, Chino simplificado, Chino tradicional, Coreano<br><strong>*</strong>idiomas con localización de audio",
    header_image: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header_alt_assets_5.jpg?t=1694074938",
    pc_requirements: "<strong>Mínimo:</strong><br><ul class=\"bb_ul\"><li>Requiere un procesador y un sistema operativo de 64 bits<br></li><li><strong>SO:</strong> Windows 10 (64 bit required)<br></li><li><strong>Procesador:</strong> Intel Core i5-7500 / AMD Ryzen 3 1200<br></li><li><strong>Memoria:</strong> 8 GB de RAM<br></li><li><strong>Gráficos:</strong> GTX1060 (VRAM 6GB) / Radeon RX 580 (VRAM 4GB)<br></li><li><strong>DirectX:</strong> Versión 12<br></li><li><strong>Almacenamiento:</strong> 60 GB de espacio disponible<br></li><li><strong>Notas adicionales:</strong> - The framerate may drop during graphic-intensive scenes.</li></ul>",
    publishers: ["CAPCOM Co., Ltd."],
    price: 9900,
    platforms: {
      windows: true,
      mac: false,
      linux: false
    },
    genres: [
      {
        id: "1",
        description: "Acción"
      },
      {
        id: "25",
        description: "Aventura"
      }
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_387137f8cccb048c35a8685634372e97785d40aa.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_387137f8cccb048c35a8685634372e97785d40aa.1920x1080.jpg?t=1694074938"
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_a381f1b3b450c18900d47b991ce8e7456e9cdba5.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_a381f1b3b450c18900d47b991ce8e7456e9cdba5.1920x1080.jpg?t=1694074938"
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_f62ce93269a6d8e0027853358af4d6368e2c4b93.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_f62ce93269a6d8e0027853358af4d6368e2c4b93.1920x1080.jpg?t=1694074938"
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_d186566a92ada8cdb08b04769a8c95cd1e380006.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_d186566a92ada8cdb08b04769a8c95cd1e380006.1920x1080.jpg?t=1694074938"
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_ed46aaa9ed94dd6f35a703070f8df16cee5aef61.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_ed46aaa9ed94dd6f35a703070f8df16cee5aef61.1920x1080.jpg?t=1694074938"
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_10191fb5ab48cee99d7a43e636db9202938f143e.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_10191fb5ab48cee99d7a43e636db9202938f143e.1920x1080.jpg?t=1694074938"
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_449d488d2edbe785c4e6010fede1c3b8dae8e388.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_449d488d2edbe785c4e6010fede1c3b8dae8e388.1920x1080.jpg?t=1694074938"
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_2cfc2472e7ff99fd354935135d91e36e81951795.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_2cfc2472e7ff99fd354935135d91e36e81951795.1920x1080.jpg?t=1694074938"
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_3ceb422dbef5f8495e690ed526f684fdcb1022ec.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_3ceb422dbef5f8495e690ed526f684fdcb1022ec.1920x1080.jpg?t=1694074938"
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_201488fc9f1aa5e29e2fc6d96ef2b66e41ddf32e.600x338.jpg?t=1694074938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/ss_201488fc9f1aa5e29e2fc6d96ef2b66e41ddf32e.1920x1080.jpg?t=1694074938"
      }
    ],
    movies: [
      {
        id: 256967189,
        name: "SF6_AKI_GamePlay_Trailer_Multi_US_ESRB_1080P_FIX_Steamstore",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256967189/movie.293x165.jpg?t=1693546089",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256967189/movie480_vp9.webm?t=1693546089",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256967189/movie_max_vp9.webm?t=1693546089"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256967189/movie480.mp4?t=1693546089",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256967189/movie_max.mp4?t=1693546089"
        },
        highlight: true
      },
      {
        id: 256957527,
        name: "SF6_Rashid_GamePlay_Trailer_Multi_US_ESRB_1080P_FIX_Steamstore",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256957527/movie.293x165.jpg?t=1690166665",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256957527/movie480_vp9.webm?t=1690166665",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256957527/movie_max_vp9.webm?t=1690166665"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256957527/movie480.mp4?t=1690166665",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256957527/movie_max.mp4?t=1690166665"
        },
        highlight: true
      },
      {
        id: 256950421,
        name: "SF6_Launch_AvailableNow_Multi_EN_1080p_FIX",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256950421/movie.293x165.jpg?t=1685677608",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256950421/movie480_vp9.webm?t=1685677608",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256950421/movie_max_vp9.webm?t=1685677608"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256950421/movie480.mp4?t=1685677608",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256950421/movie_max.mp4?t=1685677608"
        },
        highlight: true
      },
      {
        id: 256948912,
        name: "SF6_YourStoryTrailer_Multi_US_ESRB_1080P_FIX",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256948912/movie.293x165.jpg?t=1684997450",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256948912/movie480_vp9.webm?t=1684997450",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256948912/movie_max_vp9.webm?t=1684997450"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256948912/movie480.mp4?t=1684997450",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256948912/movie_max.mp4?t=1684997450"
        },
        highlight: true
      },
      {
        id: 256942745,
        name: "SF6_DemoAnnounceTrailer_Multi_US_ESRB_1080p_FIX",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256942745/movie.293x165.jpg?t=1682309495",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256942745/movie480_vp9.webm?t=1682309495",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256942745/movie_max_vp9.webm?t=1682309495"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256942745/movie480.mp4?t=1682309495",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256942745/movie_max.mp4?t=1682309495"
        },
        highlight: true
      },
      {
        id: 256942372,
        name: "SF6_WT_Gameplay&Avatar_Battle_Trailer_Multi_US_ESRB_1080p_FIX",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256942372/movie.293x165.jpg?t=1682057217",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256942372/movie480_vp9.webm?t=1682057217",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256942372/movie_max_vp9.webm?t=1682057217"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256942372/movie480.mp4?t=1682057217",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256942372/movie_max.mp4?t=1682057217"
        },
        highlight: true
      },
      {
        id: 256933399,
        name: "SF6_Zangief&Lily&Cammy_Gameplay_Multi_US_ESRB_HD_FIX",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256933399/movie.293x165.jpg?t=1677806681",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256933399/movie480_vp9.webm?t=1677806681",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256933399/movie_max_vp9.webm?t=1677806681"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256933399/movie480.mp4?t=1677806681",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256933399/movie_max.mp4?t=1677806681"
        },
        highlight: true
      },
      {
        id: 256920197,
        name: "SF6_Pre-Order_Trailer_Multi_US_ESRB_1080P_FIX_Steamstore",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256920197/movie.293x165.jpg?t=1670565024",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256920197/movie480_vp9.webm?t=1670565024",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256920197/movie_max_vp9.webm?t=1670565024"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256920197/movie480.mp4?t=1670565024",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256920197/movie_max.mp4?t=1670565024"
        },
        highlight: true
      },
      {
        id: 256920209,
        name: "SF6_GameModeOverview_Trailer_Multi_US_ESRB_1080P_FIX_Steamstore",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256920209/movie.293x165.jpg?t=1670565034",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256920209/movie480_vp9.webm?t=1670565034",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256920209/movie_max_vp9.webm?t=1670565034"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256920209/movie480.mp4?t=1670565034",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256920209/movie_max.mp4?t=1670565034"
        },
        highlight: true
      },
      {
        id: 256903922,
        name: "PV1_Multi_ASIA_EN_NoRating_1080P_Fix_v2",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256903922/movie.293x165.jpg?t=1663253713",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256903922/movie480_vp9.webm?t=1663253713",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256903922/movie_max_vp9.webm?t=1663253713"
        },
        mp4: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256903922/movie480.mp4?t=1663253713",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256903922/movie_max.mp4?t=1663253713"
        },
        highlight: true
      }
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1364780/page.bg.jpg?t=1694074938",
    keys: [
      "AEyGyRQF9ayv",
      "VFrdwccznoKx",
      "6ojhfbB8MeYg",
      "x9JBeqAOLpmN",
      "wBbLptUzPrFB",
      "uk9VSqRozeq4",
      "dwM59U2hRNsQ",
      "mPAp8RSlxwGl"
    ],
    rating_pos: 3745,
    rating_neg: 604,

    featured: true,
    discount: 0,
    png_image: "https://i.ibb.co/pKrZHtM/Sf6-luke.webp",
  }, // STREET FIGHTER 6
  {
    name: "GUILTY GEAR -STRIVE-",
    detailed_description: "<h1>necessary discrepancy original soundtrack</h1><p>◆Rock to the Music!<br><i>GUILTY GEAR -STRIVE- ORIGINAL SOUNDTRACK 『Necessary Discrepancy』</i>is now available on Steam.<br>Blast this amazing album, by composer and General Director Daisuke Ishiwatari, even when you aren't in the game.<br><br><a href=\"https://store.steampowered.com/bundle/26429/Guilty_Gear_Strive_Original_Soundtrack_Necessary_Discrepancy_Full_Album/\" target=\"_blank\" rel=\"\"  ><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1384160/extras/capsule_sm_Disc1.png?t=1693186011\" /> <u>Buy now!</u></a></p><br><h1>Acerca del juego</h1>«GUILTY GEAR -STRIVE-» es el último título de la aclamada franquicia de juegos de lucha de Guilty Gear. Creado por Daisuke Ishiwatari y desarrollado por Arc System Works, «GUILTY GEAR -STRIVE-» mantiene la reputación de la serie gracias a sus revolucionarios gráficos híbridos 2D/3D con sombreado de celdas y su intensa y atractiva jugabilidad.<br><br>Hay un modo historia que te sumerge en el universo de Guilty Gear, nuevos personajes que se unen a los favoritos de los fans y un avanzado uso de rollback netcode.<br><br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1384160/extras/new_op2.gif?t=1693186011\" /><br><br>◆El destino del universo está por definir…<br>La historia de Guilty Gear, que abarca más de 20 años, finalmente llegará a su conclusión con «GUILTY GEAR -STRIVE-». Los héroes y villanos de la serie resolverán por fin las dificultades y tribulaciones a las que se enfrentan. Descubre la asombrosa verdad que te espera al final de todo.<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1384160/extras/storycut_1.jpg?t=1693186011\" /><br><br>◆Gráficos y animaciones increíbles<br>Los gráficos híbridos 2D/3D de última generación, pioneros en la serie «Guilty Gear», han subido de nivel en «GUILTY GEAR -STRIVE-». ¡La nueva dirección artística y la mejora de las animaciones de los personajes van más allá de todo lo que habías visto en un juego de lucha!<br><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1384160/extras/new_kypart3.gif?t=1693186011\" /><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1384160/extras/new_solpart3.gif?t=1693186011\" /><br><br>◆¡Una revolución en los juegos de lucha!<br>Guilty Gear -Strive- aporta una serie de nuevas e innovadoras mecánicas de juego diseñadas para permitir que los jugadores recién llegados a la serie aprendan rápidamente lo esencial mientras se mantiene la intensa y creativa jugabilidad por la que se alaba a Guilty Gear. Las nuevas incorporaciones a la serie, como la mecánica de destrucción de muros, permiten nuevas y excitantes tácticas en los combates.",
    short_description: "¡Vive la emoción de la batalla con las minuciosas mecánicas y las magníficas animaciones de Guilty Gear -Strive-, el título más reciente de la vanguardista serie Guilty Gear!",
    supported_languages: "Inglés<strong>*</strong>, Japonés<strong>*</strong>, Chino simplificado, Chino tradicional, Francés, Italiano, Alemán, Español de España, Coreano<strong>*</strong><br><strong>*</strong>idiomas con localización de audio",
    header_image: "https://cdn.akamai.steamstatic.com/steam/apps/1384160/header.jpg?t=1693186011",
    pc_requirements: "<strong>Mínimo:</strong><br><ul class=\"bb_ul\"><li><strong>SO:</strong> Windows 8/10 (64-bit OS required)<br></li><li><strong>Procesador:</strong> AMD FX-4350, 4.2 GHz / Intel Core i5-3450, 3.10 GHz<br></li><li><strong>Memoria:</strong> 4 GB de RAM<br></li><li><strong>Gráficos:</strong> Radeon HD 6870, 1 GB / GeForce GTX 650 Ti, 1 GB<br></li><li><strong>DirectX:</strong> Versión 11<br></li><li><strong>Red:</strong> Conexión de banda ancha a Internet<br></li><li><strong>Almacenamiento:</strong> 26 GB de espacio disponible<br></li><li><strong>Tarjeta de sonido:</strong> DirectX compatible soundcard or onboard chipset</li></ul>",
    publishers: ["Arc System Works"],
    price: 6300,
    platforms: {
      windows: true,
      mac: false,
      linux: false
    },
    genres: [{
      "id": "1",
      "description": "Acción"
      }
    ],
    screenshots: [
      {
      "id": 0,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_0f29aebacb81b972782382dbf4c0079f0d37b330.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_0f29aebacb81b972782382dbf4c0079f0d37b330.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 1,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_2561a4ae822856797b5fb231502b820a962336e0.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_2561a4ae822856797b5fb231502b820a962336e0.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 2,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_104e16788c2ea35e1dac31d96be8d4f1df00f330.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_104e16788c2ea35e1dac31d96be8d4f1df00f330.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 3,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_c290682ecdf413e368d9a66cd4a7a9430860ca1d.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_c290682ecdf413e368d9a66cd4a7a9430860ca1d.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 4,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_3bcbd1e70fb68db2347e02299f6606cb551e9ff1.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_3bcbd1e70fb68db2347e02299f6606cb551e9ff1.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 5,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_f59f96b42ea25f9f8cb244fcc15a4ec9ff8bd5b6.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_f59f96b42ea25f9f8cb244fcc15a4ec9ff8bd5b6.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 6,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_ccd197a3d5beb8c605b53545db95f00027d80104.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_ccd197a3d5beb8c605b53545db95f00027d80104.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 7,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_62f0d3414e2a2c76051747f4615499c3cbc737d7.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_62f0d3414e2a2c76051747f4615499c3cbc737d7.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 8,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_d1320ccbaf6e6c62a2c929fcff7406c909f8439b.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_d1320ccbaf6e6c62a2c929fcff7406c909f8439b.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 9,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_55c480ab0fd33408a1c944a7266cd09c1b91acce.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_55c480ab0fd33408a1c944a7266cd09c1b91acce.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 10,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_74c30144cddb20b0f4f1c0717ac1e4fb1623d04c.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_74c30144cddb20b0f4f1c0717ac1e4fb1623d04c.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 11,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_9a79a69cfd22eaaad420f97cc0205dac8f85be43.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_9a79a69cfd22eaaad420f97cc0205dac8f85be43.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 12,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_a373027db9e3f72f10637204bad95fb3810a3170.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_a373027db9e3f72f10637204bad95fb3810a3170.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 13,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_3cadfb247aa0d225670d60d8cdc545554094d357.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_3cadfb247aa0d225670d60d8cdc545554094d357.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 14,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_faa1e45e4845311a00f6aaf3c02d7c36d32e4f56.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_faa1e45e4845311a00f6aaf3c02d7c36d32e4f56.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 16,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_1f9956077132d8a9615e70b21b1e10481f0ef55c.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_1f9956077132d8a9615e70b21b1e10481f0ef55c.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 17,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_ccc232de705914fdb2cae6b8b3791c7598fda62b.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_ccc232de705914fdb2cae6b8b3791c7598fda62b.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 18,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_16570b68fd000173674bc992059c3ea290e80017.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_16570b68fd000173674bc992059c3ea290e80017.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 19,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_3bed7f439285ecc7430e6aeb5e7b83af7e2dda90.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_3bed7f439285ecc7430e6aeb5e7b83af7e2dda90.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 20,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_ef7734a27e258833e1bc7ace3b2aaef5c323c40e.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_ef7734a27e258833e1bc7ace3b2aaef5c323c40e.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 21,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_5e89aead640bd6189ae0a2f3329269797e626f46.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_5e89aead640bd6189ae0a2f3329269797e626f46.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 22,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_d7a50d02dfc45e8a993ac80f69007d2868b2cab8.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_d7a50d02dfc45e8a993ac80f69007d2868b2cab8.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 23,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_430bed4b79e8d629af7e4f4320a6d4aa9457c3e9.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_430bed4b79e8d629af7e4f4320a6d4aa9457c3e9.1920x1080.jpg?t=1693186011"
      },
      {
      "id": 24,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_a96d444e888b266eca15326c6567382ea552ca0d.600x338.jpg?t=1693186011",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1384160/ss_a96d444e888b266eca15326c6567382ea552ca0d.1920x1080.jpg?t=1693186011"
      }
      ],
    movies: [
      {
      "id": 256837800,
      "name": "Opening",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256837800/movie.293x165.jpg?t=1684981251",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256837800/movie480_vp9.webm?t=1684981251",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256837800/movie_max_vp9.webm?t=1684981251"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256837800/movie480.mp4?t=1684981251",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256837800/movie_max.mp4?t=1684981251"
      },
      "highlight": true
      },
      {
      "id": 256846317,
      "name": "Accolades",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256846317/movie.293x165.jpg?t=1684981256",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256846317/movie480_vp9.webm?t=1684981256",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256846317/movie_max_vp9.webm?t=1684981256"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256846317/movie480.mp4?t=1684981256",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256846317/movie_max.mp4?t=1684981256"
      },
      "highlight": true
      },
      {
      "id": 256821736,
      "name": "GGST Trailer",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256821736/movie.293x165.jpg?t=1684981268",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256821736/movie480_vp9.webm?t=1684981268",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256821736/movie_max_vp9.webm?t=1684981268"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256821736/movie480.mp4?t=1684981268",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256821736/movie_max.mp4?t=1684981268"
      },
      "highlight": true
      },
      {
      "id": 256837802,
      "name": "17 - GGST I-No",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256837802/movie.293x165.jpg?t=1684981272",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256837802/movie480_vp9.webm?t=1684981272",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256837802/movie_max_vp9.webm?t=1684981272"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256837802/movie480.mp4?t=1684981272",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256837802/movie_max.mp4?t=1684981272"
      },
      "highlight": false
      },
      {
      "id": 256821734,
      "name": "15 - GGST Anji",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256821734/movie.293x165.jpg?t=1684981277",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256821734/movie480_vp9.webm?t=1684981277",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256821734/movie_max_vp9.webm?t=1684981277"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256821734/movie480.mp4?t=1684981277",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256821734/movie_max.mp4?t=1684981277"
      },
      "highlight": false
      },
      {
      "id": 256821731,
      "name": "12 - GGST Giovanna",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256821731/movie.293x165.jpg?t=1684981280",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256821731/movie480_vp9.webm?t=1684981280",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256821731/movie_max_vp9.webm?t=1684981280"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256821731/movie480.mp4?t=1684981280",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256821731/movie_max.mp4?t=1684981280"
      },
      "highlight": false
      },
      {
      "id": 256821730,
      "name": "11 - GGST Leo and Nagoriyuki",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256821730/movie.293x165.jpg?t=1684981285",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256821730/movie480_vp9.webm?t=1684981285",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256821730/movie_max_vp9.webm?t=1684981285"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256821730/movie480.mp4?t=1684981285",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256821730/movie_max.mp4?t=1684981285"
      },
      "highlight": false
      },
      {
      "id": 256803714,
      "name": "09 - GGST Ramlethal",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256803714/movie.293x165.jpg?t=1684981289",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803714/movie480_vp9.webm?t=1684981289",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803714/movie_max_vp9.webm?t=1684981289"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803714/movie480.mp4?t=1684981289",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803714/movie_max.mp4?t=1684981289"
      },
      "highlight": false
      },
      {
      "id": 256803712,
      "name": "08 - GGST Millia & Zato",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256803712/movie.293x165.jpg?t=1684981294",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803712/movie480_vp9.webm?t=1684981294",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803712/movie_max_vp9.webm?t=1684981294"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803712/movie480.mp4?t=1684981294",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803712/movie_max.mp4?t=1684981294"
      },
      "highlight": false
      },
      {
      "id": 256803709,
      "name": "07 - GGST Faust",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256803709/movie.293x165.jpg?t=1684981298",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803709/movie480_vp9.webm?t=1684981298",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803709/movie_max_vp9.webm?t=1684981298"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803709/movie480.mp4?t=1684981298",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803709/movie_max.mp4?t=1684981298"
      },
      "highlight": false
      },
      {
      "id": 256803701,
      "name": "05 - GGST Chipp and Potemkin",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256803701/movie.293x165.jpg?t=1684981302",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803701/movie480_vp9.webm?t=1684981302",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803701/movie_max_vp9.webm?t=1684981302"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803701/movie480.mp4?t=1684981302",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803701/movie_max.mp4?t=1684981302"
      },
      "highlight": false
      },
      {
      "id": 256803696,
      "name": "04 - GGST Axl",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256803696/movie.293x165.jpg?t=1684981306",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803696/movie480_vp9.webm?t=1684981306",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803696/movie_max_vp9.webm?t=1684981306"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803696/movie480.mp4?t=1684981306",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803696/movie_max.mp4?t=1684981306"
      },
      "highlight": false
      },
      {
      "id": 256803693,
      "name": "03 - GGST May",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256803693/movie.293x165.jpg?t=1684981311",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803693/movie480_vp9.webm?t=1684981311",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803693/movie_max_vp9.webm?t=1684981311"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803693/movie480.mp4?t=1684981311",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803693/movie_max.mp4?t=1684981311"
      },
      "highlight": false
      },
      {
      "id": 256803690,
      "name": "02 - GGST Sol and Ky",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256803690/movie.293x165.jpg?t=1684981315",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803690/movie480_vp9.webm?t=1684981315",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803690/movie_max_vp9.webm?t=1684981315"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256803690/movie480.mp4?t=1684981315",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256803690/movie_max.mp4?t=1684981315"
      },
      "highlight": false
      },
      {
      "id": 256802401,
      "name": "07/30 Trailer",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256802401/movie.293x165.jpg?t=1684981319",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256802401/movie480_vp9.webm?t=1684981319",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256802401/movie_max_vp9.webm?t=1684981319"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256802401/movie480.mp4?t=1684981319",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256802401/movie_max.mp4?t=1684981319"
      },
      "highlight": false
      }
      ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1384160/page_bg_generated_v6b.jpg?t=1693186011",
    keys: [
      "AEyGyRQF9ay1",
      "VFrdwccznoK1",
      "6ojhfbB8MeY1",
      "x9JBeqAOLpm1",
      "wBbLptUzPrF1",
      "uk9VSqRozeq1",
      "dwM59U2hRNs1",
      "mPAp8RSlxwG1"
    ],
    rating_pos: 2745,
    rating_neg: 194,

    featured: true,
    discount: 0,
    png_image: "https://static.wikia.nocookie.net/guilty-gear/images/6/66/Sol_Guilty_Gear_Strive.png/revision/latest?cb=20191119010226",
  }, // GUILTY GEAR STRIVE
  {
    name: "TEKKEN 8",
    detailed_description: "<h1>TEKKEN 8 - Ultimate Edition</h1><p><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1778820/extras/Steam_ULT_616x347.png?t=1692957440\" /><br>La Ultimate Edition incluye:<br>• TEKKEN 8<br>• Pase de personajes jugables del año 1<br>- 4 personajes jugables adicionales<br>- Aspecto de avatar: Kinjin<br>• Atuendo de personaje: Paquete de trajes (oro)<br>- 1 atuendo por cada personaje jugable (32 en total)<br>• Atuendo de avatar: Conjunto de camisetas clásicas TEKKEN<br>- 32 diseños<br>• Aspectos de avatar: Kazuya Mishima, Jin Kazama y Jun Kazama</p><br><h1>TEKKEN 8 - Deluxe Edition</h1><p><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1778820/extras/Steam_DX_616x347.png?t=1692957440\" /><br>La Deluxe Edition incluye:<br>• TEKKEN 8<br>• Pase de personajes jugables del año 1<br>- 4 personajes jugables adicionales<br>- Aspecto de avatar: Kinjin<br>• Atuendo de personaje: Paquete de trajes (oro)<br>- 1 atuendo por cada personaje jugable (32 en total)</p><br><h1>Acerca del juego</h1>Prepárate para el próximo capítulo de la legendaria franquicia del juego de lucha: TEKKEN 8.<br><br>• 32 luchadores para una nueva generación<br>Aspectos visuales de los personajes totalmente rediseñados. Modelos elaborados de gran detallismo creados desde cero y gráficos de alta fidelidad que sobrepasan los límites del hardware de última generación y suman realismo a las características peleas de TEKKEN. Entornos vivos y escenarios destructibles se combinan para generar una extraordinaria sensación de inmersión y dar lugar a la experiencia de juego definitiva.<br><br>• Nuevo juego, nueva rivalidad<br>Fist Meets Fate en TEKKEN 8. La saga TEKKEN, que ostenta el récord de la trama con mayor recorrido de un videojuego, se sumerge en un nuevo capítulo con TEKKEN 8. Tras un salto de seis meses después de la conclusión del último enfrentamiento, continúa la trágica narrativa de los linajes Mishima y Kazama, y los cruentos y amargos combates paternofiliales. La historia del crecimiento personal y la determinación de Jin Kazama marca un nuevo capítulo en la imperecedera saga.<br><br>• Sensacionales combates cargados de emoción que encarnan la agresividad y la destrucción<br>El nuevo sistema de batalla, Heat, incrementa la naturaleza agresiva de los combates, sin perder de vista la sensación de juego y las tácticas características de la saga TEKKEN. La intensidad de los enfrentamientos se ve potenciada con la destrucción de escenarios. Desatar supermovimientos como los Rage Arts dejará con la boca abierta a jugadores y espectadores por igual. ¡Todas estas mecánicas de gran calibre se unen para hacer de TEKKEN 8 la entrega más fascinante de la saga hasta la fecha!<br><br>• ¡Disfruta de la vida Tekken!<br>En el nuevo modo para un jugador, Misión arcade, crearás a tu propio avatar y te embarcarás en tu nueva vida TEKKEN. Ábrete paso combate a combate por multitud de arcades mientras se desarrolla la historia y ve dominando las habilidades básicas y prácticas en TEKKEN 8. Desbloquea un amplio abanico de elementos de personalización para personajes y avatares conforme progresas.<br><br>* Además de esta edición, la Deluxe Edition y la Ultimate Edition también están disponibles. Evita comprar el mismo contenido dos veces.",
    short_description: "Prepárate para el próximo capítulo de la legendaria franquicia del juego de lucha: TEKKEN 8.",
    supported_languages: "Inglés<strong>*</strong>, Francés, Italiano, Alemán, Español de España, Árabe, Japonés, Coreano, Portugués de Brasil, Chino simplificado, Chino tradicional, Polaco, Ruso, Tailandés, Español de Hispanoamérica<br><strong>*</strong>idiomas con localización de audio",
    header_image: "https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg?t=1692957440",
    pc_requirements: "<strong>Mínimo:</strong><br><ul class=\"bb_ul\"><li>Requiere un procesador y un sistema operativo de 64 bits<br></li><li><strong>Notas adicionales:</strong> To be announced</li></ul>",
    publishers: ["Bandai Namco Studios Inc."],
    price: 19599,
    platforms: {
      windows: true,
      mac: false,
      linux: false
    },
    genres: [
      {
        "id": "1",
        "description": "Acción"
        }
    ],
    screenshots: [
      {
      "id": 0,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_2317d3a37d40055c47c980490896c8419dd0cf84.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_2317d3a37d40055c47c980490896c8419dd0cf84.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 1,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_11b9c39ee6b9b9791711d78aa38bd7149aa471fe.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_11b9c39ee6b9b9791711d78aa38bd7149aa471fe.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 2,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_28be3c314641e6003e79c717042beb88a85935bd.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_28be3c314641e6003e79c717042beb88a85935bd.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 3,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_7a69fbbf3e98a1713356c30a9f46722fe0f2f507.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_7a69fbbf3e98a1713356c30a9f46722fe0f2f507.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 4,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_90d4321a335b9b89e6654a1d5d5c02a443a2a897.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_90d4321a335b9b89e6654a1d5d5c02a443a2a897.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 5,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_52d9bd94425ec1e569287eedf614107053b48851.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_52d9bd94425ec1e569287eedf614107053b48851.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 6,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_5d8432ae40bf320d71262eb8725a7e1e9e871dbf.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_5d8432ae40bf320d71262eb8725a7e1e9e871dbf.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 7,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_72830c0b4e374cae318071414bf8ab2fd5f89cae.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_72830c0b4e374cae318071414bf8ab2fd5f89cae.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 8,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_3052fa1b4f9c5b2315d7afa0edf9890a60f562d3.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_3052fa1b4f9c5b2315d7afa0edf9890a60f562d3.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 9,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_1ff3daa9113444ebafb6565479c4d380f021e69e.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_1ff3daa9113444ebafb6565479c4d380f021e69e.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 10,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_9d0681af6355915ec68884d54cb3bb3ab0e6e695.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_9d0681af6355915ec68884d54cb3bb3ab0e6e695.1920x1080.jpg?t=1692957440"
      },
      {
      "id": 11,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_855ab6293d637950c0f31a6c25dcba3eadd422ca.600x338.jpg?t=1692957440",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_855ab6293d637950c0f31a6c25dcba3eadd422ca.1920x1080.jpg?t=1692957440"
      }
      ],
    movies: [
      {
      "id": 256961348,
      "name": "TEKKEN 8 - Teaser Trailer",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256961348/movie.293x165.jpg?t=1692734620",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256961348/movie480_vp9.webm?t=1692734620",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256961348/movie_max_vp9.webm?t=1692734620"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256961348/movie480.mp4?t=1692734620",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256961348/movie_max.mp4?t=1692734620"
      },
      "highlight": true
      }
      ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1778820/page_bg_generated_v6b.jpg?t=1692957440",
    keys: [
      "AEyGyRQF9ay2",
      "VFrdwccznoK2",
      "6ojhfbB8MeY2",
      "x9JBeqAOLpm2",
      "wBbLptUzPrF2",
      "uk9VSqRozeq2",
      "dwM59U2hRNs2",
      "mPAp8RSlxwG2"
    ],
    rating_pos: 3445,
    rating_neg: 447,

    featured: true,
    discount: 0,
    png_image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba3d6bf0-f660-4ce1-a12b-6e1505215b69/dfjzej3-b9af1c07-c155-470c-8d47-3b62a968f84c.png/v1/fill/w_833,h_960/tekken_8___king__transparent_render__by_vgejackler_dfjzej3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ3NSIsInBhdGgiOiJcL2ZcL2JhM2Q2YmYwLWY2NjAtNGNlMS1hMTJiLTZlMTUwNTIxNWI2OVwvZGZqemVqMy1iOWFmMWMwNy1jMTU1LTQ3MGMtOGQ0Ny0zYjYyYTk2OGY4NGMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.u8rHWMrI0JPb2tBhpGCoSBK8v64FJ1rYE48grP_oR_w",
  }, // TEKKEN 8
  {
    name: "ELDEN RING",
    detailed_description: "<h1>More games by From Software</h1><p><a href=\"https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/\" target=\"_blank\" rel=\"\"  id=\"dynamiclink_0\" >https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/</a><br><a href=\"https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/\" target=\"_blank\" rel=\"\"  id=\"dynamiclink_1\" >https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/</a></p><br><h1>More games by From Software</h1><p><a href=\"https://store.steampowered.com/app/374320/DARK_SOULS_III/\" target=\"_blank\" rel=\"\"  id=\"dynamiclink_2\" >https://store.steampowered.com/app/374320/DARK_SOULS_III/</a><br><a href=\"https://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/\" target=\"_blank\" rel=\"\"  >https://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/</a><br><a href=\"https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/\" target=\"_blank\" rel=\"\"  >https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/</a></p><br><h1>ELDEN RING Deluxe Edition</h1><p><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1245620/extras/ER_Deluxe_Beautyshot_GIF_ES.gif?t=1683618443\" /><br>La edición Deluxe incluye:<br>• ELDEN RING (juego completo)<br>• Libro de arte digital y banda sonora original</p><br><h1>Acerca del juego</h1><img src=\"https://cdn.akamai.steamstatic.com/steam/apps/1245620/extras/ER_Steam_Gif_616x260.gif?t=1683618443\" /><br>EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA.<br>Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.<br><br>• Un extenso mundo lleno de emociones<br>Un vasto mundo perfectamente conectado en el que los territorios abiertos estarán repletos de situaciones y mazmorras enormes con diseños complejos y tridimensionales. Mientras exploras, experimentarás el deleite de descubrir amenazas desconocidas y sobrecogedoras, y eso te haré sentir la emoción de la superación.<br><br>• Crea tu propio personaje<br>Además de personalizar la apariencia de tu personaje, puedes combinar libremente las armas, armaduras y la magia que te equipas. Puedes desarrollar a tu personaje según tu estilo de juego, tanto para aumentar tu fuerza bruta y ser un guerrero poderoso, como para dominar la magia.<br><br>• Un drama épico nacido de un mito<br>Una historia muy profunda contada en fragmentos. Un drama épico en el que las motivaciones de cada personaje se encuentran en las Tierras Intermedias.<br><br>• Jugabilidad online única que te conecta libremente con otros jugadores<br>Además del multijugador, en el que te puedes conectar directamente con otros jugadores y viajar juntos, el juego incluye un elemento online asíncrono único que te permite sentir la presencia de otros.",
    short_description: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.",
    supported_languages: "Inglés<strong>*</strong>, Francés, Italiano, Alemán, Español de España, Japonés, Coreano, Polaco, Portugués de Brasil, Ruso, Chino simplificado, Español de Hispanoamérica, Tailandés, Chino tradicional<br><strong>*</strong>idiomas con localización de audio",
    header_image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1683618443",
    pc_requirements: "<strong>Mínimo:</strong><br><ul class=\"bb_ul\"><li>Requiere un procesador y un sistema operativo de 64 bits<br></li><li><strong>SO:</strong> Windows 10<br></li><li><strong>Procesador:</strong> INTEL CORE I5-8400 or AMD RYZEN 3 3300X<br></li><li><strong>Memoria:</strong> 12 GB de RAM<br></li><li><strong>Gráficos:</strong> NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB<br></li><li><strong>DirectX:</strong> Versión 12<br></li><li><strong>Almacenamiento:</strong> 60 GB de espacio disponible<br></li><li><strong>Tarjeta de sonido:</strong> Windows Compatible Audio Device<br></li><li><strong>Notas adicionales:</strong> </li></ul>",
    publishers: ["FromSoftware Inc.",
    "Bandai Namco Entertainment"],
    price: 12399,
    platforms: {
      windows: true,
      mac: false,
      linux: false
    },
    genres: [
      {
        "id": "1",
        "description": "Acción"
        },
        {
        "id": "3",
        "description": "Rol"
        }
    ],
    screenshots: [
      {
      "id": 0,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_ae44317e3bd07b7690b4d62cc5d0d1df30367a91.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_ae44317e3bd07b7690b4d62cc5d0d1df30367a91.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 1,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e80a907c2c43337e53316c71555c3c3035a1343e.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 2,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b70e156adf9e40aed24c10fb352b7813586e7290.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b70e156adf9e40aed24c10fb352b7813586e7290.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 3,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_3aec1455923ef49f4e777c2a94dbcd0256f77eb0.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_3aec1455923ef49f4e777c2a94dbcd0256f77eb0.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 4,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b6c4cdb36cebdbd52b97ab6e0851b7d3e41f03b3.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b6c4cdb36cebdbd52b97ab6e0851b7d3e41f03b3.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 5,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e87a3e84890ab19f8995566e62762d5f8ed39315.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_e87a3e84890ab19f8995566e62762d5f8ed39315.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 6,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_1e3dfe515c04f4071207f01d62b85a1d6b560ced.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_1e3dfe515c04f4071207f01d62b85a1d6b560ced.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 7,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_3e556415d1bda00d749b2166ced264bec76f06ee.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_3e556415d1bda00d749b2166ced264bec76f06ee.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 8,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_c372274833ae6e5437b952fa1979430546a43ad9.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_c372274833ae6e5437b952fa1979430546a43ad9.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 9,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b87601dee58f4dbc36e40a8d803dc6a53ceefe07.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_b87601dee58f4dbc36e40a8d803dc6a53ceefe07.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 10,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_8b58d96262fb0d62a482621b86c6ff85f4f57997.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_8b58d96262fb0d62a482621b86c6ff85f4f57997.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 11,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_1011610a0e330c41a75ffd0b3a9a1bac3205c46a.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_1011610a0e330c41a75ffd0b3a9a1bac3205c46a.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 12,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_41e2e8f3b0ad631e929e0c2ec3d1f21de883e98c.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_41e2e8f3b0ad631e929e0c2ec3d1f21de883e98c.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 13,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_abd681cde3402155a35edb82919b7602cc7ec338.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_abd681cde3402155a35edb82919b7602cc7ec338.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 14,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_0b6e59057b02392b21dde62b4dde65d447e1fa3c.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_0b6e59057b02392b21dde62b4dde65d447e1fa3c.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 15,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_7523a8fc7775ae65cabd94d092ebecbd963258b6.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_7523a8fc7775ae65cabd94d092ebecbd963258b6.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 16,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_ebb332e63dfab864c3bf3c3b1001b69f4da25f9f.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_ebb332e63dfab864c3bf3c3b1001b69f4da25f9f.1920x1080.jpg?t=1683618443"
      },
      {
      "id": 17,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_75f25974c20b8704fe5ee246f74896b550088d3e.600x338.jpg?t=1683618443",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_75f25974c20b8704fe5ee246f74896b550088d3e.1920x1080.jpg?t=1683618443"
      }
      ],
    movies: [
      {
      "id": 256864390,
      "name": "ELDEN RING CGI Trailer - AR GCAM",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256864390/movie.293x165.jpg?t=1646817712",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256864390/movie480_vp9.webm?t=1646817712",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256864390/movie_max_vp9.webm?t=1646817712"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256864390/movie480.mp4?t=1646817712",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256864390/movie_max.mp4?t=1646817712"
      },
      "highlight": true
      },
      {
      "id": 256860537,
      "name": "ELDEN RING Pre-order Trailer - AR GCAM",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256860537/movie.293x165.jpg?t=1646817743",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256860537/movie480_vp9.webm?t=1646817743",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256860537/movie_max_vp9.webm?t=1646817743"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256860537/movie480.mp4?t=1646817743",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256860537/movie_max.mp4?t=1646817743"
      },
      "highlight": true
      },
      {
      "id": 256845756,
      "name": "ELDEN RING Official Gameplay Trailer - AR GCAM",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256845756/movie.293x165.jpg?t=1646817755",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256845756/movie480_vp9.webm?t=1646817755",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256845756/movie_max_vp9.webm?t=1646817755"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256845756/movie480.mp4?t=1646817755",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256845756/movie_max.mp4?t=1646817755"
      },
      "highlight": true
      }
      ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/page_bg_generated_v6b.jpg?t=1683618443",
    keys: [
      "AEyGyRQF9ay3",
      "VFrdwccznoK3",
      "6ojhfbB8MeY3",
      "x9JBeqAOLpm3",
      "wBbLptUzPrF3",
      "uk9VSqRozeq3",
      "dwM59U2hRNs3",
      "mPAp8RSlxwG3"
    ],
    rating_pos: 6191,
    rating_neg: 477,

    featured: true,
    discount: 0,
    png_image: "https://static.wikia.nocookie.net/eldenring/images/a/a2/ER_Icon_Key_Item_Miniature_Ranni.png/revision/latest?cb=20220411011200",
  }, // ELDEN RING
  {
    name: "DARK SOULS™: REMASTERED",
    detailed_description: "<h1>More games by From Software</h1><p><a href=\"https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/\" target=\"_blank\" rel=\"\"  id=\"dynamiclink_0\" >https://store.steampowered.com/app/1888160/ARMORED_CORE_VI_FIRES_OF_RUBICON/</a><br><a href=\"https://store.steampowered.com/app/1245620/ELDEN_RING/\" target=\"_blank\" rel=\"\"  id=\"dynamiclink_1\" >https://store.steampowered.com/app/1245620/ELDEN_RING/</a><br><a href=\"https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/\" target=\"_blank\" rel=\"\"  id=\"dynamiclink_2\" >https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/</a></p><br><h1>More games by From Software</h1><p><a href=\"https://store.steampowered.com/app/374320/DARK_SOULS_III/\" target=\"_blank\" rel=\"\"  >https://store.steampowered.com/app/374320/DARK_SOULS_III/</a><br><a href=\"https://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/\" target=\"_blank\" rel=\"\"  >https://store.steampowered.com/app/335300/DARK_SOULS_II_Scholar_of_the_First_Sin/</a></p><br><h1>Acerca del juego</h1>Entonces llegó el Fuego. Vuelve a disfrutar del aclamado juego que definió el género con el que empezó todo. Gracias a una magnífica remasterización, podrás regresar a Lordran con unos impresionantes detalles en alta definición y a 60 fps.<br>Dark Souls Remastered incluye el juego principal y el contenido descargable &quot;Artorias of the Abyss&quot;.<br><br>Características principales:<br>• Un universo profundo y oscuro<br>• Cada final supone un nuevo comienzo<br>• Compleja jugabilidad con muchas posibilidades<br>• Te sientes realizado al ir aprendiendo y dominando el juego<br>• Multijugador (hasta 6 jugadores con servidores dedicados)",
    short_description: "Entonces llegó el Fuego. Vuelve a disfrutar del aclamado juego que definió el género con el que empezó todo. Gracias a una magnífica remasterización, podrás regresar a Lordran con unos impresionantes detalles en alta definición y a 60 fps.",
    supported_languages: "Inglés<strong>*</strong>, Francés, Italiano, Alemán, Español de España, Japonés, Coreano, Polaco, Portugués de Brasil, Ruso, Chino simplificado, Chino tradicional<br><strong>*</strong>idiomas con localización de audio",
    header_image: "https://cdn.akamai.steamstatic.com/steam/apps/570940/header.jpg?t=1682652141",
    pc_requirements: "<strong>Mínimo:</strong><br><ul class=\"bb_ul\"><li>Requiere un procesador y un sistema operativo de 64 bits<br></li><li><strong>SO:</strong> Windows 7 64-bit, Service Pack 1<br></li><li><strong>Procesador:</strong> Intel Core i5-2300 2.8 GHz / AMD FX-6300, 3.5 GHz<br></li><li><strong>Memoria:</strong> 6 GB de RAM<br></li><li><strong>Gráficos:</strong> GeForce GTX 460, 1 GB / Radeon HD 6870, 1 GB<br></li><li><strong>DirectX:</strong> Versión 11<br></li><li><strong>Almacenamiento:</strong> 8 GB de espacio disponible<br></li><li><strong>Tarjeta de sonido:</strong> DirectX 11 sound device<br></li><li><strong>Notas adicionales:</strong> Low Settings, 60 FPS @ 1080p</li></ul>",
    publishers: ["FromSoftware Inc.",
    "Bandai Namco Entertainment"],
    price: 8299,
    platforms: {
      windows: true,
      mac: false,
      linux: false
    },
    genres: [
      {
        "id": "1",
        "description": "Acción"
        }
    ],
    screenshots: [
      {
      "id": 0,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.600x338.jpg?t=1682652141",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.1920x1080.jpg?t=1682652141"
      },
      {
      "id": 1,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_92b2ba470cbfdb8839b649b3f478e5531dd81a17.600x338.jpg?t=1682652141",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_92b2ba470cbfdb8839b649b3f478e5531dd81a17.1920x1080.jpg?t=1682652141"
      },
      {
      "id": 2,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_626cc310dc9ac7fb146011582c864a35e5f3e381.600x338.jpg?t=1682652141",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_626cc310dc9ac7fb146011582c864a35e5f3e381.1920x1080.jpg?t=1682652141"
      },
      {
      "id": 3,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_f1617a419eb3b0cd877ec71230c59aa2672b62dc.600x338.jpg?t=1682652141",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_f1617a419eb3b0cd877ec71230c59aa2672b62dc.1920x1080.jpg?t=1682652141"
      },
      {
      "id": 4,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_f60f54e58b13d0744853672ccd35810397e3fa26.600x338.jpg?t=1682652141",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_f60f54e58b13d0744853672ccd35810397e3fa26.1920x1080.jpg?t=1682652141"
      },
      {
      "id": 5,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_b4a80bd6e828a81db09ecbef5694e5d0cddb2caf.600x338.jpg?t=1682652141",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/570940/ss_b4a80bd6e828a81db09ecbef5694e5d0cddb2caf.1920x1080.jpg?t=1682652141"
      }
      ],
    movies: [
      {
      "id": 256717685,
      "name": "LAUNCH TRAILER UNRATED",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256717685/movie.293x165.jpg?t=1605604943",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256717685/movie480.webm?t=1605604943",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256717685/movie_max.webm?t=1605604943"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256717685/movie480.mp4?t=1605604943",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256717685/movie_max.mp4?t=1605604943"
      },
      "highlight": true
      }
      ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/570940/page_bg_generated_v6b.jpg?t=1682652141",
    keys: [
      "AEyGyRQF9ay4",
      "VFrdwccznoK4",
      "6ojhfbB8MeY4",
      "x9JBeqAOLpm4",
      "wBbLptUzPrF4",
      "uk9VSqRozeq4",
      "dwM59U2hRNs4",
      "mPAp8RSlxwG4"
    ],
    rating_pos: 4691,
    rating_neg: 501,

    featured: true,
    discount: 0,
    png_image: "https://i.ibb.co/M2DmYcW/58f361bea4fa116215a923bb.png",
  }, // DARK SOULS REMASTERED
  {
    name: "MONSTER HUNTER RISE",
    detailed_description: "taba en chino",
    short_description: "Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.",
    supported_languages: "Inglés<strong>*</strong>, Francés, Italiano, Alemán, Español de España, Japonés, Coreano, Polaco, Portugués de Brasil, Ruso, Chino simplificado, Chino tradicional<br><strong>*</strong>idiomas con localización de audio",
    header_image: "https://cdn.akamai.steamstatic.com/steam/apps/1446780/header.jpg?t=1687140511",
    pc_requirements: "<strong>Especificaciones mínimas:</strong><br><ul class=\"bb_ul\"><li>Requiere procesador y sistema operativo de 64 bits.<br></li><li><strong>Sistema operativo: </strong> Windows 10 (64 bits)<br></li><li><strong>Procesador:</strong> Intel® Core™ i3-4130 o Core™ i5-3470 o AMD FX™-6100 < br></li><li><strong>Memoria:</strong> 8 GB de RAM<br></li><li><strong>Tarjeta de vídeo:</strong> NVIDIA® GeForce® GT 1030 (DDR4) o AMD Radeon™ RX 550<br></li><li><strong>Versión DirectX:</strong> 12<br></li><li><strong>Red:</strong> Conexión a Internet de banda ancha< br></li><li><strong>Almacenamiento:</strong> se requieren 36 GB de espacio disponible<br></li><li><strong>Notas:</strong> 1080p/30 fps cuando se configura la configuración de gráficos a Bajo. Los requisitos del sistema están sujetos a cambios durante el desarrollo del juego.</li></ul>",
    publishers: ["CAPCOM Co., Ltd."],
    price: 14299,
    platforms: {
      windows: true,
      mac: false,
      linux: false
    },
    genres: [
      {
        "id": "1",
        "description": "Acción"
        }
    ],
    screenshots: [
      {
      "id": 0,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_f8249da14987e3c2d10fd4024736f28774c713da.600x338.jpg?t=1687140511",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_f8249da14987e3c2d10fd4024736f28774c713da.1920x1080.jpg?t=1687140511"
      },
      {
      "id": 1,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_25686086b61ca88a859bc20d588682be92ab4d63.600x338.jpg?t=1687140511",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_25686086b61ca88a859bc20d588682be92ab4d63.1920x1080.jpg?t=1687140511"
      },
      {
      "id": 2,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_d8d96313f1049c800d37a3fc521f06f926fca3ac.600x338.jpg?t=1687140511",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_d8d96313f1049c800d37a3fc521f06f926fca3ac.1920x1080.jpg?t=1687140511"
      },
      {
      "id": 3,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_961c552a99c5c64689bebf0e272b13c80947f644.600x338.jpg?t=1687140511",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_961c552a99c5c64689bebf0e272b13c80947f644.1920x1080.jpg?t=1687140511"
      },
      {
      "id": 4,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_3f1a758231a78ab3cdd76c2f8f04d5bbec45faeb.600x338.jpg?t=1687140511",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_3f1a758231a78ab3cdd76c2f8f04d5bbec45faeb.1920x1080.jpg?t=1687140511"
      },
      {
      "id": 5,
      "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_5a601d6ecee22fcd0cb6142aec5ff7de1e1de091.600x338.jpg?t=1687140511",
      "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/1446780/ss_5a601d6ecee22fcd0cb6142aec5ff7de1e1de091.1920x1080.jpg?t=1687140511"
      }
      ],
    movies: [
      {
      "id": 256850909,
      "name": "SnowPC_PV1_50_Kantai_Steamストア用.mp4",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256850909/movie.293x165.jpg?t=1633009834",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256850909/movie480_vp9.webm?t=1633009834",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256850909/movie_max_vp9.webm?t=1633009834"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256850909/movie480.mp4?t=1633009834",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256850909/movie_max.mp4?t=1633009834"
      },
      "highlight": true
      },
      {
      "id": 256873105,
      "name": "01_モンスター１本化_02_スレートなし_2K",
      "thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/256873105/movie.293x165.jpg?t=1644458549",
      "webm": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256873105/movie480_vp9.webm?t=1644458549",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256873105/movie_max_vp9.webm?t=1644458549"
      },
      "mp4": {
      "480": "http://cdn.akamai.steamstatic.com/steam/apps/256873105/movie480.mp4?t=1644458549",
      "max": "http://cdn.akamai.steamstatic.com/steam/apps/256873105/movie_max.mp4?t=1644458549"
      },
      "highlight": true
      }
      ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1446780/page_bg_generated_v6b.jpg?t=1687140511",
    keys: [
      "AEyGyRQF9ay5",
      "VFrdwccznoK5",
      "6ojhfbB8MeY5",
      "x9JBeqAOLpm5",
      "wBbLptUzPrF5",
      "uk9VSqRozeq5",
      "dwM59U2hRNs5",
      "mPAp8RSlxwG5"
    ],
    rating_pos: 5011,
    rating_neg: 806,

    featured: true,
    discount: 0,
    png_image: "https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHRise-Magnamalo_Render_001.png/revision/latest?cb=20200917143525",
  }, // MONSTER HUNTER RISE
  {
    name: "Dark Reflections - Shiori no Kotoha",
    detailed_description: `「シオリノコトハ - Dark Reflections -」 is a novel game in the survival mystery genre set in an inescapable private library.<br>The suspense visual novel 「シオリノコトハ ～密室図書館の生贄～」 has been remade for the CS Novel Club platform so that it can be enjoyed by people of all ages around the world.<br>The character voices of the heroines who color the story are handled by gorgeous VTubers!<br><br><br><strong>◆Introduction</strong><br>“It's over...Everything is over....&quot;<br>A series of murders and bizarre incidents occur in a private library that has become inescapable.<br>Eventually, the food runs out, and the library becomes filled with madness...<br><br><br><strong>◆Synopsis</strong><br>At the end of a deep forest, there was a large library with European-style architecture.<br>Kenji Azuma drops by the library whenever he finds time. The reason why Kenji, who doesn't usually read books, comes by so much is because of the girl who works at the library, Shiori Tokita.<br>Kenji falls in love with her at first sight, and spends his days in the library reading and watching Shiori. One day, Kenji falls asleep and is awakened by the sound of an emergency bell...<br>The area was pitch black and the doors would not open...the library had turned into an inescapable prison.<br>Within the locked down library, Kenji and his friends are tossed about by the mysteries hidden there and the murders that occur...<br><br><br><strong>◆Characters</strong><br>・Shiori Tokita<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826030/extras/character01_us.jpg?t=1674021554" /><br>VA: Asano Ruri (Asano Sisters Project / Crocodile.ltd)<br><br>A girl who works as a librarian at the Tokita Library.<br>She is sickly and has never been to school, and spends most of her time either at home or in the Tokita Library.<br><br>・Erika Kimishima<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826030/extras/character02_us.jpg?t=1674021554" /><br>VA: Hizuki Miu (WACTOR)<br><br>A high school girl who loves fashion and is Kenji's classmate.<br>She is the type of person who speaks before she thinks, and she acts on the spur of the moment without thinking about the future.<br><br>・Yuna Shiraki<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826030/extras/character03_us.jpg?t=1674021554" /><br>VA: Inuchiyo Kokona (Stellar Cycle Campus)<br><br>Kenji's classmate and Erika’s childhood friend.<br>She has excellent grades, but she is weak and has trouble speaking up.<br><br>・Michi Kisaragi<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826030/extras/character04_us.jpg?t=1674021554" /><br>VA: Moka (Project ShoveL)<br><br>Shiori's personal doctor who assists Shiori in her work at the Tokita Library and also resides at the library.<br>After getting her doctorate degree at a young age, she was hired by Shiori's grandfather to treat Shiori as a child.<br><br>・Shoko Endo<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826030/extras/character05_us.jpg?t=1674021554" /><br>VA: Mitsurugi Lia (WACTOR)<br><br>A nurse at the hospital where Michi is an outpatient once a week.<br>She has a kind heart and a gentle spirit, but she is also a bit of a klutz.<br><br><br><strong>◆New scenarios that new and current fans can enjoy</strong><br>Originally a bishoujo game, scenarios have been updated and new scenarios have been added so that many players can enjoy the game.<br>It is a visual novel game with revamped graphics and fully voice-acted scenarios with a brand new cast.`,
    short_description: `A series of murders and bizarre incidents occur in a private library that has become inescapable. Eventually, the food runs out and the library becomes filled with madness... This work is a visual novel of the survival suspense genre, set in a private library.`,
    supported_languages: `English, French, Italian, German, Spanish - Spain, Dutch, Swedish, Danish, Norwegian, Finnish, Bulgarian, Vietnamese, Portuguese - Portugal, Russian, Simplified Chinese, Traditional Chinese, Japanese<strong>*</strong>, Korean<br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1826030/header.jpg?t=1674021554`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 or later<br></li><li><strong>Processor:</strong> Core 2 Duo<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> OpenGL 3.0<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>`,
    publishers: ["CyberStep, Inc."],
    price: 894,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "28", description: "Simulation" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_51d6010916cf4a5cd04db4cdb1fbd37597d125b8.600x338.jpg?t=1674021554",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_51d6010916cf4a5cd04db4cdb1fbd37597d125b8.1920x1080.jpg?t=1674021554",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_aef23d7d2dc944a1bb6432f304eb645b88aa242a.600x338.jpg?t=1674021554",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_aef23d7d2dc944a1bb6432f304eb645b88aa242a.1920x1080.jpg?t=1674021554",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_2f5c62b1062583c9cf9907517513016f61282581.600x338.jpg?t=1674021554",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_2f5c62b1062583c9cf9907517513016f61282581.1920x1080.jpg?t=1674021554",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_ac1defa911cbe58660818bce5a6d97a0eb1f215c.600x338.jpg?t=1674021554",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_ac1defa911cbe58660818bce5a6d97a0eb1f215c.1920x1080.jpg?t=1674021554",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_e5cdf8bbb8444ce27b34a14a5593af5c8471df9f.600x338.jpg?t=1674021554",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/ss_e5cdf8bbb8444ce27b34a14a5593af5c8471df9f.1920x1080.jpg?t=1674021554",
      },
    ],
    movies: [
      {
        id: 256864788,
        name: "PV_en",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256864788/movie.293x165.jpg?t=1640141919",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256864788/movie480_vp9.webm?t=1640141919",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256864788/movie_max_vp9.webm?t=1640141919",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256864788/movie480.mp4?t=1640141919", max: "http://cdn.akamai.steamstatic.com/steam/apps/256864788/movie_max.mp4?t=1640141919" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1826030/page_bg_generated_v6b.jpg?t=1674021554",
    keys: ["3cGmD61xoLxo", "pfVGe1tYbkMj", "NKjpAddrIN6m", "WjK3dR3rn5o0", "2PVm6dta7SqH", "Eu49iUIdQQ1M", "hwGrqtyKswVh", "yurPUflnNr2K", "u7rAaOqBOuYu"],
    rating_pos: 726,
    rating_neg: 189,
  },
  {
    name: "Legend of Egypt - Jewels of the Gods 2",
    detailed_description: `A cat-like creature has entered the chambers of the Pharaoh and absorbed his soul. Who is behind this dark magic and will succeed in lifting the curse by building an imposing city?<br />
    <br />
    Find out in a challenging match 3 game! Build a magnificent city in ancient Egypt and free Pharaoh from the claws of the creature. Bonuses and power-ups will help you do so.<br />
    A gripping story, puzzles and mini-games, upgrades, extras and trophies await you!<br />
    <br />
    Features:<br />
    <br />
        - Sequel to the popular Match 3 game &quot;Jewel of the Gods<br />
        - Experience a challenging and exciting Match 3 game<br />
        - Build a city in ancient Egypt                                                                                                                                                        <br />
        - Win various upgrades, power ups, trophies<br />
        - Solve exciting puzzle, hidden object and bonus games`,
    short_description: `A cat-like creature has entered the chambers of the Pharaoh and absorbed his soul. Who is behind this dark magic and will succeed in lifting the curse by building an imposing city?`,
    supported_languages: `English<strong>*</strong>, German<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1826100/header.jpg?t=1638521995`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP / 7 / 8 / 10 / 11<br></li><li><strong>Processor:</strong> Intel Core Duo 2 2.5 GHz<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>Graphics:</strong> Onboard graphic card<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 300 MB available space<br></li><li><strong>Sound Card:</strong> Onboard Soundcard</li></ul>`,
    publishers: ["magnussoft"],
    price: 129.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "4", description: "Casual" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_8f0147e073475c863bb7e20992e664a9103977a8.600x338.jpg?t=1638521995",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_8f0147e073475c863bb7e20992e664a9103977a8.1920x1080.jpg?t=1638521995",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_31918d8e8af400dbee1f98155144241e3e49c12f.600x338.jpg?t=1638521995",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_31918d8e8af400dbee1f98155144241e3e49c12f.1920x1080.jpg?t=1638521995",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_ee3760264c44fec13fd375430ac140fbb6c5ba34.600x338.jpg?t=1638521995",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_ee3760264c44fec13fd375430ac140fbb6c5ba34.1920x1080.jpg?t=1638521995",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_67c539b029914aa4c1ec3f910e5c252c57576db9.600x338.jpg?t=1638521995",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_67c539b029914aa4c1ec3f910e5c252c57576db9.1920x1080.jpg?t=1638521995",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_ca21acea3c506674a9ad82d7293c091661785408.600x338.jpg?t=1638521995",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_ca21acea3c506674a9ad82d7293c091661785408.1920x1080.jpg?t=1638521995",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_c94d643f8d4e6d9ea599153e0dcf51c54401d7fb.600x338.jpg?t=1638521995",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/ss_c94d643f8d4e6d9ea599153e0dcf51c54401d7fb.1920x1080.jpg?t=1638521995",
      },
    ],
    movies: [
      {
        id: 256861023,
        name: "DE",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861023/movie.293x165.jpg?t=1637339184",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861023/movie480_vp9.webm?t=1637339184",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861023/movie_max_vp9.webm?t=1637339184",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861023/movie480.mp4?t=1637339184", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861023/movie_max.mp4?t=1637339184" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1826100/page_bg_generated_v6b.jpg?t=1638521995",
    keys: [
      "S7aHQv5K1dWW",
      "Bt6GyBL2bk3N",
      "s5ed2Ei1rl55",
      "gRapR2U2OaLU",
      "IpD810KIZj74",
      "ZpEHXAq7b9k2",
      "ueTAtvp6NYTX",
      "yUL2HmjNarpw",
      "scc6Vgtp50vj",
      "BiLgJP8UeuAM",
      "R4MozdgoUjGX",
      "eTsjHZ6oCiHF",
      "SH25l9DOhVYZ",
      "vciRQvJnVPLZ",
      "bzEiK0siilIC",
      "eKChH8AX1lLE",
      "oCjVLScYMWg3",
      "gbXb4lLkDflx",
      "EfU0ifk4JkZc",
      "e1OZFUWZhkDB",
      "qkELv0tRYM34",
      "lvOFevwaGbQz",
      "x4kLQVUM6iBS",
      "qUr727OOmB04",
      "Ji4CfAO7nr50",
      "GoQvyy4aolUX",
      "7vgnaCjpJRa1",
      "Tj5TCufsoztp",
      "xdBn7aprePLm",
      "UIH0yqSl1ghM",
      "dXUwyPfNWCvH",
      "lcFjtisqnXV6",
      "MiwgYehX0STz",
      "daR69MoLZjbz",
      "U1ubaCkIC6YG",
      "8imvtKj799Av",
      "zSMUJECMn5Bb",
      "rtVYvtBHEaMG",
    ],
    rating_pos: 559,
    rating_neg: 123,
  },
  {
    name: "WWII Tanks: Battlefield",
    detailed_description: `<strong>  Immerse yourself in a world of armored tank battles. Choose from a wide range of famous tanks of <br>the major combatants. Pick the best tank and blast your way across the battlefield. Defeat your enemies <br>with force and strategic decisions! And lead your team on a glorious road to victory!<br><br>Game Features:<br><br>Wide selection of famous WWII tanks:<h2 class="bb_tag">Germany:</h2>       <ul class="bb_ul"><li>Tiger 1</li></ul>       <ul class="bb_ul"><li>Panzer-IV</li></ul>       <ul class="bb_ul"><li>Sdkfz251</li></ul>       <ul class="bb_ul"><li>Mörser Karl</li></ul><h2 class="bb_tag">USSR:</h2>      <ul class="bb_ul"><li>T-34/76</li></ul>      <ul class="bb_ul"><li>T-34/85</li></ul>      <ul class="bb_ul"><li>KV-I</li></ul>      <ul class="bb_ul"><li>KV-II</li></ul>      <ul class="bb_ul"><li>BT-7</li></ul>      <ul class="bb_ul"><li>T-35</li></ul><h2 class="bb_tag">Japan:</h2>     <ul class="bb_ul"><li>Type 89</li></ul><h2 class="bb_tag">United Kingdom:</h2>    <ul class="bb_ul"><li>Cromwell</li></ul>    <ul class="bb_ul"><li>Sherman Firefly</li></ul>and many more.<h2 class="bb_tag">Missions:</h2><ul class="bb_ul"><li>Battle of Stalingrad - Attack</li></ul><ul class="bb_ul"><li>Battle of Stalingrad - Defense</li></ul><ul class="bb_ul"><li>Escort Mission - Berlin</li></ul><ul class="bb_ul"><li>Escort Mission - Berlin (General)</li></ul><ul class="bb_ul"><li>Battle of Kursk - Axis</li></ul><ul class="bb_ul"><li>Battle of Kursk - Allied</li></ul><ul class="bb_ul"><li>Speed Battle  - Berlin</li></ul><ul class="bb_ul"><li>Escape from Berlin</li></ul></strong>`,
    short_description: `Immerse yourself in a world of armored tank battles. Choose from a wide range of famous tanks of the major combatants. Pick the best tank and blast your way across the battlefield. Defeat your enemies with force and strategic decisions! And lead your team on a glorious road to victory!`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1826290/header.jpg?t=1662063724`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7, 8, 10<br></li><li><strong>Processor:</strong> Pentium（R）Core E2210@2.20GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GeForce 9800GTX+ (1GB)<br></li><li><strong>Storage:</strong> 1400 MB available space<br></li><li><strong>Sound Card:</strong> Any</li></ul>`,
    publishers: ["SP GAMES"],
    price: 39.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
      { id: "28", description: "Simulation" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_1c44c9783a54ac2726af9ab1ca7225fa3f9c3dbf.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_1c44c9783a54ac2726af9ab1ca7225fa3f9c3dbf.1920x1080.jpg?t=1662063724",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_f3dccbc302fb98267aa5207dab66a85ef1194f24.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_f3dccbc302fb98267aa5207dab66a85ef1194f24.1920x1080.jpg?t=1662063724",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_048d15a4f74c18ab0a2a6ad417af758ae41dc742.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_048d15a4f74c18ab0a2a6ad417af758ae41dc742.1920x1080.jpg?t=1662063724",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_d9919c021e204b0d829c3711afdd232bb9affc8f.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_d9919c021e204b0d829c3711afdd232bb9affc8f.1920x1080.jpg?t=1662063724",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_9c6cc0448a19f181de05870c97b9884f9a2d0091.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_9c6cc0448a19f181de05870c97b9884f9a2d0091.1920x1080.jpg?t=1662063724",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_379ba4383a493de4b9e2ddcb4307216b64b2c9d7.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_379ba4383a493de4b9e2ddcb4307216b64b2c9d7.1920x1080.jpg?t=1662063724",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_6cba9e4ebfe69b1133faebc86387c364d7119c38.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_6cba9e4ebfe69b1133faebc86387c364d7119c38.1920x1080.jpg?t=1662063724",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_bdc1ad182e5e50dbef1dc8d31c179503e928daf1.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_bdc1ad182e5e50dbef1dc8d31c179503e928daf1.1920x1080.jpg?t=1662063724",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_3e4caa769885351bd0f61ad0f1469f354f2b28df.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_3e4caa769885351bd0f61ad0f1469f354f2b28df.1920x1080.jpg?t=1662063724",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_9d2a6dcfcdf313f73d72b5342a0f01c9ae11f1ca.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_9d2a6dcfcdf313f73d72b5342a0f01c9ae11f1ca.1920x1080.jpg?t=1662063724",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_1ae630fe627934d5602ef3806459aa9d1bdf6a12.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_1ae630fe627934d5602ef3806459aa9d1bdf6a12.1920x1080.jpg?t=1662063724",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_d5f69982b59dd6db3aa6718c063fb54cd1d3094a.600x338.jpg?t=1662063724",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/ss_d5f69982b59dd6db3aa6718c063fb54cd1d3094a.1920x1080.jpg?t=1662063724",
      },
    ],
    movies: [
      {
        id: 256891238,
        name: "WWII Tanks Trailer 1.0.3",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256891238/movie.293x165.jpg?t=1654975316",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256891238/movie480_vp9.webm?t=1654975316",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256891238/movie_max_vp9.webm?t=1654975316",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256891238/movie480.mp4?t=1654975316", max: "http://cdn.akamai.steamstatic.com/steam/apps/256891238/movie_max.mp4?t=1654975316" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1826290/page_bg_generated_v6b.jpg?t=1662063724",
    keys: ["MIEaXNeY5DHz"],
    rating_pos: 287,
    rating_neg: 287,
  },
  {
    name: "ALONE",
    detailed_description: `<img src="https://cdn.akamai.steamstatic.com/steam/apps/1826070/extras/logo.png?t=1640324849" /><br>It all started with a normal night shift duty. Alex alone in the building. His wife, Karen, like always waiting for him to come home. Alex keeping all the office files<br>and paperwork in their places. That's when Alex started hearing weird noises in the building meanwhile strange things started happening with Karen too. Young lady scared alone at home called her husband. Alex went downstairs to go home and grabbed the office door found himself locked in the building. No one knows what this mysterious and strange night has planned for Alex and his wife.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826070/extras/My_Movie.gif?t=1640324849" /><h2 class="bb_tag">Key Features:</h2><h2 class="bb_tag">Outstanding Graphics</h2>Experience amazing FPS which you had never before with the best outstanding graphics and visuals.<h2 class="bb_tag">Many Different Puzzles</h2>Experience many different type of puzzle through only you can escape and can make your way out of the apocalyptic horror building. Find different Keys, Watch out for the hints!<h2 class="bb_tag">Awesome Combat</h2>Awesome combat system with the Underground Tunnel Zombies make sure you don't wake them up! Go stealthy and don't do loud approach.<h2 class="bb_tag">Extremely Horror And Paranormal Activities</h2>Experience the horror and those paranormal activities which you had never saw before . Be ready for it!`,
    short_description: `Left Alone at his workplace, Alex wasn't prepared for what's coming next. From finding keys, observing bloodcurdling scenes to solving puzzles, dealing with spine-chilling paranormal activities and coming up with strategies to solve multiple scenes Alex struggles to make it to his home.`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1826070/header.jpg?t=1640324849`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 10<br></li><li><strong>Processor:</strong> Intel® Core™ i5-1st Gen<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia Quadro K620 2GB Graphics Card<br></li><li><strong>DirectX:</strong> Version 12<br></li><li><strong>Storage:</strong> 8 GB available space<br></li><li><strong>Sound Card:</strong> DirectX compatible</li></ul>`,
    publishers: ["True Nuke"],
    price: 114.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_9413cb1ddc9d0823121cca4821f2f40faa58bd61.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_9413cb1ddc9d0823121cca4821f2f40faa58bd61.1920x1080.jpg?t=1640324849",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_77a02c507e4f1f8b40a5bfd0457284d9c5ce277c.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_77a02c507e4f1f8b40a5bfd0457284d9c5ce277c.1920x1080.jpg?t=1640324849",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_4ad2788d844ce26af8e1164bfab69d6c7794ef25.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_4ad2788d844ce26af8e1164bfab69d6c7794ef25.1920x1080.jpg?t=1640324849",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_e0036750dc792801c8cccb08f07fbf0e9b27c9ae.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_e0036750dc792801c8cccb08f07fbf0e9b27c9ae.1920x1080.jpg?t=1640324849",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_31c4f2ca9dc518114670fff16aa59ae532421fcf.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_31c4f2ca9dc518114670fff16aa59ae532421fcf.1920x1080.jpg?t=1640324849",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_07794b601c154753a7ef9620aa514b0c9fca24ba.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_07794b601c154753a7ef9620aa514b0c9fca24ba.1920x1080.jpg?t=1640324849",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_6e5137d2ddb9aff3678313d95108eb786704a8e5.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_6e5137d2ddb9aff3678313d95108eb786704a8e5.1920x1080.jpg?t=1640324849",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_d6c3bd2bb0056cf165bf9e1ac3d251d11337a2ef.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_d6c3bd2bb0056cf165bf9e1ac3d251d11337a2ef.1920x1080.jpg?t=1640324849",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_a51f574640aef6fc60a12ee8336b8150702467e8.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_a51f574640aef6fc60a12ee8336b8150702467e8.1920x1080.jpg?t=1640324849",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_21476758c8e3fd9c675d558c561740bb67d3e9be.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_21476758c8e3fd9c675d558c561740bb67d3e9be.1920x1080.jpg?t=1640324849",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_9b5ccc4d90af82d34ea164facd5eb68ad93093f0.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_9b5ccc4d90af82d34ea164facd5eb68ad93093f0.1920x1080.jpg?t=1640324849",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_781b89b928d11b4a6ecb8d1152b6b8fd1890541c.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_781b89b928d11b4a6ecb8d1152b6b8fd1890541c.1920x1080.jpg?t=1640324849",
      },
      {
        id: 12,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_ab529a42533485bd15858bf045ab341585c20a13.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_ab529a42533485bd15858bf045ab341585c20a13.1920x1080.jpg?t=1640324849",
      },
      {
        id: 13,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_e167185a0e934b041fd524e16e0aaa78af6e1e1d.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_e167185a0e934b041fd524e16e0aaa78af6e1e1d.1920x1080.jpg?t=1640324849",
      },
      {
        id: 14,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_78a0e948604c5375e5044003429868c48278d2c0.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_78a0e948604c5375e5044003429868c48278d2c0.1920x1080.jpg?t=1640324849",
      },
      {
        id: 15,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_45c49420b2e600bcce14a97ca9040ffe52edb08e.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_45c49420b2e600bcce14a97ca9040ffe52edb08e.1920x1080.jpg?t=1640324849",
      },
      {
        id: 16,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_2f2be0472623b16d335b79356d573fb572343f5e.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_2f2be0472623b16d335b79356d573fb572343f5e.1920x1080.jpg?t=1640324849",
      },
      {
        id: 17,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_327c2483baa4dcb8d21a7e2a63f601a8b039ec7f.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_327c2483baa4dcb8d21a7e2a63f601a8b039ec7f.1920x1080.jpg?t=1640324849",
      },
      {
        id: 18,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_b876f025af117a43acdd06b8b8ceaadca8cd0056.600x338.jpg?t=1640324849",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/ss_b876f025af117a43acdd06b8b8ceaadca8cd0056.1920x1080.jpg?t=1640324849",
      },
    ],
    movies: [
      {
        id: 256864532,
        name: "Alone Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256864532/movie.293x165.jpg?t=1639218557",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256864532/movie480_vp9.webm?t=1639218557",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256864532/movie_max_vp9.webm?t=1639218557",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256864532/movie480.mp4?t=1639218557", max: "http://cdn.akamai.steamstatic.com/steam/apps/256864532/movie_max.mp4?t=1639218557" },
        highlight: true,
      },
      {
        id: 256861932,
        name: "Promo Title Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861932/movie.293x165.jpg?t=1638506390",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861932/movie480_vp9.webm?t=1638506390",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861932/movie_max_vp9.webm?t=1638506390",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861932/movie480.mp4?t=1638506390", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861932/movie_max.mp4?t=1638506390" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1826070/page_bg_generated_v6b.jpg?t=1640324849",
    keys: [
      "wwatIuPlpw2E",
      "Ot9HuDqPD6AS",
      "gIBkUOuIYtIi",
      "LXW43YcOAnbp",
      "CVo8X1QSCLhk",
      "VmKmTPs8n32f",
      "AcRJKNrKLIjh",
      "mQKvyosztwsi",
      "Dxgd0fKKOGoJ",
      "spXFdZnDGICQ",
      "2ahcyCi9xKzl",
      "VXbOdw4B6McJ",
      "cSu6HgGgCOcQ",
      "53MLlNtbn5RL",
      "cvPJvkrqXUjt",
      "6oyUqA3nWNOS",
      "lCAjxTE1xrQh",
      "M0kCm72kNGeS",
      "YfEud8EVKcLj",
      "gWxlVwGiauCX",
      "oY3VZRkYYUH1",
      "Yd4sYJvMsxrF",
      "MQ9to0iMstll",
      "wq3yVGIWmzSk",
    ],
    rating_pos: 750,
    rating_neg: 97,
  },
  {
    name: "The Asmodian Princesses and the Witch in the Forest",
    detailed_description: `<h1>Recommended</h1><p><h2 class="bb_tag">J-style exorcist</h2><a href="https://store.steampowered.com/app/2274530/_/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/2274530/_/</a><h2 class="bb_tag">Innocent Kurone will never reject your request!</h2><a href="https://store.steampowered.com/app/2307300/_" target="_blank" rel=""  id="dynamiclink_1" >https://store.steampowered.com/app/2307300/_</a></p><br><h1>About the Game</h1><h2 class="bb_tag">The Asmodian Princesses and the Witch in the Forest is a 3D Dungeon Crawl game developed by BlusterD and published by OTAKU Plan. </h2><h2 class="bb_tag">STORY</h2>Parallel world × 3D dungeon exploration<br>One day, Mikaze Shoichi heard the call from a mysterious goddess.<br>&quot;Please come and take down the devil!&quot;<br>Although it sounds like a template, Shoichi still came to the &quot;demon world&quot;.<br>&quot;Demon world&quot; is a dangerous world inhabited by asmodians.<br>After meeting the two princesses of the asmodian royal family and the king, Shoichi was made to make an &quot;ultimate choice&quot;, and the legend of this young man began.<h2 class="bb_tag">FEATURES</h2><ul class="bb_ul"><li>JRPG<br></li><li>3D Dungeon Crawl <br></li><li>Visual Novel</li></ul>`,
    short_description: `One day, Shoichi heard the call from a mysterious goddess. &quot;Please come and take down the devil!&quot; Although it sounds like a template, he still came to the &quot;demon world&quot;. After meeting the two princesses and the king, he was made to make an &quot;ultimate choice&quot;, and the legend of this young man began.`,
    supported_languages: `Japanese, English, Simplified Chinese`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1826160/header.jpg?t=1688972594`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 7 / 8 / 8.1 / 10<br></li><li><strong>Processor:</strong> 2+ GHz Processor<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> DirectX 9/OpenGL 4.1 capable GPU<br></li><li><strong>DirectX:</strong> Version 9.0<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>`,
    publishers: ["OTAKU Plan"],
    price: 279.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "3", description: "RPG" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_e1f2be7c3e8af345751dd6649c693bc5d606f306.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_e1f2be7c3e8af345751dd6649c693bc5d606f306.1920x1080.jpg?t=1688972594",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_28a03d119aece274e9cae130df6ae41cd817dd4b.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_28a03d119aece274e9cae130df6ae41cd817dd4b.1920x1080.jpg?t=1688972594",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_9e66eb9d1e4fe4a257912e15066ad40e0c18aff1.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_9e66eb9d1e4fe4a257912e15066ad40e0c18aff1.1920x1080.jpg?t=1688972594",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_a8b0f668393b5ad2c63c39630f9d22bfc099bbd1.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_a8b0f668393b5ad2c63c39630f9d22bfc099bbd1.1920x1080.jpg?t=1688972594",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_eb048e35b11808bac3ffa9042773d9534f48ff2a.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_eb048e35b11808bac3ffa9042773d9534f48ff2a.1920x1080.jpg?t=1688972594",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_04dc43b4f1dc4089fc0c651f1322ada14711ab1c.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_04dc43b4f1dc4089fc0c651f1322ada14711ab1c.1920x1080.jpg?t=1688972594",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_a9b40b70a8bf07f4036698982501507520688047.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_a9b40b70a8bf07f4036698982501507520688047.1920x1080.jpg?t=1688972594",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_f3997f7aa85798737dfd29f4fdc09b2425cbd781.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_f3997f7aa85798737dfd29f4fdc09b2425cbd781.1920x1080.jpg?t=1688972594",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_2ab63611642d384f0522387d740a48fc335e6dc1.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_2ab63611642d384f0522387d740a48fc335e6dc1.1920x1080.jpg?t=1688972594",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_9d22795e15d80b539b1c81ba89ba1514dd279bf8.600x338.jpg?t=1688972594",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/ss_9d22795e15d80b539b1c81ba89ba1514dd279bf8.1920x1080.jpg?t=1688972594",
      },
    ],
    movies: [
      {
        id: 256885003,
        name: "PV",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256885003/movie.293x165.jpg?t=1655120920",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256885003/movie480_vp9.webm?t=1655120920",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256885003/movie_max_vp9.webm?t=1655120920",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256885003/movie480.mp4?t=1655120920", max: "http://cdn.akamai.steamstatic.com/steam/apps/256885003/movie_max.mp4?t=1655120920" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1826160/page_bg_generated_v6b.jpg?t=1688972594",
    keys: [
      "tHLuvl5E6wQH",
      "Ld8DMInUrObw",
      "yauEGDozMqIp",
      "Ks2fpUL1msRq",
      "3lEW53g58aTz",
      "pRWwLJhKumun",
      "kmPfsYZF0mBO",
      "zRY3DDB2HNBb",
      "5r9h8U4UhjVu",
      "CiPI25nxKNhJ",
      "SamKGT4HqRUz",
      "u7ZIETLafKXC",
      "JJjDTQHZi66b",
      "Jpi119dyc1TL",
      "HQBft9JmaE0T",
      "rmDFjwBEP55A",
      "Yx6fQsZaj5Z5",
      "qmEY0psrJtJ8",
      "mjh5HYad7L4H",
      "ChXSzeQHA8wO",
      "nbqRcJ9TZaT0",
      "jQIInGKVJYuu",
      "YR1pkdtcSiHe",
      "jDIEEyN4C4FI",
      "9hrvtawEpSL6",
      "uJLk08a1665R",
      "X573VWO8bU38",
      "CttwB1OZcv9i",
    ],
    rating_pos: 575,
    rating_neg: 250,
  },
  {
    name: "上班摸鱼模拟器 - Lazy at work",
    detailed_description: `被上一家007工作制度过度摧残伤痕累累的你，下决心加入另一家企业，重新开始自己的生活。<br>面试的时候，这家企业的面试官信誓旦旦得向你保证，这家企业绝对不是007式工作制度，而是采用更为人性化的996福报式工作制度。<br>你被这样的美好愿景打动了，打算在这样充满关爱的企业疗养身心。<br>然而，你羸弱的身体不允许你每天12小时不间断的工作，你的大脑和躯干都需要在工作中间歇休息，娱乐自己，才能保证自己不被压力打倒，猝死当场。<br>所以，你决定在工作中，多多摸鱼，延续生命，获得报酬。<br>毕竟，人活着，钱才有意义嘛！<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825780/extras/微信图片_20211118105910.png?t=1640343769" /><br><br>通过一系列简单有趣的小游戏，在办公室内享受一边摸鱼一边工作的乐趣！<br>我们为本游戏准备了8大关卡，每一关都具有别具一格的魅力和趣味。您可以在每一关体验到不同的难度，也要面对不同的骚扰完成摸鱼和工作！<br>官方QQ群：603286797，欢迎大家加入！`,
    short_description: `live on! live on! live on! In the game, we should not only be lazy, but also make continuous progress, from interns to the top of the company! Whether you are knocked down by pressure, starved, died suddenly on the spot, or have a successful career depends on your... Reaction ability!`,
    supported_languages: `Simplified Chinese`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825780/header.jpg?t=1640343769`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windowsxp，7，8，9，10<br></li><li><strong>Processor:</strong> 赛扬处理器<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> 无<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 1 GB available space</li></ul>`,
    publishers: ["Welike"],
    price: 78.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "9", description: "Racing" },
      { id: "28", description: "Simulation" },
      { id: "70", description: "Early Access" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_cbdeeace51ef297d6ba74bf49f5a5e24b69d1679.600x338.jpg?t=1640343769",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_cbdeeace51ef297d6ba74bf49f5a5e24b69d1679.1920x1080.jpg?t=1640343769",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_02c3b4ef05e9676e2bf3d166fc01d7a2605e8edd.600x338.jpg?t=1640343769",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_02c3b4ef05e9676e2bf3d166fc01d7a2605e8edd.1920x1080.jpg?t=1640343769",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_779df8a786593d4c7625646b203b2c5cff4a7808.600x338.jpg?t=1640343769",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_779df8a786593d4c7625646b203b2c5cff4a7808.1920x1080.jpg?t=1640343769",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_60994f3c099932f7bdc7af4f2d56b8e77d3e372e.600x338.jpg?t=1640343769",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_60994f3c099932f7bdc7af4f2d56b8e77d3e372e.1920x1080.jpg?t=1640343769",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_55c030c9a24adff426546eb2b29216194b580ede.600x338.jpg?t=1640343769",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_55c030c9a24adff426546eb2b29216194b580ede.1920x1080.jpg?t=1640343769",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_7116894a02afd2359fbaa6f94c86fae41e85b14a.600x338.jpg?t=1640343769",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/ss_7116894a02afd2359fbaa6f94c86fae41e85b14a.1920x1080.jpg?t=1640343769",
      },
    ],
    movies: [
      {
        id: 256864948,
        name: "宣传片",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256864948/movie.293x165.jpg?t=1640343768",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256864948/movie480_vp9.webm?t=1640343768",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256864948/movie_max_vp9.webm?t=1640343768",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256864948/movie480.mp4?t=1640343768", max: "http://cdn.akamai.steamstatic.com/steam/apps/256864948/movie_max.mp4?t=1640343768" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825780/page_bg_generated_v6b.jpg?t=1640343769",
    keys: [
      "X7GwLrMd6RLp",
      "1kojsRaR8DlW",
      "lTwKSHZmI6iM",
      "9TLc7zV7Ekq1",
      "Me9HDnkqJW3q",
      "bVZ21w5tWn0b",
      "aLEJGix0AsHM",
      "vZhfV849jmY8",
      "YK0qWA3IJ8La",
      "ajvVxxP4mgZb",
      "pq4l3OHCYpyi",
      "8oi6YYDHIjQu",
      "YkZaQbqggDmx",
      "RKexTXhW8zpw",
      "b1C2QfgLz32S",
      "P5pBLWfwPZJR",
      "vIkhVFXdjffJ",
      "QlVlujhdJFyt",
      "wsfFaROYIv3s",
      "s60Op0zLBIrg",
      "wRooiMGMVnG1",
      "yn6xj93cg9Uq",
      "HbbPkP2rtr93",
      "PrnzxHvR7Q4J",
    ],
    rating_pos: 734,
    rating_neg: 105,
  },
  {
    name: "Relic Adventure",
    detailed_description: `<h1>Recommend</h1><p><a href="https://store.steampowered.com/app/811070/__Conviction/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/811070/__Conviction/</a><br><a href="https://store.steampowered.com/app/1294380/" target="_blank" rel=""  id="dynamiclink_1" >https://store.steampowered.com/app/1294380/</a><strong>English comming soon!</strong><br><a href="https://store.steampowered.com/app/1489290/" target="_blank" rel=""  id="dynamiclink_2" >https://store.steampowered.com/app/1489290/</a></p><br><h1>Puzzle Games Recommend</h1><p><a href="https://store.steampowered.com/app/1229060/_/" target="_blank" rel=""  >https://store.steampowered.com/app/1229060/_/</a><br><a href="https://store.steampowered.com/app/1713140/_/" target="_blank" rel=""  >https://store.steampowered.com/app/1713140/_/</a></p><br><h1>About the Game</h1>There are a lot of treasures in the deepest of the relic, but only adventurers with wisdom and courage have the opportunity to approach them.<br>You will push the rocks, activate devices and teleport circles to create the way to the next stage,<br>overcome the poisonous spores, flames and water,<br>travel through different terrains, layer by layer towards the treasure.<br><br>The gameplay is simple and not having much stages, but they are difficult.<br>Only recommended to people who are smart, with good logical, love or are good at solving puzzles.<br>It is said that more than half of the adventurers are given up before they can pass even the 7th level...<br>Are you better than them?<br><br>The game contains:<br>*10+ kinds of devices, monsters or traps<br>* 3 chapters with different terrains<br>*25 levels<br>*2.5 ~ 25 hrs game time<br>#Simple operation<br>#Lots of extremely difficult puzzles<br>#Not too many tips`,
    short_description: `It is said that only the most brave and wise people could pass the exam, and get the treasure in the ancient relic. In the great maze, you should not only find out but also make the correct ways appear. Most challengers fails. could You Pass It?`,
    supported_languages: `English, Japanese, Traditional Chinese`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1826210/header.jpg?t=1644332702`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Microsoft Windows® 8.1/10 (64bit)<br></li><li><strong>Processor:</strong> Intel Core i3-4340 or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Compatible OpenGL / VRAM 1GB or better<br></li><li><strong>Storage:</strong> 300 MB available space</li></ul>`,
    publishers: ["IOSEF", "RMAsia"],
    price: 26.99,
    platforms: { windows: true, mac: true, linux: false },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_cf163b87556468bf2b61c92848b42ea89fd94fa6.600x338.jpg?t=1644332702",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_cf163b87556468bf2b61c92848b42ea89fd94fa6.1920x1080.jpg?t=1644332702",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_919c2a1446e3a3f186d2fb76467ded389220438b.600x338.jpg?t=1644332702",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_919c2a1446e3a3f186d2fb76467ded389220438b.1920x1080.jpg?t=1644332702",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_f55bb99406faa659e5a128c715eb972796ec865c.600x338.jpg?t=1644332702",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_f55bb99406faa659e5a128c715eb972796ec865c.1920x1080.jpg?t=1644332702",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_f449c4a12f444d98b932bed251b6dc8c77053f8f.600x338.jpg?t=1644332702",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_f449c4a12f444d98b932bed251b6dc8c77053f8f.1920x1080.jpg?t=1644332702",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_27e6a1a49d473b3372332a2fa3c7e5e96408dca6.600x338.jpg?t=1644332702",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/ss_27e6a1a49d473b3372332a2fa3c7e5e96408dca6.1920x1080.jpg?t=1644332702",
      },
    ],
    movies: [
      {
        id: 256866993,
        name: "Play Demo_Japanese",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256866993/movie.293x165.jpg?t=1641352472",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256866993/movie480_vp9.webm?t=1641352472",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256866993/movie_max_vp9.webm?t=1641352472",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256866993/movie480.mp4?t=1641352472", max: "http://cdn.akamai.steamstatic.com/steam/apps/256866993/movie_max.mp4?t=1641352472" },
        highlight: true,
      },
      {
        id: 256866991,
        name: "Play Demo_English",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256866991/movie.293x165.jpg?t=1641352477",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256866991/movie480_vp9.webm?t=1641352477",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256866991/movie_max_vp9.webm?t=1641352477",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256866991/movie480.mp4?t=1641352477", max: "http://cdn.akamai.steamstatic.com/steam/apps/256866991/movie_max.mp4?t=1641352477" },
        highlight: true,
      },
      {
        id: 256863962,
        name: "Play Demo_TCH",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256863962/movie.293x165.jpg?t=1641352482",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256863962/movie480_vp9.webm?t=1641352482",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256863962/movie_max_vp9.webm?t=1641352482",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256863962/movie480.mp4?t=1641352482", max: "http://cdn.akamai.steamstatic.com/steam/apps/256863962/movie_max.mp4?t=1641352482" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1826210/page_bg_generated_v6b.jpg?t=1644332702",
    keys: ["ya32snJR0f19", "yJWJrA0N36Ub", "8x0yDeOCCqMT", "XhHTNACgpqNO", "7XjH7Jgyso0m", "iFMWUPu2hEZc"],
    rating_pos: 333,
    rating_neg: 203,
  },
  {
    name: "Fat Baby",
    detailed_description: `<h1>singleplayer out now</h1><p><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825740/extras/Shoveitin.gif?t=1652503907" /></p><br><h1>About the Game</h1>In Fat baby multiple babies battle it out to get as fat as they can by eating and destroying everything around them. Traverse around a destructible environment while trying to avoid danger. Search for things to stuff your face with so you can increase your size and tower over the other babies. Use your fat to buy abilities and use your abilities to wreak havoc on everything in your path!<br><br>The babies objective is to find things to eat around the map so he can fend off the dangers that the environment and the other players pose. Consume everything from cupcakes to cars, and much more! Become fat enough to decimate the entire landscape or hunt smaller babies and steal their fat.`,
    short_description: `In Fat baby multiple babies battle it out to get as fat as they can by eating and destroying everything around them. Traverse around a destructible environment while trying to avoid danger. Use your fat to buy abilities and use your abilities to wreak havoc on everything in your path!`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825740/header.jpg?t=1652503907`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> 64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10<br></li><li><strong>Processor:</strong> Intel Core i7 4770k<br></li><li><strong>Graphics:</strong> GeForce GTX 780ti<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>`,
    publishers: ["No one"],
    price: 78.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "70", description: "Early Access" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_3b2de0113cd33f957a70159602a618985921785f.600x338.jpg?t=1652503907",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_3b2de0113cd33f957a70159602a618985921785f.1920x1080.jpg?t=1652503907",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_088e3fbe014d93b63c1437026a1ad6d51905eedc.600x338.jpg?t=1652503907",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_088e3fbe014d93b63c1437026a1ad6d51905eedc.1920x1080.jpg?t=1652503907",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_1e1b228edbd526bbefd94883010974692b0fae8c.600x338.jpg?t=1652503907",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_1e1b228edbd526bbefd94883010974692b0fae8c.1920x1080.jpg?t=1652503907",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_7d3be6ec9e0668a81e671c67622ae5b6677a90f2.600x338.jpg?t=1652503907",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_7d3be6ec9e0668a81e671c67622ae5b6677a90f2.1920x1080.jpg?t=1652503907",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_2eda2494f6e53d8a9947e8320bb6340fa41c5f51.600x338.jpg?t=1652503907",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/ss_2eda2494f6e53d8a9947e8320bb6340fa41c5f51.1920x1080.jpg?t=1652503907",
      },
    ],
    movies: [
      {
        id: 256863173,
        name: "Fat Baby",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256863173/movie.293x165.jpg?t=1638490839",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256863173/movie480_vp9.webm?t=1638490839",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256863173/movie_max_vp9.webm?t=1638490839",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256863173/movie480.mp4?t=1638490839", max: "http://cdn.akamai.steamstatic.com/steam/apps/256863173/movie_max.mp4?t=1638490839" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825740/page_bg_generated_v6b.jpg?t=1652503907",
    keys: [
      "60ZGCEkDKu99",
      "S5BCnGyBpkzV",
      "pSZsaif7uXMy",
      "KJiqp9OnvsRv",
      "uNB5qMyeE9bB",
      "Q9zgtQ7V1dMG",
      "ofOG35knb0PI",
      "AX62hFfO6gqJ",
      "Hko4iHjUIoa1",
      "6yynTR09DWju",
      "BbgoC04foaFZ",
      "hXkOAVY1tcAi",
      "UaOuzG7tMe5H",
      "n9eVkQorrF2E",
      "XgDDDRDl7xmX",
      "oj9WMJ2JfHyS",
      "tfEgfF3wxFf6",
      "oGaMIs5MKpd1",
      "3ve46Yqhv3Io",
      "ebNvlBXvnxoz",
      "MNIpJQqa4mDy",
      "CiPlmTrjFl2Y",
      "vv4mU5OYumIB",
    ],
    rating_pos: 201,
    rating_neg: 51,
  },
  {
    name: "Starship Wars",
    detailed_description: `Add to your wish list!!<br><br>A great power war is going on, fight for victory!!<br><br><strong>Game features</strong><br><br><ul class="bb_ul"><li> Play in 3 different game modes, an Infinite Mode to challenge your abilities, an Adventure Mode with 35 levels to challenge your skills and a Survival Mode to challenge your stamina.<br></li><li> Defeat several different bosses and enemies.<br></li><li> Extremely accurate controls.<br></li><li> Use over 80 different shots to defeat your enemies.<br></li><li> Buy powerful ships, special shots and mini ships to help you in battle and get a high score. </li></ul><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825690/extras/20211203_720p-1638559956883.gif?t=1689298336" /><br><br><strong>Gameplay</strong> - Move in all four directions to dodge enemies and enemy shots, destroy all bosses, enemies and everything you see ahead, collect crystals to spend in the store, grab upgrades to strengthen your shots and mini ships to help you in battle.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825690/extras/Starship_Wars_Description.png?t=1689298336" />`,
    short_description: `Destroy enemies, bosses and everything you see ahead!! Get crystals to buy better starships and get stronger. Have fun in three different game modes.`,
    supported_languages: `English, Portuguese - Brazil`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825690/header.jpg?t=1689298336`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 +<br></li><li><strong>Processor:</strong> 2.0 Ghz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> 512 VRAM<br></li><li><strong>Storage:</strong> 350 MB available space<br></li><li><strong>Additional Notes:</strong> </li></ul>`,
    publishers: ["Igolito Arts Studios"],
    price: 13.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_6c87a691be3346fcf15a9208ba19c03c52252870.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_6c87a691be3346fcf15a9208ba19c03c52252870.1920x1080.jpg?t=1689298336",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_62f5d9c16c8a4bb90b95f00f7c35674e7ba63089.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_62f5d9c16c8a4bb90b95f00f7c35674e7ba63089.1920x1080.jpg?t=1689298336",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_56dec54391a77fc97cac251b60a381d2cd98042b.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_56dec54391a77fc97cac251b60a381d2cd98042b.1920x1080.jpg?t=1689298336",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_2329cbc9f634a85dbed3aa1c0876a46e7d1c2b57.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_2329cbc9f634a85dbed3aa1c0876a46e7d1c2b57.1920x1080.jpg?t=1689298336",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_9ddfb03cd0bfed5cdd2657e10b48104ac33cb349.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_9ddfb03cd0bfed5cdd2657e10b48104ac33cb349.1920x1080.jpg?t=1689298336",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_15eb9bd30597894efb8b669557bf348abd6c3646.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_15eb9bd30597894efb8b669557bf348abd6c3646.1920x1080.jpg?t=1689298336",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_40d886d72daefee3f06ddcf1943b3d1bddfd9581.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_40d886d72daefee3f06ddcf1943b3d1bddfd9581.1920x1080.jpg?t=1689298336",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_1dd64d28535382588eae9e9eb27750f55c2738c0.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_1dd64d28535382588eae9e9eb27750f55c2738c0.1920x1080.jpg?t=1689298336",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_eb8b2175596147079fd6c61eddb4f2a0fcd24baa.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_eb8b2175596147079fd6c61eddb4f2a0fcd24baa.1920x1080.jpg?t=1689298336",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_fe65d5892fb1a1ef91001e5eb56d6e2284e20ef6.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_fe65d5892fb1a1ef91001e5eb56d6e2284e20ef6.1920x1080.jpg?t=1689298336",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_8fb61d0154c295aa4a85d469e046c8e457d371fa.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_8fb61d0154c295aa4a85d469e046c8e457d371fa.1920x1080.jpg?t=1689298336",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_64d4b78aea0eb12f12192c6065f64b63b5045757.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_64d4b78aea0eb12f12192c6065f64b63b5045757.1920x1080.jpg?t=1689298336",
      },
      {
        id: 12,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_cecf4e2c9c6765722292b47e6a98b88d6a5be838.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_cecf4e2c9c6765722292b47e6a98b88d6a5be838.1920x1080.jpg?t=1689298336",
      },
      {
        id: 13,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_1e22ea071db4402b77fe5cf23ccd00f2ae03de56.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_1e22ea071db4402b77fe5cf23ccd00f2ae03de56.1920x1080.jpg?t=1689298336",
      },
      {
        id: 14,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_1ecbcd51fcb5ecb7e79edd008eafaf1ad127d28b.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_1ecbcd51fcb5ecb7e79edd008eafaf1ad127d28b.1920x1080.jpg?t=1689298336",
      },
      {
        id: 15,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_fd0cde5e0bb22e2a102c7bd809e66d0cfdb4254f.600x338.jpg?t=1689298336",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/ss_fd0cde5e0bb22e2a102c7bd809e66d0cfdb4254f.1920x1080.jpg?t=1689298336",
      },
    ],
    movies: [
      {
        id: 256958161,
        name: "Trailer_StarshipWars_Update2.1.0.0",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256958161/movie.293x165.jpg?t=1689298329",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256958161/movie480_vp9.webm?t=1689298329",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256958161/movie_max_vp9.webm?t=1689298329",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256958161/movie480.mp4?t=1689298329", max: "http://cdn.akamai.steamstatic.com/steam/apps/256958161/movie_max.mp4?t=1689298329" },
        highlight: true,
      },
      {
        id: 256888835,
        name: "Trailer_StarshipWars_Update2.0.0.0",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256888835/movie.293x165.jpg?t=1653996346",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256888835/movie480_vp9.webm?t=1653996346",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256888835/movie_max_vp9.webm?t=1653996346",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256888835/movie480.mp4?t=1653996346", max: "http://cdn.akamai.steamstatic.com/steam/apps/256888835/movie_max.mp4?t=1653996346" },
        highlight: true,
      },
      {
        id: 256864733,
        name: "Trailer_StarshipWars",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256864733/movie.293x165.jpg?t=1653996341",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256864733/movie480_vp9.webm?t=1653996341",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256864733/movie_max_vp9.webm?t=1653996341",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256864733/movie480.mp4?t=1653996341", max: "http://cdn.akamai.steamstatic.com/steam/apps/256864733/movie_max.mp4?t=1653996341" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825690/page_bg_generated_v6b.jpg?t=1689298336",
    keys: [],
    rating_pos: 641,
    rating_neg: 254,
  },
  {
    name: "Superposition",
    detailed_description: `Superposition is a simple sokoban style puzzle game about duplication. By splitting yourself into multiple copies you have to maneuver onto all goal tiles simultaneously to progress.<br />
    <br />
    The goal with this game was to iterate on a few novel mechanics in a sokoban world, and play with the consequences to discover interesting scenarios. The game contains 50 puzzles that intend to explore those mechanics.`,
    short_description: `Superposition is a simple sokoban style puzzle game about duplication. By splitting yourself into multiple copies you have to maneuver onto all goal tiles simultaneously to progress.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825540/header.jpg?t=1639579547`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> OpenGL 3.3 or later<br></li><li><strong>Storage:</strong> 276 MB available space</li></ul>`,
    publishers: ["Anadodic LLC"],
    price: 67.99,
    platforms: { windows: true, mac: false, linux: true },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_788d4664fa4b0d6441772a183823ef3a3a746be1.600x338.jpg?t=1639579547",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_788d4664fa4b0d6441772a183823ef3a3a746be1.1920x1080.jpg?t=1639579547",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_735f06582b345103841a3b1e894ac345d6fb016d.600x338.jpg?t=1639579547",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_735f06582b345103841a3b1e894ac345d6fb016d.1920x1080.jpg?t=1639579547",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_d7fa255b36e7857ee7170da088501e837eca1df9.600x338.jpg?t=1639579547",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_d7fa255b36e7857ee7170da088501e837eca1df9.1920x1080.jpg?t=1639579547",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_ca7454d2932a290cb120f9c348ff52aedb95d8e6.600x338.jpg?t=1639579547",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_ca7454d2932a290cb120f9c348ff52aedb95d8e6.1920x1080.jpg?t=1639579547",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_b4945d66f0dbcafebf93938376c37fe4c20d961e.600x338.jpg?t=1639579547",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_b4945d66f0dbcafebf93938376c37fe4c20d961e.1920x1080.jpg?t=1639579547",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_b6327520e500f954535ea2cbd99299b53b26f0aa.600x338.jpg?t=1639579547",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_b6327520e500f954535ea2cbd99299b53b26f0aa.1920x1080.jpg?t=1639579547",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_6abbb9e3376d4613dc9eff3b7ee9d54df522f56f.600x338.jpg?t=1639579547",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/ss_6abbb9e3376d4613dc9eff3b7ee9d54df522f56f.1920x1080.jpg?t=1639579547",
      },
    ],
    movies: [
      {
        id: 256862361,
        name: "Superposition Launch Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256862361/movie.293x165.jpg?t=1639270655",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256862361/movie480_vp9.webm?t=1639270655",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256862361/movie_max_vp9.webm?t=1639270655",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256862361/movie480.mp4?t=1639270655", max: "http://cdn.akamai.steamstatic.com/steam/apps/256862361/movie_max.mp4?t=1639270655" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825540/page_bg_generated_v6b.jpg?t=1639579547",
    keys: [
      "mvaQ4wl4VkMV",
      "o7fjDxTia3Vi",
      "u6bNbfge4zKT",
      "N5riAVJZSWwa",
      "fJivSwvFhjgM",
      "6QwiP0kGRp82",
      "zRLcBGrgfXE4",
      "q9T3y0swVZCT",
      "PlVqnByNCEsy",
      "32hO6NeThPb8",
      "wCUM2FtQuARH",
      "GDQyNTkgqf1D",
      "ZLv14fErggj2",
      "mtwgFVtXBPrr",
      "glMFy2cZhmNT",
      "SVOQe7fFUztZ",
      "rgwCjUR07Myj",
      "Zg96gloc4Qmr",
      "090QazNWz6Il",
      "PuPTUbuobv8P",
      "tBpvRy2ZJruZ",
      "vVqV2BA06FXX",
      "wInBwDc1clBD",
      "Cg3JVcn1zmOi",
      "A7oD3j8epE71",
      "KBqBdSYuJuVr",
      "aAkXYAmvXGhD",
      "yJAXwUfKBheY",
      "8LiPhcMBmPLH",
      "wVBnlvpGciAk",
      "KoOzjO4dY7fv",
      "SAK3VfdetkBT",
    ],
    rating_pos: 377,
    rating_neg: 75,
  },
  {
    name: "Blank Frame",
    detailed_description: `In the small town of Dim River, Henri wakes up in the middle of the night to a sudden and loud noise. A strange metal cabinet has fallen through the ceiling from the apartment above, effectively blocking his front door. The night life of the town goes on, oblivious to Henri's struggles as he tries to solve his predicament, <i>perhaps not completely on his own.</i><br><br><strong>The night is going to be long and peculiar...</strong><br><br>Blank Frame focuses on atmosphere and story instead of constantly startling the player with cheap and unnecessary jump scares. Blank Frame is meant mainly for fans of slow paced surreal/psychological horror games and films.<br><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825620/extras/xrJOHy.gif?t=1651279128" /><br><br>The night will take the average player about an hour and a half to two hours to play through on your first attempt and is meant to be played entirely in one sitting. Two different endings can be achieved depending on how you go through the game.<br><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825620/extras/aavaconvsmaller.png?t=1651279128" /><br><br>Game play is a combination of point and click and walking simulators with a dark and psychological tone. However, it is possible to die in this game. Thankfully chances to die are rare and can be avoided fairly easily so deaths do not feel cheap.  <br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825620/extras/bedroomsmaller.png?t=1651279128" /><br><br>In Blank Frame you will...<br><br><ul class="bb_ul">Experience a dark and winding story line, always unsure of what is coming next.</ul><ul class="bb_ul">Solve various puzzles that Henri faces to find his way out of predicaments.</ul><ul class="bb_ul">Face one of two endings based on your choices during this 1 1/2 to 2 hour long experience.</ul><br>The team behind Blank Frame:<br>Riku Lempiäinen - Creator &amp; Designer<br>Robbert van Bruggen &amp; Johann Hackl (Gazers) - Soundtrack<br><br><br><strong>Join ThroughTunnel Discord Channel!</strong><br><a href="https://steamcommunity.com/linkfilter/?url=https://discord.gg/2jdfsrbxJM" target="_blank" rel=" noopener"  >https://discord.gg/2jdfsrbxJM</a>`,
    short_description: `Blank Frame is a first person surreal horror game with a look akin to early 2000's pc/ps2 games.. In the small town of Dim River, one resident, Henri, has found himself trapped inside of his own apartment, perhaps not completely by himself. The night is going to be long and peculiar.`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825620/header.jpg?t=1651279128`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> 2 GHz (or higher)<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 760<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>`,
    publishers: ["Sumerian Games"],
    price: 67.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "23", description: "Indie" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_88f785470bbc925eca6b5a4b897a032f0de00607.600x338.jpg?t=1651279128",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_88f785470bbc925eca6b5a4b897a032f0de00607.1920x1080.jpg?t=1651279128",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_6c97730c3f61acd0d31fb3b369bc3354f7dc1272.600x338.jpg?t=1651279128",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_6c97730c3f61acd0d31fb3b369bc3354f7dc1272.1920x1080.jpg?t=1651279128",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_9916cc23ac3b30810e7c4350fcae60797b9890c0.600x338.jpg?t=1651279128",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_9916cc23ac3b30810e7c4350fcae60797b9890c0.1920x1080.jpg?t=1651279128",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_12dc2b94e5c8d8dde0769a432579d312eda3532d.600x338.jpg?t=1651279128",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_12dc2b94e5c8d8dde0769a432579d312eda3532d.1920x1080.jpg?t=1651279128",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_481824eade6b37a2443a8157ca9a1c8f76772273.600x338.jpg?t=1651279128",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_481824eade6b37a2443a8157ca9a1c8f76772273.1920x1080.jpg?t=1651279128",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_fa3feb46092caec518da7794e029dd6b742e186c.600x338.jpg?t=1651279128",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_fa3feb46092caec518da7794e029dd6b742e186c.1920x1080.jpg?t=1651279128",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_0cb094f14bd0d8cfbe41779540d046c6b1fc8b1c.600x338.jpg?t=1651279128",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_0cb094f14bd0d8cfbe41779540d046c6b1fc8b1c.1920x1080.jpg?t=1651279128",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_3156c3c9f950677f323f6a218c8a8948c5f97b1f.600x338.jpg?t=1651279128",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/ss_3156c3c9f950677f323f6a218c8a8948c5f97b1f.1920x1080.jpg?t=1651279128",
      },
    ],
    movies: [
      {
        id: 256864496,
        name: "Blank Frame Release Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256864496/movie.293x165.jpg?t=1639316718",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256864496/movie480_vp9.webm?t=1639316718",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256864496/movie_max_vp9.webm?t=1639316718",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256864496/movie480.mp4?t=1639316718", max: "http://cdn.akamai.steamstatic.com/steam/apps/256864496/movie_max.mp4?t=1639316718" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825620/page_bg_generated_v6b.jpg?t=1651279128",
    keys: [
      "kFJByhC9GU9U",
      "WgPLKa73n6bN",
      "lvqfR2sSClsP",
      "HjjUCCYXp2bk",
      "x2g8lB7UHzuY",
      "u5Ntwg735ZMG",
      "LtnaZMsnAqtH",
      "IGIPuYKUUQkO",
      "5boICyNy9Ytd",
      "AdwobsQXA7do",
      "7OHnMQQlhoX8",
      "5IwrzdDYeuQQ",
      "tZwqJhePjNb5",
      "wQXYmZHKb0J2",
      "uCpuyV49PJXm",
      "MDskuLWalxj8",
      "5pMUzlZI9zXo",
      "2m6wtDkVGnub",
      "fqSTNuVAcwf0",
      "4gt7jS55i6TA",
      "wp8UReeCi3PV",
      "d7QrUwTm2RN0",
      "740EHxA42F4b",
      "lC6gjWma5X9f",
      "bFMQbfQ06zgq",
      "PUJDDkYKtLPN",
      "MRovcBs9P7QD",
      "RiJ5dqQ0LDZc",
      "QiqEHAf2lim7",
      "JtQ1MweVXQV3",
      "B0giTBTYMDKL",
      "AQXNOPR6eqgd",
      "kqPCm8HWs6E9",
    ],
    rating_pos: 539,
    rating_neg: 93,
  },
  {
    name: "Blink Planets",
    detailed_description: `Have you ever dreamed of becoming a pioneer of the universe and developing a whole new planet?<br>Blink Planets is a strategy puzzle game based on the idea of ​​adding planet terraforming to a hexagonal board game.<br><br>The main task of the game is to efficiently place blocks representing different resources, <br>so that people can successfully settle on strange planets in space.<br><br>The colorful Base symbolizes the resources needed to develop a planet.<br>Water, energy, greenery, weather, and gold mines... they don't seem to have anything to do with each other,<br>but the Bases and Blocks are all intertwined to form a habitable planet.<br><br>Every time, the planets change into a new appearance.<br>Create your own planet by connecting each resource effectively within a limited time.<br>What will your planet look like?<h2 class="bb_tag"><strong>Key Features</strong></h2><ul class="bb_ul"><li>Explore the unknown planets in the mysterious universe, and enjoy the charm of terrains.<br></li><li>There is no right answer in making a planet. Use the random Base resources to explore new planets with each time.<br></li><li>At the crossroads of choice, pick a module according to your feelings and have fun of growing in an unexpected direction.<br></li><li>If you need a moment to think, just press the pause button and consider. Your planet will be more beautiful.<br></li><li>Unlock new terrain and achievements as you master the game.<br></li><li>Send your own planet into GIF and share it with your friends.</li></ul>`,
    short_description: `Blink Planets is a strategy puzzle game where you pioneer a wasteland planet into a settleable home for people. The colorful &quot;BASE&quot; symbolizes the resource needed to develop a planet. Place &quot;BLOCKS&quot; to secure further land. Explore more planets to continue welcoming migrants.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825900/header.jpg?t=1642039270`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 SP1+<br></li><li><strong>Processor:</strong> 2 GHz or faster processor<br></li><li><strong>Graphics:</strong> Shader Model 4.0<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>`,
    publishers: ["4DAYS LAB Co., Ltd."],
    price: 114.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "2", description: "Strategy" },
      { id: "70", description: "Early Access" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_e84ec3dd89ed3c4e865c5d8c0f74bebb23d14959.600x338.jpg?t=1642039270",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_e84ec3dd89ed3c4e865c5d8c0f74bebb23d14959.1920x1080.jpg?t=1642039270",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_fe4eef71aa232eebf821556b77ce8774c93de7cd.600x338.jpg?t=1642039270",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_fe4eef71aa232eebf821556b77ce8774c93de7cd.1920x1080.jpg?t=1642039270",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_9ab34d03c8e66c9666e6f16b33b7003d90fc5ef2.600x338.jpg?t=1642039270",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_9ab34d03c8e66c9666e6f16b33b7003d90fc5ef2.1920x1080.jpg?t=1642039270",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_c1d5f122dc68f265c639d53544d3a15d94de3f67.600x338.jpg?t=1642039270",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_c1d5f122dc68f265c639d53544d3a15d94de3f67.1920x1080.jpg?t=1642039270",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_5728574c47cc016a690405cecc9f8ac3c4d7686f.600x338.jpg?t=1642039270",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_5728574c47cc016a690405cecc9f8ac3c4d7686f.1920x1080.jpg?t=1642039270",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_78d1bd17c71000581a82b3cdf712aed400b3d5ba.600x338.jpg?t=1642039270",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_78d1bd17c71000581a82b3cdf712aed400b3d5ba.1920x1080.jpg?t=1642039270",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_403c0129452cc890f25dc8e9eae91db7f4cd9799.600x338.jpg?t=1642039270",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/ss_403c0129452cc890f25dc8e9eae91db7f4cd9799.1920x1080.jpg?t=1642039270",
      },
    ],
    movies: [
      {
        id: 256866999,
        name: "Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256866999/movie.293x165.jpg?t=1640833219",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256866999/movie480_vp9.webm?t=1640833219",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256866999/movie_max_vp9.webm?t=1640833219",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256866999/movie480.mp4?t=1640833219", max: "http://cdn.akamai.steamstatic.com/steam/apps/256866999/movie_max.mp4?t=1640833219" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825900/page_bg_generated_v6b.jpg?t=1642039270",
    keys: [
      "jyXPXeihcOCg",
      "B7vRgU2N7BIT",
      "w7zcdGvcpaDw",
      "Zp5SpkjZnGh2",
      "TE3zROHGGOjb",
      "VCDhWPO56dSB",
      "PS4DbmVrP5s6",
      "gSFEcrAjM3tg",
      "XpytUKsaD7ZZ",
      "kPJQMLR7nM35",
      "tPEDR0EGK0Dl",
      "RSSvCpyKg3Ye",
      "GO6mILqW0Ukt",
      "5kUF2U0AhZzf",
      "3hBMMTcYr9E8",
      "GmzV660b17s0",
      "rxLoFbP0B0aS",
      "cT32HPim3YUx",
      "o5IIbSyj9ycI",
      "jhN8BSmBSFqH",
      "MOsh4so8xuTx",
      "lufEfWULUnew",
      "ZpGZR2LlXcTm",
      "iAHOuAYY6TmC",
      "4CEmV4Rg7uZy",
      "EONH9sssYoiU",
      "W5C4m9HmKBpS",
      "pccwIQo2gXgZ",
      "xFLC8Duo4sCS",
      "3Qm1zKy30iFx",
      "7sgTRNxtSG52",
    ],
    rating_pos: 544,
    rating_neg: 189,
  },
  {
    name: "Kalyzmyr",
    detailed_description: `<strong>Kalyzmyr is a short game about a legendary warrior, Smyrna, escaping from a dungeon called Kalyzmyr, featuring beautiful hand drawn pixel art, it’s a side-scroller action game. A simplistic mix of popular gameplay elements like tower defense, dungeon crawler and hack’n slash with lots of button mashing and random generated interactions and loot. Each run may take up to 30-60 minutes and features a timer for speed runners. </strong><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826090/extras/ezgif.com-gif-maker__2_.gif?t=1688382496" /><br><br><strong>Once the legendary warrior Smyrna, now long forgotten in the depths of Kalyzmyr. Break your chains and earn your freedom! Use your mighty axe and devastate your foes that keep you locked in Kalyzmyr!<br><br>Fight and defend through hordes of demons in this old-school fast-paced action game. <br>Each floor starts with a defense phase where you defend yourself from hordes of creatures by buying and upgrading defensive equipment. Kill monsters to earn money. Loot chests to level up your equipment. </strong><br><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826090/extras/ezgif.com-gif-maker.gif?t=1688382496" /><br><strong>Anything Can Happen<br>Interactable objects are randomly generated, each can ease your burden or punish you. Pray for luck, you’ll need it.</strong><br><br><strong>Feeling weak? Or did you get unlucky? Break the door to turn back to the previous floor anytime. Farm lower levels and be prepared to face stronger opponents. </strong><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826090/extras/2.gif?t=1688382496" /><br><br><strong>14 Different Enemies And 3 Unique Bosses</strong><br><strong>Each level features one unique boss and different creatures, as well as stronger item drops and new settings.</strong><br><br><strong>Unleash Your True Power</strong><br><strong>Unleash Smyrna’s true potential by activating ‘Berserk’ mode which allows you to attack faster than anything.</strong><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826090/extras/ezgif.com-gif-maker__1_.gif?t=1688382496" />`,
    short_description: `Kalyzmyr is a short game about a legendary warrior, Smyrna, escaping from a dungeon called Kalyzmyr. A simplistic mix of popular gameplay elements like tower defense, dungeon crawler and hack’n slash with lots of button mashing and random generated interactions and loot.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1826090/header.jpg?t=1688382496`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Win 10<br></li><li><strong>Processor:</strong> Intel I7 870<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> Onboard<br></li><li><strong>Storage:</strong> 100 MB available space</li></ul>`,
    publishers: ["PsychoSeel"],
    price: 39.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "2", description: "Strategy" },
      { id: "70", description: "Early Access" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_ef68cfa6e8f6d5ee5e89774fab54b9d1dc7073c8.600x338.jpg?t=1688382496",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_ef68cfa6e8f6d5ee5e89774fab54b9d1dc7073c8.1920x1080.jpg?t=1688382496",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_07db6dace542343e019795562264cb3925c611dd.600x338.jpg?t=1688382496",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_07db6dace542343e019795562264cb3925c611dd.1920x1080.jpg?t=1688382496",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_712c00f165a0e8200682a97f1b32b882bfd88397.600x338.jpg?t=1688382496",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_712c00f165a0e8200682a97f1b32b882bfd88397.1920x1080.jpg?t=1688382496",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_8a2e69748928d40e922c9c93c328fd29542ddc57.600x338.jpg?t=1688382496",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_8a2e69748928d40e922c9c93c328fd29542ddc57.1920x1080.jpg?t=1688382496",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_8588359d87187fedb2ea9d6746669f599da44899.600x338.jpg?t=1688382496",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_8588359d87187fedb2ea9d6746669f599da44899.1920x1080.jpg?t=1688382496",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_9517b90e76ca6373f0bc480ce9711705df98b6f2.600x338.jpg?t=1688382496",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_9517b90e76ca6373f0bc480ce9711705df98b6f2.1920x1080.jpg?t=1688382496",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_9205afde462c8b189054d88f147331df9463e290.600x338.jpg?t=1688382496",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/ss_9205afde462c8b189054d88f147331df9463e290.1920x1080.jpg?t=1688382496",
      },
    ],
    movies: [
      {
        id: 256956310,
        name: "0.9 Release Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256956310/movie.293x165.jpg?t=1688382438",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256956310/movie480_vp9.webm?t=1688382438",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256956310/movie_max_vp9.webm?t=1688382438",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256956310/movie480.mp4?t=1688382438", max: "http://cdn.akamai.steamstatic.com/steam/apps/256956310/movie_max.mp4?t=1688382438" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1826090/page_bg_generated_v6b.jpg?t=1688382496",
    keys: ["TIRO8KNnIIOV", "6xcHxbYcjKD5", "aeoH3eEIvJmX", "rTQcqdLpyC2a", "FDpj9J5eF7xn", "AWRZyKd5a6tb", "Bi2MA6cVjBt0"],
    rating_pos: 721,
    rating_neg: 273,
  },
  {
    name: "DESTRUCTURE: Among Debris",
    detailed_description: `<h1>Check this out</h1><p><a href="https://store.steampowered.com/app/1498140/Cafe_Owner_Simulator/?utm_source=technicity_prologue_as_container" target="_blank" rel=""  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825210/extras/Cafe_Owner_Simulator.png?t=1690827843" /></a><a href="https://store.steampowered.com/app/1876930/Saloon_Simulator/?utm_source=technicity_prologue_as_container" target="_blank" rel=""  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825210/extras/Saloon_Simulator.png?t=1690827843" /></a><a href="https://store.steampowered.com/app/1411740/Urbek_City_Builder/?utm_source=technicity_prologue_as_container" target="_blank" rel=""  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825210/extras/Urbek_City_Builder.png?t=1690827843" /></a></p><br><h1>About the Game</h1><a href="https://store.steampowered.com/app/2465830/Robin_Hood__Sherwood_Builders__Bandits_Trail/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/2465830/Robin_Hood__Sherwood_Builders__Bandits_Trail/</a><br><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825210/extras/ezgif.com-gif-maker.gif?t=1690827843" /><br><br>In <strong>DESTRUCTURE: Among Debris</strong> you use the power of (very totally realistic) physics to destroy the world around you. Following a devastating, apocalyptic event, the world is filled with garbage, abandoned structures and angry robot turrets and it is your mission to clean it from this dusty mess.<br><br>The gameplay revolves around the player-controlled Round Thingy of Destruction that you have a full 360-degree control over, making smashing the iron ball so much more satisfying. But you must remember not to lose your ball. Behind you there’s a metal grinder in each level ready to consume all of the balls (stop giggling, Gregg) you are too slow to repel.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825210/extras/ezgif.com-gif-maker__1_.gif?t=1690827843" /><br><br>But <strong>DESTRUCTURE</strong> is no ordinary arkanoid-like game, because the levels fight back! Destroy enough structures and you will alert some bloodthirsty turrets, and trust us, they are definitely not happy to see you. Using all your finesse, you must dodge their bullets, missiles, lasers and other looming dangers and the more you destroy, the more you have to dodge. Bullet hell aficionados rejoice!<br><br>If you’re lucky you might stumble upon mighty weapons and power ups to use in the spur of the moment. It’s like finding a nickel on the side-walk, but the nickel is a rocket launcher or a laser gun and the side-walk is the debris of a structure that once had some semblance of purpose.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825210/extras/ezgif.com-gif-maker__2_.gif?t=1690827843" /><br><br>Progressing through the world of <strong>DESTRUCTURE</strong> is a tough and unforgiving job. For one, there are evil robots trying to murder you and the environments are filled with various hazards. That’s why your benefactors have provided you with a wide array of unlockable tools, upgrades and perks that <i>should</i> provide enough leverage to give you a fighting chance. They’re not free though, so remember to collect Blue Stuff (whatever it is) that your benefactors will use for very important deeds no one really knows or indeed cares about. You’d be best suited collecting as much as you possibly can. That is, if you don’t get shot while you’re at it! <br><br>With this Blue Stuff you can purchase exciting new toys like “Zeus’ Blessing”, “Suicidal Turrets“ or just some good old “Napalm Rain“ to ascend the ranks of ordinary, trash-fighting Round Thingys of Destruction! and become the ultimate destroyer of what remains of the dusty, barren worlds of <strong>DESTRUCTURE</strong>.`,
    short_description: `DESTRUCTURE: Among Debris is an intense mix of brick breaker, air hockey and bullet hell set in a post apocalyptic world. Destroy structures, dodge bullets, fire guns and buy perks to lay even more waste!`,
    supported_languages: `English, Italian, Ukrainian, French, German, Spanish - Spain, Simplified Chinese, Polish, Japanese`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825210/header.jpg?t=1690827843`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 or higher<br></li><li><strong>Processor:</strong> 2.0 GHz+ single-core or dual-core<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>Graphics:</strong> 128MB dedicated graphics processor with shader model 2 support (e.g. NVIDIA GeForce FX 5600 or ATi Radeon 9600)<br></li><li><strong>DirectX:</strong> Version 9.0<br></li><li><strong>Storage:</strong> 1500 MB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible audio card</li></ul>`,
    publishers: ["RockGame S.A."],
    price: 765,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_e44ecd2ba5f90465856b1736e5f50384663c0cc2.600x338.jpg?t=1690827843",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_e44ecd2ba5f90465856b1736e5f50384663c0cc2.1920x1080.jpg?t=1690827843",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_f031c6c6494f45da61d22246a8c90291942aadeb.600x338.jpg?t=1690827843",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_f031c6c6494f45da61d22246a8c90291942aadeb.1920x1080.jpg?t=1690827843",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_dc1d61a1a59207b11490a8b4eeff59e45828c94b.600x338.jpg?t=1690827843",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_dc1d61a1a59207b11490a8b4eeff59e45828c94b.1920x1080.jpg?t=1690827843",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_7ce844ae71358af57c276751bdb0db3117fd37a5.600x338.jpg?t=1690827843",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_7ce844ae71358af57c276751bdb0db3117fd37a5.1920x1080.jpg?t=1690827843",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_ef9f0ac712878ff86f08ff6babacd3f695a56354.600x338.jpg?t=1690827843",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_ef9f0ac712878ff86f08ff6babacd3f695a56354.1920x1080.jpg?t=1690827843",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_7d7576c6ad8512942e5b88d3d7c46d8b519a6ee3.600x338.jpg?t=1690827843",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/ss_7d7576c6ad8512942e5b88d3d7c46d8b519a6ee3.1920x1080.jpg?t=1690827843",
      },
    ],
    movies: [
      {
        id: 256932814,
        name: "Destructure: Among Debris launch trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256932814/movie.293x165.jpg?t=1677495992",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256932814/movie480_vp9.webm?t=1677495992",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256932814/movie_max_vp9.webm?t=1677495992",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256932814/movie480.mp4?t=1677495992", max: "http://cdn.akamai.steamstatic.com/steam/apps/256932814/movie_max.mp4?t=1677495992" },
        highlight: true,
      },
      {
        id: 256883101,
        name: "Destructure: Among Debris reveal trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256883101/movie.293x165.jpg?t=1677495998",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256883101/movie480_vp9.webm?t=1677495998",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256883101/movie_max_vp9.webm?t=1677495998",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256883101/movie480.mp4?t=1677495998", max: "http://cdn.akamai.steamstatic.com/steam/apps/256883101/movie_max.mp4?t=1677495998" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825210/page_bg_generated_v6b.jpg?t=1690827843",
    keys: ["M3MTNCTs6N4f", "1F3Ap5CWiUMp", "hs0ijoy5Terd"],
    rating_pos: 649,
    rating_neg: 231,
  },
  {
    name: "Haunted Hotel: Silent Waters Collector's Edition",
    detailed_description: `<strong>Elephant Games</strong> proudly present the next installment of the <i>Haunted Hotel</i> series! <br><br>You've woken up in an eerie hotel. You don’t know how you got there, or what's waiting for you.  What starts as a simple search for a way out quickly takes a dark turn as your attempts are thwarted by a malevolent spirit! It's up to you to save yourself and the people trapped with you. Can you uncover the hotel's secrets and escape before it's too late? Find out in this gripping hidden-object puzzle adventure!<br><br>This is a special Collector's Edition release full of exclusive extras you won't find in the standard version. The Collector's Edition includes:<br><br>•	Unlock the mysterious Secret Room.<br>•	Earn achievements to show off your skills!<br>•	Enjoy the game's wallpapers, soundtrack, and more.<br><br>This is a Hidden Object Puzzle Adventure game, meaning a specific genre of story-driven, point &amp; click adventures. Throughout the game, players are tasked to find a list of objects hidden within a particular scene, and to occasionally complete various mini-games/puzzles.`,
    short_description: `You won't enjoy your stay...`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825350/header.jpg?t=1641578392`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 / Windows 8 / Windows 10<br></li><li><strong>Processor:</strong> 1.4 GHz<br></li><li><strong>Memory:</strong> 1024 MB RAM<br></li><li><strong>Storage:</strong> 1300 MB available space</li></ul>`,
    publishers: ["Big Fish Games"],
    price: 129.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "4", description: "Casual" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_fffdc9004466af6ea840d1a0477ed347c564937a.600x338.jpg?t=1641578392",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_fffdc9004466af6ea840d1a0477ed347c564937a.1920x1080.jpg?t=1641578392",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_0e4db3d72d1462c75f020392a5f499a2d20e5030.600x338.jpg?t=1641578392",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_0e4db3d72d1462c75f020392a5f499a2d20e5030.1920x1080.jpg?t=1641578392",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_3593be4f420b679fe5a1ad29591164af85dc3566.600x338.jpg?t=1641578392",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_3593be4f420b679fe5a1ad29591164af85dc3566.1920x1080.jpg?t=1641578392",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_12c91dc0b754374fad60f9605de4f7ae31692be4.600x338.jpg?t=1641578392",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_12c91dc0b754374fad60f9605de4f7ae31692be4.1920x1080.jpg?t=1641578392",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_b9539c8ec753a854030ce7229eb0d4711adb1efc.600x338.jpg?t=1641578392",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_b9539c8ec753a854030ce7229eb0d4711adb1efc.1920x1080.jpg?t=1641578392",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_49b553c3e3be2ffa1d49daa3c9a11eff295ee881.600x338.jpg?t=1641578392",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_49b553c3e3be2ffa1d49daa3c9a11eff295ee881.1920x1080.jpg?t=1641578392",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_183d6f14327add993c53802f4d65ec5bcb634a34.600x338.jpg?t=1641578392",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_183d6f14327add993c53802f4d65ec5bcb634a34.1920x1080.jpg?t=1641578392",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_d9da03b03f4b746487dafa3d68886deb9692e537.600x338.jpg?t=1641578392",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/ss_d9da03b03f4b746487dafa3d68886deb9692e537.1920x1080.jpg?t=1641578392",
      },
    ],
    movies: [
      {
        id: 256867775,
        name: "Haunted Hotel: Silent Waters - Updated Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256867775/movie.293x165.jpg?t=1641475201",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256867775/movie480_vp9.webm?t=1641475201",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256867775/movie_max_vp9.webm?t=1641475201",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256867775/movie480.mp4?t=1641475201", max: "http://cdn.akamai.steamstatic.com/steam/apps/256867775/movie_max.mp4?t=1641475201" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825350/page_bg_generated_v6b.jpg?t=1641578392",
    keys: [
      "BAKmYkjNckz8",
      "5qL24mX14QUo",
      "PuqdPY9K6csV",
      "0iOcjSkzxoSL",
      "EhjkPkzHzO5O",
      "1d2rOsQQ2H3u",
      "elJC5dZNZEVR",
      "QofKecGyOUYG",
      "vtJVbPo0orph",
      "NjiuQGhxCRve",
      "Ep4v3YQLwMYG",
      "zWJClkaaBxC1",
      "JI7Hst6CxAiF",
      "OzIiBqWTsdzY",
      "ASPXNATyP70d",
      "zgCpYV8HAILQ",
      "h3hMZFCVpOlX",
      "BkUzPe1kkTmq",
      "gKdcL9qeYCvb",
      "YFaYx0elfumD",
      "2eGpBsC64ena",
      "VVihjppq1MjQ",
      "XLjfV0VAy8fj",
      "i8AleQ52TCyy",
    ],
    rating_pos: 386,
    rating_neg: 243,
  },
  {
    name: "Auro The Bunny",
    detailed_description: `Auro The Bunny is a game in which you'll control a rabbit who'll have to collect the fruits he finds along the way, avoiding obstacles such as saws, scythes and even lava. Are you ready for this challenge?<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825180/extras/Sem_título-2.png?t=1641715158" /><br><br>This game includes:<br><br>- Three distinct scenarios<br>- Several Obstacles such as Saws, Sickles and even Lava<br>- Many Challenges<br>- Beautiful Soundtrack`,
    short_description: `Auro - The Bunny is a 2D platform game, in which the player will have to go through obstacles in order to catch all the fruits of the levels to win.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825180/header.jpg?t=1641715158`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10 (32/64 bits)<br></li><li><strong>Processor:</strong> Intel Atom Cherry Trail Z8700 ou AMD equivalente<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Placa Gráfica Integrada<br></li><li><strong>Storage:</strong> 140 MB available space<br></li><li><strong>Additional Notes:</strong> Jogável em Controle</li></ul>`,
    publishers: ["Vitor Melo"],
    price: 26.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_6d3cef99e0fd1175ba583f3e2f5374072e933306.600x338.jpg?t=1641715158",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_6d3cef99e0fd1175ba583f3e2f5374072e933306.1920x1080.jpg?t=1641715158",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_cca5b57fe00194648a7999f129e86cfb123a7534.600x338.jpg?t=1641715158",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_cca5b57fe00194648a7999f129e86cfb123a7534.1920x1080.jpg?t=1641715158",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_213766bd4918367819389103edd5ffff43e4b69c.600x338.jpg?t=1641715158",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_213766bd4918367819389103edd5ffff43e4b69c.1920x1080.jpg?t=1641715158",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_d19f441a89ce15da76c305be0393bd69243eb320.600x338.jpg?t=1641715158",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_d19f441a89ce15da76c305be0393bd69243eb320.1920x1080.jpg?t=1641715158",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_a7d7a6e19542f84ca594de2951722ae33ba2cb63.600x338.jpg?t=1641715158",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_a7d7a6e19542f84ca594de2951722ae33ba2cb63.1920x1080.jpg?t=1641715158",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_64be9d6a490fbd0b2db24d7ef9075848cb9f074b.600x338.jpg?t=1641715158",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_64be9d6a490fbd0b2db24d7ef9075848cb9f074b.1920x1080.jpg?t=1641715158",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_d47b2b6238ebb7b46da7ceac06f15a8481595070.600x338.jpg?t=1641715158",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_d47b2b6238ebb7b46da7ceac06f15a8481595070.1920x1080.jpg?t=1641715158",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_1adc69eaa6d3aa11a6132e2b4c0d5adb048cb696.600x338.jpg?t=1641715158",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/ss_1adc69eaa6d3aa11a6132e2b4c0d5adb048cb696.1920x1080.jpg?t=1641715158",
      },
    ],
    movies: [
      {
        id: 256860939,
        name: "Auro The Bunny - Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860939/movie.293x165.jpg?t=1637455312",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860939/movie480_vp9.webm?t=1637455312",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860939/movie_max_vp9.webm?t=1637455312",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860939/movie480.mp4?t=1637455312", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860939/movie_max.mp4?t=1637455312" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825180/page_bg_generated_v6b.jpg?t=1641715158",
    keys: [
      "5cjjw5KZ5Vjj",
      "uuF7UbJ9yXwg",
      "CvtwjEg4F3Lh",
      "IyLGAUnWgWyt",
      "Fv7eYMb3kuy2",
      "N1f6TfWvUaom",
      "HqC4Vtp8vD9p",
      "LOtxUfKg3And",
      "Uh1r1WB0XTJv",
      "eBmFS5UscGmj",
      "lRSOiBxNWinq",
      "IJiPe77wpHtx",
      "9HxD9BoNR7SN",
      "ZCGCC7qjOQlx",
      "OIxlNPPBWcKb",
      "GZMhPtoKUA70",
      "0yh1xyiZ5mfA",
      "IdJYKiC8OIjj",
      "esxaPMnC3SfB",
      "8EOSKPii58gK",
      "uF0SzVitkviZ",
      "TyxmnLhV4jvH",
      "q1uW8Q1cVfjD",
      "lf3QZRQpzAcP",
      "MzmkmEMsN4YX",
      "WoW0ez6wdhPh",
      "jALZcJIYnRAd",
      "jBu5f5zVRjFg",
      "gnKRacPjQSVv",
      "6i751PFVo6Lk",
      "ZJYCHAHsfUxi",
      "YaJwkTePIleI",
      "2PUApGpHYZcm",
      "CTBp1urUMDx1",
      "Wu0qT4rxjaAH",
      "ryJiigVyD6SJ",
      "vKcP8gkPDogt",
      "YyZ0XdpcJnDa",
      "vffr3DMeMJJE",
      "NnRNGmZoVdm7",
    ],
    rating_pos: 357,
    rating_neg: 142,
  },
  {
    name: "Ignis Corruption",
    detailed_description: `<img src="https://cdn.akamai.steamstatic.com/steam/apps/1825130/extras/CollectResourcesNew.gif?t=1687263700" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825130/extras/StoreHeader_ManageResources_en.png?t=1687263700" /><br><ul class="bb_ul"><li><strong>Collect resources</strong> to expand your village, build houses, raise villagers and improve your defense.</li></ul>In ignis corruption, resources act as the base currency for the creation of your world, choose well where you will allocate them or suffer the consequences.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825130/extras/BuildNew.gif?t=1687263700" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825130/extras/StoreHeader_BuildHarvesters_en.png?t=1687263700" /><br><br><ul class="bb_ul"><li>The <strong>strategic positioning</strong> of your buildings is essential to follow a successful path.</li></ul><br>Place extractors for wood, stone, iron and more.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825130/extras/NaturalDisasterNew.gif?t=1687263700" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825130/extras/StoreHeader_Survive_en.png?t=1687263700" /><br><br><ul class="bb_ul"><li><strong>Fighting to survive</strong> is a small part of a much larger task.</li></ul><br>Fight enemies, survive natural disasters, supply your village, send resources, grow your community, locate and destroy the source of evil.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825130/extras/CombatNew.gif?t=1687263700" /><h2 class="bb_tag">Features</h2><ul class="bb_ul"><li>Stylized Graphics<br></li><li>City building system<br></li><li>Unit control system<br></li><li>Resource collection system<br></li><li>Food planting system<br></li><li>Natural disaster system<br></li><li>Classic RTS style camera controls<br></li><li>Library for researching new technologies<br></li><li>Market to trade resources<br></li><li>Quest system<br></li><li>Procedural Map</li></ul><br><a href="https://store.steampowered.com/app/1825130/Ignis_Corruption/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/1825130/Ignis_Corruption/</a>`,
    short_description: `In this Procedural City-Building and Survival game, you must manage your resources, expand your village, assemble an army and destroy the source of evil, which changed the entire eco system of a land that was once prosperous and peaceful.`,
    supported_languages: `English, Portuguese - Brazil`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825130/header.jpg?t=1687263700`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10 (64-Bit)<br></li><li><strong>Processor:</strong> AMD Ryzen 3 2200G (Quad Core 3.0 GHz+)<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> Vega 8 Integrated<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 1 GB available space<br></li><li><strong>Additional Notes:</strong> SSD recommended</li></ul>`,
    publishers: ["Anderson Marques"],
    price: 67.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_c053a7a26e78312d209d9597d68381eb1a5e86da.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_c053a7a26e78312d209d9597d68381eb1a5e86da.1920x1080.jpg?t=1687263700",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_c6528d45aa1368880d9604f3672b70f14466f65d.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_c6528d45aa1368880d9604f3672b70f14466f65d.1920x1080.jpg?t=1687263700",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_8e9b731db10572eccb8602ab2d6cd2dec97dbe0f.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_8e9b731db10572eccb8602ab2d6cd2dec97dbe0f.1920x1080.jpg?t=1687263700",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_ff0c817a1b0dc81ef0b332c36628464d903539e9.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_ff0c817a1b0dc81ef0b332c36628464d903539e9.1920x1080.jpg?t=1687263700",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_616790fe9336a15c188d98df172505136e9adf1f.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_616790fe9336a15c188d98df172505136e9adf1f.1920x1080.jpg?t=1687263700",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_31d2b3510afca349bfa7e77699fa0ff67144cdf5.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_31d2b3510afca349bfa7e77699fa0ff67144cdf5.1920x1080.jpg?t=1687263700",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_de690e914a2500edaf8bcf5fe56bda42897d4771.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_de690e914a2500edaf8bcf5fe56bda42897d4771.1920x1080.jpg?t=1687263700",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_ab14f70a53efe018f7666a0fc2af0b7ddc75df79.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_ab14f70a53efe018f7666a0fc2af0b7ddc75df79.1920x1080.jpg?t=1687263700",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_de4784a4204900d9a8221d2b0bd8f0c659755dcb.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_de4784a4204900d9a8221d2b0bd8f0c659755dcb.1920x1080.jpg?t=1687263700",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_a5ec9f78698fbba6d9c7eb2ba828a72d0ded4420.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_a5ec9f78698fbba6d9c7eb2ba828a72d0ded4420.1920x1080.jpg?t=1687263700",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_e449a3134828dfb4823e84b02a63cc5e2b3b58b5.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_e449a3134828dfb4823e84b02a63cc5e2b3b58b5.1920x1080.jpg?t=1687263700",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_19e71cdb94909230e5fb54e88cc9bc430a3c0c94.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_19e71cdb94909230e5fb54e88cc9bc430a3c0c94.1920x1080.jpg?t=1687263700",
      },
      {
        id: 12,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_5c6673225e06b74e92ee13f88615e20a84d02a30.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_5c6673225e06b74e92ee13f88615e20a84d02a30.1920x1080.jpg?t=1687263700",
      },
      {
        id: 13,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_199d93293b03762e4fa0c595462f0c0b4d42982b.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_199d93293b03762e4fa0c595462f0c0b4d42982b.1920x1080.jpg?t=1687263700",
      },
      {
        id: 14,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_a54588ca4abefbe2114f251486453e6ac0865aa1.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_a54588ca4abefbe2114f251486453e6ac0865aa1.1920x1080.jpg?t=1687263700",
      },
      {
        id: 15,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_8fcf4ab99d6b807ba22c81f088280316d1938d00.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_8fcf4ab99d6b807ba22c81f088280316d1938d00.1920x1080.jpg?t=1687263700",
      },
      {
        id: 16,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_f8ef2060428a028795c42389c773489f5b124446.600x338.jpg?t=1687263700",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/ss_f8ef2060428a028795c42389c773489f5b124446.1920x1080.jpg?t=1687263700",
      },
    ],
    movies: [
      {
        id: 256882371,
        name: "Ignis Corruption - Available",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256882371/movie.jpg?t=1650039567",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256882371/movie480_vp9.webm?t=1650039567",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256882371/movie_max_vp9.webm?t=1650039567",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256882371/movie480.mp4?t=1650039567", max: "http://cdn.akamai.steamstatic.com/steam/apps/256882371/movie_max.mp4?t=1650039567" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825130/page_bg_generated_v6b.jpg?t=1687263700",
    keys: [
      "tThrPZQRqo3k",
      "bTxjV8xWhits",
      "BT4Sfyyuw1Np",
      "qQ8DQozbFVMZ",
      "ktzXXXS0eUeJ",
      "otV7pLcj0jfi",
      "67FWPfPoBZJX",
      "skzAaANOePrB",
      "53wVJix9xcIE",
      "H6yKU35eqjaB",
      "0yTqD3n1GZ5E",
      "xFE8x6jd4yDL",
      "mT1QYMHrFsca",
      "Wv2yi5m5uMjm",
      "jkqODccq8oFi",
      "TxIJtVpOAe2B",
      "xvg1iNArcej8",
      "prrsMBfcIBDP",
      "NFPMJmAFc9Ey",
      "Ys2tiKokHMWF",
      "gEcVIrQziqBp",
      "XJLpZ4cJCSSk",
      "dis6K7lagJ4T",
      "r6kigscPnFIj",
      "WawHzmaZl5YE",
      "7KUTSxFeaSz2",
      "9PgQOjCru1LL",
      "1Is9ikCWK5lb",
      "Qg6dHjIqU0fS",
      "nNOcHISDQirP",
      "jEBCJCOEjl0n",
      "Com9U8jlDndA",
      "Tf6sMYUA4OUP",
      "J6V8GtPJWy8e",
    ],
    rating_pos: 327,
    rating_neg: 270,
  },
  {
    name: "Pixel Game Maker Series MEDIUM-NAUT",
    detailed_description: `<h1>Created with Pixel Game Maker MV!</h1><p><a href="https://store.steampowered.com/app/837510/Pixel_Game_Maker_MV/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/837510/Pixel_Game_Maker_MV/</a></p><br><h1>About the Game</h1>An exploratory sci-fi horror action game by Naramura Takumi of LA-MULANA!<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825850/extras/MEDIUM-NAUT_Search.gif?t=1640144135" /><br><br><strong>【STORY】</strong><br>The space pioneer ship Ostracida has crashed on an uncharted planet, but the survey team that went to rescue the survivors was unable to enter the ship and return.<br>They were unable to enter the ship due to psychic phenomena.<br>So they ask a psychic medium, &quot;Yumi Kisara spiritist&quot; to investigate the crashed ship.<br>The objective is to recover the ID chips of the passengers and investigate the ship, but it seems that there is &quot;something&quot; lurking that cannot be easily solved.<br>Fingers crossed for consideration!<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825850/extras/MEDIUM-NAUT_OP_en.gif?t=1640144135" /><br><br><strong>【SYSTEM】</strong><br>By acquiring various items on the ship, you can change your attack methods and expand your range of action.<br><br>However, in order to acquire items, you must give up your HP (physical strength) as compensation.<br>If you proceed without thinking, your HP will quickly dwindle and you will be killed by the slightest enemy attack.<br>Play the game repeatedly and make choices that suit your style.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825850/extras/MEDIUM-NAUT_SS05_en_s.jpg?t=1640144135" /><br><br><strong>【INVESTIGATION】</strong><br>The souls of the crew are still on board.<br>By talking to them, you can obtain items and collect ID chips, and by obtaining ID chips, you can enter their private rooms.<br>There are also reports from Dr. Simon and personal records of the crew, so you can investigate what happened on the ship.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825850/extras/MEDIUM-NAUT_SS07_en_s.jpg?t=1640144135" /><br><br>&quot;Pixel Game Maker Series&quot; is a series where you can enjoy games created using the action game production software &quot; Pixel Game Maker MV&quot;.`,
    short_description: `There is no right answer to choose. Will you be able to solve the mystery of the crashed pioneer ship?`,
    supported_languages: `English, Japanese`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825850/header.jpg?t=1640144135`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> WindowsR 8/8.1/10 (64bit)<br></li><li><strong>Processor:</strong> Intel Core2 Duo 2.0GHz or better<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> DirectX 9/OpenGL 4.1 capable GPU<br></li><li><strong>DirectX:</strong> Version 9.0<br></li><li><strong>Storage:</strong> 350 MB available space</li></ul>`,
    publishers: ["Gotcha Gotcha Games"],
    price: 1050,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_987df9c6d0c4dcb7a7afebb4a8c3d0c38d789e44.600x338.jpg?t=1640144135",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_987df9c6d0c4dcb7a7afebb4a8c3d0c38d789e44.1920x1080.jpg?t=1640144135",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_5f49b70b9554db741bdaff5c05a0765f66fa79f3.600x338.jpg?t=1640144135",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_5f49b70b9554db741bdaff5c05a0765f66fa79f3.1920x1080.jpg?t=1640144135",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_6314e3423bcb6988c06f49da7126ac28a4793419.600x338.jpg?t=1640144135",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_6314e3423bcb6988c06f49da7126ac28a4793419.1920x1080.jpg?t=1640144135",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_23ca88590ba2cf727cdcceb77196346a9301d002.600x338.jpg?t=1640144135",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_23ca88590ba2cf727cdcceb77196346a9301d002.1920x1080.jpg?t=1640144135",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_f1731e047b6f5349af8cd318c7a973f352ab9092.600x338.jpg?t=1640144135",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_f1731e047b6f5349af8cd318c7a973f352ab9092.1920x1080.jpg?t=1640144135",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_d9fc28b11b2bd287e1902d16d5f7f503263564c7.600x338.jpg?t=1640144135",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_d9fc28b11b2bd287e1902d16d5f7f503263564c7.1920x1080.jpg?t=1640144135",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_c6f974dd8ee7b89f33c6c6d00f3edf59b4e75255.600x338.jpg?t=1640144135",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_c6f974dd8ee7b89f33c6c6d00f3edf59b4e75255.1920x1080.jpg?t=1640144135",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_f6fbd1d76cf85debf1b3dfcdd714cef9489c58e4.600x338.jpg?t=1640144135",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/ss_f6fbd1d76cf85debf1b3dfcdd714cef9489c58e4.1920x1080.jpg?t=1640144135",
      },
    ],
    movies: [
      {
        id: 256863039,
        name: "211202en2",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256863039/movie.293x165.jpg?t=1638500507",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256863039/movie480_vp9.webm?t=1638500507",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256863039/movie_max_vp9.webm?t=1638500507",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256863039/movie480.mp4?t=1638500507", max: "http://cdn.akamai.steamstatic.com/steam/apps/256863039/movie_max.mp4?t=1638500507" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825850/page_bg_generated_v6b.jpg?t=1640144135",
    keys: [
      "srcn0zqimKnQ",
      "QpFfn8Xpf5Zl",
      "2lWWEkO9QJBe",
      "IjSRyzplczCC",
      "k27NNP159BJg",
      "H5Edf8xEguFh",
      "vLVXSk2Zs72O",
      "ldER7fF1dmIA",
      "FoOvDNO7J74v",
      "YfNGcWGleO3v",
      "159LDXVs1fMT",
      "ufLu7xR73bl9",
      "f46WAG02IFYF",
      "89UOa6HojdRZ",
      "0wjld3J43Y1a",
      "ddVykJo6ZCcK",
      "eM1xyHHyT1zm",
      "umfrCYEtttwt",
      "e3XEPCpQvhXH",
      "6glUVJNfbOid",
      "vttqEapYi4d2",
      "5lfm43b8YVGt",
      "jkfXFWZ6pCbX",
      "ixcdGYL7MTpJ",
      "MOkMkQAT97Gd",
      "8F4D66ru2rvl",
      "ELQoLUFExGie",
      "ZjE3wD5V5Gqd",
      "7zol8RJQJw69",
      "djaDHqd6pH40",
      "Dv1aCO4BymBw",
      "h22YFe3VGcuY",
      "n4JEKdOosJX9",
      "HxVEVVepnNDS",
      "8QOyaEYUyRO7",
    ],
    rating_pos: 573,
    rating_neg: 287,
  },
  {
    name: "The Backrooms",
    detailed_description: `<img src="https://cdn.akamai.steamstatic.com/steam/apps/1825160/extras/Water_Attack.gif?t=1681583809" /><br>The Backrooms is a survival horror game set in one of the most terrifying environments of the human psyche. Navigate through to backrooms of an old office complex and remember the terror you experienced as a child.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825160/extras/HallwayFlyby.gif?t=1681583809" />.<br>A single player horror survival game that places you in a maze of rooms and hallways with terrifying creatures. Run through a dozen unique rooms to stay alive as long as possible... and maybe even escape. Keep your camcorder ready to capture some of the horrors of The Backrooms. Maybe the next unfortunate soul will find the recordings... for better or worse.`,
    short_description: `The Backrooms is a first person survival horror game set in one of the most terrifying environments of the human psyche. Explore an ever evolving nightmare while running from terrifying creatures to stay alive.`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825160/header.jpg?t=1681583809`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 (64-bit)<br></li><li><strong>Processor:</strong> 2 GHz Quad-Core<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GTX 750<br></li><li><strong>DirectX:</strong> Version 12<br></li><li><strong>Storage:</strong> 1 GB available space<br></li><li><strong>Sound Card:</strong> NA</li></ul>`,
    publishers: ["Ionized Games"],
    price: 400,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
      { id: "70", description: "Early Access" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_729412e6bb393405b49aa9aaf0be683e6a8e2cdb.600x338.jpg?t=1681583809",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_729412e6bb393405b49aa9aaf0be683e6a8e2cdb.1920x1080.jpg?t=1681583809",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_49b4690290c30354a06b98b1cae5966e58e9d93f.600x338.jpg?t=1681583809",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_49b4690290c30354a06b98b1cae5966e58e9d93f.1920x1080.jpg?t=1681583809",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_2f57347a0c67e5aba19c6118f37868cfa7d07a45.600x338.jpg?t=1681583809",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_2f57347a0c67e5aba19c6118f37868cfa7d07a45.1920x1080.jpg?t=1681583809",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_abd0952cf9858a2ff5433660800f75010634300f.600x338.jpg?t=1681583809",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_abd0952cf9858a2ff5433660800f75010634300f.1920x1080.jpg?t=1681583809",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_50981eee5658e5b4dbc9564f4282183ea0c88ab8.600x338.jpg?t=1681583809",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_50981eee5658e5b4dbc9564f4282183ea0c88ab8.1920x1080.jpg?t=1681583809",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_605192ba347cb364b36ec71326b2767ea734cad8.600x338.jpg?t=1681583809",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_605192ba347cb364b36ec71326b2767ea734cad8.1920x1080.jpg?t=1681583809",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_95c903d82ba30c0f014d68a3c0618e6cc1ed6b73.600x338.jpg?t=1681583809",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/ss_95c903d82ba30c0f014d68a3c0618e6cc1ed6b73.1920x1080.jpg?t=1681583809",
      },
    ],
    movies: [
      {
        id: 256908860,
        name: "MainTrailer_01",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256908860/movie.293x165.jpg?t=1665537644",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256908860/movie480_vp9.webm?t=1665537644",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256908860/movie_max_vp9.webm?t=1665537644",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256908860/movie480.mp4?t=1665537644", max: "http://cdn.akamai.steamstatic.com/steam/apps/256908860/movie_max.mp4?t=1665537644" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825160/page_bg_generated_v6b.jpg?t=1681583809",
    keys: [
      "IiwMUVNCsCwF",
      "IOcyFLCVo0BI",
      "cfbCK7lxMPCl",
      "ERSpLJWrgfxe",
      "D6PDXteCIh7B",
      "VDmVl0OlMZxj",
      "WSbRqv0vElHi",
      "4ruyoz50ZUYh",
      "ivWxHSg7n4Z9",
      "ZY4W8RGjudXf",
      "VFLFhU9Qyyvy",
      "KnXV0glylnuo",
      "zI1j6InkVevg",
    ],
    rating_pos: 232,
    rating_neg: 188,
  },
  {
    name: "Santa's Slippery Slope (Ski Stunts)",
    detailed_description: `<h1>Buy now!</h1><p>You wont want to miss it for the holidays!</p><br><h1>About the Game</h1>A skiing experience like no other with a unique control system and purely physics driven gameplay. Join Santa in this exciting physics-based journey on the slopes to get back all of the lost presents and save Christmas before its too late!<br><br><strong>FEATURES:</strong><br>• Tons of levels each with multiple unique challenges to conquer, supplying hours upon hours of gameplay and loads of replay value!<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825670/extras/ezgif-4-ac57b5c795c7.gif?t=1640028545" /><br><br>• Open over-world with non-linear level progression, struggling on one level? Simply go try another and come back later!<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825670/extras/ezgif-4-162d5a5258ce.gif?t=1640028545" /><br><br>• Excellent graphics and optimized performance allowing the game to look great and still run on low end devices with integrated graphics! <br><br>• Realistic physics give you precise control over skiing Santa!<br><br>• Intuitive controls allow anyone to pick up and play, but require dedication to master!<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825670/extras/ezgif-4-662f277762b3.gif?t=1640028545" /><br><br>• Hilarious rag-doll bails, funny sounds, and goofy physics!<br><br>• Challenging but rewarding gameplay. The road ahead wont be easy, but it feels great when you conquer each level!<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825670/extras/ezgif-4-439ee06b0ea7.gif?t=1640028545" /><br><br>• Unique level design, with challenging hills, jumps, loops and physics based obstacles!<br><br>• Packed with holiday cheer, winter vibes, and seasonal excitement!`,
    short_description: `A skiing experience like no other with a unique control system and purely physics driven gameplay. Join Santa in this exciting physics-based journey on the slopes to get back all of the lost presents and save Christmas before its too late!`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825670/header.jpg?t=1640028545`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> 2.5ghz<br></li><li><strong>Memory:</strong> 6 GB RAM<br></li><li><strong>Graphics:</strong> AMD Vega 6 iGPU, Intel Iris xe iGPU<br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>`,
    publishers: ["Hondune Games"],
    price: 94.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "28", description: "Simulation" },
      { id: "18", description: "Sports" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_4aab9164343347f1d242100e58b409ad1dc6c393.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_4aab9164343347f1d242100e58b409ad1dc6c393.1920x1080.jpg?t=1640028545",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_fd265808d26f6b050849e9b665eff29cc8f2384d.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_fd265808d26f6b050849e9b665eff29cc8f2384d.1920x1080.jpg?t=1640028545",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_76af762fdeae506553ead86cd98a8097cea88001.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_76af762fdeae506553ead86cd98a8097cea88001.1920x1080.jpg?t=1640028545",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_40c3ec5925d76963245480b4c880e02e51f9848c.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_40c3ec5925d76963245480b4c880e02e51f9848c.1920x1080.jpg?t=1640028545",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_0854ce82f47fe40c8a5dab0476e5f403fec0b750.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_0854ce82f47fe40c8a5dab0476e5f403fec0b750.1920x1080.jpg?t=1640028545",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_86e19012a3c6744e622f3c681f8aaa2d064dfbe6.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_86e19012a3c6744e622f3c681f8aaa2d064dfbe6.1920x1080.jpg?t=1640028545",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_ee77f53db5bc594dcca3da1690374dbb78d48eaf.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_ee77f53db5bc594dcca3da1690374dbb78d48eaf.1920x1080.jpg?t=1640028545",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_6acca656471d6aa63f05b94ee713e065fb061d1f.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_6acca656471d6aa63f05b94ee713e065fb061d1f.1920x1080.jpg?t=1640028545",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_14138c7e5e4056c7fff7e46f1d9dcbf77ba7255e.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_14138c7e5e4056c7fff7e46f1d9dcbf77ba7255e.1920x1080.jpg?t=1640028545",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_96afa07c8b8bad2336a589b40c86879a0d9960c9.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_96afa07c8b8bad2336a589b40c86879a0d9960c9.1920x1080.jpg?t=1640028545",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_f701dcb408d26712eb23893fa724a508ed9484f8.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_f701dcb408d26712eb23893fa724a508ed9484f8.1920x1080.jpg?t=1640028545",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_7463e5c1df50f9a44d30c939463ece67e46c57da.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_7463e5c1df50f9a44d30c939463ece67e46c57da.1920x1080.jpg?t=1640028545",
      },
      {
        id: 12,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_1da3296eaa6a9c739c9cd4a35ef2d59c512fcdde.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_1da3296eaa6a9c739c9cd4a35ef2d59c512fcdde.1920x1080.jpg?t=1640028545",
      },
      {
        id: 13,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_8fdea12a0617d5769715aca7d89a8d739b3fdd86.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_8fdea12a0617d5769715aca7d89a8d739b3fdd86.1920x1080.jpg?t=1640028545",
      },
      {
        id: 14,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_f2782c5a8984bc4b5154fc9fdabb78dbfe46defd.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_f2782c5a8984bc4b5154fc9fdabb78dbfe46defd.1920x1080.jpg?t=1640028545",
      },
      {
        id: 15,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_f48de472b0dca84afbdea2df7b3ab065b96befe8.600x338.jpg?t=1640028545",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/ss_f48de472b0dca84afbdea2df7b3ab065b96befe8.1920x1080.jpg?t=1640028545",
      },
    ],
    movies: [
      {
        id: 256862731,
        name: "Santa's Slippery Slope Official Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256862731/movie.293x165.jpg?t=1638505262",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256862731/movie480_vp9.webm?t=1638505262",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256862731/movie_max_vp9.webm?t=1638505262",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256862731/movie480.mp4?t=1638505262", max: "http://cdn.akamai.steamstatic.com/steam/apps/256862731/movie_max.mp4?t=1638505262" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825670/page_bg_generated_v6b.jpg?t=1640028545",
    keys: [
      "vtEGtDvkjVN9",
      "EWi6dNFs34pS",
      "9nUXnSn7lCxB",
      "XMRSp9QoePTX",
      "a7lImrUE1t48",
      "h0OcTD3E6wyw",
      "AZKmd7DsKRLE",
      "Jz1KcN0WLEt3",
      "xPrbXmyG00lT",
      "H5zyHKqyeNfE",
      "2NoZ6RzHZ25q",
      "xKo9vo0BtQ5M",
      "vncApnYZD7rs",
      "SuaA9Nv1Z2lT",
      "B6bps9ApivOF",
      "ll9uEW4D9RhR",
      "1oX32tgH7Jfh",
      "6eykfccFHIgb",
      "kcUNi1Du6XYK",
      "KMNpKcDhTx0A",
      "jxDk3POr9yv2",
      "GK7ukRvR4Jyq",
      "CA1I2lBTIurA",
      "LNUZD0Bdec4c",
      "5OvwdyEQxr3m",
      "NKMbMf5niOzG",
      "V7KaJk26okbA",
      "8nc7EgAeEqY1",
      "P63tgYaOcZdU",
      "iG3nhk56EKh7",
      "H3MsedrKUJ9S",
      "i03Gp0pNfoKy",
      "siTCNPHoZuUw",
      "h6uEtA6LqWqF",
      "3HArb3ibdJjn",
      "an35U18RPyZ4",
      "fRPBgTgMnvCd",
    ],
    rating_pos: 481,
    rating_neg: 99,
  },
  {
    name: "Little Sparks",
    detailed_description: `Little Sparks is a casual game where you're trying to capture more fireflies of different colors than your AI opponent does. It's a thinky turn-based game in which you get three actions per turn and use them to lay and destroy electric walls hoping to catch the different fireflies and add them to your jar. It's not about having the most fireflies overall but the most of the most different colors.<br />
    <br />
    Each type of fly rewards the player who caught it with different special abilities: extra actions, bubble freeze, lanterns, and bringing in the love bug. These bonuses must be strategically used at the right times to capture the most bugs.`,
    short_description: `A puzzle game about fireflies`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825530/header.jpg?t=1640291518`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Microsoft Windows 7<br></li><li><strong>Processor:</strong> 1.7Ghz or Higher<br></li><li><strong>Memory:</strong> 256 MB RAM<br></li><li><strong>Storage:</strong> 50 MB available space</li></ul>`,
    publishers: ["Offbit Studios LLC"],
    price: 39.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_a5f897e08b1298aa025e5a3b0db39be287c03d7e.600x338.jpg?t=1640291518",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_a5f897e08b1298aa025e5a3b0db39be287c03d7e.1920x1080.jpg?t=1640291518",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_d5d65c084f37e7b4571eb01602a7d843055fc276.600x338.jpg?t=1640291518",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_d5d65c084f37e7b4571eb01602a7d843055fc276.1920x1080.jpg?t=1640291518",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_c26f4e7641f8d6c5fac879d7a28e50d0a588056d.600x338.jpg?t=1640291518",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_c26f4e7641f8d6c5fac879d7a28e50d0a588056d.1920x1080.jpg?t=1640291518",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_34d7518c0311d3de94a18a1dca6a02b7c1caa936.600x338.jpg?t=1640291518",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_34d7518c0311d3de94a18a1dca6a02b7c1caa936.1920x1080.jpg?t=1640291518",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_92de66e2baea46076b471c3dd6f78a4c89d7dc8a.600x338.jpg?t=1640291518",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/ss_92de66e2baea46076b471c3dd6f78a4c89d7dc8a.1920x1080.jpg?t=1640291518",
      },
    ],
    movies: [
      {
        id: 256862617,
        name: "Gameplay",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256862617/movie.293x165.jpg?t=1638979746",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256862617/movie480_vp9.webm?t=1638979746",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256862617/movie_max_vp9.webm?t=1638979746",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256862617/movie480.mp4?t=1638979746", max: "http://cdn.akamai.steamstatic.com/steam/apps/256862617/movie_max.mp4?t=1638979746" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825530/page_bg_generated_v6b.jpg?t=1640291518",
    keys: [
      "VemSPQiPv2vi",
      "JSUid1FwoSH3",
      "YH8EszrGDQTx",
      "DMNAAd4aPvY5",
      "0roIzHjc2BRM",
      "vUoypcDNSFFB",
      "RtpkGP5UTTj3",
      "ww2O434fJARD",
      "OQpF9sKWjevy",
      "us7dHunUgxwF",
      "L1cwOQL75O88",
      "smBPPX5a5gLg",
      "NPLzT2x53J2h",
      "MGN62nFXZ5dy",
      "D6rFGEKLwjKY",
    ],
    rating_pos: 546,
    rating_neg: 149,
  },
  {
    name: "Lupa",
    detailed_description: `From an aspiring indie game developer comes Lupa. A beautiful stylized polygon 3rd-person exploration game. With a semi-open world and the story inspired by Roman mythology. Lupa is a She-Wolf and she is the mother of two little cubs. As the winter is about over she wakes up in her cave and can't seem to find her entire pack! She goes looking for them. This is where you as a player come in. You accompany Lupa in this beautiful world full of Vegetation and Life. Help Lupa find her missing pack and her two little cubs. And uncover secrets along the way...<h2 class="bb_tag"><strong>Key features:</strong></h2><ul class="bb_ul"> <li> For people who like Journey, The First Tree, Spirit of the North, and Lost Ember.<br></li><li> A relaxing story-based game with a semi-open world.<br></li><li> Colorful biomes, forests, snow, and roaming wildlife.<br></li><li> Short game (About an hour) depends on how much you explore the world</li></ul><br>There is sadly no controller support.`,
    short_description: `A beautiful stylized polygon 3rd-person exploration game, with a semi-open world and a beautiful She-Wolf, called Lupa who is looking for her missing pack and her two little cubs. With a story inspired by Roman mythology. Join Lupa in this beautiful world and her journey!`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825310/header.jpg?t=1655998419`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP2+<br></li><li><strong>Processor:</strong> 2.4Ghz CPU Dual Core<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Geforce GTX 970 / Radeon RX 580 with 4GB Memory<br></li><li><strong>Storage:</strong> 3 GB available space<br></li><li><strong>Sound Card:</strong> DirectX compatible sound card</li></ul>`,
    publishers: ["LbGamess"],
    price: 139.99,
    platforms: { windows: true, mac: true, linux: true },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_839f2c7662cf70cab30c86beedf988649e307d09.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_839f2c7662cf70cab30c86beedf988649e307d09.1920x1080.jpg?t=1655998419",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_eed215e9970ce7216da7690b307de4e63cffc173.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_eed215e9970ce7216da7690b307de4e63cffc173.1920x1080.jpg?t=1655998419",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_e3742d4217964ae81f96bcabb3395e07ede5a075.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_e3742d4217964ae81f96bcabb3395e07ede5a075.1920x1080.jpg?t=1655998419",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_11f6241fc4ff30532ddf7f583de983e64898d150.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_11f6241fc4ff30532ddf7f583de983e64898d150.1920x1080.jpg?t=1655998419",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_f8b376d5d21eaeaefed07cf63676a846474d6d07.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_f8b376d5d21eaeaefed07cf63676a846474d6d07.1920x1080.jpg?t=1655998419",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_7bcec8afb71ba5ca36f92185294fa85c312b340b.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_7bcec8afb71ba5ca36f92185294fa85c312b340b.1920x1080.jpg?t=1655998419",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_623b0e3c6f0e1175972e63205bbdfaf6eedd92fd.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_623b0e3c6f0e1175972e63205bbdfaf6eedd92fd.1920x1080.jpg?t=1655998419",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_2319ff45b5a0edf5591f48b1d9b01df0e522c15d.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_2319ff45b5a0edf5591f48b1d9b01df0e522c15d.1920x1080.jpg?t=1655998419",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_7083e439f3a1af2b8a30d49ef37a3373440ff61a.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_7083e439f3a1af2b8a30d49ef37a3373440ff61a.1920x1080.jpg?t=1655998419",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_c559faae982fd105104427b648d01c0fde1e04cb.600x338.jpg?t=1655998419",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/ss_c559faae982fd105104427b648d01c0fde1e04cb.1920x1080.jpg?t=1655998419",
      },
    ],
    movies: [
      {
        id: 256868914,
        name: "Trailer_1",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256868914/movie.293x165.jpg?t=1648146910",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256868914/movie480_vp9.webm?t=1648146910",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256868914/movie_max_vp9.webm?t=1648146910",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256868914/movie480.mp4?t=1648146910", max: "http://cdn.akamai.steamstatic.com/steam/apps/256868914/movie_max.mp4?t=1648146910" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825310/page_bg_generated_v6b.jpg?t=1655998419",
    keys: [
      "KVluU3EDRN6u",
      "7FeakGvEwxNS",
      "aLsgdVxLkfb0",
      "dyisvYeTy3FA",
      "DJuRon2cB7Qa",
      "skquEPLXcWZu",
      "57WJ9eUSYAjk",
      "7ApCKcu4Huly",
      "EqQAO5W7ynwI",
      "S3X47i1k3Cxb",
      "SySqFrv0O0p5",
      "mXUV1GgqLRP1",
      "aDjfXiZyCEdY",
      "2Cyxr8aZ2QI2",
      "sWvc4czSm16f",
      "TuV13zXQy1cN",
      "EswYJ9A3U8IB",
      "ShUv83BxQEHF",
      "Kh0YgBY98SZ3",
    ],
    rating_pos: 637,
    rating_neg: 136,
  },
  {
    name: "ChickenZ",
    detailed_description: `<h1>ADD DOGGERFALL TO YOUR WISHLIST</h1><p><a href="https://store.steampowered.com/app/2232130/Doggerfall/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/2232130/Doggerfall/</a></p><br><h1>About the Game</h1><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825910/extras/Follow.gif?t=1681624836" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825910/extras/2.gif?t=1681624836" /><br><br><strong>ChickenZ</strong> is an arena shooter where you have to fight in a post-apocalyptic location against crowds of angry zombies that will try to eat you. After each wave, choose improvements, destroy as many terrible brain-eaters as possible and save yourself from this zombie madness. The game offers a varied selection of weapons, upgrades, and interesting arenas for battling the dead.`,
    short_description: `ChickenZ is an arena shooter where you have to fight in a post-apocalyptic location against crowds of angry zombies that will try to eat you.`,
    supported_languages: `English<strong>*</strong>, French<strong>*</strong>, Italian<strong>*</strong>, German<strong>*</strong>, Spanish - Spain<strong>*</strong>, Arabic<strong>*</strong>, Bulgarian<strong>*</strong>, Portuguese - Brazil<strong>*</strong>, Hungarian<strong>*</strong>, Vietnamese<strong>*</strong>, Greek<strong>*</strong>, Danish<strong>*</strong>, Spanish - Latin America<strong>*</strong>, Traditional Chinese<strong>*</strong>, Simplified Chinese<strong>*</strong>, Korean<strong>*</strong>, Dutch<strong>*</strong>, Norwegian<strong>*</strong>, Polish<strong>*</strong>, Portuguese - Portugal<strong>*</strong>, Romanian<strong>*</strong>, Russian<strong>*</strong>, Thai<strong>*</strong>, Turkish<strong>*</strong>, Ukrainian<strong>*</strong>, Finnish<strong>*</strong>, Czech<strong>*</strong>, Swedish<strong>*</strong>, Japanese<strong>*</strong>, Azerbaijani<strong>*</strong>, Albanian<strong>*</strong>, Amharic<strong>*</strong>, Armenian<strong>*</strong>, Assamese<strong>*</strong>, Afrikaans<strong>*</strong>, Basque<strong>*</strong>, Belarusian<strong>*</strong>, Bangla<strong>*</strong>, Bosnian<strong>*</strong>, Valencian<strong>*</strong>, Welsh<strong>*</strong>, Wolof<strong>*</strong>, Galician<strong>*</strong>, Georgian<strong>*</strong>, Gujarati<strong>*</strong>, Dari<strong>*</strong>, Zulu<strong>*</strong>, Hebrew<strong>*</strong>, Igbo<strong>*</strong>, Indonesian<strong>*</strong>, Irish<strong>*</strong>, Icelandic<strong>*</strong>, Yoruba<strong>*</strong>, Kazakh<strong>*</strong>, Kannada<strong>*</strong>, Catalan<strong>*</strong>, Quechua<strong>*</strong>, Kinyarwanda<strong>*</strong>, K'iche'<strong>*</strong>, Konkani<strong>*</strong>, Xhosa<strong>*</strong>, Khmer<strong>*</strong>, Kyrgyz<strong>*</strong>, Latvian<strong>*</strong>, Lithuanian<strong>*</strong>, Luxembourgish<strong>*</strong>, Macedonian<strong>*</strong>, Malay<strong>*</strong>, Malayalam<strong>*</strong>, Maltese<strong>*</strong>, Maori<strong>*</strong>, Marathi<strong>*</strong>, Mongolian<strong>*</strong>, Nepali<strong>*</strong>, Odia<strong>*</strong>, Punjabi (Gurmukhi)<strong>*</strong>, Punjabi (Shahmukhi)<strong>*</strong>, Persian<strong>*</strong>, Serbian<strong>*</strong>, Sotho<strong>*</strong>, Sinhala<strong>*</strong>, Sindhi<strong>*</strong>, Slovak<strong>*</strong>, Slovenian<strong>*</strong>, Sorani<strong>*</strong>, Swahili<strong>*</strong>, Tajik<strong>*</strong>, Tamil<strong>*</strong>, Tatar<strong>*</strong>, Telugu<strong>*</strong>, Tigrinya<strong>*</strong>, Tswana<strong>*</strong>, Turkmen<strong>*</strong>, Uzbek<strong>*</strong>, Uyghur<strong>*</strong>, Urdu<strong>*</strong>, Filipino<strong>*</strong>, Hausa<strong>*</strong>, Hindi<strong>*</strong>, Croatian<strong>*</strong>, Cherokee<strong>*</strong>, Scots<strong>*</strong>, Estonian<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825910/header.jpg?t=1681624836`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8.1/10<br></li><li><strong>Processor:</strong> Intel Core 2 Duo E6320 (2*1866) or equivalent<br></li><li><strong>Memory:</strong> 1024 MB RAM<br></li><li><strong>Graphics:</strong> GTX 1030 TI<br></li><li><strong>Storage:</strong> 30 MB available space</li></ul>`,
    publishers: ["galesoozka"],
    price: 179.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "28", description: "Simulation" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_0856c6c001e9be7694b16177a23889cc283ccfd5.600x338.jpg?t=1681624836",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_0856c6c001e9be7694b16177a23889cc283ccfd5.1920x1080.jpg?t=1681624836",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_8dde96a88085745831b551db22a53c00a915854f.600x338.jpg?t=1681624836",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_8dde96a88085745831b551db22a53c00a915854f.1920x1080.jpg?t=1681624836",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_ef47a6e7a4dab4a6bea998fa6ebf3f194cc9204a.600x338.jpg?t=1681624836",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_ef47a6e7a4dab4a6bea998fa6ebf3f194cc9204a.1920x1080.jpg?t=1681624836",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_eeb534a733e04e220ebccf49ba22dd4b9459b79c.600x338.jpg?t=1681624836",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_eeb534a733e04e220ebccf49ba22dd4b9459b79c.1920x1080.jpg?t=1681624836",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_3ebe4c81d8cbca73681da5a74c28be04020127d2.600x338.jpg?t=1681624836",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/ss_3ebe4c81d8cbca73681da5a74c28be04020127d2.1920x1080.jpg?t=1681624836",
      },
    ],
    movies: [
      {
        id: 256861002,
        name: "ChickenZ",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861002/movie.293x165.jpg?t=1637341663",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861002/movie480_vp9.webm?t=1637341663",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861002/movie_max_vp9.webm?t=1637341663",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861002/movie480.mp4?t=1637341663", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861002/movie_max.mp4?t=1637341663" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825910/page_bg_generated_v6b.jpg?t=1681624836",
    keys: ["qYDoukxKJJdI", "8bKI9dYhshhh", "Cognczqbg0bn"],
    rating_pos: 415,
    rating_neg: 256,
  },
  {
    name: "SOTANO - Mystery Escape Room Adventure",
    detailed_description: `<h2 class="bb_tag">SOTANO - Mystery Escape Room Adventure</h2><br>Driving home from the airport you glance at your fuel gauge and notice the needle is hitting the red line. Starting to feel tired you decide to take a little known short cut through a quiet village, the shorter drive will save fuel rather than stopping to fill up. <br><br>“It’ll be fine, I just want to get home” you say to yourself.<br><br>Passing some of the large old houses the car begins to make some strange noises and you realise you have pushed your luck, rolling slowly to a halt in front of one of the largest houses on the street. How embarrassing.<br>You decide to swallow your pride and knock the door for help. <br><br>“Maybe a house this size might keep fuel for sit on mowers and generators.” You think, hopefully, to yourself.<br><br>Moments after knocking on the door your world turns black and you find yourself waking up in the basement, reading a note left by the owner:<br><br>I’m sorry you have found yourself waking up here but you were snooping on my property and I was alerted to your presence. <br><br>I will be back shortly. <br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826300/extras/1.png?t=1650111486" /><br><br>You will find the door to your room locked. Don’t be alarmed, this is for your own safety as my home has many unconventional contraptions that might otherwise ‘confuse’ you.<br><br>Feel free to look around, although I apologise for the rather limited decor.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826300/extras/2.png?t=1650111486" /><br><br>ABOUT<br><br>Sotano is a first person 3d escape room puzzle adventure, similar to games you may have played in the ’90’s or similar to a virtual escape rooms you may have played. An indoor immersive world that you explore and an inventory where you can collect and use items you find along the way to solve puzzles and escape the rooms.<br><br>Explore areas, collect hidden objects and take in your surroundings. You will need all of your puzzle solving skills to put together a plan to make your way through the house, solving riddles and through the many rooms to escape the house of Sotano.<br><br>How you tackle the puzzles is down to you. Each puzzle has a logical solution, so take your time, there is no rush and enjoy the process of understanding what you have to do.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826300/extras/3.png?t=1650111486" /><br><br>FEATURES<br>• Explore an immersive indoor environment, solving puzzles and collecting items<br>• Use the inventory to collect and use objects<br>• Beautiful all original adventure 3D graphics, environments and atmosphere to explore<br>• Immersive backing soundtrack and effects to pull you into the adventure<br>• Full save system with load slots, manage all controls and sound levels to your preference.<br><br>CONTROLS:<br>Movement: WASD + Mouse<br>Inventory: I<br>Menu: ESC<br><br>HINTS &amp; TIPS<br>If you need a hint or clue while playing Sotano then please reach out over email or social media (contact links can be found on my website) and I will be more than happy to help you.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1826300/extras/4.png?t=1650111486" /><br><br>SMALL PRINT<br>Sotano was created from the imagination of a solo indie developer. <br><br>“I am always excited to hear people playing my games and their experience along the way. Adventure gaming is my passion and your feedback helps my games get better.“<br><br>Sotano is compatible with most modern PC's and has been designed to be as resource efficient as possible to allow play on many different devices. With that said, if you do run into any difficulties please email so I can provide updates that help everyone enjoy the adventure.`,
    short_description: `Sotano is a first person 3d escape room puzzle adventure. Explore areas, collect items and take in your surroundings. You will need all of your puzzle solving skills to put together a plan to make your way through the house, solving riddles and through the many rooms to escape the house of Sotano.`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1826300/header.jpg?t=1650111486`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 SP1+<br></li><li><strong>Processor:</strong> 1.1 GHz Processor<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> Graphics card with DX10<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>`,
    publishers: ["M9 Games"],
    price: 94.99,
    platforms: { windows: true, mac: true, linux: false },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_8d3837718034f02461ca132a94ee0ee3f1507693.600x338.jpg?t=1650111486",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_8d3837718034f02461ca132a94ee0ee3f1507693.1920x1080.jpg?t=1650111486",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_b16a27c575a68656c8360c49f6254a911bb8eae2.600x338.jpg?t=1650111486",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_b16a27c575a68656c8360c49f6254a911bb8eae2.1920x1080.jpg?t=1650111486",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_1adf803bfef9eaae97bfe590501b8e643064b14d.600x338.jpg?t=1650111486",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_1adf803bfef9eaae97bfe590501b8e643064b14d.1920x1080.jpg?t=1650111486",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_4bc12371a982b1bf77e33c8da166a8ed3369cbdd.600x338.jpg?t=1650111486",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_4bc12371a982b1bf77e33c8da166a8ed3369cbdd.1920x1080.jpg?t=1650111486",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_faf394c0087ed2cd9b77a17158e7e2d596269e25.600x338.jpg?t=1650111486",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_faf394c0087ed2cd9b77a17158e7e2d596269e25.1920x1080.jpg?t=1650111486",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_13983d49be651e4fa39b9c6e5e3260723ca38def.600x338.jpg?t=1650111486",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/ss_13983d49be651e4fa39b9c6e5e3260723ca38def.1920x1080.jpg?t=1650111486",
      },
    ],
    movies: [
      {
        id: 256861885,
        name: "Sotano Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861885/movie.293x165.jpg?t=1637770505",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861885/movie480_vp9.webm?t=1637770505",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861885/movie_max_vp9.webm?t=1637770505",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861885/movie480.mp4?t=1637770505", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861885/movie_max.mp4?t=1637770505" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1826300/page_bg_generated_v6b.jpg?t=1650111486",
    keys: [
      "fqzDxecWSmUK",
      "WPorOhAF4XC8",
      "Gux7CxaNnlzm",
      "dLQe771iHg9K",
      "WIrC9BclpAhC",
      "BWqXY9pEmi9N",
      "p7hMsj3LQLi3",
      "WOXy5emOQ2fN",
      "jMKzK4HGX5ve",
      "kqCX9PUq9HCA",
      "25dJt0ktMupV",
      "LNoIqCFbt4oC",
      "X3jg5Xevf1sv",
      "ZZyJQRvTZX6i",
      "mcZxqm6v1wBN",
      "tjYWdJK7z8N4",
      "0l0INtPs0bLt",
      "rCt3fbgPwXE3",
      "Mq3vciz5Rq5W",
      "M78FpdchHtQi",
      "pb9cyXuNp4XT",
      "Gx2VXv9sW6CW",
      "AMdnyRAYoNoT",
      "CAe0hVtr6F7d",
      "jmcs9YfRmhJH",
      "zW7KumTykEoS",
      "E3YnH4HxPyMA",
      "CM6Y0J5WwAUU",
      "vtdE1VBt7Mxj",
      "HloZbrGhNsxR",
      "KldSOAvYGpP7",
      "lgZfGvzPZ4T5",
      "gNx8X1KuWWFz",
      "P3T7pgHE0Fx9",
      "fo5bGFLYXe4F",
      "wPjYKQZIcN3D",
      "Jl3Ru2d2Qj3P",
    ],
    rating_pos: 294,
    rating_neg: 71,
  },
  {
    name: "Maroon Berets: 2030",
    detailed_description: `<h2 class="bb_tag">Narrative</h2>Maroon Berets: 2030 is FPS, TPS, Action-RPG; which simulates the units of Turmenkay special forces in the war, the game is set in the Agriri, Turmenkay as well as some provinces of Arartiah. The rising tensions between counties named Arartiah and Turmenkay lead to a war where special forces of Turmenkay named Maroon Berets are called to the duty to fight against Arartiah. At the same time, Maroon Berets face another threat - the rebels. Witness the adventure of special forces and overcome the challenges for the country and its people!<h2 class="bb_tag">Gameplay</h2><br><ul class="bb_ul"><li>Experience 10+ highly detailed levels with realistic environments.</li></ul><ul class="bb_ul"><li>Realistic gun recoil and muzzle flash system.</li></ul><ul class="bb_ul"><li>Eliminate enemies and gain XP to unlock new weapons!</li></ul><ul class="bb_ul"><li>Change the mouse and keyboard settings as you wish!</li></ul>`,
    short_description: `Maroon Berets: 2030 is FPS, TPS, Action-RPG; which simulates the units of special forces in the war.`,
    supported_languages: `English, Turkish`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825380/header.jpg?t=1673726065`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> 64-bit Windows<br></li><li><strong>Processor:</strong> Intel I5, AMD Ryzen 3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 780<br></li><li><strong>Storage:</strong> 21 GB available space</li></ul>`,
    publishers: ["Maroon Berets: 2030"],
    price: 104.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
      { id: "3", description: "RPG" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_f72a5df845e228f61a1751048c2dd3996d744fe8.600x338.jpg?t=1673726065",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_f72a5df845e228f61a1751048c2dd3996d744fe8.1920x1080.jpg?t=1673726065",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_29cb02e341a92eeafb7420cfbb47faeb09596f6c.600x338.jpg?t=1673726065",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_29cb02e341a92eeafb7420cfbb47faeb09596f6c.1920x1080.jpg?t=1673726065",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_1543f28f10822d804d3090ebfcd5608207c3f720.600x338.jpg?t=1673726065",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_1543f28f10822d804d3090ebfcd5608207c3f720.1920x1080.jpg?t=1673726065",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_c3630ff637910e41a70016f9f7d508eecb7cb742.600x338.jpg?t=1673726065",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_c3630ff637910e41a70016f9f7d508eecb7cb742.1920x1080.jpg?t=1673726065",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_c12aa0b099acf11a25b53945dcea2dc4b48648ae.600x338.jpg?t=1673726065",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_c12aa0b099acf11a25b53945dcea2dc4b48648ae.1920x1080.jpg?t=1673726065",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_0ffd8ddf8353349d14d0f94e6b613aff94a6027f.600x338.jpg?t=1673726065",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_0ffd8ddf8353349d14d0f94e6b613aff94a6027f.1920x1080.jpg?t=1673726065",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_2c38811ca1e83aed59390cefda0f542548316b3e.600x338.jpg?t=1673726065",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/ss_2c38811ca1e83aed59390cefda0f542548316b3e.1920x1080.jpg?t=1673726065",
      },
    ],
    movies: [
      {
        id: 256918106,
        name: "Maroon Berets: 2030 trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256918106/movie.293x165.jpg?t=1669747988",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256918106/movie480_vp9.webm?t=1669747988",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256918106/movie_max_vp9.webm?t=1669747988",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256918106/movie480.mp4?t=1669747988", max: "http://cdn.akamai.steamstatic.com/steam/apps/256918106/movie_max.mp4?t=1669747988" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825380/page_bg_generated_v6b.jpg?t=1673726065",
    keys: [
      "o064zjLA9vmC",
      "frmMdCXmPpkJ",
      "jW8JvUfUCROr",
      "zDK6kldUkIyV",
      "PhoDmYs2LRKU",
      "fyb4BzDnFbmH",
      "ZIzbcmOQjc3p",
      "dWWx7QEjWhCH",
      "AzQYYDpB1U4d",
      "p3TzXCI1UH0l",
      "t2pwpU2N5Fdu",
      "pwtlkLD3rnZX",
      "7APKxzyB38f7",
      "3Wk2MwzcKxJ2",
      "xCXGNSdqI42d",
      "tj3ZpycwMPqv",
      "isHXLS7II8r4",
      "6q1SeRkk8xkR",
      "BEaXCcy9u9UC",
      "32EKv9FQQJvg",
      "lJlLNidzU1LQ",
      "Jb9s1EOxkybB",
      "FQGEJZ0PKyDG",
      "vNq1A4V3xmJ6",
      "R9ENKkVNJdIj",
      "8XQWcxtIrkZn",
      "SokN1EwkDXgk",
      "JqYTquKn77lp",
      "2k27kdzxeVoa",
      "bTDGI4hq1dLV",
      "gEfaD6pyG4xS",
      "fwE83iEeqWkq",
      "DXxNnzWHlZ2d",
      "ceLSHzoGcXmg",
      "yL4CljVNUoAl",
    ],
    rating_pos: 310,
    rating_neg: 256,
  },
  {
    name: "No Rage Quit Dude",
    detailed_description: `<strong><u>WHAT IS THIS GAME</u></strong><br><br>This game is a pure luck game. Yes I did this game but belive me I dont know what gonna happen to you. <br>Maybe you can finish at first time maybe you have to try 10 times maybe 100 but may you can't never finish the game.<br><br>Platforms have different rates. You have a certain chance of survival when you jump. <br>This is where luck comes in and I want you to never forget that everything is in proportion, but I have no idea what's going to happen.<br><br>Don't forget this maybe you can't finish the game. <br><br>Platforms has a different ratio. Many dead types can be happen<br><br>Yes this game have arks. But you know this arks just surprise you and  scare you.<br><br>if you ask me I love the horror ark. Im saying again I did this but I was scare when I tested the game. <br>Actually this is not a big game so the atmosphere is good and horror contents are jumpscares, sounds and  mysterys.<br><br>You can scare  when you play so this reason if you have health problems and epilepsy you don't have to play.<br><br><strong><u>CONTROLS</u></strong><br> <strong>       <br>             W<br>        A   S   D<br><br>       S P A C E</strong>`,
    short_description: `a game where only luck counts, jumping from platform to platform. Just mystery and luck will be essential for this game. Maybe you can finish maybe you can not. I just know the assets but I don't know what will you see and what gonna happen.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824750/header.jpg?t=1644222742`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64 bit<br></li><li><strong>Processor:</strong> ryzen  3 2200G<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> gtx 950<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>`,
    publishers: ["Morosophe"],
    price: 26.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824750/ss_556acd3cd1ca5d0fce39d06aec4018703cbd0a84.600x338.jpg?t=1644222742",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824750/ss_556acd3cd1ca5d0fce39d06aec4018703cbd0a84.1920x1080.jpg?t=1644222742",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824750/ss_d286b581229deff669c93aec35ba24019516f38a.600x338.jpg?t=1644222742",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824750/ss_d286b581229deff669c93aec35ba24019516f38a.1920x1080.jpg?t=1644222742",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824750/ss_292c6cc985672d3f5c9766848a0e3bcd4ccc9e60.600x338.jpg?t=1644222742",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824750/ss_292c6cc985672d3f5c9766848a0e3bcd4ccc9e60.1920x1080.jpg?t=1644222742",
      },
    ],
    movies: [
      {
        id: 256861174,
        name: "fr2",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861174/movie.293x165.jpg?t=1637311494",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861174/movie480_vp9.webm?t=1637311494",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861174/movie_max_vp9.webm?t=1637311494",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861174/movie480.mp4?t=1637311494", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861174/movie_max.mp4?t=1637311494" },
        highlight: true,
      },
      {
        id: 256860867,
        name: "fr01",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860867/movie.293x165.jpg?t=1637302258",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860867/movie480_vp9.webm?t=1637302258",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860867/movie_max_vp9.webm?t=1637302258",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860867/movie480.mp4?t=1637302258", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860867/movie_max.mp4?t=1637302258" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824750/page_bg_generated_v6b.jpg?t=1644222742",
    keys: ["weBM2pQOJNBf", "Q2O7DwpkH0Gi", "ib54Rz8ZU5mG"],
    rating_pos: 225,
    rating_neg: 189,
  },
  {
    name: "孤岛海妖 The Sea-demon",
    detailed_description: `<h2 class="bb_tag">登场人物</h2>麻婆豆腐侦探团：【麻辣侦探】邬娅，<br>【密室侦探】上官千儿，【阿宅侦探】朱里葉，<br>【筋肉侦探】李丽思，【透明侦探】小莹。<br>工作人员：【船长】黄连，【管家】常安奕，【厨师】伽玛。<h2 class="bb_tag">剧情</h2>我是一个普通的推理爱好者，受到章鱼岛主人的邀请，与其他四人组成侦探小队，对六年前的海妖悬案发起挑战。我们需要在二十四小时内完成调查，并各自提交一份答案。怎料事情的发展超乎寻常，案件也越发扑朔迷离。经过七种解答的轮番洗礼，真相是否能浮出水面？<h2 class="bb_tag">玩法</h2>这是一款文字冒险游戏，以剧情为主，包含少量玩法。<br>玩家需要协助侦探团，在岛上进行调查取证，然后在各位侦探推理的时候选择合适的证据。<br>当然，最重要的是……活下去！<h2 class="bb_tag">说明</h2>文本量21万，预计时长6-8小时。<br>本游戏/系列与七人杀阵和六阶谜题（数字系列）为同一世界观，剧情和人物与前作存在关联，但可独立游玩，没玩过前作不影响对游戏主体的理解。<br>有任何问题和建议，请发送邮件，或加入官方群（757384080）。<h2 class="bb_tag">已知BUG</h2>（1）.用高分辨率显示器（4K以上）全屏游玩时，可能出现闪退（尤其是ED2字幕部分），暂无修复方法，请退出全屏，尝试最大化/窗口化进行游戏。<br>（2）.【1.0.2修复】选择证据和选项的时候闪退，是由于未知原因导致的系统存档损坏，解决方法是进入标题页点击“初次上岛”，然后再读取存档继续游戏`,
    short_description: `一组侦探小队受章鱼岛主人之邀，对六年前的海妖悬案发起挑战。她们需要在二十四小时内完成调查，并各自提交一份答案。最后，出现了七种截然不同的解答……`,
    supported_languages: `Simplified Chinese`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825930/header.jpg?t=1673148018`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> <br></li><li><strong>Processor:</strong> <br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> <br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>`,
    publishers: ["章鱼罐头制作组"],
    price: 700,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_9d2a5a9c765f99e43bb98eab0b0462cd411593fd.600x338.jpg?t=1673148018",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_9d2a5a9c765f99e43bb98eab0b0462cd411593fd.1920x1080.jpg?t=1673148018",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_1ed04c436c737d0559cd1882f260584283b3f16c.600x338.jpg?t=1673148018",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_1ed04c436c737d0559cd1882f260584283b3f16c.1920x1080.jpg?t=1673148018",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_ed10938183bea4970a2c98fe80673e5f088bb564.600x338.jpg?t=1673148018",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_ed10938183bea4970a2c98fe80673e5f088bb564.1920x1080.jpg?t=1673148018",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_5b7b38ae7f94428817f72563c3685f4b7c5227c3.600x338.jpg?t=1673148018",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_5b7b38ae7f94428817f72563c3685f4b7c5227c3.1920x1080.jpg?t=1673148018",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_f57cbb4dfef73aa790620637d74e68bb7f38d5bb.600x338.jpg?t=1673148018",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_f57cbb4dfef73aa790620637d74e68bb7f38d5bb.1920x1080.jpg?t=1673148018",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_757e7b393990877b790149e60ae48124cf00aa46.600x338.jpg?t=1673148018",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/ss_757e7b393990877b790149e60ae48124cf00aa46.1920x1080.jpg?t=1673148018",
      },
    ],
    movies: [
      {
        id: 256922213,
        name: "pv2",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256922213/movie.293x165.jpg?t=1671593863",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256922213/movie480_vp9.webm?t=1671593863",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256922213/movie_max_vp9.webm?t=1671593863",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256922213/movie480.mp4?t=1671593863", max: "http://cdn.akamai.steamstatic.com/steam/apps/256922213/movie_max.mp4?t=1671593863" },
        highlight: true,
      },
      {
        id: 256892510,
        name: "pv1",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256892510/movie.293x165.jpg?t=1655546142",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256892510/movie480_vp9.webm?t=1655546142",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256892510/movie_max_vp9.webm?t=1655546142",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256892510/movie480.mp4?t=1655546142", max: "http://cdn.akamai.steamstatic.com/steam/apps/256892510/movie_max.mp4?t=1655546142" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825930/page_bg_generated_v6b.jpg?t=1673148018",
    keys: [
      "WVFdUOnT7CNW",
      "OMCqfNEnmJOz",
      "seGRtQlfTaL2",
      "GIi9tfTjpNjD",
      "SbfG7D0PS9V0",
      "8LsbmtlikNbs",
      "hzK2sVhYbEiN",
      "LCK1qvVPxBVh",
      "fwivEBlYe3LE",
      "Y0bEXifKMQgW",
      "oi4mT4DncbmR",
      "wjD86dPqYSBS",
      "xQIrFuOUEnrb",
      "2lxfaRgUs7dM",
      "kWpOZGVJ1VcJ",
      "3e0hTS9jhTdA",
      "1NAMD1qj1cc3",
      "2ThKBUSJANGH",
      "h0DmribfxAU6",
      "9TianLQNSZX7",
      "D0t870BWb1m6",
      "VYJeX6xDkIXe",
      "2m7CCWrBM88b",
      "WPG0ZOdwjcBo",
      "3qzJcD8wk6Ok",
      "2rthCvoqvert",
      "eQ61ph3fAggA",
      "aDdxxrBRMt6J",
      "ze0UQRE9N1uz",
      "P9JINRFICAPK",
      "zDnLLEvQHP2o",
      "C6KWCIMufO8H",
      "lxBR3CYnVdrV",
      "SWk5jUXttpe7",
      "oFI13R6QbKE4",
      "w4bUnxiFiF4N",
    ],
    rating_pos: 433,
    rating_neg: 156,
  },
  {
    name: "MMA Championship",
    detailed_description: `MMA Championship is a mixed martial arts fighting game that allows you to throw different types of strikes from standing and from ground position to beat up your opponent. you can either play against the computer in single player mode work your way through 6 opponents to become a MMA champion or challenge a friend in 2 player local<br />
    <br />
    Key features:<br />
    . Free Content Updates<br />
    . Local Co-Op<br />
    . Character Select<br />
    . PVP Mode<br />
    <br />
    Note<br />
    .  a controller is required for local multiplayer`,
    short_description: `MMA Championship is a mixed martial arts fighting game`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825010/header.jpg?t=1687189126`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> 7, 8/8.1, 10<br></li><li><strong>Processor:</strong> Intel or AMD Dual Core at 2 GHz or better<br></li><li><strong>Memory:</strong> 2 GB RAM GB RAM<br></li><li><strong>Graphics:</strong> Intel Graphics 4400 or better<br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>`,
    publishers: ["Karl Brown"],
    price: 620,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
      { id: "18", description: "Sports" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_17944ab861216a35e12c422effea5bdf1fc4ed3b.600x338.jpg?t=1687189126",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_17944ab861216a35e12c422effea5bdf1fc4ed3b.1920x1080.jpg?t=1687189126",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_0940567d6ec122624107d2b9be9df21f991269f1.600x338.jpg?t=1687189126",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_0940567d6ec122624107d2b9be9df21f991269f1.1920x1080.jpg?t=1687189126",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_fdccd4311ad01408ebf3f38f9898637baca2c616.600x338.jpg?t=1687189126",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_fdccd4311ad01408ebf3f38f9898637baca2c616.1920x1080.jpg?t=1687189126",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_ac1ac1d0f55ed5bc5ac82a1d89ab4979fb4b7749.600x338.jpg?t=1687189126",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_ac1ac1d0f55ed5bc5ac82a1d89ab4979fb4b7749.1920x1080.jpg?t=1687189126",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_d17a753db8e420c34c499ae8b7de9c4fdcb71c5a.600x338.jpg?t=1687189126",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_d17a753db8e420c34c499ae8b7de9c4fdcb71c5a.1920x1080.jpg?t=1687189126",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_e2748b38bc588457a0c03383bd3254cea5b5f830.600x338.jpg?t=1687189126",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/ss_e2748b38bc588457a0c03383bd3254cea5b5f830.1920x1080.jpg?t=1687189126",
      },
    ],
    movies: [
      {
        id: 256947010,
        name: "MMA Championship",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256947010/movie.293x165.jpg?t=1684142685",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256947010/movie480_vp9.webm?t=1684142685",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256947010/movie_max_vp9.webm?t=1684142685",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256947010/movie480.mp4?t=1684142685", max: "http://cdn.akamai.steamstatic.com/steam/apps/256947010/movie_max.mp4?t=1684142685" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825010/page_bg_generated_v6b.jpg?t=1687189126",
    keys: [
      "jBBH90xZnCFn",
      "R262AIIgPvwL",
      "HnWvBMUIGlIy",
      "azHtbDTRJzIu",
      "sCQm1g6mgM1b",
      "UaIMzVRAMZYB",
      "sibXBfQvjWCM",
      "l53IvU1zZv0j",
      "QIZtxcI7hypE",
      "uKntwoLvcd5b",
      "9H4Vd2a6CIGi",
      "M44W3xThCmlj",
      "4oP5wyr12RiJ",
      "amPfcu7VG5zS",
      "HGqRIVOIOyGG",
      "ZVCjfVFWs4Px",
      "pP9lSQlIMcGC",
      "sJzjb8FFkJAq",
      "GQkIa7LeXEm9",
      "6fSsGhPh5Wr6",
      "2TJR1AwKsbES",
      "zacR3kUZ0Ckm",
      "O1IxSBxlQaNM",
      "VGcEa4eLZuBq",
      "ygPyezauFM8J",
      "T24RCsr0yEDQ",
      "IoZR2K34wcMk",
      "MyjmeLg90F3Z",
      "kkBQRbLKwWFS",
      "aJJZHHbQ0uet",
      "dJm9bZWLtS6u",
      "ntov5uRL7NiK",
      "XKge7kx3yxI9",
      "UgjHpKPWTQ2j",
      "8UFB1sglBHVZ",
    ],
    rating_pos: 411,
    rating_neg: 64,
  },
  {
    name: "Magic Disc Golf",
    detailed_description: `Play Disc Golf by taking control of your disc and steer it towards the basket. You will have to plan your route carefully, navigate challenging terrain and use your limited booster ability sparingly.<br><br>Main features:<br><ul class="bb_ul"><li> Three 18-hole courses and one 6-hole tutorial/practice course. <br></li><li> Up to four players playing on the same computer.<br></li><li> Three disc types (Driver, Midrange and Putter) with varying range, handling, and stability.<br></li><li> Challenging terrain and obstacles.<br></li><li> Wind that will affect your disc’s range and handling.<br></li><li> Highly customizable play settings:<br><ul class="bb_ul"><li>Customizable courses: select a course and then select which holes you want to play.<br></li><li>Four game modes: Stroke Play, Match Play, Speed Play and Speed Match Play. In Stroke Play and Match play you need to reach the basket in as few throws as possible. In Speed Play and Speed Match Play you need to get to the basket as fast as possible.<br></li><li>Disc steering. Enable disc steering and guide your disc towards the basket, or disable it for a more realistic experience.<br></li><li>Disc boosting. Enable it to collect boost energy and use it to cover more ground, or leave it disabled for more challenging gameplay.<br></li><li>Three time-of-day settings: Afternoon, evening and night. <br></li><li>A minimap to help you plan your hole. Can be disabled for more challenging gameplay.</li></ul></li></ul><br>Minor features:<br><ul class="bb_ul"><li> Discs come equipped with flashlights (naturally).<br></li><li> High score tables.<br></li><li> Manuals describing the game modes and game play features in detail.</li></ul>`,
    short_description: `Magic Disc Golf lets you take control of your disc and steer it towards the basket. Find the optimal route, navigate challenging terrain, and use your speed boost to cover some extra ground. Choose from three 18-hole courses and four game modes.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824910/header.jpg?t=1640006823`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel Quad Core i5-4460 3.2GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GeForce GTX 960 or equivalent<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 1 GB available space<br></li><li><strong>Sound Card:</strong> DIrectX compatible<br></li><li><strong>Additional Notes:</strong> Windows-compatible keyboard and mouse</li></ul>`,
    publishers: ["Synthetic Forms"],
    price: 67.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
      { id: "18", description: "Sports" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_fd7771e57b8ff402caad4bd1a5a787e876851eec.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_fd7771e57b8ff402caad4bd1a5a787e876851eec.1920x1080.jpg?t=1640006823",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_84c823e89997b55bc2b0a695d3a74f3ce3da8245.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_84c823e89997b55bc2b0a695d3a74f3ce3da8245.1920x1080.jpg?t=1640006823",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_7199a071a3e2282e50bbf2c1a030724e336c2514.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_7199a071a3e2282e50bbf2c1a030724e336c2514.1920x1080.jpg?t=1640006823",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_c9f99000ec365d0fbf2744e0d5092dc93b7c8b3c.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_c9f99000ec365d0fbf2744e0d5092dc93b7c8b3c.1920x1080.jpg?t=1640006823",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_a16da7f90400ee5418f1579a93267cd624fc3692.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_a16da7f90400ee5418f1579a93267cd624fc3692.1920x1080.jpg?t=1640006823",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_3b4a6add7425adf5b2c505b49be1168c3f56ca9f.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_3b4a6add7425adf5b2c505b49be1168c3f56ca9f.1920x1080.jpg?t=1640006823",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_0a1caf284d7a53fb946676eae3ce22efcf46bd2e.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_0a1caf284d7a53fb946676eae3ce22efcf46bd2e.1920x1080.jpg?t=1640006823",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_dce0972cb8991528da648864f8bd9f7cf3b14e50.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_dce0972cb8991528da648864f8bd9f7cf3b14e50.1920x1080.jpg?t=1640006823",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_c454d3e6d9280cde71b7894bd785c21d9284b0bb.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_c454d3e6d9280cde71b7894bd785c21d9284b0bb.1920x1080.jpg?t=1640006823",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_46416b4a4eed712d49480495b75169f887a74975.600x338.jpg?t=1640006823",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/ss_46416b4a4eed712d49480495b75169f887a74975.1920x1080.jpg?t=1640006823",
      },
    ],
    movies: [
      {
        id: 256861524,
        name: "Gameplay 1",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861524/movie.293x165.jpg?t=1640006804",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861524/movie480_vp9.webm?t=1640006804",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861524/movie_max_vp9.webm?t=1640006804",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861524/movie480.mp4?t=1640006804", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861524/movie_max.mp4?t=1640006804" },
        highlight: true,
      },
      {
        id: 256861510,
        name: "Showoff",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861510/movie.293x165.jpg?t=1640006808",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861510/movie480_vp9.webm?t=1640006808",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861510/movie_max_vp9.webm?t=1640006808",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861510/movie480.mp4?t=1640006808", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861510/movie_max.mp4?t=1640006808" },
        highlight: true,
      },
      {
        id: 256861528,
        name: "Gameplay 2",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861528/movie.293x165.jpg?t=1640006812",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861528/movie480_vp9.webm?t=1640006812",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861528/movie_max_vp9.webm?t=1640006812",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861528/movie480.mp4?t=1640006812", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861528/movie_max.mp4?t=1640006812" },
        highlight: true,
      },
      {
        id: 256861505,
        name: "Gameplay 3",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861505/movie.293x165.jpg?t=1640006815",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861505/movie480_vp9.webm?t=1640006815",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861505/movie_max_vp9.webm?t=1640006815",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861505/movie480.mp4?t=1640006815", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861505/movie_max.mp4?t=1640006815" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824910/page_bg_generated_v6b.jpg?t=1640006823",
    keys: ["IxjhGexBItrF", "Oeo1NWJtxKQe"],
    rating_pos: 217,
    rating_neg: 119,
  },
  {
    name: "Explosive Snooker",
    detailed_description: `A 3D SNOOKER ARENA DODGEBALL<br />
    3D snooker game, in cartoon art style, You must keep the ball on the opponent's side for it to explode.<br />
    <br />
    STORY<br />
    In a dodgeball olympics, the blue team decides to win this time, their mission is to lead them to victory.<br />
    <br />
    FEATURE:<br />
    -  This game features snooker pockets that teleport the ball to random pockets.<br />
    -  In addition to being able to control the direction of the ball by touching it`,
    short_description: `A game of dodgeball on a snooker table`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825080/header.jpg?t=1640100165`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 7<br></li><li><strong>Processor:</strong> AMD A10-7850K<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>`,
    publishers: ["Rocha Village Games"],
    price: 13.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_23d29a4eb53f1e8b77c5b05ccdd409bf491d654e.600x338.jpg?t=1640100165",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_23d29a4eb53f1e8b77c5b05ccdd409bf491d654e.1920x1080.jpg?t=1640100165",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_8afc0141c914c7a09bce83ca39ccd63ec2036368.600x338.jpg?t=1640100165",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_8afc0141c914c7a09bce83ca39ccd63ec2036368.1920x1080.jpg?t=1640100165",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_878cf9149bd8d2ba43fa44d51bf59587bf69d71b.600x338.jpg?t=1640100165",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_878cf9149bd8d2ba43fa44d51bf59587bf69d71b.1920x1080.jpg?t=1640100165",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_3d0171ace8a2ba196d18230855f9c5ec02dfaa2a.600x338.jpg?t=1640100165",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_3d0171ace8a2ba196d18230855f9c5ec02dfaa2a.1920x1080.jpg?t=1640100165",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_50cf6096f0b655efd6ea5518223493c52af4986e.600x338.jpg?t=1640100165",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/ss_50cf6096f0b655efd6ea5518223493c52af4986e.1920x1080.jpg?t=1640100165",
      },
    ],
    movies: [
      {
        id: 256861409,
        name: "Explosive Snooker v1.0",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861409/movie.293x165.jpg?t=1637696980",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861409/movie480_vp9.webm?t=1637696980",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861409/movie_max_vp9.webm?t=1637696980",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861409/movie480.mp4?t=1637696980", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861409/movie_max.mp4?t=1637696980" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825080/page_bg_generated_v6b.jpg?t=1640100165",
    keys: [
      "qEBs6efpVaWl",
      "BPcreklppSHP",
      "zisGaMmmHnwW",
      "DSUiblfyyEGe",
      "dnqM6LTjRxzz",
      "uGEjk6qOA2Nd",
      "VhVLGzg7Czkj",
      "oGjIiRewbAFt",
      "vI4udVOTXwWV",
      "bQJhFIpvWcld",
      "q75J6S6koSLy",
      "HoXrS2zIbnuR",
      "XyJ8D6kVHHJm",
      "ZlvpKq0iWjsu",
      "WnIU9C23As3C",
      "GO4YfRUk7hdv",
      "LQZmkrMimZDA",
      "lFf6wqBI8XvL",
      "yxi1udEnzyOY",
      "6KvWWZTM5zLB",
      "c1A6IhfjpYRh",
      "9y5Z82mcCRJw",
      "IiFH85IM6kRE",
      "JSMwfZFhZrBH",
      "gcrefxhmwWJQ",
      "0w4XIOCEJjy3",
      "Nc4hkBzbTxsv",
      "Xmv9C7FXvqWq",
      "z6WLLRLuOVR0",
      "nnKm3EfgNiRh",
      "N2hkW1gAEOUZ",
      "SIgmhN4BMh9w",
      "YZUcZXRGyPk8",
      "T54qp5CW29qq",
      "ppKVff6S2Rvk",
    ],
    rating_pos: 346,
    rating_neg: 248,
  },
  {
    name: "Propagation: Paradise Hotel",
    detailed_description: `<i>From the creators of the free experience <a href="https://store.steampowered.com/app/1363430/Propagation_VR/" target="_blank" rel=""  >Propagation VR</a></i><br><br>Trapped inside the Paradise Hotel, where a strange illness has turned people into savage creatures, you are desperate to find your sister. Play as Emily Diaz, explore dark surroundings, gather resources, and survive terrifying encounters. This intense single-player VR survival horror game with great storytelling will get your adrenaline pumping.<h2 class="bb_tag">IMMERSIVE STORY</h2><br>Emily's journey will take you through extreme emotions and intense phases of stealth, exploration or action. Meet allies and learn how to survive your enemies.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824960/extras/41.gif?t=1683215800" /><h2 class="bb_tag">HORROR ATMOSPHERE</h2><br>Enter the incredibly terrifying atmosphere of Propagation. The sound design, lighting, and visuals all combine to create a truly immersive experience that will keep you on edge.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824960/extras/31.gif?t=1683215800" /><h2 class="bb_tag">GAME MECHANICS</h2><br>You will need all your skills and your wits to progress:<br>- Gather resources<br>- Solve puzzles<br>- Use tools from your inventory<br>- Choose to avoid or confront enemies<br>- Reload your gun under stress<br>- Free movement and teleportation locomotion support.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824960/extras/21.gif?t=1683215800" /><br><br>Stay in touch with the game development! Follow and Wishlist on Steam, and check out <i>WanadevStudio</i> and <i>PropagationVR</i> on social media.`,
    short_description: `Trapped inside the Paradise Hotel, you are desperate to find your sister. Explore dark surroundings, gather resources, and survive terrifying encounters. This intense single-player VR survival horror game with great storytelling will get your adrenaline pumping.`,
    supported_languages: `English<strong>*</strong>, French, Italian, German, Spanish - Spain, Japanese, Korean, Portuguese - Brazil, Russian, Simplified Chinese, Polish<br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824960/header.jpg?t=1683215800`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 (64 bits)<br></li><li><strong>Processor:</strong> Intel Core i5-7300HQ equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 1060 equivalent<br></li><li><strong>Storage:</strong> 9 GB available space<br></li><li><strong>VR Support:</strong> Meta Quest, Oculus Rift/S, Valve Index, HTC Vive/Pro/Focus 3/Cosmos, Pico Neo3/4, Windows MR/HP Reverb G2</li></ul>`,
    publishers: ["WanadevStudio"],
    price: 1400,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_17f52574407ff2ce69f96bcfa28305c445016f78.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_17f52574407ff2ce69f96bcfa28305c445016f78.1920x1080.jpg?t=1683215800",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_399a69aebe7ec6df6e5d96a23bc64aa3df8c22e6.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_399a69aebe7ec6df6e5d96a23bc64aa3df8c22e6.1920x1080.jpg?t=1683215800",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_b94e38d4d501744f87d5d2647896cf4638eca9e9.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_b94e38d4d501744f87d5d2647896cf4638eca9e9.1920x1080.jpg?t=1683215800",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_6a253f99da6594c01d5df96c668fac34179e23d4.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_6a253f99da6594c01d5df96c668fac34179e23d4.1920x1080.jpg?t=1683215800",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_eb0c49a80868d7f44a0a755901dbcdb230d02cf8.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_eb0c49a80868d7f44a0a755901dbcdb230d02cf8.1920x1080.jpg?t=1683215800",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_b42acd71255db597965a41ea02c5172dd627d2e8.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_b42acd71255db597965a41ea02c5172dd627d2e8.1920x1080.jpg?t=1683215800",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_249a4124d3174a6f23be7d367cbca3696551ce01.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_249a4124d3174a6f23be7d367cbca3696551ce01.1920x1080.jpg?t=1683215800",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_8858793fbe3fa887f2ff95baf5f107c2c00a085f.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_8858793fbe3fa887f2ff95baf5f107c2c00a085f.1920x1080.jpg?t=1683215800",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_d839974f962b8bafe560a075e52cf72aebabdec3.600x338.jpg?t=1683215800",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/ss_d839974f962b8bafe560a075e52cf72aebabdec3.1920x1080.jpg?t=1683215800",
      },
    ],
    movies: [
      {
        id: 256942409,
        name: "Final Gameplay trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256942409/movie.293x165.jpg?t=1682082483",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256942409/movie480_vp9.webm?t=1682082483",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256942409/movie_max_vp9.webm?t=1682082483",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256942409/movie480.mp4?t=1682082483", max: "http://cdn.akamai.steamstatic.com/steam/apps/256942409/movie_max.mp4?t=1682082483" },
        highlight: true,
      },
      {
        id: 256940127,
        name: "Cinematic Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256940127/movie.293x165.jpg?t=1680876385",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256940127/movie480_vp9.webm?t=1680876385",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256940127/movie_max_vp9.webm?t=1680876385",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256940127/movie480.mp4?t=1680876385", max: "http://cdn.akamai.steamstatic.com/steam/apps/256940127/movie_max.mp4?t=1680876385" },
        highlight: true,
      },
      {
        id: 256922295,
        name: "UploadVR Winter Gameplay",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256922295/movie.293x165.jpg?t=1671702435",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256922295/movie480_vp9.webm?t=1671702435",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256922295/movie_max_vp9.webm?t=1671702435",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256922295/movie480.mp4?t=1671702435", max: "http://cdn.akamai.steamstatic.com/steam/apps/256922295/movie_max.mp4?t=1671702435" },
        highlight: false,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824960/page_bg_generated_v6b.jpg?t=1683215800",
    keys: [
      "lx7ES82bP5lo",
      "2Kfd9wnSiYGW",
      "UNFTp4ZPtXd2",
      "cSa4a4m34VEe",
      "jiseNr06iBmV",
      "S43GFtL00s8O",
      "wzbCZ2M2NhiG",
      "ZP7gfSuhEWfV",
      "B8QSrPaF6tn8",
      "p3jnS10QMllK",
      "pwk6oxT6istQ",
      "SYkJfJb8kb9S",
      "9CW7eTfKnKKl",
      "Bh3jILmJn94D",
      "qBxSTidqU5ej",
      "iQ5axEpYbeIX",
      "7vFXtmxRad9g",
    ],
    rating_pos: 580,
    rating_neg: 80,
  },
  {
    name: "Ultramarine",
    detailed_description: `When the feelings fade away and the promises are forgotten, one is always tempted to move on or cheat. We are presenting you a story of four athletes who are going to surprise everyone around. Who is in true love? Who is cheating? Will there be some revenge? We’ll find out in this story filled with lust and mind games.<br><br>Features<br>A Slice of Life Game Experience<br>Animated Character<br>Time Management System<br>And Multiple Maps to Explore!<br>Game Ending: 3 Endings<br><br>Emma: Lovely girlfriend who cheats on you for a guy with some muscles. Her motivation for cheating is nothing but the fact that she wants to cheat. How will it end for her? We can only find out.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825050/extras/Emma.png?t=1644408957" /><br>Nia: Girl who wants to get revenge on her boyfriend and gets thrown into a tangle with you. Will she succumb to the charming powers of you or not? We will find out.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825050/extras/Nia.png?t=1644408957" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825050/extras/4.gif?t=1644408957" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825050/extras/0.gif?t=1644408957" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825050/extras/1.gif?t=1644408957" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825050/extras/2.gif?t=1644408957" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825050/extras/3.gif?t=1644408957" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825050/extras/5.gif?t=1644408957" />`,
    short_description: `When the feelings fade away and the promises are forgotten, one is always tempted to move on or cheat. We are presenting you a story of four athletes who are going to surprise everyone around. Who is in true love? Who is cheating? Will there be some revenge?`,
    supported_languages: `English, Simplified Chinese, Traditional Chinese`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825050/header.jpg?t=1644408957`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 64bit OS<br></li><li><strong>Processor:</strong> Core i3<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 560 / AMD Radeon HD 6870<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>`,
    publishers: ["Chill"],
    price: 67.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "23", description: "Indie" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_9499a02a954e4ad605a0a8b94bc395104731276d.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_9499a02a954e4ad605a0a8b94bc395104731276d.1920x1080.jpg?t=1644408957",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_77e1070e8a2fb9884a7469028ae77c51ffce6023.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_77e1070e8a2fb9884a7469028ae77c51ffce6023.1920x1080.jpg?t=1644408957",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_b3fbd877e1e6027cf9c74faf8a6c7ca9a42e89ec.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_b3fbd877e1e6027cf9c74faf8a6c7ca9a42e89ec.1920x1080.jpg?t=1644408957",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_c34988f24b26c9ee3283559df20f87de9da8e95c.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_c34988f24b26c9ee3283559df20f87de9da8e95c.1920x1080.jpg?t=1644408957",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_1596faa7ec09edc0e9fbae066264349eadd0bae6.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_1596faa7ec09edc0e9fbae066264349eadd0bae6.1920x1080.jpg?t=1644408957",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_145d346ff3a6b120ee7cf2e721c1a7a2dff3cfb8.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_145d346ff3a6b120ee7cf2e721c1a7a2dff3cfb8.1920x1080.jpg?t=1644408957",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_591e9e8f59acfaaec05ff8587b5f90d8d2bb5498.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_591e9e8f59acfaaec05ff8587b5f90d8d2bb5498.1920x1080.jpg?t=1644408957",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_e7729a4149d6a93700d2d06dd41edf06e0768641.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_e7729a4149d6a93700d2d06dd41edf06e0768641.1920x1080.jpg?t=1644408957",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_c241fb777e08391af72dbe0813528f240ff05d55.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_c241fb777e08391af72dbe0813528f240ff05d55.1920x1080.jpg?t=1644408957",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_c88efccdeb524b93bc2e9bbe0afd118184f66e54.600x338.jpg?t=1644408957",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/ss_c88efccdeb524b93bc2e9bbe0afd118184f66e54.1920x1080.jpg?t=1644408957",
      },
    ],
    movies: [
      {
        id: 256862674,
        name: "群青",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256862674/movie.293x165.jpg?t=1638286616",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256862674/movie480_vp9.webm?t=1638286616",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256862674/movie_max_vp9.webm?t=1638286616",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256862674/movie480.mp4?t=1638286616", max: "http://cdn.akamai.steamstatic.com/steam/apps/256862674/movie_max.mp4?t=1638286616" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825050/page_bg_generated_v6b.jpg?t=1644408957",
    keys: [
      "TlWZDWiknsbP",
      "wQilknZhy2Kk",
      "O6P3yX3qLoaq",
      "qjinQTkwi9vN",
      "i6vpmlzcxeRW",
      "0LVYSBihfsxt",
      "OGlbETOnQ8AW",
      "kldIlTEzNNjc",
      "OclYrnuRAXQH",
      "nf5fzdkJMVlc",
      "cO3HUM5xq7eu",
      "fO4NE9GNdN5s",
      "6NHdn0yvO10Y",
      "pLLVd4RiWNj1",
      "vYg8Jupfxu6W",
      "8uNj74qOSkxd",
      "ZDjRA6HockSc",
    ],
    rating_pos: 326,
    rating_neg: 56,
  },
  {
    name: "Istanbul Ship Simulator",
    detailed_description: `Istanbul Ship Simulator is a simple and fun ship simulation game located in the city of Istanbul. You can play all more than 20 challenging mission or choose any ship you like and sail at the coasts of Istanbul.<br />
    <br />
    There are two game modes in the game. First one is Missions and the othe one is Free Roam. <br />
      -  In Free Roam Mode,you can choose one of seven different ship and sail freely.<br />
      -  In Missions section, you can play more than twenty mission.`,
    short_description: `Istanbul Ship Simulator is a simple and fun ship simulation game located in the city of Istanbul. You can play all 22 challenging mission or choose any ship you like and sail at the coasts of Istanbul.`,
    supported_languages: `English, French, German, Turkish<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824210/header.jpg?t=1685180763`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> Intel i5 8th Gen<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia 600<br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 1 GB available space<br></li><li><strong>Additional Notes:</strong> Keyboard with Numpad</li></ul>`,
    publishers: ["Istanbul Simulator"],
    price: 82,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "28", description: "Simulation" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_a5c0fcd3d7fe0ee0854c7b9aa1022b1077bff4fa.600x338.jpg?t=1685180763",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_a5c0fcd3d7fe0ee0854c7b9aa1022b1077bff4fa.1920x1080.jpg?t=1685180763",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_520cc2556bc23341f27ca596e97096d6e8a552b8.600x338.jpg?t=1685180763",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_520cc2556bc23341f27ca596e97096d6e8a552b8.1920x1080.jpg?t=1685180763",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_6c273eda4e8208ebeea23ae7cb4d9cc613d096b5.600x338.jpg?t=1685180763",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_6c273eda4e8208ebeea23ae7cb4d9cc613d096b5.1920x1080.jpg?t=1685180763",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_acf3a260ba2a391818866272ba0412ac97b40fe3.600x338.jpg?t=1685180763",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_acf3a260ba2a391818866272ba0412ac97b40fe3.1920x1080.jpg?t=1685180763",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_f9542c0a53a355124b8b6d2e9dc4fba88e65b7ab.600x338.jpg?t=1685180763",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/ss_f9542c0a53a355124b8b6d2e9dc4fba88e65b7ab.1920x1080.jpg?t=1685180763",
      },
    ],
    movies: [
      {
        id: 256861908,
        name: "Trailer 1",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861908/movie.293x165.jpg?t=1638800229",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861908/movie480_vp9.webm?t=1638800229",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861908/movie_max_vp9.webm?t=1638800229",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861908/movie480.mp4?t=1638800229", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861908/movie_max.mp4?t=1638800229" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824210/page_bg_generated_v6b.jpg?t=1685180763",
    keys: [
      "5NFScE0U5l37",
      "BNnKcNbAEweO",
      "1MbJUo6cNhcw",
      "vM4AxgMMODdl",
      "BLqi6Ok1xvTR",
      "rYwxPo6CgHaj",
      "mI4sXD27oEY4",
      "UTxFFKfy5Kv2",
      "76ciINJWrqYM",
      "dcojbWKDoi3T",
      "ZDuETCXuRgZG",
      "VHRh8FCpAzbc",
      "Mkc9XrjACT3e",
      "YXzaaxszc5Ew",
      "bQicd1heu8Mo",
      "dBkpvSiuDs7m",
      "9OCofH07svDE",
      "jISVpAvxynho",
      "1z8efLwsZ7tA",
      "UJ4RiMpOykVy",
      "a7PkI5yL7sMG",
      "7Ae0Ju62fy47",
      "NwyZzN16xJyK",
      "u7Y5KEC7SJc7",
      "Y7AJHfvqu6gD",
      "DDFyyFCIQDRf",
      "ycxNpFbvEFeh",
      "Qq3ktuora4sO",
      "UhH8cmAtdSDe",
      "HvfLyl3Hiywa",
      "9PTN2jSfY5V6",
      "jdfSQbf8ALki",
      "9Y0eugm152hD",
      "8YlZFwhlGy67",
      "lvmwKcVnlGmw",
      "BERtbItmTMee",
      "Qqslb0CnPAfp",
    ],
    rating_pos: 649,
    rating_neg: 134,
  },
  {
    name: "Terra Puzzle 3D",
    detailed_description: `The objective of this game is to assemble a <strong>spherical jigsaw puzzle</strong> of the planet Earth at 3 levels of difficulty. The game is fully 3D and allows the player to freely float in the scene collecting puzzle elements and combining them together. Care has been taken to make the experience as close to that of assembling such a puzzle in real life as possible.<h2 class="bb_tag">Key Features</h2><ul class="bb_ul"><li> a fully 3D experience<br></li><li> intuitive controls (mouse and keyboard)<br></li><li> 3 Levels of difficulty<br></li><li> 3 Levels of graphics detail<br></li><li> relaxing and challenging at the same time<br></li><li> adjustable sensitivity of controls</li></ul>`,
    short_description: `Assemble the planet Earth as a spherical jigsaw puzzle in full 3D and at 3 levels of difficulty.`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825000/header.jpg?t=1652040269`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> 10<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GT 740M<br></li><li><strong>Storage:</strong> 250 MB available space</li></ul>`,
    publishers: ["Pawel Oriol"],
    price: 39.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "4", description: "Casual" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_1e9a0c5a3369dc05ff5d45e65d2419c6113903bc.600x338.jpg?t=1652040269",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_1e9a0c5a3369dc05ff5d45e65d2419c6113903bc.1920x1080.jpg?t=1652040269",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_a123691d7a78d6ece679a800943caa246813582b.600x338.jpg?t=1652040269",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_a123691d7a78d6ece679a800943caa246813582b.1920x1080.jpg?t=1652040269",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_6e85faaf3f6be7b5046d7bd1d7e11dc84a252a4c.600x338.jpg?t=1652040269",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_6e85faaf3f6be7b5046d7bd1d7e11dc84a252a4c.1920x1080.jpg?t=1652040269",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_2fb0b4dae94d809086ed78781308444a40f80645.600x338.jpg?t=1652040269",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_2fb0b4dae94d809086ed78781308444a40f80645.1920x1080.jpg?t=1652040269",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_7f5c235b1fea26a7c4d7d22ac46c37d69f97ed0b.600x338.jpg?t=1652040269",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_7f5c235b1fea26a7c4d7d22ac46c37d69f97ed0b.1920x1080.jpg?t=1652040269",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_e3a9ff64db46e75f65215282ed0fa69827abe1ba.600x338.jpg?t=1652040269",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/ss_e3a9ff64db46e75f65215282ed0fa69827abe1ba.1920x1080.jpg?t=1652040269",
      },
    ],
    movies: [
      {
        id: 256883625,
        name: "trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256883625/movie.293x165.jpg?t=1650702446",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256883625/movie480_vp9.webm?t=1650702446",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256883625/movie_max_vp9.webm?t=1650702446",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256883625/movie480.mp4?t=1650702446", max: "http://cdn.akamai.steamstatic.com/steam/apps/256883625/movie_max.mp4?t=1650702446" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825000/page_bg_generated_v6b.jpg?t=1652040269",
    keys: ["hMEdjqoAR7nV", "kDMznL3MRmkK", "9n3524WULyJz", "S1YZ0Zk8diUG", "RDxp0vWZevdO", "Tn06usqgq6ra", "a91D29gzlWDm", "faiaGuEDcTcq", "NCLBmCKR6MI4", "bIfBVs3vPOch"],
    rating_pos: 328,
    rating_neg: 213,
  },
  {
    name: "Poly Memory: Cats",
    detailed_description: `Poly Memory: Cats — cute, relaxing game with pictures of different kitty that will test your memory. The object of the game is to find paired pictures to pass the level.<br><br>There are many cards with different pictures of kitty, each of which has its own pair. You can open only 2 cards at one time. When opening new ones, the previous cards are closed again and you need to remember their location. When you open 2 identical cards, they will disappear. Thus, you must to find a pair to all cards, keeping in mind the location of the pictures.<br><br>In Poly Memory: Cats:<br><br>- 50 levels<br>- Polygonal art<br>- Achievements<br>- Relax music<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/640x360.png?t=1683852290" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" /><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825060/extras/giphy__18___4_.gif?t=1683852290" />`,
    short_description: `Cute, relaxing, polygonal memory game with cats.`,
    supported_languages: `English<strong>*</strong>, French<strong>*</strong>, Italian<strong>*</strong>, German<strong>*</strong>, Spanish - Spain<strong>*</strong>, Arabic<strong>*</strong>, Bulgarian<strong>*</strong>, Portuguese - Brazil<strong>*</strong>, Hungarian<strong>*</strong>, Vietnamese<strong>*</strong>, Greek<strong>*</strong>, Danish<strong>*</strong>, Spanish - Latin America<strong>*</strong>, Traditional Chinese<strong>*</strong>, Simplified Chinese<strong>*</strong>, Korean<strong>*</strong>, Dutch<strong>*</strong>, Norwegian<strong>*</strong>, Polish<strong>*</strong>, Portuguese - Portugal<strong>*</strong>, Romanian<strong>*</strong>, Russian<strong>*</strong>, Thai<strong>*</strong>, Turkish<strong>*</strong>, Ukrainian<strong>*</strong>, Finnish<strong>*</strong>, Czech<strong>*</strong>, Swedish<strong>*</strong>, Japanese<strong>*</strong>, Azerbaijani<strong>*</strong>, Albanian<strong>*</strong>, Amharic<strong>*</strong>, Assamese<strong>*</strong>, Afrikaans<strong>*</strong>, Basque<strong>*</strong>, Bangla<strong>*</strong>, Bosnian<strong>*</strong>, Belarusian<strong>*</strong>, Valencian<strong>*</strong>, Welsh<strong>*</strong>, Wolof<strong>*</strong>, Armenian<strong>*</strong>, Galician<strong>*</strong>, Georgian<strong>*</strong>, Gujarati<strong>*</strong>, Hindi<strong>*</strong>, Dari<strong>*</strong>, Estonian<strong>*</strong>, Zulu<strong>*</strong>, Yoruba<strong>*</strong>, Kazakh<strong>*</strong>, Kannada<strong>*</strong>, Catalan<strong>*</strong>, Quechua<strong>*</strong>, Kyrgyz<strong>*</strong>, Konkani<strong>*</strong>, Khmer<strong>*</strong>, Xhosa<strong>*</strong>, K'iche'<strong>*</strong>, Latvian<strong>*</strong>, Lithuanian<strong>*</strong>, Luxembourgish<strong>*</strong>, Macedonian<strong>*</strong>, Malay<strong>*</strong>, Malayalam<strong>*</strong>, Maltese<strong>*</strong>, Maori<strong>*</strong>, Marathi<strong>*</strong>, Mongolian<strong>*</strong>, Nepali<strong>*</strong>, Odia<strong>*</strong>, Punjabi (Shahmukhi)<strong>*</strong>, Punjabi (Gurmukhi)<strong>*</strong>, Persian<strong>*</strong>, Kinyarwanda<strong>*</strong>, Serbian<strong>*</strong>, Sotho<strong>*</strong>, Sinhala<strong>*</strong>, Sindhi<strong>*</strong>, Scots<strong>*</strong>, Slovak<strong>*</strong>, Slovenian<strong>*</strong>, Sorani<strong>*</strong>, Swahili<strong>*</strong>, Tajik<strong>*</strong>, Tamil<strong>*</strong>, Tatar<strong>*</strong>, Telugu<strong>*</strong>, Tigrinya<strong>*</strong>, Tswana<strong>*</strong>, Turkmen<strong>*</strong>, Uzbek<strong>*</strong>, Uyghur<strong>*</strong>, Urdu<strong>*</strong>, Filipino<strong>*</strong>, Hausa<strong>*</strong>, Croatian<strong>*</strong>, Cherokee<strong>*</strong>, Hebrew<strong>*</strong>, Indonesian<strong>*</strong>, Irish<strong>*</strong>, Icelandic<strong>*</strong>, Igbo<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825060/header.jpg?t=1683852290`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 or newer<br></li><li><strong>Processor:</strong> Intel or AMD 2 Ghz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Any<br></li><li><strong>Storage:</strong> 100 MB available space<br></li><li><strong>Sound Card:</strong> Any</li></ul>`,
    publishers: ["Cute Hannah's Games"],
    price: 165,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "28", description: "Simulation" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_17b645b37bc5d440ae0ac387cd47ca8bf1fb9d37.600x338.jpg?t=1683852290",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_17b645b37bc5d440ae0ac387cd47ca8bf1fb9d37.1920x1080.jpg?t=1683852290",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_f2cf7c6f89a77eca40b446b796db4a6aaeaa4a96.600x338.jpg?t=1683852290",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_f2cf7c6f89a77eca40b446b796db4a6aaeaa4a96.1920x1080.jpg?t=1683852290",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_4831cb3e14a4c60a2ab578889b18050c854824bb.600x338.jpg?t=1683852290",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_4831cb3e14a4c60a2ab578889b18050c854824bb.1920x1080.jpg?t=1683852290",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_f3a9e643b207d3d0cd41e3105057184cd962b1d2.600x338.jpg?t=1683852290",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_f3a9e643b207d3d0cd41e3105057184cd962b1d2.1920x1080.jpg?t=1683852290",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_028304eefedce42617ac870d241df3f99f9eda82.600x338.jpg?t=1683852290",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/ss_028304eefedce42617ac870d241df3f99f9eda82.1920x1080.jpg?t=1683852290",
      },
    ],
    movies: [
      {
        id: 256860874,
        name: "Poly Memory: Cats",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860874/movie.293x165.jpg?t=1637276476",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860874/movie480_vp9.webm?t=1637276476",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860874/movie_max_vp9.webm?t=1637276476",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860874/movie480.mp4?t=1637276476", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860874/movie_max.mp4?t=1637276476" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825060/page_bg_generated_v6b.jpg?t=1683852290",
    keys: [
      "Hl7aqSQ4QT2v",
      "ziGqrdE1RZnx",
      "IMkEwXMcPoya",
      "mZI5i9Qi2MXu",
      "ICbEbIJanDhn",
      "B8HFJVMVZ8KD",
      "k0jtWMpKsFPQ",
      "H0Jl9EahAUHN",
      "zBDcTd5LS7OX",
      "k1NYeQ3UUoHT",
      "P1hO7EfXlUNr",
      "UhYu5LkhF83L",
      "CrRuPFBfC4HP",
      "jNS3Nbe1Mmyz",
      "G276mfSa0bsu",
      "fAaMAKizy6CO",
      "Gic8L9yCed6D",
      "zcNDMyZI5x9a",
      "xoPV8euOvPN8",
      "guiSh7NhVdhW",
      "pO9xr4wDQbQB",
      "o9mlXHxwgyiJ",
      "JRpQa0mmgYRp",
      "td8A28JVtZNr",
      "WbFRpuscsQwR",
      "NTCUOk3b8yq5",
      "tpsCynNUD6qv",
      "E6jmomU2xdhK",
      "13fiBEFaja9q",
      "rbIS9CtJVCxz",
      "vsygGeB4pm8X",
      "0sk8ANM3YHki",
      "gu8jk7czxiON",
      "Cxr8kWOvPvsx",
      "U9BybnrpXFFh",
      "WmEMu0aUCTec",
      "lEZR9f0LB2wo",
      "X5pqouBSS72V",
      "jySRYnOcG2gR",
      "RXVB4U5HCbAq",
    ],
    rating_pos: 490,
    rating_neg: 124,
  },
  {
    name: "LUL inc.",
    detailed_description: `In LUL Inc. you will have to beat a series of microgames spanning a variety of genres. <br><br><strong>Gameplay</strong><br>Take down the three evil machines by playing all the microgames they each throw at you. If you beat all of the games, and the boss level, a machine throws at you, it will be destroyed and you will advance to the next one. Beat all three and you will be faced with an epic battle to become the &quot;God Gamer&quot;.<br><br>LUL inc. will take the majority of people anywhere between one and three hours to beat, depending on your skill level.<br><br><strong>Different types of microgame genres include but are not limited to:</strong><br><ul class="bb_ul"><li> Precision Platforming<br></li><li> Racing<br></li><li> Point &amp; Click<br></li><li> Puzzle<br></li><li> Physics<br></li><li> And more!</li></ul>`,
    short_description: `LUL Inc. is a collection of 36 different microgames that will test your skills in a variety of genres. Can you beat them all and defeat the three evil machines?`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824080/header.jpg?t=1643394084`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10+<br></li><li><strong>Processor:</strong> Intel Core2 Duo 2.4GHz or equivalent<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> Intel HD Graphics 5000 or better<br></li><li><strong>Storage:</strong> 500 MB available space</li></ul>`,
    publishers: ["C Horse Games"],
    price: 499.99,
    platforms: { windows: true, mac: true, linux: true },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_eae292abe2e9f434341f0b12ba81574f9c35326c.600x338.jpg?t=1643394084",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_eae292abe2e9f434341f0b12ba81574f9c35326c.1920x1080.jpg?t=1643394084",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_af2a99e7701d617147990fd2e51d1a1f12a355e8.600x338.jpg?t=1643394084",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_af2a99e7701d617147990fd2e51d1a1f12a355e8.1920x1080.jpg?t=1643394084",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_91bec2afcf1e142eac7d71bff22120c4310489bb.600x338.jpg?t=1643394084",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_91bec2afcf1e142eac7d71bff22120c4310489bb.1920x1080.jpg?t=1643394084",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_16ab4a2382d389abd62d41ecaab74354b61d54c3.600x338.jpg?t=1643394084",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_16ab4a2382d389abd62d41ecaab74354b61d54c3.1920x1080.jpg?t=1643394084",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_d7654b48f4dd2fac41219fef9456ec3546e4d2a5.600x338.jpg?t=1643394084",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_d7654b48f4dd2fac41219fef9456ec3546e4d2a5.1920x1080.jpg?t=1643394084",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_7ffa3122deaa67b997d977055c23dbf6e94ff0e1.600x338.jpg?t=1643394084",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/ss_7ffa3122deaa67b997d977055c23dbf6e94ff0e1.1920x1080.jpg?t=1643394084",
      },
    ],
    movies: [
      {
        id: 256869307,
        name: "Official Release Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256869307/movie.293x165.jpg?t=1642234113",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256869307/movie480_vp9.webm?t=1642234113",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256869307/movie_max_vp9.webm?t=1642234113",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256869307/movie480.mp4?t=1642234113", max: "http://cdn.akamai.steamstatic.com/steam/apps/256869307/movie_max.mp4?t=1642234113" },
        highlight: true,
      },
      {
        id: 256867468,
        name: "Official Release Date Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256867468/movie.293x165.jpg?t=1642234108",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256867468/movie480_vp9.webm?t=1642234108",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256867468/movie_max_vp9.webm?t=1642234108",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256867468/movie480.mp4?t=1642234108", max: "http://cdn.akamai.steamstatic.com/steam/apps/256867468/movie_max.mp4?t=1642234108" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824080/page_bg_generated_v6b.jpg?t=1643394084",
    keys: [
      "h7D2wJvhZKMe",
      "DK2mEXZR83It",
      "hYBNMCEUH3hu",
      "ws8uJtOu3dLN",
      "Njky4tEjoOgc",
      "ncNbH03xe6GU",
      "aYhlZ1xn89Q9",
      "nCGKRl3EwPWc",
      "vz64eQUALnSC",
      "8vgXQ8W3UYwj",
      "uJWSsCMBHD0E",
      "6wdKazYNLcc4",
      "77pJdD6CxDAv",
      "AEeGGiSnfQsM",
      "F76gZJdzBrK3",
    ],
    rating_pos: 589,
    rating_neg: 251,
  },
  {
    name: "HUNDRED FIRES: The rising of red star - EPISODE 1",
    detailed_description: `NEWS:<br>Episode 2 is now available on<br><a href="https://store.steampowered.com/app/2125950/HUNDRED_FIRES_The_rising_of_red_star__EPISODE_2/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/2125950/HUNDRED_FIRES_The_rising_of_red_star__EPISODE_2/</a><br><br>Hundred Fires is an action, stealth and infiltration game with an exciting story and incredible cinematics created by David Amado Fernández.<br><br>In the middle of the cold war, the Soviet Union is sending nuclear weapons to Cuba, this time they have an ally, a mysterious Japanese developer of nuclear weapons has arrived on the island.<br><br>This is a one man infiltration mission, you alone cannot defeat the entire Soviet army, you must use your best skills to hide, sneak away from the enemy and go undetected.<br><br>FULL CINEMATIC TRAILER:<br><a href="https://www.youtube.com/watch?v=To_-WCeSEUs" target="_blank" rel=""  id="dynamiclink_1" >https://www.youtube.com/watch?v=To_-WCeSEUs</a><br>EPISODE 2 CINEMATIC TRAILER:<br><a href="https://www.youtube.com/watch?v=7WtOEefrs44" target="_blank" rel=""  id="dynamiclink_2" >https://www.youtube.com/watch?v=7WtOEefrs44</a><br>* Decide your strategy to avoid the enemies without being detected.<br><br>* Camera and controls that pay homage to classic stealth games<br><br>* Delirious, absurd and ridiculous story with epic moments.<br><br>* Three game modes: Story Mode, Training Mode, and Infinite Gear Mode<br><br>You must use your infiltration skills, hide in remote places, not make noise, use different items to advance in your adventure, you will also find action moments, a variety of weapons and strategies to fulfill your mission`,
    short_description: `Hundred Fires is an action, stealth and infiltration game with an exciting story and incredible cinematics. This is a one man infiltration mission, you alone cannot defeat the entire Soviet army, you must use your best skills to hide, sneak away from the enemy and go undetected.`,
    supported_languages: `English<strong>*</strong>, Spanish - Spain, Italian<br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824440/header.jpg?t=1665175729`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10<br></li><li><strong>Graphics:</strong> Nvidia 900 series or similar</li></ul>`,
    publishers: ["Naili Studio"],
    price: 53.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_54d7507f54cf76c28f151e73c36411d2a6c27c47.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_54d7507f54cf76c28f151e73c36411d2a6c27c47.1920x1080.jpg?t=1665175729",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_3c1749ed1b35362aedf32ab318f267937f746c17.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_3c1749ed1b35362aedf32ab318f267937f746c17.1920x1080.jpg?t=1665175729",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_03a0f1969a12c0fc46e348b3fba65b4f5a93e75c.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_03a0f1969a12c0fc46e348b3fba65b4f5a93e75c.1920x1080.jpg?t=1665175729",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_2b780677bd8c5049b3cbcb29574760dace99d142.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_2b780677bd8c5049b3cbcb29574760dace99d142.1920x1080.jpg?t=1665175729",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_a15b1774576e471bdff8f06066d48658de49c66f.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_a15b1774576e471bdff8f06066d48658de49c66f.1920x1080.jpg?t=1665175729",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_cefeb6d276b2e9419ccb94298c4c8e8e3f64f7c4.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_cefeb6d276b2e9419ccb94298c4c8e8e3f64f7c4.1920x1080.jpg?t=1665175729",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_fc1fd76bd95ead703f03f6227effa2a8aa61a4bf.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_fc1fd76bd95ead703f03f6227effa2a8aa61a4bf.1920x1080.jpg?t=1665175729",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_22974960810c4d486378d61b445dbb99213345be.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_22974960810c4d486378d61b445dbb99213345be.1920x1080.jpg?t=1665175729",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_a51b361496769c466485302225b25b25861b33d4.600x338.jpg?t=1665175729",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/ss_a51b361496769c466485302225b25b25861b33d4.1920x1080.jpg?t=1665175729",
      },
    ],
    movies: [
      {
        id: 256860947,
        name: "Hundred Fires: The rising of red start - Episode 1 - Short Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860947/movie.293x165.jpg?t=1637313466",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860947/movie480_vp9.webm?t=1637313466",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860947/movie_max_vp9.webm?t=1637313466",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860947/movie480.mp4?t=1637313466", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860947/movie_max.mp4?t=1637313466" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824440/page_bg_generated_v6b.jpg?t=1665175729",
    keys: [
      "HTiCA1glhJFC",
      "eGBrg4jQSu01",
      "wnfmZYVkXG69",
      "dxPN7XM6myk5",
      "apyI7XX6R0mO",
      "TgJ9EhybCdxQ",
      "2lngbEtqd6c7",
      "Qj0ln9DPD8Rn",
      "jrKxtXgRCoID",
      "8w8G1BjNh4iK",
      "xkU1Ux0NJUKc",
      "2MspoJ7nugTg",
      "xXW783OdEMxU",
      "0uxywHDkQBcy",
      "mRNwN4KfG4VL",
      "vnTw7AJ24fsX",
      "wheAkX2jhu4e",
      "dFduLsRjzIzY",
      "rj8fpnVIkKjF",
      "g9BOUC2BjWxo",
      "CMBeUatMdBaU",
      "ki1e5VOemnPu",
      "QGWOf7cgmrXF",
      "uA8BUUucds4I",
      "9lN43HChtzYx",
      "MgntEHyPiuV2",
      "NpqdU3zmBAMD",
      "5BD2rvaUHUrT",
      "KlpSlJj9E96H",
      "p9Plt3nwPIEz",
      "V5mHWg7TKxGM",
      "ACRePJJjfAPl",
      "5CjoBHUf6Av9",
      "2UxyVmauWWAu",
      "CVY7eT9wwvJQ",
      "ycNtdmYiJ3sR",
      "fIPwSo90cyyK",
      "VwSJBAMM5V9a",
      "5WbVPuiqqT88",
      "ZHS0xGdfCasc",
    ],
    rating_pos: 295,
    rating_neg: 234,
  },
  {
    name: "Grow Flow",
    detailed_description: `<strong>Grow Flow is a first person parkour game, where the player can interact with cubes to change their size.</strong><br>After being created by Anna, an interdimensional goddess, to play the game she has created, the Player must overcome several challenges and learn how to deal with their creator, just like Anna must learn how to better understand the Player.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825040/extras/Gif1_1.gif?t=1662132938" /><br>A game where going fast feels good, and being accurate is key. The safe way might not be the fun way, and there's always a faster route waiting to be found.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825040/extras/Gif1_2.gif?t=1662132938" /><br>Explore many different art styles inspired by european <i>avant-gardes</i> from the beginning of the twentieth century!<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825040/extras/Gif1_3.gif?t=1662132938" /><br>Interact with Cubes to make your path to the end of the levels!<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825040/extras/Gif1_7.gif?t=1662132938" /><br>Enter Zones (or avoid them) because you can, and you want to (or because you have to)!<br><br>Grow Flow contains:<br><ul class="bb_ul"><li>Over 60 levels, divided between 7 chapters!<br></li><li>In-game save system!<br></li><li>Fully voice-acted goddess!<br></li><li>Hidden and optional mechanics!<br></li><li>Beautiful soundtrack!<br></li><li>Secrets?</li></ul><br><a href="https://steamcommunity.com/linkfilter/?url=https://discord.gg/c8CFZHQrJy" target="_blank" rel=" noopener"  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1825040/extras/steamdiscordBy82.png?t=1662132938" /></a>`,
    short_description: `A first person parkour game with art inspired by european avant-gardes. Make your way through over sixty levels with plenty of different mechanics to explore!`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825040/header.jpg?t=1662132938`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7, 8, 10,<br></li><li><strong>Processor:</strong> 1.0 Ghz Dual Core<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> 8 GB<br></li><li><strong>DirectX:</strong> Version 9.0a<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>`,
    publishers: ["Virus Team"],
    price: 104.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
      { id: "70", description: "Early Access" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_ddb951d6b0e51793c19a5b263cf8a1ccf71a9183.600x338.jpg?t=1662132938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_ddb951d6b0e51793c19a5b263cf8a1ccf71a9183.1920x1080.jpg?t=1662132938",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_6d58fc75b9b1f75b82fe82f0fbe09d7635a8ec90.600x338.jpg?t=1662132938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_6d58fc75b9b1f75b82fe82f0fbe09d7635a8ec90.1920x1080.jpg?t=1662132938",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_92d057e723b786e575eb1d30bfe4d326ba02280b.600x338.jpg?t=1662132938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_92d057e723b786e575eb1d30bfe4d326ba02280b.1920x1080.jpg?t=1662132938",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_3bc758d7c79e5976d1d6901aeca7d46a5f3e26a7.600x338.jpg?t=1662132938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_3bc758d7c79e5976d1d6901aeca7d46a5f3e26a7.1920x1080.jpg?t=1662132938",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_25b96cbbecc4b36dab477bb1ea37754856f5c754.600x338.jpg?t=1662132938",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/ss_25b96cbbecc4b36dab477bb1ea37754856f5c754.1920x1080.jpg?t=1662132938",
      },
    ],
    movies: [
      {
        id: 256863103,
        name: "Grow Flow - Announcement Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256863103/movie.293x165.jpg?t=1638539749",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256863103/movie480_vp9.webm?t=1638539749",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256863103/movie_max_vp9.webm?t=1638539749",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256863103/movie480.mp4?t=1638539749", max: "http://cdn.akamai.steamstatic.com/steam/apps/256863103/movie_max.mp4?t=1638539749" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825040/page_bg_generated_v6b.jpg?t=1662132938",
    keys: [
      "jvXxtPbcE76L",
      "0vPW0uGBhCdf",
      "krLkkRgJ7vsp",
      "bJuCNk8oGSen",
      "HHXJifFhBHNR",
      "F7zImbsI1CLP",
      "KGxsBJbzUv6a",
      "IJTrLzBJ0q2j",
      "cjgr4Vjkfpiu",
      "1BjXhCqs5HA5",
      "ReSOUKJR89LS",
      "LNjWNAUCgX4L",
      "XA1gRKvIbJ9Z",
      "uO2ktM1JY7M7",
      "VF4gfbTBCXvp",
      "BxmCUxTmJwmI",
      "etHuUb6KGHfr",
      "hlqm9Xt9PaF0",
      "nShUqLGHW9j2",
      "StX2wpxnE3vB",
      "gZrvEtD5Bm48",
      "bGbsdJp8vm9p",
      "YEUwNVPUnbaC",
      "gAGUDYAc4l80",
      "jQPjvJUyflFB",
      "JLDnLCOblJVE",
      "MmNA4hY2KQm8",
      "h9b9AcUWkJJB",
      "ONby4MEik3Q8",
      "CZ9paksIUbqr",
      "aqt62OSvdF73",
      "BDmbTIlF1qPM",
      "aWBDM7nAPb2U",
      "q5nU9EByyTF5",
      "Gkv3RV2gfY2I",
      "mPRqwEx3lsJA",
    ],
    rating_pos: 346,
    rating_neg: 86,
  },
  {
    name: "Drawize - Draw and Guess",
    detailed_description: `Drawize is a fun online multiplayer drawing game where players draw and guess words. One player is the artist - when their turn starts, they get 3 words to choose from, then they have to draw the chosen word. The other players try to guess what the artist is drawing. The game is played in several rounds; points from each round are summed to create a rank list and determine a winner.<h2 class="bb_tag">Public and Private rooms</h2>You can play this drawing game online in public rooms with random people worldwide whenever you want - there is always someone online! Also, you can play in a private room with your friends. The private room option is great whenever you and your friends want to play remote but together, it makes an excellent party game. There is also a <i>Teams mode</i> in the private room - it is great for big groups (up to 100 players!) that can be divided into teams and play in the co-op mode (team members collect points together and compete with other teams).<h2 class="bb_tag">Quick Draw and Quick Guess</h2>There are two single-player modes when you want to play on your own. Choose <strong>Quick Draw</strong> to choose a word and start drawing for practice, or <strong>Quick Guess</strong> to practice guessing drawings other players have made in previous games.<h2 class="bb_tag">Daily Challenge</h2>There's one special word every day, known as the <strong>Daily Challenge</strong>! Draw it and compete with other players to earn the artist of the day title. The winner is determined by the number of votes that each drawing gets from other players (you must be level 3 or higher to vote).`,
    short_description: `Drawize is a fun online drawing game similar to Pictionary! You can draw and guess with friends or other players worldwide, guess the drawing, or quick draw something for practice. Drawize works great as a party game supporting up to 100 players in a private room.`,
    supported_languages: `English, French, Italian, German, Spanish - Spain, Portuguese - Brazil, Russian`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823740/header.jpg?t=1646170558`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> 2 GHz dual core<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> Hardware Accelerated Graphics<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 350 MB available space</li></ul>`,
    publishers: ["Lomboos"],
    price: 94.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "4", description: "Casual" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_0f0241956f586c03bdbd831304f071df2b8a2bc2.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_0f0241956f586c03bdbd831304f071df2b8a2bc2.1920x1080.jpg?t=1646170558",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_41f2d87bb5f663707edb154e064a1702147a9537.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_41f2d87bb5f663707edb154e064a1702147a9537.1920x1080.jpg?t=1646170558",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_9de5e0f1e62e64ff21b039992f7fbb669e74e944.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_9de5e0f1e62e64ff21b039992f7fbb669e74e944.1920x1080.jpg?t=1646170558",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_336ef8a79b078e4fa70b5d57f47a5e74d6e51d51.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_336ef8a79b078e4fa70b5d57f47a5e74d6e51d51.1920x1080.jpg?t=1646170558",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_60e6a6900a34c96643ddaae3a76717f35577f105.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_60e6a6900a34c96643ddaae3a76717f35577f105.1920x1080.jpg?t=1646170558",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_28b44e09216b2fb87ffee6a76103a2b767f213d3.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_28b44e09216b2fb87ffee6a76103a2b767f213d3.1920x1080.jpg?t=1646170558",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_f8249cce0647fc43f0d02631eedb87d19bdfd623.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_f8249cce0647fc43f0d02631eedb87d19bdfd623.1920x1080.jpg?t=1646170558",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_38080d6d29891f9a0fdaebd46efa3e373029d95c.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_38080d6d29891f9a0fdaebd46efa3e373029d95c.1920x1080.jpg?t=1646170558",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_c8d2f7b8370b32e0b682877eee335296d676215b.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_c8d2f7b8370b32e0b682877eee335296d676215b.1920x1080.jpg?t=1646170558",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_f255bb760c5d2aac01844a3e514dac63aa17398e.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_f255bb760c5d2aac01844a3e514dac63aa17398e.1920x1080.jpg?t=1646170558",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_acbec1039a8493034c989dd51d0e175acb789163.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_acbec1039a8493034c989dd51d0e175acb789163.1920x1080.jpg?t=1646170558",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_a83c9759ded44f70576d74e81552236df87eb363.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_a83c9759ded44f70576d74e81552236df87eb363.1920x1080.jpg?t=1646170558",
      },
      {
        id: 12,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_5324726e2b1ec35e75957f824ff91f369d4fe17e.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_5324726e2b1ec35e75957f824ff91f369d4fe17e.1920x1080.jpg?t=1646170558",
      },
      {
        id: 13,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_2d076016fb09911a01cd1d63259e55860706384c.600x338.jpg?t=1646170558",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/ss_2d076016fb09911a01cd1d63259e55860706384c.1920x1080.jpg?t=1646170558",
      },
    ],
    movies: [
      {
        id: 256869874,
        name: "Drawize Gameplay Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256869874/movie.293x165.jpg?t=1642624538",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256869874/movie480_vp9.webm?t=1642624538",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256869874/movie_max_vp9.webm?t=1642624538",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256869874/movie480.mp4?t=1642624538", max: "http://cdn.akamai.steamstatic.com/steam/apps/256869874/movie_max.mp4?t=1642624538" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823740/page_bg_generated_v6b.jpg?t=1646170558",
    keys: ["AXoCSa7xpdrF", "aLk6S91qGpAQ", "xyYOTrv9d5F8", "MIPeLfluhJJY", "RaD4xmsiMMzk", "qSkMAgQlTUvf", "0usEydfcp8y6", "mWS7YAphjDfU", "DDhaUhXmsk7J", "8jYLE7Di7dOo"],
    rating_pos: 406,
    rating_neg: 265,
  },
  {
    name: "Escape from Cronos X",
    detailed_description: `ESCAPE FROM CRONOS X is a top-down action RPG that takes place in the year 2491 on the uncharted planet Cronos X.<br><br>Explore the planet, where you will encounter hordes of hostile creatures and powerful enemies, as you try to find a means of rescue.<h2 class="bb_tag">Explore a vast planet</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824970/extras/Explore_SC_Gif_1_600.gif?t=1668968363" /><br>Explore tombs, vast wastelands, uncharted outposts, and abandoned research bases as you try to find a way to escape from Cronos.<h2 class="bb_tag">Fight</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824970/extras/Fight_600.gif?t=1668968363" /><br>Fight the hordes of corrupted creatures roaming Cronos. From the Death walkers and reavers to behemoths and giant arachnids. You will face many, many enemies throughout the game.<h2 class="bb_tag">Create your character</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824970/extras/CreateCharacter_600.jpg?t=1668968363" /><br>Choose from four different races and four different classes and origin stories. Make the character you want to be.<h2 class="bb_tag">Uncover Cronos’ dark history</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824970/extras/Learn_600.jpg?t=1668968363" /><br>Cronos has a dark secret. Something happened on the planet to make it into a deadly world. Uncover the mysteries of the planet and perhaps a way to undo the evil.<h2 class="bb_tag">Evolve</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824970/extras/Evolve_600.jpg?t=1668968363" /><br>Choose how your character evolves. Earn experience through combat, completing missions and exploration.<h2 class="bb_tag">Trade</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824970/extras/Trade_600.jpg?t=1668968363" /><br>You will find lots of loot on your journey. Some you want to keep, but much can be sold to the vendors residing on the planet.<h2 class="bb_tag">Craft upgrades and equipment</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824970/extras/Craft600.jpg?t=1668968363" /><br>Learn how to craft upgrades and vital equipment to increase your chance for survival.<h2 class="bb_tag">Steam achievements</h2>Earn Steam achievements as you advance through the game, solving missions and learning about Cronos.<h2 class="bb_tag">The story </h2>Humans have explored many star systems and made countless colonies in the bordering star systems. You are drafted by the USN (United Sol Nation) to rescue a group of scientists that has disappeared on Cronos X. As you approach the planet, you are plunged into action when your ship gets shot down. <br> <br><br>Instead of rescuing the scientists, you now must fight to survive the harsh wilderness of Cronos and search for a way to escape the planet.`,
    short_description: `ESCAPE FROM CRONOS X is a top-down, action RPG, with a deep storyline and epic battles. Fight your way through many action-packed missions to explore Cronos and find a way to escape the planet.`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824970/header.jpg?t=1668968363`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 8 / 10<br></li><li><strong>Processor:</strong> INTEL CORE I5-8400 or AMD RYZEN 3 3300X<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Geforce 950 4 GB or better<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 20 GB available space<br></li><li><strong>Sound Card:</strong> Windows Compatible Audio Device<br></li><li><strong>Additional Notes:</strong> Internet connection and active Steam client</li></ul>`,
    publishers: ["Request Logic AS (Ltd)"],
    price: 620,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
      { id: "3", description: "RPG" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_7a38bcb31aa82fbce54914a9144c30bee3bef1b7.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_7a38bcb31aa82fbce54914a9144c30bee3bef1b7.1920x1080.jpg?t=1668968363",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_35dd04d8c1310f258ce06fd0f408019c6daac442.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_35dd04d8c1310f258ce06fd0f408019c6daac442.1920x1080.jpg?t=1668968363",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_64d4e342deb7e153b2d687e11415c0b957dc669b.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_64d4e342deb7e153b2d687e11415c0b957dc669b.1920x1080.jpg?t=1668968363",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_a84eb79e432880dd003b9bd3dc0db3b19e839a08.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_a84eb79e432880dd003b9bd3dc0db3b19e839a08.1920x1080.jpg?t=1668968363",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_2ec778f9003c9a945d699f42f7e165f6e8e5c285.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_2ec778f9003c9a945d699f42f7e165f6e8e5c285.1920x1080.jpg?t=1668968363",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_c3e82d75e3903ae9945948f9189bc8e4a0f168a6.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_c3e82d75e3903ae9945948f9189bc8e4a0f168a6.1920x1080.jpg?t=1668968363",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_8083caa7113e58e3004572d808b1e753eceb1cf3.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_8083caa7113e58e3004572d808b1e753eceb1cf3.1920x1080.jpg?t=1668968363",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_5233100b681daee3ebf4f8e9e752e250744964f8.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_5233100b681daee3ebf4f8e9e752e250744964f8.1920x1080.jpg?t=1668968363",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_67a54a1c14f798394d0b31da835b80ef5b7fd546.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_67a54a1c14f798394d0b31da835b80ef5b7fd546.1920x1080.jpg?t=1668968363",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_2868cdee4d5b6f18a1d41b728506564ff6bc5159.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_2868cdee4d5b6f18a1d41b728506564ff6bc5159.1920x1080.jpg?t=1668968363",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_61f1e1e05620a11ff81b18d9b5e7d4d6f28d289f.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_61f1e1e05620a11ff81b18d9b5e7d4d6f28d289f.1920x1080.jpg?t=1668968363",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_417777a7983673539ccad3c9ce578074a09b6530.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_417777a7983673539ccad3c9ce578074a09b6530.1920x1080.jpg?t=1668968363",
      },
      {
        id: 12,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_36df2105b9af2918fcf631cbb05c2a443622bf40.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_36df2105b9af2918fcf631cbb05c2a443622bf40.1920x1080.jpg?t=1668968363",
      },
      {
        id: 13,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_0dcfe31c75ec6192031ab6726da57e5203b1629d.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_0dcfe31c75ec6192031ab6726da57e5203b1629d.1920x1080.jpg?t=1668968363",
      },
      {
        id: 14,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_7a1286ab9a3fd9806be2260a6dcb68de1157726a.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_7a1286ab9a3fd9806be2260a6dcb68de1157726a.1920x1080.jpg?t=1668968363",
      },
      {
        id: 15,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_7b8d3aec7ccec0c242a9df968223055dff5ab7ec.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_7b8d3aec7ccec0c242a9df968223055dff5ab7ec.1920x1080.jpg?t=1668968363",
      },
      {
        id: 16,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_bc0d5369dfd69d31df115c375f05f1474c41fb80.600x338.jpg?t=1668968363",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/ss_bc0d5369dfd69d31df115c375f05f1474c41fb80.1920x1080.jpg?t=1668968363",
      },
    ],
    movies: [
      {
        id: 256872408,
        name: "Steam Release trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256872408/movie.293x165.jpg?t=1646580508",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256872408/movie480_vp9.webm?t=1646580508",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256872408/movie_max_vp9.webm?t=1646580508",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256872408/movie480.mp4?t=1646580508", max: "http://cdn.akamai.steamstatic.com/steam/apps/256872408/movie_max.mp4?t=1646580508" },
        highlight: true,
      },
      {
        id: 256917148,
        name: "Update 1.8 gameplay preview",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256917148/movie.293x165.jpg?t=1668968356",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256917148/movie480_vp9.webm?t=1668968356",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256917148/movie_max_vp9.webm?t=1668968356",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256917148/movie480.mp4?t=1668968356", max: "http://cdn.akamai.steamstatic.com/steam/apps/256917148/movie_max.mp4?t=1668968356" },
        highlight: true,
      },
      {
        id: 256876873,
        name: "Cinematic trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256876873/movie.293x165.jpg?t=1646680591",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256876873/movie480_vp9.webm?t=1646680591",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256876873/movie_max_vp9.webm?t=1646680591",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256876873/movie480.mp4?t=1646680591", max: "http://cdn.akamai.steamstatic.com/steam/apps/256876873/movie_max.mp4?t=1646680591" },
        highlight: true,
      },
      {
        id: 256876731,
        name: "Gameplay preview - level 1",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256876731/movie.293x165.jpg?t=1646952107",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256876731/movie480_vp9.webm?t=1646952107",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256876731/movie_max_vp9.webm?t=1646952107",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256876731/movie480.mp4?t=1646952107", max: "http://cdn.akamai.steamstatic.com/steam/apps/256876731/movie_max.mp4?t=1646952107" },
        highlight: true,
      },
      {
        id: 256877380,
        name: "Gameplay preview - level 1 and 5",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256877380/movie.293x165.jpg?t=1646952113",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256877380/movie480_vp9.webm?t=1646952113",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256877380/movie_max_vp9.webm?t=1646952113",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256877380/movie480.mp4?t=1646952113", max: "http://cdn.akamai.steamstatic.com/steam/apps/256877380/movie_max.mp4?t=1646952113" },
        highlight: true,
      },
      {
        id: 256889297,
        name: "First 10 minutes",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256889297/movie.293x165.jpg?t=1654027892",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256889297/movie480_vp9.webm?t=1654027892",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256889297/movie_max_vp9.webm?t=1654027892",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256889297/movie480.mp4?t=1654027892", max: "http://cdn.akamai.steamstatic.com/steam/apps/256889297/movie_max.mp4?t=1654027892" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824970/page_bg_generated_v6b.jpg?t=1668968363",
    keys: [
      "TSFI3zNhSx1y",
      "dTcKpF2IMIMF",
      "rWtGmsYSpVtU",
      "13yfhxaauj6D",
      "YgcGqsPt3fkN",
      "5IoTDWBW7KaP",
      "PJFbo86OAVgC",
      "7HFQUsnsAjFu",
      "H2idljC1AG4R",
      "lGSNvh4ya7k6",
      "f83qAuSJ95eT",
      "SAeLPjnIWjLt",
      "AnhxhtQCuP7d",
      "Yrp1uLiJDh4u",
      "QwZEfnxWVy7b",
      "rHLluLjSl5qe",
      "SV3Dh2kbqtsB",
      "xwV8dAzQCVgL",
      "CEOJ6PceMX2u",
      "k49VCQXjWfQK",
      "TI6DaIT8einD",
    ],
    rating_pos: 575,
    rating_neg: 128,
  },
  {
    name: "Defenders Glory",
    detailed_description: `Defenders Glory returns to the basics of the Tower Defense genre to redefine them: Simplicity and complexity merge to form a very intuitive and deep gameplay experience, where you can find suitable challenges at any skill level, with very different playstyles.<br />
    <br />
    When playing Defenders Glory, beginners will find themselves trying out new things and learning as they go, whereas veterans can find some of the most strategically profound gameplay experiences in a Tower Defense while trying to beat the harder difficulty levels, all while playing as your preferred Class Race. Each of the Races provides a unique way to play and strategize, allowing for vastly different ways for anyone to play each of the many stages of the game. <br />
    <br />
    The Class Races range from Elven Archers to the Chaos Legion, having not only unique playstyles but being unique in their presentation as well. The stages are also of varying scenery, starting on simple plains, up to dangerous Volcanoes and the shadowy Underworld, each of them presenting specific tracks that test different types of defense strategy, not only having multiple different pathways each, but also exclusive waves per stage, meaning that each and every level of the game is handcrafted to fit its own theme, difficulty and type of challenge.<br />
    <br />
    <br />
    The CLASS RACES:<br />
    <br />
    <br />
    <br />
    Elven Archers:<br />
    <br />
    The Elven Archers come from the Forests, Hills and Plains, ready to defend their kingdom. Lately, that Kingdom has been overrun with monsters, and they have taken it personally to repel such creatures back from where they came from.<br />
    <br />
    Specializing in Long Range and Piercing, they easily deal with long tracks and lined-up enemies, but suffer against groups that are too great in quantity, having to rely on their towers being well placed and positioned, so that their abilities may be taken full advantage of.<br />
    <br />
    <br />
    <br />
    Elementals:<br />
    <br />
    Since ancient times, the Elementals have maintained the very basis of the world. They are not only living in Nature, as they are essentially Nature itself, alive: The elements which make it, who felt life's breath, and are pretty disturbed by the ruckus happening in the mainlands.<br />
    <br />
    The members of the Elemental faction, Fire, Ice, Water, Lightning, Earth and Magma, are each a Specialist in their own aspect, but seriously lack versatility. Which means Elementals are pretty good at dealing with simple but intense problems, but must find a way around when faced with multiple, simultaneous, lighter problems. Also, if anything, they excel at dealing with hordes, having the best Collateral Damage in the entirety of Defenders Glory, but suffer with range.<br />
    <br />
    <br />
    <br />
    Wizards:<br />
    <br />
    Hailing from the distant Sky Mountains, the Wizards practice their Arcane arts in the hopes of never using them... But it seems the time forever dreaded has come, and they must stop the Monster Invasion.<br />
    <br />
    Being thirsty for knowledge, the Wizards are always eager to learn and improve, persevering through the tough times of being a beginner. Which means that, even though all of them may seem weak at first glance, with upgrades they become absolute masters of what they do. Most of the Wizard Faction specializes in utility spells, with a few of the Mages focusing on pure damage, each of them brings to the table a special way to improve all the others' powers, and that sums up to make an incredibly strong synergy combo.<br />
    <br />
    <br />
    <br />
    Chaos:<br />
    <br />
    The Chaos Legion is the Supreme Ruler of the Underworld... Or at least they used to be! The insubordinate rebels who escaped their grasp shall pay for their transgression, so they departed from their unholy lair to crush each and every one that fled from their mighty hands!<br />
    <br />
    Not only they have some of the most powerful creatures at their command, the Chaos Legion also gambles with fate, being empowered by critical strikes, damage multipliers and many other benefits of luck. Although, that very same thing may become their own demise, or perhaps their lack of reach shall suffice for that end.<br />
    <br />
    <br />
    <br />
    <br />
    The DIFFICULTY MODES:<br />
    <br />
    Each difficulty mode is handcrafted to each player skill. We spent thousands of hours balancing and finding the very best difficulty curve for each mode, so that all players can have a good time playing Defenders Glory. Even within each mode, there's many ways to play the game: You can try and beat the game simply, or avoid the Gold Miner and try to get 3 stars in every stage, perhaps with various different classes (since each is a completely different gameplay experience) or only with your favorite one, or maybe you wanna shoot for the stars and try to reach the highest wave imaginable in Infinite Mode by optimizing your Gold Miners... It doesn't matter HOW you play, but Defenders Glory was carefully crafted to catter to your needs. Let's take a look at each difficulty level and see what they look like!<br />
    <br />
    <br />
    Normal: Made for beginners, this game mode is really forgiving and allows you to make and focus on almost any strategy, anywhere, as long as it holds some logic, it works. This allows for players to try out new combinations, and prepare and reach far into infinite mode!<br />
    <br />
    Hard: Beginners will need to tighten up their game to beat this one! The Hard Mode does not allow for most simplistic strategies, punishing them accordingly, and making the Infinite Mode harder by having only half the maximum amount of Gold Miners, which means the game can become quite challenging!<br />
    <br />
    Very Hard: A truly challenging game mode, where not even veterans will have an easy time beating. It requires very tight strategy and planning, punishing most suboptimal strategies, requiring that the player truly understands each stage and class to beat them. Recommended only for those who really know their way around Defenders Glory or Tower Defense games in general.<br />
    <br />
    Impossible: This is as hard as it gets. To beat it with 3 stars, it seems like no class race can get through the entire game without frequently finding themselves in super tight situations, that only the most optimal of all strategies can beat. The Archers must fight hard to deal with the hordes, the Elementals may breeze through the hordes but they can never seem to cover all ends, The Wizards may become complete absolute masters of their craft, but it never seems possible to reach that point before losing health (but it is), and the Chaos Legion will find themselves hoping so hard for that one critical hit, that one stun, and never seem to get it. This is for the absolute masters only. Even the Tower Defense Masters can't beat this with ease, surely not all stage / races combinations. In fact, our tests show that it usually take close to literal hundreds of hours to do just that, and even with only one chosen class race it can take nearly the hundreds. It's truly a test of knowledge, optimization, and Mastery of Defenders Glory and Tower Defenses in general.<br />
    <br />
    <br />
    <br />
    Access our website (www.defendersglory.com) to find out more about the game, learn new strategies, and get to know your favorite class race!`,
    short_description: `Defenders Glory is a Fantasy Tower Defense game with simple but deep gameplay elements: Simple mechanics that allow for near-infinite ways to be applied, allowing it to be suitable to anyone, beginners can just sit down and play, while Veterans can constantly improve themselves and their tactics.`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823940/header.jpg?t=1641075526`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Anything since Win '95, or whatever is run by steam<br></li><li><strong>Processor:</strong> A Potato<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> None needed, just play<br></li><li><strong>Storage:</strong> 100 MB available space<br></li><li><strong>Sound Card:</strong> None</li></ul>`,
    publishers: ["Loris Studio"],
    price: 129.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "3", description: "RPG" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_925a82f8bc28858be2c7b988380283a5315f18df.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_925a82f8bc28858be2c7b988380283a5315f18df.1920x1080.jpg?t=1641075526",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_fe6bfcd977b3058597e9d7265495b82d8bf6c814.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_fe6bfcd977b3058597e9d7265495b82d8bf6c814.1920x1080.jpg?t=1641075526",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_cea180f6be5882423268f3c37fd6378e71eb4592.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_cea180f6be5882423268f3c37fd6378e71eb4592.1920x1080.jpg?t=1641075526",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_9dc6c08072576608b81a4a9de15f1f2607364afa.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_9dc6c08072576608b81a4a9de15f1f2607364afa.1920x1080.jpg?t=1641075526",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_76c9fa1db729d06d93eea9661471ab9cc483be3c.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_76c9fa1db729d06d93eea9661471ab9cc483be3c.1920x1080.jpg?t=1641075526",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_54267795eb9bef3f19809c0666996b10e395aac8.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_54267795eb9bef3f19809c0666996b10e395aac8.1920x1080.jpg?t=1641075526",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_69be8d221b9799ab4d787c6165aa1f4497106ea1.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_69be8d221b9799ab4d787c6165aa1f4497106ea1.1920x1080.jpg?t=1641075526",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_425521dfb2569fc49533a2132120f2255cee73d8.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_425521dfb2569fc49533a2132120f2255cee73d8.1920x1080.jpg?t=1641075526",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_2c03d9ea607c2524f80f1e0b618e50e4486a1833.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_2c03d9ea607c2524f80f1e0b618e50e4486a1833.1920x1080.jpg?t=1641075526",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_99919431ff8046f94022b0da7073d8d0d0733a28.600x338.jpg?t=1641075526",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/ss_99919431ff8046f94022b0da7073d8d0d0733a28.1920x1080.jpg?t=1641075526",
      },
    ],
    movies: [
      {
        id: 256861936,
        name: "Main",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861936/movie.293x165.jpg?t=1637793364",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861936/movie480_vp9.webm?t=1637793364",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861936/movie_max_vp9.webm?t=1637793364",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861936/movie480.mp4?t=1637793364", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861936/movie_max.mp4?t=1637793364" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823940/page_bg_generated_v6b.jpg?t=1641075526",
    keys: [
      "uwxRoz2bz6p8",
      "hnT8AeokQ24j",
      "RpzIMqU5CGap",
      "yc9OF0hy9O1C",
      "dm6SXkPiCfkZ",
      "O45eu3HeC0Uw",
      "iAHqn7hf8wMO",
      "Ao2dZJf2FOyv",
      "7uWGo6O8MDck",
      "DR9LSn3Fd9rP",
      "VLn5M1G91UwF",
      "xXDoPF0YbvmL",
      "HIyNCL45aw1d",
      "DySmablislLa",
      "kRbiYpgldDqe",
    ],
    rating_pos: 657,
    rating_neg: 228,
  },
  {
    name: "NECROTOPIA",
    detailed_description: `<h2 class="bb_tag">Story</h2>Struck by lightning in a stormy night, a monster awoke. &quot;Who am I? Why was I born?&quot; The monster begins to walk in search of the answers.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823750/extras/gif1.gif?t=1651400623" /><h2 class="bb_tag">Overview</h2>NECROTOPIA is an exploratory action game, in which a player character is a monster, who woke up in a stormy night by lightning. Fighting againt enemies, he/she go through the various areas (cave, graveyard etc.) to meet his/her creator.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823750/extras/gif2.gif?t=1651400623" /><br>His/Her bodies are patchworked. He/She obtains weapons on the spot by picking up junks or snatching up weapons/bodies of enemies, and sewing them on his/her body. Because of the fragility of weapons, you have to use various types of weapons as the situation demands.<h2 class="bb_tag">Features</h2><ul class="bb_ul"><li>Various and beautiful artworks<br></li><li>Unique NPCs<br></li><li>Different actions for each weapon type (sword, hammer, spear etc.)<br></li><li>You will be forced to obtain weapons on the spot, and you have to use various types of weapons as the situation demands.</li></ul>`,
    short_description: `NECROTOPIA is an exploratory action game, in which a monster, who woke up on a stormy night by lightning, picks up junks as weapons and searches for who he/she is. Use various types of weapons to defeat enemies and explore the fascinating world.`,
    supported_languages: `Japanese, English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823750/header.jpg?t=1651400623`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 8+<br></li><li><strong>Processor:</strong> Intel Core i5+<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Storage:</strong> 1.5 GB available space</li></ul>`,
    publishers: ["day-to-day management"],
    price: 149.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_9abe761b30fdff7fa7b7e8f1d21cd92a34cb5b48.600x338.jpg?t=1651400623",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_9abe761b30fdff7fa7b7e8f1d21cd92a34cb5b48.1920x1080.jpg?t=1651400623",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_ba882ac5478782fd01dafa52dfd7a7389f9510af.600x338.jpg?t=1651400623",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_ba882ac5478782fd01dafa52dfd7a7389f9510af.1920x1080.jpg?t=1651400623",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_d9cf9fc32646b55857c5b47963fa9e4db1ed52cd.600x338.jpg?t=1651400623",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_d9cf9fc32646b55857c5b47963fa9e4db1ed52cd.1920x1080.jpg?t=1651400623",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_bf62869e9b12d07cfec917f63340c223239a39aa.600x338.jpg?t=1651400623",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_bf62869e9b12d07cfec917f63340c223239a39aa.1920x1080.jpg?t=1651400623",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_72d24e4d193379099b100d23c4c0c4ffb26516eb.600x338.jpg?t=1651400623",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/ss_72d24e4d193379099b100d23c4c0c4ffb26516eb.1920x1080.jpg?t=1651400623",
      },
    ],
    movies: [
      {
        id: 256861527,
        name: "Main PV",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861527/movie.293x165.jpg?t=1642224037",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861527/movie480_vp9.webm?t=1642224037",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861527/movie_max_vp9.webm?t=1642224037",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861527/movie480.mp4?t=1642224037", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861527/movie_max.mp4?t=1642224037" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823750/page_bg_generated_v6b.jpg?t=1651400623",
    keys: ["nYRheaAURnAe", "UUKn1zdwRiCD", "OeloDGb46oJK", "FzW0LbBNo0UV", "TswAMKWReK3n"],
    rating_pos: 233,
    rating_neg: 65,
  },
  {
    name: "Wavetale",
    detailed_description: `<h1>MORE GAMES FROM THUNDERFUL</h1><p><a href="https://store.steampowered.com/app/1608230/Planet_of_Lana/?utm_source=steam&amp;utm_medium=cross_promo_banner&amp;utm_campaign=special_announcement" target="_blank" rel=""  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/planet_of_lana_steam_special_announcement_cross_promo_NOV2022.png?t=1688539765" /></a><a href="https://store.steampowered.com/app/1550270/Togges/?utm_source=steam&amp;utm_medium=cross_promo_banner&amp;utm_campaign=special_announcement" target="_blank" rel=""  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/Togges_steam_special_announcement_cross_promo_NOV2022.png?t=1688539765" /></a><a href="https://store.steampowered.com/app/1804270/Swordship/?utm_source=steam&amp;utm_medium=cross_promo_banner&amp;utm_campaign=special_announcement" target="_blank" rel=""  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/swordship_steam_special_announcement_cross_promo_NOV2022.png?t=1688539765" /></a></p><br><h1>About the Game</h1><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/WT_Steam_Headline_01.jpg?t=1688539765" /><br><br>Explore an open sea and the decaying archipelago of Strandville in Wavetale, a story-driven action-adventure game introducing you to fed-up fishermen, secretive hermits – and maybe a pirate or two. Traverse calm waters and surging waves as Sigrid, a young girl who befriends a mysterious shadow that provides her with the power to walk on water.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/Steam_GIF_Frame_01.gif?t=1688539765" /><br><br><br>Speed through the waves, swing yourself from housetops with your net, and defeat an old nemesis to save the citizens of the islands. All with a bit of help from the shadows down below—and your cranky grandmother.<br><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/Steam_GIF_Frame_03.gif?t=1688539765" /><br><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/WT_Steam_Headline_02.jpg?t=1688539765" /><br><br><ul class="bb_ul"><li>Speed through the open sea and swing yourself between buildings in this fast-paced adventure<br></li><li>Experience a heart-warming story about loss and reconciliation<br></li><li>Make new acquaintances amongst Strandvilles diverse cast of islanders – from the charmingly cocky surfer girl to an old fisherman turned fashion designer<br></li><li>Change your appearance with collectible hats, hair dyes and outfits<br></li><li>Fill the pages of Sigrid’s scrapbook with special drawings to learn more about her world</li></ul><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/Wavetale_Steam_GIF_Frame_04.gif?t=1688539765" /><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823930/extras/WT_Steam_Bird.gif?t=1688539765" />`,
    short_description: `Surf the waters of a submerged city! Unravel the past, save the islanders from mysterious sea monsters and discover secrets hidden under the surface.`,
    supported_languages: `English<strong>*</strong>, French<strong>*</strong>, Italian<strong>*</strong>, German<strong>*</strong>, Spanish - Spain<strong>*</strong>, Danish, Finnish, Japanese, Korean, Norwegian, Portuguese - Portugal, Russian, Swedish<br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823930/header.jpg?t=1688539765`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> WIndows 10<br></li><li><strong>Processor:</strong> Intel i3-4170 / Ryzen 3 1200<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GTX 660 2GB / AMD RX 560<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 5 GB available space</li></ul>`,
    publishers: ["Thunderful Publishing"],
    price: 29.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "25", description: "Adventure" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_48df92b1abb85f5382eed4cd45853aea136b1263.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_48df92b1abb85f5382eed4cd45853aea136b1263.1920x1080.jpg?t=1688539765",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_d47c7354a80b94157995a00b7f3f05c92ea47ce2.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_d47c7354a80b94157995a00b7f3f05c92ea47ce2.1920x1080.jpg?t=1688539765",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_f4c433d8775b1cfee9ae678bb5594835f6fd6099.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_f4c433d8775b1cfee9ae678bb5594835f6fd6099.1920x1080.jpg?t=1688539765",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_343ee4f6d86aa035603fd96afce4febc9c710bc1.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_343ee4f6d86aa035603fd96afce4febc9c710bc1.1920x1080.jpg?t=1688539765",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_9e451a175230b2c2748fdb3feefc4ebe7046d4a4.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_9e451a175230b2c2748fdb3feefc4ebe7046d4a4.1920x1080.jpg?t=1688539765",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_0b194084e8b633029049350258cc135ca488aab8.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_0b194084e8b633029049350258cc135ca488aab8.1920x1080.jpg?t=1688539765",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_017561fca15c5201215205d6edc463670acec088.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_017561fca15c5201215205d6edc463670acec088.1920x1080.jpg?t=1688539765",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_dfeb1eafe2badf4c649675f2ca16e174f0606f82.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_dfeb1eafe2badf4c649675f2ca16e174f0606f82.1920x1080.jpg?t=1688539765",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_45dfd9cdb036b3d7251702cbf3b8a64f55fd1554.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_45dfd9cdb036b3d7251702cbf3b8a64f55fd1554.1920x1080.jpg?t=1688539765",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_c4eb9b557f6b781608d7df856639f89e551094bd.600x338.jpg?t=1688539765",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/ss_c4eb9b557f6b781608d7df856639f89e551094bd.1920x1080.jpg?t=1688539765",
      },
    ],
    movies: [
      {
        id: 256955375,
        name: "Accolades Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256955375/movie.293x165.jpg?t=1687953254",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256955375/movie480_vp9.webm?t=1687953254",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256955375/movie_max_vp9.webm?t=1687953254",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256955375/movie480.mp4?t=1687953254", max: "http://cdn.akamai.steamstatic.com/steam/apps/256955375/movie_max.mp4?t=1687953254" },
        highlight: true,
      },
      {
        id: 256918233,
        name: "Release Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256918233/movie.293x165.jpg?t=1670838802",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256918233/movie480_vp9.webm?t=1670838802",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256918233/movie_max_vp9.webm?t=1670838802",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256918233/movie480.mp4?t=1670838802", max: "http://cdn.akamai.steamstatic.com/steam/apps/256918233/movie_max.mp4?t=1670838802" },
        highlight: true,
      },
      {
        id: 256913420,
        name: "Release Date Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256913420/movie.293x165.jpg?t=1666956612",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256913420/movie480_vp9.webm?t=1666956612",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256913420/movie_max_vp9.webm?t=1666956612",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256913420/movie480.mp4?t=1666956612", max: "http://cdn.akamai.steamstatic.com/steam/apps/256913420/movie_max.mp4?t=1666956612" },
        highlight: true,
      },
      {
        id: 256892055,
        name: "Coming Soon Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256892055/movie.293x165.jpg?t=1658413999",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256892055/movie480_vp9.webm?t=1658413999",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256892055/movie_max_vp9.webm?t=1658413999",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256892055/movie480.mp4?t=1658413999", max: "http://cdn.akamai.steamstatic.com/steam/apps/256892055/movie_max.mp4?t=1658413999" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823930/page_bg_generated_v6b.jpg?t=1688539765",
    keys: [
      "O6sHO8kBQTLO",
      "rYzNenUFsgXH",
      "YKfA2oWIJrfu",
      "pjEVG68HDUKQ",
      "1BafgmfVDHoH",
      "lnh73RlGvwF0",
      "II2cDeISjBca",
      "QQqHNeXRo8A9",
      "VUEGJOI5cj6R",
      "UaHToprvyE1T",
      "kQyoCEKgoXjB",
      "4XcAk22yEbuC",
      "PqnGVjRh5yNL",
      "EPqmjjrKEbmy",
      "0EAIW7cYqw7b",
      "CEcAV9STKTLJ",
      "yiyLagQZeJXY",
      "gXNC6sOcX1RZ",
      "8EULzogU2niM",
      "H77v8qdK9muU",
      "bwQjBSMJa71X",
      "yWqVGhMpYLeG",
      "zKBGGr5YREWE",
      "L81S9beWf1Ls",
      "XJHrjnbF0rIB",
      "m2SjFb03kVkf",
      "3EhJWF7ko9LR",
      "lAjDKURIUJbH",
      "Z7RELOA8RC7I",
      "wcLlobCqx032",
      "fLb30sGPe1CM",
      "hfs0lG1aoF2b",
      "5iJ1ozuVUMJB",
      "dtIBJY4oHAyq",
      "1RScUNEw8I34",
      "iCjHN1MFJLuF",
      "88n2lT9KoSno",
      "ifSseSX59JFC",
      "1pYqfwDlMfqm",
    ],
    rating_pos: 344,
    rating_neg: 216,
  },
  {
    name: "Marmalade box",
    detailed_description: `Marmalade box - puzzle game.<br />
    The object of the game is to find and touch 2 or more blocks of the same color.<br />
    Enjoy over 100 levels.<br />
    There are also bonuses (crackers, bombs). More blocks can be destroyed with them. <br />
    An intelligent game that will increase your concentration.`,
    short_description: `Marmalade box - puzzle game. The object of the game is to find and touch 2 or more blocks of the same color. Enjoy over 100 levels. There are also bonuses (crackers, bombs). More blocks can be destroyed with them. An intelligent game that will increase your concentration.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824990/header.jpg?t=1639569807`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10<br></li><li><strong>Processor:</strong> core i5 3470<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> Rx 580 (or equivalent)<br></li><li><strong>Storage:</strong> 150 MB available space<br></li><li><strong>Sound Card:</strong> High Definition Audio</li></ul>`,
    publishers: ["Kedexa"],
    price: 82,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "4", description: "Casual" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_c4038cbd6d1edbc50d931039f4ff88dab46a8e6f.600x338.jpg?t=1639569807",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_c4038cbd6d1edbc50d931039f4ff88dab46a8e6f.1920x1080.jpg?t=1639569807",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_8136d2d6b3673df3c1f0a9a76f890d3dd010919f.600x338.jpg?t=1639569807",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_8136d2d6b3673df3c1f0a9a76f890d3dd010919f.1920x1080.jpg?t=1639569807",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_430d631ad0af4fdffcc1029442e2965f2192fcf5.600x338.jpg?t=1639569807",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_430d631ad0af4fdffcc1029442e2965f2192fcf5.1920x1080.jpg?t=1639569807",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_23d4e06b99acac8cd1889e933ad9c4a499de3710.600x338.jpg?t=1639569807",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_23d4e06b99acac8cd1889e933ad9c4a499de3710.1920x1080.jpg?t=1639569807",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_7a499e03adb9edb88cab3fe7d0a27d8ff6e932d3.600x338.jpg?t=1639569807",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_7a499e03adb9edb88cab3fe7d0a27d8ff6e932d3.1920x1080.jpg?t=1639569807",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_f26156f93c47b16fb997cee50b7b520a0c1ed6e0.600x338.jpg?t=1639569807",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/ss_f26156f93c47b16fb997cee50b7b520a0c1ed6e0.1920x1080.jpg?t=1639569807",
      },
    ],
    movies: [
      {
        id: 256860881,
        name: "Main",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860881/movie.293x165.jpg?t=1637304099",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860881/movie480_vp9.webm?t=1637304099",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860881/movie_max_vp9.webm?t=1637304099",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860881/movie480.mp4?t=1637304099", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860881/movie_max.mp4?t=1637304099" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824990/page_bg_generated_v6b.jpg?t=1639569807",
    keys: ["AfggThgRGk0T", "tiUFpshx5c6D", "9yAw6kearxdF", "tGkeSGSFkudF", "cNZjMXihDuig", "vGsa40R9VJLG", "QPYlOAtnGG9v", "XvMuZdCyJsFs", "b2Qv8De1H25F"],
    rating_pos: 276,
    rating_neg: 266,
  },
  {
    name: "QuaQua",
    detailed_description: `<img src="https://cdn.akamai.steamstatic.com/steam/apps/1824010/extras/SteamQuack.png?t=1644002218" /><h2 class="bb_tag">Calling all Duck Devotees.</h2> <br>Do you love puzzle games? Do you love ducks? Of course, you do! Then QuaQua (that's Aqua with a Quack) is the addictive duck game for you.<br><br>The aim of the game is simple: run around as an adorable duck to grab the falling bubbles, then use the blocks and items to build terrain and stop as much water escaping from your island as possible!<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824010/extras/BlockCollect.gif?t=1644002218" /><br><br>Catch bombs that threaten to blow up your dams, race against ever-increasing rains to score as many points as possible and survive for as long as you can. <br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824010/extras/BombsAway.gif?t=1644002218" /><br><br>Face-off against one another in a Head-to-Head Match, or work together in Co-op Mode to set a world record.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824010/extras/Twitter_Gif_6.gif?t=1644002218" /><br><br>With seven beautiful worlds to unlock, an incredible soundtrack, 20 possible ducks and over 100 accessories, set your worry and stress aside in this tranquil gaming experience designed to relax with the power of wholesome duck and block cuteness!<br><br>QuaQua is a solo developed project created by indie developer Tyrone Anderson of Devoke Studio. The music for the game was written by Kyle Misko.`,
    short_description: `QuaQua (that's Aqua, with a Quack!) is the addictive duck game for you. Catch the falling blocks to build terrain and keep as much water on your island as possible. Beware of falling bombs and heavy rain as the difficulty slowly climbs in this tile-matching arcade puzzle adventure.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824010/header.jpg?t=1644002218`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> Intel i3-2100 / AMD A8-5600k<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GeForce GTX 630 / Radeon HD 6570<br></li><li><strong>DirectX:</strong> Version 5.2<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>`,
    publishers: ["Devoke Studio"],
    price: 26.99,
    platforms: { windows: true, mac: true, linux: true },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_c9378e2f6fdcaaf41255cf35a5f6384309b57212.600x338.jpg?t=1644002218",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_c9378e2f6fdcaaf41255cf35a5f6384309b57212.1920x1080.jpg?t=1644002218",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_3a48f3914b0b29c69e2baada680e14005b52a45a.600x338.jpg?t=1644002218",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_3a48f3914b0b29c69e2baada680e14005b52a45a.1920x1080.jpg?t=1644002218",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_61b85f8038bc9045b1a77c05cfa5fdf843d06995.600x338.jpg?t=1644002218",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_61b85f8038bc9045b1a77c05cfa5fdf843d06995.1920x1080.jpg?t=1644002218",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_55546f801f8a15cd60e6ae41315844fcfafbdc50.600x338.jpg?t=1644002218",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_55546f801f8a15cd60e6ae41315844fcfafbdc50.1920x1080.jpg?t=1644002218",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_bebfc484104047c0daffc97e5366333c6f366b2e.600x338.jpg?t=1644002218",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/ss_bebfc484104047c0daffc97e5366333c6f366b2e.1920x1080.jpg?t=1644002218",
      },
    ],
    movies: [
      {
        id: 256867391,
        name: "QuaQua Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256867391/movie.293x165.jpg?t=1641554255",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256867391/movie480_vp9.webm?t=1641554255",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256867391/movie_max_vp9.webm?t=1641554255",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256867391/movie480.mp4?t=1641554255", max: "http://cdn.akamai.steamstatic.com/steam/apps/256867391/movie_max.mp4?t=1641554255" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824010/page_bg_generated_v6b.jpg?t=1644002218",
    keys: [
      "Eg6QTDtc5cHN",
      "MOmqE08ILAYf",
      "LS9wWxw4WUTE",
      "egTGmo3ACMbj",
      "Ho27ufyE6BNn",
      "C4BW4wHlreow",
      "7rirJd3Dr0Cy",
      "xqxMAatwFdPS",
      "xD0Z3eO79VEw",
      "YtUKHA1drqjs",
      "5w3Nn0AACeLa",
      "LMd4YzljBxLU",
      "PrcfH9Bp1roh",
      "R4hz6mdkSPM0",
      "kJYFjag0Ecim",
      "IiCgFxz1MxXj",
      "gXylnjzVNl6R",
      "fUFnIRBUBMnC",
      "6ECCnICo5uY8",
      "USh54MNfjJsm",
      "N9QuctlcEOV5",
      "0HA6LgWUdfTF",
      "gmQ1LWffTd0n",
      "nFdcsQQEBHEI",
      "BCWqWHU7JeyJ",
      "MNKYY7UwhCP1",
      "O6uWeSnhwzXa",
      "p3VGVM6xV0Dx",
      "JdqzAcHMGlkQ",
      "cmWrHfRpe3iZ",
      "9qNYpI9nnZlu",
      "G7zx6L7WYUWU",
      "BCB79V15jbir",
      "sjksXxP7HD5f",
      "Rf1xl3h79YzV",
      "nyYLj43tGizT",
      "v2VQ1sFPhF0F",
      "OFpSBHf4L5z1",
      "0Fxjk7vQtFqY",
      "1bA2rc82DlYD",
    ],
    rating_pos: 305,
    rating_neg: 166,
  },
  {
    name: "CaptMeow",
    detailed_description: `Capt. Meow is an Action RPG game set in a Pirate theme . You are shipwrecked on an uncharted island of undead pirates . You  begin with a pair of pants and are required to survive as long as possible by crafting tools, weapons, shelters, and collecting resources. You will need to fight Undead Pirates in Single player as well as your Friends in Multiplayer.  Resources are scattered through out the Jungle with some only available in certain areas .<br />
    Customizable Character , Skill Tree , Farming , Building w/Wood or Stone  , Crafting , Ranged Weapons , Magic and Spells , Single and Multiplayer Save/Load <br />
     Resources &amp; Enemies respawn after time , Swim the Lagoon , Mini-Map <br />
    Trading , Quests ............. and much more. <br />
                  THANKS FOR PLAYING !!!`,
    short_description: `Capt. Meow is an Action RPG game`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824520/header.jpg?t=1677993778`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7, Windows 8, Windows 10<br></li><li><strong>Processor:</strong> 64-bit<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GeForce GTX 960<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>`,
    publishers: ["ChristophercGaming LLC"],
    price: 13.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "3", description: "RPG" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_878e35ddd606df58b2b4c680e275d1d453693f5f.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_878e35ddd606df58b2b4c680e275d1d453693f5f.1920x1080.jpg?t=1677993778",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_cf24dfcd121fab0a4b7734bf35bedc21bd8dbfe8.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_cf24dfcd121fab0a4b7734bf35bedc21bd8dbfe8.1920x1080.jpg?t=1677993778",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_a83c4558f619aa1488a0fc3389b21e76a453f512.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_a83c4558f619aa1488a0fc3389b21e76a453f512.1920x1080.jpg?t=1677993778",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_74fcc67599d10e2eb236acb4e018129d62f358cc.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_74fcc67599d10e2eb236acb4e018129d62f358cc.1920x1080.jpg?t=1677993778",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_e1a655822705ecc02ce87ac1701f420fd4045191.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_e1a655822705ecc02ce87ac1701f420fd4045191.1920x1080.jpg?t=1677993778",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_85110677c67e9523be4c19a00f52e38120d30e25.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_85110677c67e9523be4c19a00f52e38120d30e25.1920x1080.jpg?t=1677993778",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_a196d2b4194c208308bcd6ac94c4f33a6c0c6b12.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_a196d2b4194c208308bcd6ac94c4f33a6c0c6b12.1920x1080.jpg?t=1677993778",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_414b98502ab3b7e842669d0e106d61c51bae847f.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_414b98502ab3b7e842669d0e106d61c51bae847f.1920x1080.jpg?t=1677993778",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_c040d32ba12c7cc6df2790dd1324edb1730b665e.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_c040d32ba12c7cc6df2790dd1324edb1730b665e.1920x1080.jpg?t=1677993778",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_cdd966eeea7988dbd9aa5ebdf47621653d4f0285.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_cdd966eeea7988dbd9aa5ebdf47621653d4f0285.1920x1080.jpg?t=1677993778",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_1a92abb03fab19d48f8aeaa2aaf07cfd0be0d038.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_1a92abb03fab19d48f8aeaa2aaf07cfd0be0d038.1920x1080.jpg?t=1677993778",
      },
      {
        id: 11,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_7af7f11ffefc6d93437db4e4ca64f049b0c2e626.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_7af7f11ffefc6d93437db4e4ca64f049b0c2e626.1920x1080.jpg?t=1677993778",
      },
      {
        id: 12,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_21bbbf1f104fc2881c5050274523e3d79bd93f50.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_21bbbf1f104fc2881c5050274523e3d79bd93f50.1920x1080.jpg?t=1677993778",
      },
      {
        id: 13,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_662b591b9d3ab99e61b2a515a6fbb53baf6b7662.600x338.jpg?t=1677993778",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/ss_662b591b9d3ab99e61b2a515a6fbb53baf6b7662.1920x1080.jpg?t=1677993778",
      },
    ],
    movies: [
      {
        id: 256861451,
        name: "King of the Hill",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861451/movie.293x165.jpg?t=1638238603",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861451/movie480_vp9.webm?t=1638238603",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861451/movie_max_vp9.webm?t=1638238603",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861451/movie480.mp4?t=1638238603", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861451/movie_max.mp4?t=1638238603" },
        highlight: true,
      },
      {
        id: 256861438,
        name: "BUILDING",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861438/movie.293x165.jpg?t=1638238611",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861438/movie480_vp9.webm?t=1638238611",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861438/movie_max_vp9.webm?t=1638238611",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861438/movie480.mp4?t=1638238611", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861438/movie_max.mp4?t=1638238611" },
        highlight: true,
      },
      {
        id: 256861437,
        name: "SWIMMING",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861437/movie.293x165.jpg?t=1638238619",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861437/movie480_vp9.webm?t=1638238619",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861437/movie_max_vp9.webm?t=1638238619",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861437/movie480.mp4?t=1638238619", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861437/movie_max.mp4?t=1638238619" },
        highlight: true,
      },
      {
        id: 256861436,
        name: "CRAFTING",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861436/movie.293x165.jpg?t=1638238627",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861436/movie480_vp9.webm?t=1638238627",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861436/movie_max_vp9.webm?t=1638238627",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861436/movie480.mp4?t=1638238627", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861436/movie_max.mp4?t=1638238627" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824520/page_bg_generated_v6b.jpg?t=1677993778",
    keys: [
      "gjuwGaqVmXRl",
      "UtC7ZimsMSmw",
      "WGSiHHcMSBAp",
      "aBx07aAgwEVY",
      "i3rw617s9BlY",
      "zGFtmTL9bWcg",
      "ET4ZNb8nXzei",
      "XPbWlihQfX56",
      "QIbgrOFhTyuo",
      "PU8nKUSf2W6V",
      "tDJZGLeZ0HMC",
      "ruuuDxMnO82h",
      "lH8jbcCigd6l",
      "hbToebAckcEM",
      "b0Ox5D9IJUWV",
      "J7gX599WyzEr",
      "G6zidzmNnrnZ",
      "PZ2TONV6dV4m",
    ],
    rating_pos: 700,
    rating_neg: 82,
  },
  {
    name: "Hot Springs Story",
    detailed_description: `<h1>Next Kairogames</h1><p><a href="https://store.steampowered.com/app/2437690/" target="_blank" rel=""  >Coming soon</a><br><a href="https://store.steampowered.com/app/2437690/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/2437690/</a></p><br><h1>About the Game</h1>Build your own resort and propel it to success with but a touch of the finger in this one-of-a-kind simulation!<br><br>Rooms, restaurants, arcades, and baths--position each facility to lull your guests into hot spring Nirvana and skyrocket your establishment to fame! <br><br>Craft the perfect Japanese garden from lanterns, pine trees, azaleas, and more--you'll need it all if you want to attract VIPs like pop stars and novelists. <br><br>There can only be one #1! Do you have what it takes? <br><br><br>--<br>Try searching for &quot;Kairosoft&quot; to see all of our games!!<br><br><a href="https://store.steampowered.com/developer/Kairosoft" target="_blank" rel=""  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823710/extras/kairokunFD_92.png?t=1684666808" />Feel free to follow me♪</a>`,
    short_description: `Build and manage the ultimate Japanese hot springs inn.`,
    supported_languages: `English, French, Italian, German, Spanish - Spain, Thai, Turkish, Portuguese - Portugal, Russian, Simplified Chinese, Traditional Chinese, Japanese, Korean, Hindi`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823710/header.jpg?t=1684666808`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64bit<br></li><li><strong>Processor:</strong> Intel Atom® x7-Z8750<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>DirectX:</strong> Version 10<br></li><li><strong>Storage:</strong> 250 MB available space</li></ul>`,
    publishers: ["Kairosoft Co.,Ltd"],
    price: 700,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "28", description: "Simulation" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_ac8cc3ddeee57249887dd0141db08f97b99fcf61.600x338.jpg?t=1684666808",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_ac8cc3ddeee57249887dd0141db08f97b99fcf61.1920x1080.jpg?t=1684666808",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_80e25c979c0ed44ac09936555eddfb461b6a0a42.600x338.jpg?t=1684666808",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_80e25c979c0ed44ac09936555eddfb461b6a0a42.1920x1080.jpg?t=1684666808",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_d78878816b03226d586177cbd2f7ef2889d9cb6a.600x338.jpg?t=1684666808",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_d78878816b03226d586177cbd2f7ef2889d9cb6a.1920x1080.jpg?t=1684666808",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_e7d71754e4a16b809ccaf76a4b62bce698436469.600x338.jpg?t=1684666808",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_e7d71754e4a16b809ccaf76a4b62bce698436469.1920x1080.jpg?t=1684666808",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_90b1ee0964e9d7cd4a820ce405087f81e7ce9899.600x338.jpg?t=1684666808",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_90b1ee0964e9d7cd4a820ce405087f81e7ce9899.1920x1080.jpg?t=1684666808",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_e38453e76547e87709d647e5f3a57bb015237009.600x338.jpg?t=1684666808",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/ss_e38453e76547e87709d647e5f3a57bb015237009.1920x1080.jpg?t=1684666808",
      },
    ],
    movies: [
      {
        id: 256870940,
        name: "HotSpringsStory_english",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256870940/movie.293x165.jpg?t=1646362403",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256870940/movie480_vp9.webm?t=1646362403",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256870940/movie_max_vp9.webm?t=1646362403",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256870940/movie480.mp4?t=1646362403", max: "http://cdn.akamai.steamstatic.com/steam/apps/256870940/movie_max.mp4?t=1646362403" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823710/page_bg_generated_v6b.jpg?t=1684666808",
    keys: [
      "NwBmhn7c73U7",
      "XGHRCPHbQg34",
      "bmThvPCIh3F9",
      "s1gGvWTIuADI",
      "ZJkxKTyaDggb",
      "TIeGAJCrI44s",
      "A69C8DiIwFtI",
      "IuI0vS8NsFep",
      "ExR6SIY07pan",
      "UzMEF35gOPgQ",
      "9vOYjSVIAj49",
      "ZsAagGrxBi0G",
      "YIrtmQooASCE",
      "iSD0XhKHmQDF",
      "rX2Ir9fpHmSE",
      "Dm5EwywWSRiK",
      "hnqPRrWMGniu",
      "L3HLLBthiTft",
      "yXuNEGEBG2Zt",
      "cbpzyFV3lAmT",
      "tFkSZ43tpQ7i",
      "uvews5CMdeYz",
      "nKUmvLprm7QE",
      "4Oxg7wGAuQU3",
      "ydK9yg3rFU1o",
      "bsubik1e21Oj",
      "9YptUkSgfbrq",
      "QlwnnPqEKUL1",
      "ZCt5Gkt1UPuo",
      "gW4sS81E1Brq",
      "3X4wf63Zb8tD",
      "PkUw4t2y0AoS",
      "hXDl3xNnw8tU",
      "pORlpI6Bn4s2",
      "qR0dd5FqrLcv",
      "mTFkEWkoW9Rg",
      "mPuUH5eVJztj",
      "vf0ykWDSbI4P",
    ],
    rating_pos: 693,
    rating_neg: 298,
  },
  {
    name: "Touhou Kimono Blast",
    detailed_description: `<img src="https://cdn.akamai.steamstatic.com/steam/apps/1824540/extras/THFeatureCut.gif?t=1687885465" /><br><strong>Overview</strong><br><i>Touhou Kimono Blast</i> is a strip 'em up shooting game. It was made and developed by an independently developed gentleman purely because of his interest. I hope you will enjoy it.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824540/extras/Orange_Explod_CutV2.gif?t=1687885465" /><br><strong>Story</strong><br>A huge mysterious light shot out from the dark forest. The witch <i>Hakurei Reimu</i> who went to check was unfortunately shrunk by it. Facing huge monsters and barrage, can Hakurei Reimu have a way to defeat the monsters and solve the mystery?<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824540/extras/THFeatureTHCut.gif?t=1687885465" /><br><strong>Gameplay</strong><br><i>Touhou Kimono Blast</i>  adheres to the traditional Touhou operation and gameplay, so that everyone can use the most familiar way to dodge the bullet while smashing the arrogant monsters that have emerged from all directions.<br><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824540/extras/THBulletCut.gif?t=1687885465" /><br><strong>Game Features</strong><br><i>Barrage Strip Shooting: </i><br>In the face of arrogant monsters, you can use  strip 'em up one by one. Let the monsters have nowhere to hide.<br><br><i>The difficulty of being friendly to beginners:</i><br>The game contains a variety of difficulty settings, even beginners who have not played barrage games can pass the level without pressure.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824540/extras/FeatureSafeMode_EN_Resize.jpg?t=1687885465" /><br><i>Streamer friendly settings</i><br>The game has the option of masking the private parts, so don't worry about it in the live.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824540/extras/THFeatureCirnoBootJump2_Resize.gif?t=1687885465" /><br><i>Continuously updated content</i><br>With the development progress, new roles, new levels, and more interesting self-development systems will be added one after another.<br>Hope you all like it.`,
    short_description: `Touhou Kimono Blast is a adult danmaku strip 'em up shooting game, full of Touhou famous characters and boobs. A huge mystery light shooting form the dark forest. Can the girls going to defeat the monsters and solve the mystery?`,
    supported_languages: `English, Japanese, Simplified Chinese, Traditional Chinese, French, German, Spanish - Spain, Russian, Polish, Ukrainian, Portuguese - Brazil, Portuguese - Portugal, Spanish - Latin America, Korean, Indonesian, Malay, Turkish, Thai`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824540/header.jpg?t=1687885465`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> Intel Core i5<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>DirectX:</strong> Version 9.0<br></li><li><strong>Storage:</strong> 1500 MB available space</li></ul>`,
    publishers: ["MrBigGGGame"],
    price: 129.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
      { id: "70", description: "Early Access" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_ec5b0a7f8d998f03ea9da6492930dc65d04f4709.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_ec5b0a7f8d998f03ea9da6492930dc65d04f4709.1920x1080.jpg?t=1687885465",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_7221fef3c6cc9d05135352d6ab64ddcee611d69f.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_7221fef3c6cc9d05135352d6ab64ddcee611d69f.1920x1080.jpg?t=1687885465",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_3df44a90883875fdbdbcbda8ebcbacc83560fece.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_3df44a90883875fdbdbcbda8ebcbacc83560fece.1920x1080.jpg?t=1687885465",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_cbd8af56ba94999a725327e2eca4dab5415894d0.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_cbd8af56ba94999a725327e2eca4dab5415894d0.1920x1080.jpg?t=1687885465",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_264f5ec93aa257c63049ed327816a027aadbded4.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_264f5ec93aa257c63049ed327816a027aadbded4.1920x1080.jpg?t=1687885465",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_3e223a4443c500b387e139bcb0021b58cd8d5995.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_3e223a4443c500b387e139bcb0021b58cd8d5995.1920x1080.jpg?t=1687885465",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_1e818c8015ebde6942325ad8761c011ae44f5205.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_1e818c8015ebde6942325ad8761c011ae44f5205.1920x1080.jpg?t=1687885465",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_6ef338bf92eef84948269b9a2c476dde92221111.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_6ef338bf92eef84948269b9a2c476dde92221111.1920x1080.jpg?t=1687885465",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_a7cac640e560ee66daf95dd7e15164175352a96b.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_a7cac640e560ee66daf95dd7e15164175352a96b.1920x1080.jpg?t=1687885465",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_37b1355b8890d9429f6d4daa7f3525ac43162b0d.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_37b1355b8890d9429f6d4daa7f3525ac43162b0d.1920x1080.jpg?t=1687885465",
      },
      {
        id: 10,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_34984dd325cbc9e2e1d05f225623f8e462e8aa16.600x338.jpg?t=1687885465",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/ss_34984dd325cbc9e2e1d05f225623f8e462e8aa16.1920x1080.jpg?t=1687885465",
      },
    ],
    movies: [
      {
        id: 256900173,
        name: "Touhou Kimono Blast (東方花裳破 ) Debut Trailer for Steam",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256900173/movie.293x165.jpg?t=1669904891",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256900173/movie480_vp9.webm?t=1669904891",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256900173/movie_max_vp9.webm?t=1669904891",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256900173/movie480.mp4?t=1669904891", max: "http://cdn.akamai.steamstatic.com/steam/apps/256900173/movie_max.mp4?t=1669904891" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824540/page_bg_generated_v6b.jpg?t=1687885465",
    keys: ["bp8qsC1Fk2mJ"],
    rating_pos: 787,
    rating_neg: 282,
  },
  {
    name: "Scholar",
    detailed_description: `Scholar is a spelling game with RPG elements. Level up your hero as you spell words and unlock new skills. Fight powerful bosses at the end of each level and get that loot. <br><br><strong>Flow</strong><br>In Scholar, Flow is your both energy and health. Casting a word, as well as taking damage reduces your flow. Use your skills, equipment and upgrades to reduce flow costs or completely neglect them. In some cases even regenerate and fill your entire flow with one special word. <br><br><strong>Three Skill Trees to Explore</strong><br>Choose your way between path of Flow, Experience and Guardian. Will you focus solely on your exp gains or will you maximize your damage output? Mix them to your liking to enjoy your journey. Reset them any time and try out new strategies. <br><br><strong>Loot</strong><br>After you complete every run enjoy your new loot. Try harder difficulty runs to obtain better quality ones. Common, rare,legendary and set items all await you! Use multiple items of the same set to unlock special abilities. Finishing higher difficulty runs will also give you better rolled items. Look out for glitched items which roll with extra stats. Even a common item can be an exciting addition to your armory if you can find a glitched one!<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824260/extras/custom4.png?t=1652441364" /><br><br><strong>Augments</strong><br>As you spell words you'll start to run into augmented letters. These letters can give you various bonuses such as; XP, Flow, Damage or free shuffling. Sometimes they might carry harmful effects, yet even those can come in handy with the right skills.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824260/extras/custom3.png?t=1652441364" /><br><br><strong>Runes</strong><br>Spelling words, using augmented letters, defeating guardians will all earn you different kinds of runes. Use these runes to upgrade your board size, XP and gain advantages against the guardians. In addition to your skills and equipment, upgrades will also aid you in your journey.<br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824260/extras/custom2.jpg?t=1652441364" /><br><br><strong>Difficulty curated to your enjoyment</strong><br>It's up-to you to decide whether you want a purely relaxing experience or a hardcore spelling journey, When you are in the mood crank the difficulty to gain extra XP and loot. Apart from the general difficulty setting, your runs also scale from 1 to level 200. You can decide to farm lower levels in a fast manner or go higher for the better rewards. <br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824260/extras/custom1__Custom_.jpg?t=1652441364" /><br><br><strong>Skills and Items on full display.</strong><br>Any item that provides you a unique ability, or a skill that boosts your <i>XP</i>, <i>Damage </i>or <i>Flow </i>will always be shown in the corresponding section of your info box. Simply mouse over them to remind yourself of their names. Anytime a legendary or a set item triggers it's effect a short animation will be shown, allowing you to decide if they are useful enough for you or perhaps it's time to change up your gear.`,
    short_description: `Scholar is a spelling game with RPG elements. Level up your hero as you spell words and unlock new skills. Fight powerful bosses at the end of each level and get that loot.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824260/header.jpg?t=1652441364`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> windows 7<br></li><li><strong>Processor:</strong> Intel Dual-Core 2 GHz (or AMD equivalent)<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> 512 MB VRAM<br></li><li><strong>Storage:</strong> 500 MB available space</li></ul>`,
    publishers: ["cosmic_dust"],
    price: 94.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "4", description: "Casual" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_0f0d47f6be25e78030459d331cdda22dd5f8f90d.600x338.jpg?t=1652441364",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_0f0d47f6be25e78030459d331cdda22dd5f8f90d.1920x1080.jpg?t=1652441364",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_979301f16bc9f826cfaa9da5c1d0658a9029088c.600x338.jpg?t=1652441364",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_979301f16bc9f826cfaa9da5c1d0658a9029088c.1920x1080.jpg?t=1652441364",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_0506b3047ed42e7f241bcb9f14e8d9da7e26cb3f.600x338.jpg?t=1652441364",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_0506b3047ed42e7f241bcb9f14e8d9da7e26cb3f.1920x1080.jpg?t=1652441364",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_cae00aa8d3f8a881853d3b45605a874fe09bf3b4.600x338.jpg?t=1652441364",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_cae00aa8d3f8a881853d3b45605a874fe09bf3b4.1920x1080.jpg?t=1652441364",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_e8562490cb6f61365e26d2e3896f4f6f1ee8939f.600x338.jpg?t=1652441364",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_e8562490cb6f61365e26d2e3896f4f6f1ee8939f.1920x1080.jpg?t=1652441364",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_4552f0e34000b1e1bc5b4bb8a3b44092efc41a1f.600x338.jpg?t=1652441364",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/ss_4552f0e34000b1e1bc5b4bb8a3b44092efc41a1f.1920x1080.jpg?t=1652441364",
      },
    ],
    movies: [
      {
        id: 256884319,
        name: "trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256884319/movie.293x165.jpg?t=1651249854",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256884319/movie480_vp9.webm?t=1651249854",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256884319/movie_max_vp9.webm?t=1651249854",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256884319/movie480.mp4?t=1651249854", max: "http://cdn.akamai.steamstatic.com/steam/apps/256884319/movie_max.mp4?t=1651249854" },
        highlight: false,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824260/page_bg_generated_v6b.jpg?t=1652441364",
    keys: [
      "qReLyhKkIowf",
      "IIlfXfBRKVf3",
      "OfJmnTeW2TWR",
      "kErXkQE8OJ6J",
      "Fbhghbo1hU4U",
      "KGvc2c50FEM9",
      "jZa7uHjG34Qj",
      "uybLlpTAP5DO",
      "va173kws43F2",
      "GzpNYBrsFBBh",
      "tHMMCZiEi6RT",
      "QBnJkPANKee7",
      "nuxbWZG8fOf1",
      "V3LVYEArMfh0",
    ],
    rating_pos: 400,
    rating_neg: 278,
  },
  {
    name: "Furry Shakespeare: Two Incredibly Ripped, Absolutely Shredded Noble Kinsmen",
    detailed_description: `<h2 class="bb_tag">The State of the Elsinorian Empire</h2>King Theseus and his sister, Hippolyta, have ruled the great Elsinore Empire for over a decade. But now it is time to pass the torch. Or is it? In a brash move, <strong><i>King Theseus throws in his hat for re-election!</i></strong><h2 class="bb_tag">The Two Noble Kinsmen</h2>After winning the war with Thebes, King Theseus has nominated two of his rival's champions for the Thebian throne - but one of them wants more than that! Politically-minded Rax wants a war of wits as well as swords! <i><strong>A truly deadly debate!</strong></i><h2 class="bb_tag">Politics and Choices!</h2>Follow the exploits of Theseus' campaign staff as they<i><strong> try to survive!</strong></i><br><br><ul class="bb_ul"><li> Every choice affects one of 10+ story variables!</li></ul><ul class="bb_ul"><li> Visual Novel with branching paths!</li></ul><ul class="bb_ul"><li> Who will be elected the new Emperor of Elsinore? Or will you just straight-up overthrow the monarchy?</li></ul><ul class="bb_ul"><li> Break campaign promises?</li></ul>`,
    short_description: `Will you help the Emperor get re-elected, or will you just straight-up start a rebellion? It's up to you to decide in this political ballgame.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824590/header.jpg?t=1649371205`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Storage:</strong> 415 MB available space</li></ul>`,
    publishers: ["Stegalosaurus Game Development"],
    price: 765,
    platforms: { windows: true, mac: false, linux: true },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_edf37de5b56ecfce5fc5da8e2beccc9f91900bb2.600x338.jpg?t=1649371205",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_edf37de5b56ecfce5fc5da8e2beccc9f91900bb2.1920x1080.jpg?t=1649371205",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_1ce26638d42d056df493201d3b5cf1f9b9118def.600x338.jpg?t=1649371205",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_1ce26638d42d056df493201d3b5cf1f9b9118def.1920x1080.jpg?t=1649371205",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_aad8aea001687d6eb85ae551541482ece27350ae.600x338.jpg?t=1649371205",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_aad8aea001687d6eb85ae551541482ece27350ae.1920x1080.jpg?t=1649371205",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_03292dc739b1b147813c75370f26579dc0cfe414.600x338.jpg?t=1649371205",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_03292dc739b1b147813c75370f26579dc0cfe414.1920x1080.jpg?t=1649371205",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_bfe9d50adf10d200447269b92f14370a8f35ff7e.600x338.jpg?t=1649371205",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/ss_bfe9d50adf10d200447269b92f14370a8f35ff7e.1920x1080.jpg?t=1649371205",
      },
    ],
    movies: [
      {
        id: 256876787,
        name: "kmarch 2022",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256876787/movie.293x165.jpg?t=1646681689",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256876787/movie480_vp9.webm?t=1646681689",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256876787/movie_max_vp9.webm?t=1646681689",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256876787/movie480.mp4?t=1646681689", max: "http://cdn.akamai.steamstatic.com/steam/apps/256876787/movie_max.mp4?t=1646681689" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824590/page_bg_generated_v6b.jpg?t=1649371205",
    keys: [
      "XAqKS1pJzb4v",
      "Kh4AP7X0rcNa",
      "LB98An3Xs0fZ",
      "BG6rFjIvprTX",
      "aLB8OrjwwlMt",
      "noq2fWtWfs17",
      "cc0wI4pPrH8N",
      "4mm0hjzGpJlD",
      "CdaNwrBKilzn",
      "KRG5Dd8omyDZ",
      "iHvDjyJdwWco",
      "8awmhZv2tjVr",
      "zpV7LY3mU09f",
      "09P868K7IKfW",
      "q7yV0bf2BFsj",
      "deXqq5itMpB7",
      "AKPEnx2UQdsD",
      "eOeQG7uG86fy",
      "uQwWqoqcOV04",
      "2vaJeb8kOAam",
      "Xh6hBP2j0THf",
      "Rpcj3r7trApL",
    ],
    rating_pos: 604,
    rating_neg: 57,
  },
  {
    name: "Prototype Blocks 2",
    detailed_description: `Prototype Blocks 2 - Continuation of the first part of the puzzle in which new difficulties and portals await you!<br />
    <br />
    Use portals and blocks to solve exciting puzzles! You have to go all the way from start to finish, and whether you can do this is up to you.<br />
    <br />
    Waiting for you:<br />
    - Many levels<br />
    - Physics<br />
    - Convenient management<br />
    - Portals`,
    short_description: `Prototype Blocks 2 - Continuation of the first part of the puzzle in which new difficulties and portals await you!`,
    supported_languages: `English<strong>*</strong>, Russian<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824390/header.jpg?t=1638452854`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10<br></li><li><strong>Processor:</strong> Intel Core 2 Duo E6320 (2*1866) or equivalent<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> GeForce 7600 GS (512 MB) or equivalent<br></li><li><strong>Storage:</strong> 700 MB available space</li></ul>`,
    publishers: ["Louie Inc"],
    price: 139.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_4ab91fdd5e33713dd8dbf35dc526173ce5a7d3b6.600x338.jpg?t=1638452854",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_4ab91fdd5e33713dd8dbf35dc526173ce5a7d3b6.1920x1080.jpg?t=1638452854",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_310842f3efb486a9ccf6c65d8aae4fd8764286bf.600x338.jpg?t=1638452854",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_310842f3efb486a9ccf6c65d8aae4fd8764286bf.1920x1080.jpg?t=1638452854",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_00fcdc5a9bfae2a385d86e6a79c771020d59e271.600x338.jpg?t=1638452854",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_00fcdc5a9bfae2a385d86e6a79c771020d59e271.1920x1080.jpg?t=1638452854",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_92ceab6588dd772f98032ded4b3b2f531ce0552d.600x338.jpg?t=1638452854",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_92ceab6588dd772f98032ded4b3b2f531ce0552d.1920x1080.jpg?t=1638452854",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_3ebf71c6edbf664edcc52c2d7d799f7a71c01074.600x338.jpg?t=1638452854",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_3ebf71c6edbf664edcc52c2d7d799f7a71c01074.1920x1080.jpg?t=1638452854",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_67505bf9dd09283ecf609bf90326846a87b964dc.600x338.jpg?t=1638452854",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/ss_67505bf9dd09283ecf609bf90326846a87b964dc.1920x1080.jpg?t=1638452854",
      },
    ],
    movies: [
      {
        id: 256860938,
        name: "Prototype Blocks 2",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860938/movie.293x165.jpg?t=1637269658",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860938/movie480_vp9.webm?t=1637269658",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860938/movie_max_vp9.webm?t=1637269658",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860938/movie480.mp4?t=1637269658", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860938/movie_max.mp4?t=1637269658" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824390/page_bg_generated_v6b.jpg?t=1638452854",
    keys: [
      "uS2fHZrOPxYA",
      "59J17IFHUrfP",
      "wKOGkdwS6zDX",
      "5xHmbOhT3cew",
      "PkEUjA65h4L5",
      "05vcxlGIuE3i",
      "6WPkDfp72jvE",
      "u0jw3c0YWfRv",
      "92GId3VVfPMI",
      "AyDjH4SJBZyZ",
      "ajlUMch3ps4a",
      "T8wFXoBt9hgs",
      "m0USdxMNseFm",
      "QRy5iGjerMwe",
      "amXkDAJockkU",
    ],
    rating_pos: 790,
    rating_neg: 174,
  },
  {
    name: "Mondrian Squares",
    detailed_description: `<u>Overview</u><br><br>Mondrian Squares is a colourful, abstract puzzle game with random, procedurally generated levels so you never play the same game twice.  Progressive difficulty with no upper limit ensures that you will always have a new challenge to face.<br><br>Throw in a chillout jazz soundtrack and a visual theme inspired by the works of Piet Mondrian and you have the perfect game to immerse yourself in whenever you have a little spare time.<br><br><u>Gameplay</u><br><br>Mondrian Squares is delightfully simple to learn, but fiendishly difficult to master.<br><br>The object of the game is to merge the coloured squares by clicking on the white spaces in between them until only one coloured square remains.  If this coloured square is in the centre &quot;goal&quot; square you win and progress to the next level.<br><br>You begin with a puzzle that can be solved with a single move, but each level adds a new layer of difficulty and you will soon find yourself having to think dozens of moves ahead.<br><br>Your challenge awaits...`,
    short_description: `Mondrian Squares is a colourful, abstract puzzle game with random, procedurally generated levels so you never play the same game twice. Progressive difficulty with no upper limit ensures that you will always have a new challenge to face.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823910/header.jpg?t=1654264641`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Additional Notes:</strong> Windows 7 &amp; Windows Vista must be up to date with all service packs and also require DirectX 11 to be installed.</li></ul>`,
    publishers: ["LH Games Limited"],
    price: 13.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_cf9dcc6388e62a9b613ed2f8d261d1162631aa2e.600x338.jpg?t=1654264641",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_cf9dcc6388e62a9b613ed2f8d261d1162631aa2e.1920x1080.jpg?t=1654264641",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_dcdefa849ed14ad7e47ef215bdea1e6295d28839.600x338.jpg?t=1654264641",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_dcdefa849ed14ad7e47ef215bdea1e6295d28839.1920x1080.jpg?t=1654264641",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_fb7d680aea936ca01366434716d3519e5da3db55.600x338.jpg?t=1654264641",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_fb7d680aea936ca01366434716d3519e5da3db55.1920x1080.jpg?t=1654264641",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_b8fe67a23628d5cfd7abeee9e225e1d9fc81685c.600x338.jpg?t=1654264641",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_b8fe67a23628d5cfd7abeee9e225e1d9fc81685c.1920x1080.jpg?t=1654264641",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_5e8e0be6d16db513b9afd7bddd7fa6a07e04156c.600x338.jpg?t=1654264641",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/ss_5e8e0be6d16db513b9afd7bddd7fa6a07e04156c.1920x1080.jpg?t=1654264641",
      },
    ],
    movies: [
      {
        id: 256860878,
        name: "Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860878/movie.293x165.jpg?t=1654264633",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860878/movie480_vp9.webm?t=1654264633",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860878/movie_max_vp9.webm?t=1654264633",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860878/movie480.mp4?t=1654264633", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860878/movie_max.mp4?t=1654264633" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823910/page_bg_generated_v6b.jpg?t=1654264641",
    keys: [
      "108jlLwJhUMC",
      "I2bnUr8NkF27",
      "7VmHokxxApUB",
      "juMem9PpE26G",
      "OqiWag6qfiLq",
      "eO8eERrBDhry",
      "W3TkLE5qDNvZ",
      "QxcZjbdlP2zw",
      "pqqvuGcmia6V",
      "NMa7afQpUhxA",
      "R5irP7tDtxeo",
      "tDhXmh85Oib8",
      "uyuD0qJxVqaU",
      "1tgRJJzyQGM8",
      "FcohQ4HO2qjd",
      "ab9cHBO91JFs",
      "jzQV9ZNwZNX7",
    ],
    rating_pos: 567,
    rating_neg: 270,
  },
  {
    name: "Modest Eyes",
    detailed_description: `<img src="https://cdn.akamai.steamstatic.com/steam/apps/1825070/extras/logo.gif?t=1654978651" /><h2 class="bb_tag">General</h2><br><strong>Modest Eyes</strong> is an <strong>addicting game</strong> in which you have to solve puzzles with <strong>Lovely Girls</strong><br><br><strong>Incredible Atmosphere</strong>, <strong>Great Music</strong>,<strong> lots of levels with girls art in HD quality.</strong><br>The game is great for relaxing after a hard day.<h2 class="bb_tag">Features</h2><ul class="bb_ul"><li>Several difficulty levels.<br></li><li><strong>Relaxing gameplay</strong><br></li><li><strong>5 HD quality art with beautiful girls</strong><br></li><li><strong>Pleasant atmosphere.</strong></li></ul><h2 class="bb_tag">Game Modes:</h2><br><ul class="bb_ul"><li><strong>EASY</strong> - 4x4<br></li><li><strong>MEDIUM</strong> - 4x6<br></li><li><strong>ADVANCED</strong> - 6x10<br></li><li><strong>HARD</strong> - 8x14<br></li><li><strong>EPIC</strong>- 10x16</li></ul><h2 class="bb_tag">Thanks to artist - Ivan Peskov</h2>`,
    short_description: `Modest Eyes is an addicting game in which you have to solve puzzles with Lovely Girls.The game is perfect for relaxing.`,
    supported_languages: `English<strong>*</strong>, French<strong>*</strong>, Italian<strong>*</strong>, German<strong>*</strong>, Simplified Chinese<strong>*</strong>, Russian<strong>*</strong>, Japanese<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1825070/header.jpg?t=1654978651`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Window 7<br></li><li><strong>Processor:</strong> Any Dual-core 2.4 GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> 256MB VRAM<br></li><li><strong>Storage:</strong> 150 MB available space</li></ul>`,
    publishers: ["Rosa Special Studio"],
    price: 26.99,
    platforms: { windows: true, mac: true, linux: true },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "4", description: "Casual" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_df742faf817447ea74d34cce92cc9f9313e65f8e.600x338.jpg?t=1654978651",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_df742faf817447ea74d34cce92cc9f9313e65f8e.1920x1080.jpg?t=1654978651",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_582f13a3d7bb9deb982dadecc3c062978cc6241f.600x338.jpg?t=1654978651",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_582f13a3d7bb9deb982dadecc3c062978cc6241f.1920x1080.jpg?t=1654978651",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_d1b467bd393cc77ec36a77f39ce5247929132a34.600x338.jpg?t=1654978651",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_d1b467bd393cc77ec36a77f39ce5247929132a34.1920x1080.jpg?t=1654978651",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_bb91d99924675c50f841b216fe0dd524d2d236c0.600x338.jpg?t=1654978651",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_bb91d99924675c50f841b216fe0dd524d2d236c0.1920x1080.jpg?t=1654978651",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_86fcd3622444053322a74bba0ff0a3e7618ee7d7.600x338.jpg?t=1654978651",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_86fcd3622444053322a74bba0ff0a3e7618ee7d7.1920x1080.jpg?t=1654978651",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_36802bb2c78c5eabc554f7b5a9cfbd58a7d6d3cb.600x338.jpg?t=1654978651",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/ss_36802bb2c78c5eabc554f7b5a9cfbd58a7d6d3cb.1920x1080.jpg?t=1654978651",
      },
    ],
    movies: [
      {
        id: 256860886,
        name: "1",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860886/movie.293x165.jpg?t=1638531396",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860886/movie480_vp9.webm?t=1638531396",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860886/movie_max_vp9.webm?t=1638531396",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860886/movie480.mp4?t=1638531396", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860886/movie_max.mp4?t=1638531396" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1825070/page_bg_generated_v6b.jpg?t=1654978651",
    keys: ["yAl5ZLCT1N1r", "1wvyIJ3go8Fv", "95vgD7buwstv", "9vQj7lRp5CpY", "DzshQ57v7sM5"],
    rating_pos: 303,
    rating_neg: 282,
  },
  {
    name: "Ricochet",
    detailed_description: `Ricochet is a 2D action shooter. Run around in exciting arenas and fight your friends. Battle with an epic arsenal of high-tech weapons to become the ultimate Ricoteer. This game features four maps, all with different interesting mechanics, and each one requires a different strategy when playing the game. Each weapon changes up the gameplay and adds something new to the equation.<br><ul class="bb_ul">[*Pistol*Shotgun*SuperShotgun*RocketLauncher*Sniper*PowerPuncher]</ul>Each weapon has a specific condition that must be met if it is to be fired. For example, when firing the pistol, bullets will be blue until they bounce and turn orange. When the bullet is blue, it will heal an enemy. When the bullet is orange, it will damage them. The player has numerous abilities such as dash and crouch. When utilized correctly, the player can dodge bullets while at the same time ricocheting their way to victory`,
    short_description: `Battle your friends in exciting arenas with your epic arsenal. This is a 2D fighting game that utilizes platformer and shooter mechanics. The combat is ever-changing, and the art is simple but intriguing. Ricochet is fun, fast-paced, and it keeps you on your toes.`,
    supported_languages: `English<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824450/header.jpg?t=1645472910`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 and up<br></li><li><strong>Processor:</strong> x86, x64 architecture with SSE2 instruction set support<br></li><li><strong>Graphics:</strong> DX10, DX11, DX12 capable<br></li><li><strong>Storage:</strong> 450 MB available space</li></ul>`,
    publishers: ["Nix Studio"],
    price: 39.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_681efff751fa103d902b0bf9d17d5235d0aaf813.600x338.jpg?t=1645472910",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_681efff751fa103d902b0bf9d17d5235d0aaf813.1920x1080.jpg?t=1645472910",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_4fb0d1e225e686e5d06fcf758df14f9179dfd950.600x338.jpg?t=1645472910",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_4fb0d1e225e686e5d06fcf758df14f9179dfd950.1920x1080.jpg?t=1645472910",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_a31ed632fbe6dbc2dc1a82abaed6f87ea2ded83f.600x338.jpg?t=1645472910",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_a31ed632fbe6dbc2dc1a82abaed6f87ea2ded83f.1920x1080.jpg?t=1645472910",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_3aa12e8aafb625568bea6b7891910fe695c53e97.600x338.jpg?t=1645472910",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_3aa12e8aafb625568bea6b7891910fe695c53e97.1920x1080.jpg?t=1645472910",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_3df76aed6d22463ba4562b244482f85c0dc2e2c8.600x338.jpg?t=1645472910",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_3df76aed6d22463ba4562b244482f85c0dc2e2c8.1920x1080.jpg?t=1645472910",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_1888fbcb00dd11963416a65254d70220eaa4cc73.600x338.jpg?t=1645472910",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/ss_1888fbcb00dd11963416a65254d70220eaa4cc73.1920x1080.jpg?t=1645472910",
      },
    ],
    movies: [
      {
        id: 256862817,
        name: "Long Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256862817/movie.293x165.jpg?t=1638397632",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256862817/movie480_vp9.webm?t=1638397632",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256862817/movie_max_vp9.webm?t=1638397632",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256862817/movie480.mp4?t=1638397632", max: "http://cdn.akamai.steamstatic.com/steam/apps/256862817/movie_max.mp4?t=1638397632" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824450/page_bg_generated_v6b.jpg?t=1645472910",
    keys: [
      "490RBSqkMcDG",
      "94YmE1oC8dMo",
      "lwPivw1PEgNR",
      "ofcy25qwFyjn",
      "sQ1gA4p27PjB",
      "33q0oMM2QVxV",
      "Sy6bFRoUkJuw",
      "fjihgtXOdLEB",
      "aa4J99IZVQjL",
      "GtIA8nKqW9pv",
      "IyeVrohNUWPG",
      "ggZ1EXFVCcsB",
      "Hrbx4JWQ3quB",
      "iOJuBnbvTu7k",
      "t70PgYczud2y",
      "3k7J02o8ILVr",
      "vsFOCbAjKvTM",
      "WgbOXG7htXp3",
      "cOz06OL9HqI7",
      "1U0eamZ1Fi9H",
      "xTvJG6p1nydO",
      "y1odwyvc7lqs",
      "M8wqbk5PiAKR",
      "Xtw8Q8kopLbR",
      "8TwTpDiejj62",
      "XBvvawmonZt1",
      "BKN6QbZ6N2Di",
      "dLHwU55bRO3W",
      "DKRE6bh5hyak",
      "p6HyeqbHbAEw",
      "J6hLgZqs4GhO",
      "0SgpDKpexzvT",
      "ZQ1QQBPxhQ4k",
      "uy0f2edpRBcD",
    ],
    rating_pos: 652,
    rating_neg: 158,
  },
  {
    name: "Basault VR",
    detailed_description: `BASAULT VR is a virtual reality movement shooter. Run, jump, swing around on your grappling hook and shoot with a variety of complex yet familiar firearms. Use those tools to survive and reach the end of this roguelite!<br><br>*WARNING: do not play if you are prone to motion sickness*<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823830/extras/GrapplingHook.gif?t=1645120177" /><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823830/extras/DualDeag.gif?t=1645120177" /><br><u>WAIT... WHAT AM I SUPPOSED TO BE DOING?</u><br><br>This game is a roguelite. Your goal is to survive a series of hand designed arenas against tough ennemies with your mobility and weaponry and reach the end of the cycle to unlock new Etheral Weapons!<br><br>_________________________________________________________________________________________________________<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823830/extras/EtheralWP.gif?t=1645120177" /><br><u>...ETHERAL WEAPON? WHAT'S THAT?</u><br><br>An Etheral Weapon is a special type of gun that you can always spawn from behind your hips. Whether your gun is empty, you dropped it off a cliff or you just want to dual wield because that's the kind of <i>cool dude</i> you are, you can pull out these single magazine weapons to get you out of a bind!<br><br>_________________________________________________________________________________________________________<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823830/extras/EnvironmentsResised.png?t=1645120177" /><br><u>18 UNIQUE ARENAS...</u><br><br>...made for the sole purpose of shooting, running and swinging around in.<br><br>_________________________________________________________________________________________________________<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823830/extras/GunPile.gif?t=1645120177" /><br><u>10 UNIQUE GUNS...</u><br><br>...and more to come. Enjoy the entirely physical reloading and handling!<br><br>_________________________________________________________________________________________________________<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823830/extras/Credits.gif?t=1645120177" /><br><u>THANK YOU</u><br><br>Making this game alone would be quasi-impossible if it wasn't for the help of these people and ressources. Please look them up and give them some love by clicking on &quot;Visit the website&quot; on the sidebar :)`,
    short_description: `BASAULT VR is a virtual reality movement shooter. Run, jump, swing around on your grappling hook and shoot with a variety of complex yet familiar firearms. Use those tools to survive and reach the end of this roguelite!`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823830/header.jpg?t=1645120177`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> Intel Core i5-4590/AMD FX 8350 equivalent or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 970, AMD Radeon R9 290 equivalent or better<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>VR Support:</strong> SteamVR</li></ul>`,
    publishers: ["StalagmiteVR"],
    price: 159.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_f8f85716218ddbb28034c9c01fdf34536111bc93.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_f8f85716218ddbb28034c9c01fdf34536111bc93.1920x1080.jpg?t=1645120177",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_8c4f226952c53207da8c72c098348d79e162e4ca.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_8c4f226952c53207da8c72c098348d79e162e4ca.1920x1080.jpg?t=1645120177",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_fd557a2858e75a4680292aec1aa28a93317a78a9.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_fd557a2858e75a4680292aec1aa28a93317a78a9.1920x1080.jpg?t=1645120177",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_90ba59152fb8aa8b452df953dabdcb84c93d21a7.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_90ba59152fb8aa8b452df953dabdcb84c93d21a7.1920x1080.jpg?t=1645120177",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_8ad9e6f51e5113733c2a8b89bd9842f2e47c8aca.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_8ad9e6f51e5113733c2a8b89bd9842f2e47c8aca.1920x1080.jpg?t=1645120177",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_11ceb842e7f42f5b693c6e310a7e648937435f27.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_11ceb842e7f42f5b693c6e310a7e648937435f27.1920x1080.jpg?t=1645120177",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_b85ff395aedfcf94cca6212e6c2628a2f967b8ca.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_b85ff395aedfcf94cca6212e6c2628a2f967b8ca.1920x1080.jpg?t=1645120177",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_41df8e3c9210cf64fef0a0f18d811bbfb0401923.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_41df8e3c9210cf64fef0a0f18d811bbfb0401923.1920x1080.jpg?t=1645120177",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_3d8e7f616ccfef475c835144be3689e8ed9160d3.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_3d8e7f616ccfef475c835144be3689e8ed9160d3.1920x1080.jpg?t=1645120177",
      },
      {
        id: 9,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_91e850b1ab6088e10a0dc18f0bdfad8e31cc7b8d.600x338.jpg?t=1645120177",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/ss_91e850b1ab6088e10a0dc18f0bdfad8e31cc7b8d.1920x1080.jpg?t=1645120177",
      },
    ],
    movies: [
      {
        id: 256871501,
        name: "Basault VR - Launch Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256871501/movie.293x165.jpg?t=1643660752",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256871501/movie480_vp9.webm?t=1643660752",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256871501/movie_max_vp9.webm?t=1643660752",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256871501/movie480.mp4?t=1643660752", max: "http://cdn.akamai.steamstatic.com/steam/apps/256871501/movie_max.mp4?t=1643660752" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823830/page_bg_generated_v6b.jpg?t=1645120177",
    keys: ["Wy9zAgLXiKew", "NkgriHZlFIBK", "V6YGOOZ3FXVd", "HBtqAKWMZ9Mn", "23zo029kcBiL"],
    rating_pos: 733,
    rating_neg: 178,
  },
  {
    name: "A Noite Sem Fim",
    detailed_description: `A Noite Sem Fim é uma aventura com elementos de RPG e batalhas táticas por turnos. Embarque numa jornada pelo Reino de Caldia e descubra uma trama envolvente neste primeiro capítulo de uma trilogia de fantasia medieval. Junte-se a 8 heróis diferentes, cada um com sua própria classe, atributos e resistências diferentes além de motivações próprias. Descubra com eles os mistérios de uma antiga guerra que pode estar prestes a se repetir.<br><br><strong>Características</strong><br><br>Aventure-se em uma história de um amor impossível entre um homem e uma estrela, traição e uma guerra entre deuses que definirá o destino das pessoas e do Reino de Caldia.    <br><br>Combates Clássicos por turnos, nada de tempo real. Tome seu tempo para: pensar, planejar e executar. Ícones auxiliares estarão presentes durante o combate para ajudar a identificar o que está ocorrendo durante a batalha. <br><br>Uma protagonista, 8 heróis e 8 classes. Amigos hoje e inimigos amanhã? Junte-se a Crystal e conheça outros 7 heróis que irão dividir a primeira parte desta aventura com você. Cada um com sua própria classe, golpes únicos, atributos, resistências e ambições.<br><br>Isso é ferrugem? Cuidado ao pegar armas deixadas por monstros, sabe-se lá quando ela foi usada por último. Armas enferrujadas ou tortas podem trazer penalidades ao equipamento e acabam sendo piores do que se estivesse usando os punhos. No entanto, se tiver sorte pode encontrar algo brilhante ou ainda mágico! Isso pode fazer com que aquele espólio que você encontre se torne mesmo um tesouro tão raro que não é encontrado em nenhuma loja.<br><br><strong>História </strong><br><br>Quatro reinos dividiam fronteiras e possuíam relações harmoniosas entre si. Mas tudo mudou com uma guerra entre os deuses que ninguém poderia ter previsto que iria acontecer.<br><br>As quatro nações sucumbiram inevitavelmente e um novo reino nasceu em seu lugar: Caldia. O único herói sobrevivente se tornou o rei dessa nova nação e seus descendentes, os sucessores ao trono.<br><br>Muitos anos se passaram, mas as ameaças permanecem. Há aqueles que tramam em suas prisões para serem libertos, outros tramam a queda de seus inimigos enquanto já infiltrados nas forças destes e há sempre aqueles que querem conquistar e lutar em nome de um bem maior.<br><br>Nossa heroína descende daqueles que lutaram e perderam, mas somente ela pode escolher o caminho que vai trilhar. <br> <br>Descubra um pouco deste universo no primeiro capítulo da trilogia - A Noite Sem Fim: Sombras da Guerra. <br><br><strong>Gameplay</strong><br><br>Fortemente influenciado pelos jogos <i>chrono trigger </i>e <i>final fantasy</i>, nossa aventura conta com batalhas por turnos, itens consumíveis, condições de estado, buffs e debuffs simples e um sistema de equipamento de fácil uso que trará a nostalgia dos clássicos novamente. Ao mesmo tempo que construímos uma imersão em um universo novo com uma história inspirada nos conflitos da corte das <i>crônicas de gelo e fogo</i>.`,
    short_description: `A Noite Sem Fim é uma aventura com elementos de RPG e combate por turnos por um reino de fantasia medieval onde um conflito entre deuses e ambições humanas marcam a terra.`,
    supported_languages: `Portuguese - Brazil`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824160/header.jpg?t=1669241136`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 SP1+<br></li><li><strong>Processor:</strong> 1.2 Ghz, Pentium 4+<br></li><li><strong>Memory:</strong> 3 GB RAM<br></li><li><strong>Graphics:</strong> DirectX 9.0c compatible with 512 MB<br></li><li><strong>DirectX:</strong> Version 9.0<br></li><li><strong>Storage:</strong> 2 GB available space</li></ul>`,
    publishers: ["A Guilda"],
    price: 78.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
      { id: "3", description: "RPG" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_28973e657342b298656fcf2c43b16fa79970581d.600x338.jpg?t=1669241136",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_28973e657342b298656fcf2c43b16fa79970581d.1920x1080.jpg?t=1669241136",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_5d78688f24bdfe9bb8bfa9a3f7e255995a9b8b47.600x338.jpg?t=1669241136",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_5d78688f24bdfe9bb8bfa9a3f7e255995a9b8b47.1920x1080.jpg?t=1669241136",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_38e2204e0d6c0d82de0286673ae7df925ba12bef.600x338.jpg?t=1669241136",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_38e2204e0d6c0d82de0286673ae7df925ba12bef.1920x1080.jpg?t=1669241136",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_5fd3502f9f1087d264487a598242163435424718.600x338.jpg?t=1669241136",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_5fd3502f9f1087d264487a598242163435424718.1920x1080.jpg?t=1669241136",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_d53708554ab8706d8d34abc030f9eac49c596da2.600x338.jpg?t=1669241136",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_d53708554ab8706d8d34abc030f9eac49c596da2.1920x1080.jpg?t=1669241136",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_2704c4a15ea6e3144ec86eb76f5d12f47017ced9.600x338.jpg?t=1669241136",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_2704c4a15ea6e3144ec86eb76f5d12f47017ced9.1920x1080.jpg?t=1669241136",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_d1d9e860f377ba8d264fcb17fd259bf176c0087b.600x338.jpg?t=1669241136",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/ss_d1d9e860f377ba8d264fcb17fd259bf176c0087b.1920x1080.jpg?t=1669241136",
      },
    ],
    movies: [
      {
        id: 256863145,
        name: "Trailer_01_Combat",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256863145/movie.293x165.jpg?t=1638911145",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256863145/movie480_vp9.webm?t=1638911145",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256863145/movie_max_vp9.webm?t=1638911145",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256863145/movie480.mp4?t=1638911145", max: "http://cdn.akamai.steamstatic.com/steam/apps/256863145/movie_max.mp4?t=1638911145" },
        highlight: true,
      },
      {
        id: 256863147,
        name: "Trailer_01_Story",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256863147/movie.293x165.jpg?t=1638911154",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256863147/movie480_vp9.webm?t=1638911154",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256863147/movie_max_vp9.webm?t=1638911154",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256863147/movie480.mp4?t=1638911154", max: "http://cdn.akamai.steamstatic.com/steam/apps/256863147/movie_max.mp4?t=1638911154" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824160/page_bg_generated_v6b.jpg?t=1669241136",
    keys: ["AEyGyRQF9ayv", "VFrdwccznoKx", "6ojhfbB8MeYg", "x9JBeqAOLpmN", "wBbLptUzPrFB", "uk9VSqRozeq4", "dwM59U2hRNsQ", "mPAp8RSlxwGl"],
    rating_pos: 333,
    rating_neg: 290,
  },
  {
    name: "Tales of Terror",
    detailed_description: `<img src="https://cdn.akamai.steamstatic.com/steam/apps/1824150/extras/HeaderWishlist.gif?t=1664488282" /><br><br>Tales of Terror is a co-op horror survival game.  Work together to survive, Use a variety of items, solve the mystery and escape… if you can!  <br><br><strong>Friendship is key! </strong><br><br><u>PVE online cooperative play! </u><br>Play with up to 4 friends.   Work together to solve the mystery,  Find items along the way to help you and escape all together if you can! <br><br><u>Single player mode!</u><br>Looking for a challenge?   See if you can handle the onslaught by yourself!`,
    short_description: `Tales of Terror is a co-op horror survival game. Work together to survive, Use a variety of items, solve the mystery and escape… if you can!`,
    supported_languages: `English<strong>*</strong>, French, German, Simplified Chinese, Spanish - Latin America, Italian, Czech, Dutch, Finnish, Hungarian, Japanese, Korean, Norwegian, Polish, Portuguese - Portugal, Russian, Turkish, Romanian<br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824150/header.jpg?t=1664488282`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> Intel Core i5 / AMD equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce GTX 960 / AMD equivalent<br></li><li><strong>Storage:</strong> 6 GB available space</li></ul>`,
    publishers: ["Bearfoxbear"],
    price: 67.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "1", description: "Action" },
      { id: "25", description: "Adventure" },
      { id: "23", description: "Indie" },
      { id: "70", description: "Early Access" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_39060cd8d7261a5006b2bba67894d311acdb1012.600x338.jpg?t=1664488282",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_39060cd8d7261a5006b2bba67894d311acdb1012.1920x1080.jpg?t=1664488282",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_658794fd4c0defb2cc62f0c80b7a43cec154ccd3.600x338.jpg?t=1664488282",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_658794fd4c0defb2cc62f0c80b7a43cec154ccd3.1920x1080.jpg?t=1664488282",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_d63a8f1a1455bc0f074bb2c98cd5354fafeacff3.600x338.jpg?t=1664488282",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_d63a8f1a1455bc0f074bb2c98cd5354fafeacff3.1920x1080.jpg?t=1664488282",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_ec7e5721e0458a7341cfa0722cd116ffc156d71f.600x338.jpg?t=1664488282",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_ec7e5721e0458a7341cfa0722cd116ffc156d71f.1920x1080.jpg?t=1664488282",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_af33d0f7b3e794753cde79341039c0e289f49e3a.600x338.jpg?t=1664488282",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_af33d0f7b3e794753cde79341039c0e289f49e3a.1920x1080.jpg?t=1664488282",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_6204ce613e019aec7906288b5f5d9fa79f3ed21e.600x338.jpg?t=1664488282",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/ss_6204ce613e019aec7906288b5f5d9fa79f3ed21e.1920x1080.jpg?t=1664488282",
      },
    ],
    movies: [
      {
        id: 256888942,
        name: "Teaser Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256888942/movie.293x165.jpg?t=1658868666",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256888942/movie480_vp9.webm?t=1658868666",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256888942/movie_max_vp9.webm?t=1658868666",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256888942/movie480.mp4?t=1658868666", max: "http://cdn.akamai.steamstatic.com/steam/apps/256888942/movie_max.mp4?t=1658868666" },
        highlight: true,
      },
      {
        id: 256892771,
        name: "Teaser Trailer #2",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256892771/movie.293x165.jpg?t=1663385002",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256892771/movie480_vp9.webm?t=1663385002",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256892771/movie_max_vp9.webm?t=1663385002",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256892771/movie480.mp4?t=1663385002", max: "http://cdn.akamai.steamstatic.com/steam/apps/256892771/movie_max.mp4?t=1663385002" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824150/page_bg_generated_v6b.jpg?t=1664488282",
    keys: [
      "7jUxoH9JMKAr",
      "DzHncfMnzIuj",
      "tCjGC77W2ENA",
      "Wm6WlslGPXN0",
      "vj8M464OYemj",
      "i3cBFFskQpkq",
      "DciZF8X0OmYh",
      "s41Ve3EQFFZQ",
      "GMWHiT09AEkI",
      "IjaRkvkDxler",
      "TrNzLcooq0e2",
      "g9BNDzpDwWKW",
      "dbFZWKqeGVom",
      "gYhIFT7bkbgx",
      "TsrAlrTs22EN",
      "STHbBziZ5WN6",
      "4ZwhO9CZMyUq",
      "7TQEA1zOLmDN",
      "qOSsefCyid2Q",
      "KO0FueJnnrud",
      "OgptGY9ILxEP",
      "AMo2qGDW7PMX",
      "DugW8YJvuwNN",
    ],
    rating_pos: 412,
    rating_neg: 281,
  },
  {
    name: "Outside the Window",
    detailed_description: `<strong><h2 class="bb_tag">Description</h2></strong><br><br>Outside the Window is a simple pixel-artstyle city builder game. You need build your own city then relax and enjoy your results. Only Zen Mode and Hell Mode are included in the game.<br><br><strong><h2 class="bb_tag">Gameplay</h2></strong><br><br>You can decide the next 5 bricks randomly by choosing the group of bricks. After finish one level, you can continue to the next level. When bricks in the current page is empty, you can step into the next area.<br><br><ul class="bb_ul"><li> In Zen mode, You don't need to reach the scores to continue the game.<br></li><li> In hell mode, the contact of different brick types will increase different scores. <br></li><li> In Standard mode, you should achieve the goal to reach the next tier.</li></ul><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824130/extras/gif_1_616x346.gif?t=1684911705" /><br><br><strong><h2 class="bb_tag">About the developer</h2></strong><br><br>This is Liujiajun and this little-weird game is my fourth game on Steam. I hope you love my game. At last, of course.<br>Thanks for playing my game.<br><br>If you have any question or suggestion, please free to contact me.`,
    short_description: `Outside the Window is a simple pile of pixel houses game, you need to build up your own pixel cityscape piece by piece, after that, quietly admire their results to relax.`,
    supported_languages: `English<strong>*</strong>, Simplified Chinese<strong>*</strong>, Japanese<strong>*</strong>, Traditional Chinese<strong>*</strong><br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824130/header.jpg?t=1684911705`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 and above<br></li><li><strong>Processor:</strong> i3<br></li><li><strong>Memory:</strong> 4 MB RAM<br></li><li><strong>Graphics:</strong> Intel HD 4000<br></li><li><strong>Storage:</strong> 100 MB available space</li></ul>`,
    publishers: ["Liujiajun", "Gamera Games"],
    price: 82,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "28", description: "Simulation" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_fe90f2fcb72c18f8c808287e297dffd96b4b2495.600x338.jpg?t=1684911705",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_fe90f2fcb72c18f8c808287e297dffd96b4b2495.1920x1080.jpg?t=1684911705",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_eac6de3368b4e058e104b5d0cb6947831e4a6c67.600x338.jpg?t=1684911705",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_eac6de3368b4e058e104b5d0cb6947831e4a6c67.1920x1080.jpg?t=1684911705",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_a968db714b4c3543da48d444222fa8abba1ea6dd.600x338.jpg?t=1684911705",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_a968db714b4c3543da48d444222fa8abba1ea6dd.1920x1080.jpg?t=1684911705",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_d28cec36f72b05d5ff297d287fb6030daba45c0f.600x338.jpg?t=1684911705",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_d28cec36f72b05d5ff297d287fb6030daba45c0f.1920x1080.jpg?t=1684911705",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_84b6da8654c76a5561130494ceb8eb564a3a4902.600x338.jpg?t=1684911705",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/ss_84b6da8654c76a5561130494ceb8eb564a3a4902.1920x1080.jpg?t=1684911705",
      },
    ],
    movies: [
      {
        id: 256861089,
        name: "Outside the Window PV Early EN",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861089/movie.293x165.jpg?t=1653583782",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861089/movie480_vp9.webm?t=1653583782",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861089/movie_max_vp9.webm?t=1653583782",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861089/movie480.mp4?t=1653583782", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861089/movie_max.mp4?t=1653583782" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824130/page_bg_generated_v6b.jpg?t=1684911705",
    keys: [
      "usSOWKmyxU0U",
      "6j6PDjZLGzgf",
      "su7bixG9Imr0",
      "yyF1nbiSyXCb",
      "wtxb3KK1gv6U",
      "uu8uM0298fKo",
      "A0qF8NLgJuKO",
      "525tMdpFRfRF",
      "fhCFPBfK9HfC",
      "CGsuQDPOoZCS",
      "bi3Oc4StdFRj",
      "ghB0Obnzg14D",
      "Bd4LYqkC13NV",
      "xp0j8p7FSekc",
      "nEjdB868WRIE",
      "r5FdYuSbidEZ",
      "06ejcNNJsunk",
      "A4XXXfXNKvZe",
      "i6BAbNEfeXuc",
      "rOPxUdITDV94",
      "HaMMvB3gABs7",
      "SeZAWn2trGhJ",
      "xUAApW7dc0mA",
      "ZMbRp7i5bxJu",
      "dSgn76VEnnYY",
      "pff8udKUUfMh",
      "gsOm5R53ermn",
    ],
    rating_pos: 678,
    rating_neg: 116,
  },
  {
    name: "Rejoinder",
    detailed_description: `<h2 class="bb_tag">Play! Die! Repeat!</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824070/extras/rejoindergif3.gif?t=1648078578" /><br>Rejoinder is an endless, repeatable roguelite game with procedural generated levels where you must defeat the army of skeletons, evil warriors, and powerful bosses. Collect coins to upgrade your sword, and buy stronger potions for your character.<h2 class="bb_tag">Features</h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824070/extras/rejoindergif4.gif?t=1648078578" /><br><ul class="bb_ul"> <li> Destroy your enemies!<br></li><li>Defeat powerful bosses!<br></li><li>Level up, and collet new weapons and magics!<br></li><li>Buy stat potions such as Strength, Speed, Health, Stamina, and more!<br></li><li>Play, die, and repeat!. </li></ul><h2 class="bb_tag">Procedural Generated Levels! </h2><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824070/extras/rejoindergif5.gif?t=1648078578" /><br>Each level has a new combination of factors, monsters, and environment!`,
    short_description: `Fight an army of skeletons and evil warriors! Collect coins to upgrade your gear! Defeat tough bosses in this roguelite with procedurally generated levels!`,
    supported_languages: `English, Portuguese - Brazil`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824070/header.jpg?t=1648078578`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> Core i3 3.0Ghz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> Intel® UHD Graphics or above<br></li><li><strong>Storage:</strong> 1 GB available space<br></li><li><strong>Sound Card:</strong> DirectX Compatible Sound Card<br></li><li><strong>Additional Notes:</strong> Gamepads Recommended</li></ul>`,
    publishers: ["BigFrog Studios"],
    price: 67.99,
    platforms: { windows: true, mac: false, linux: true },
    genres: [
      { id: "1", description: "Action" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_532d68364f8089e07e90560b5e457681f3f27313.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_532d68364f8089e07e90560b5e457681f3f27313.1920x1080.jpg?t=1648078578",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_d07256447439d6aac18dc666e90a16031a73961d.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_d07256447439d6aac18dc666e90a16031a73961d.1920x1080.jpg?t=1648078578",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_30030b4c4c805be01ffd13945598fc95f502cfe7.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_30030b4c4c805be01ffd13945598fc95f502cfe7.1920x1080.jpg?t=1648078578",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_76fb3812a5902a14057d79dcb7ed377d671e9c16.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_76fb3812a5902a14057d79dcb7ed377d671e9c16.1920x1080.jpg?t=1648078578",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_638f81cebbfc839b21a990c799d2c0c250f3b4a9.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_638f81cebbfc839b21a990c799d2c0c250f3b4a9.1920x1080.jpg?t=1648078578",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_4824ce5ab37a1d9ff9d9dc5706247e2cf514562b.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_4824ce5ab37a1d9ff9d9dc5706247e2cf514562b.1920x1080.jpg?t=1648078578",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_23252cf3171d9bece2040e95372b37a88a8c9244.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_23252cf3171d9bece2040e95372b37a88a8c9244.1920x1080.jpg?t=1648078578",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_0f0a2c9ec199a5aa0899d6e339186af9ff031465.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_0f0a2c9ec199a5aa0899d6e339186af9ff031465.1920x1080.jpg?t=1648078578",
      },
      {
        id: 8,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_bf7267685f2402d43711322724024dddb9fbedae.600x338.jpg?t=1648078578",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/ss_bf7267685f2402d43711322724024dddb9fbedae.1920x1080.jpg?t=1648078578",
      },
    ],
    movies: [
      {
        id: 256877642,
        name: "GameplayTrailerLaunch",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256877642/movie.293x165.jpg?t=1647192928",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256877642/movie480_vp9.webm?t=1647192928",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256877642/movie_max_vp9.webm?t=1647192928",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256877642/movie480.mp4?t=1647192928", max: "http://cdn.akamai.steamstatic.com/steam/apps/256877642/movie_max.mp4?t=1647192928" },
        highlight: true,
      },
      {
        id: 256867352,
        name: "GameplayTrailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256867352/movie.293x165.jpg?t=1647192932",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256867352/movie480_vp9.webm?t=1647192932",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256867352/movie_max_vp9.webm?t=1647192932",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256867352/movie480.mp4?t=1647192932", max: "http://cdn.akamai.steamstatic.com/steam/apps/256867352/movie_max.mp4?t=1647192932" },
        highlight: true,
      },
      {
        id: 256861303,
        name: "PreLaunchTrailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256861303/movie.293x165.jpg?t=1647192936",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256861303/movie480_vp9.webm?t=1647192936",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256861303/movie_max_vp9.webm?t=1647192936",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256861303/movie480.mp4?t=1647192936", max: "http://cdn.akamai.steamstatic.com/steam/apps/256861303/movie_max.mp4?t=1647192936" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824070/page_bg_generated_v6b.jpg?t=1648078578",
    keys: [
      "DAiypEKsHxQE",
      "XbxPhygrCL3u",
      "4RJ79cekKd2R",
      "lDIDLlYmBawB",
      "oEpauO2UkNXH",
      "KWzJNv4mb6DX",
      "ozgJsJEEVSRg",
      "eVa4M3UtlCz2",
      "i9tsrKvFLePX",
      "Lg3GG99Fvx7C",
      "VnODB7FeyUp6",
      "lmNaEKJT2AIZ",
      "f2EFmpZrX2s7",
      "o5O0g5YYlUaa",
      "OVhiUZT9hpEe",
      "SZ7zKWxfXnXs",
      "iy95WNmckEHd",
      "PDCfJOnnNoch",
      "Wz1JqXLG6LuN",
      "bE3neGUgyEUP",
      "D3f1YvSuhvl1",
      "V9U7ZThClBLV",
      "9OUH474qjchk",
      "Zei649yyiZHI",
      "qR33C6kvwK2U",
      "3zh4tBerdLsx",
      "WJ6OYLkSxZdM",
      "EeB0nhbwbyUM",
    ],
    rating_pos: 461,
    rating_neg: 216,
  },
  {
    name: "Cruise Ship Handling",
    detailed_description: `Original simulator of cruise ship handling, maneuvering and mooring to a pier. <br />
    <br />
    *Game features*<br />
    Realistic control of large cruise liners. <br />
    Twin-screw vessels with separate propeller control or azimuth propulsion.<br />
    Maneuvering with thrusters. <br />
    Mooring the vessel to the berth.<br />
    Departure from ports to target area. <br />
    Narrow-swimming, bypass of hazards, icebergs, passing with other AI vessels. <br />
    Different environment and weather conditions.<br />
    Damage, split in half and sinking of ships at collisions.`,
    short_description: `Cruise ship handling, maneuvering and mooring simulator. Feel like the captain of a large cruise liners.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824020/header.jpg?t=1639593276`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> Quad core Intel / AMD processor, 2GHz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> 1 GB<br></li><li><strong>Storage:</strong> 512 MB available space</li></ul>`,
    publishers: ["Aleksandr Turkin"],
    price: 94.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "23", description: "Indie" },
      { id: "28", description: "Simulation" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_e3b7bbcc26dce20c1744ba6b2fd7a64fc20e626d.600x338.jpg?t=1639593276",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_e3b7bbcc26dce20c1744ba6b2fd7a64fc20e626d.1920x1080.jpg?t=1639593276",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_aed4c221c118a950839fe09481070d2430d8fdee.600x338.jpg?t=1639593276",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_aed4c221c118a950839fe09481070d2430d8fdee.1920x1080.jpg?t=1639593276",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_58084be3d0af739b9c3e4e64afa4139a57c8f438.600x338.jpg?t=1639593276",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_58084be3d0af739b9c3e4e64afa4139a57c8f438.1920x1080.jpg?t=1639593276",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_ac9e17d8bde246515ec0ae703e46bf2a5898aea9.600x338.jpg?t=1639593276",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_ac9e17d8bde246515ec0ae703e46bf2a5898aea9.1920x1080.jpg?t=1639593276",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_19c44096599e2d9f55c025a6ce8e310b5a268cb7.600x338.jpg?t=1639593276",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_19c44096599e2d9f55c025a6ce8e310b5a268cb7.1920x1080.jpg?t=1639593276",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_6077d077420ca34fd320acc5ca018f7306d0aa9a.600x338.jpg?t=1639593276",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_6077d077420ca34fd320acc5ca018f7306d0aa9a.1920x1080.jpg?t=1639593276",
      },
      {
        id: 6,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_8b63b980570f4fbe4d35c039f9cb284eee3a0879.600x338.jpg?t=1639593276",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_8b63b980570f4fbe4d35c039f9cb284eee3a0879.1920x1080.jpg?t=1639593276",
      },
      {
        id: 7,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_3aa2f85ba64d95ab95861353b0d351d212d4d4f7.600x338.jpg?t=1639593276",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/ss_3aa2f85ba64d95ab95861353b0d351d212d4d4f7.1920x1080.jpg?t=1639593276",
      },
    ],
    movies: [
      {
        id: 256864556,
        name: "Cruise Ship",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256864556/movie.293x165.jpg?t=1639246533",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256864556/movie480_vp9.webm?t=1639246533",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256864556/movie_max_vp9.webm?t=1639246533",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256864556/movie480.mp4?t=1639246533", max: "http://cdn.akamai.steamstatic.com/steam/apps/256864556/movie_max.mp4?t=1639246533" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824020/page_bg_generated_v6b.jpg?t=1639593276",
    keys: [
      "M5LS3efziY55",
      "7CPICCJPLdvT",
      "5gSBKJh7ynq4",
      "QRTkDTEcZsye",
      "BY7IR9baxXbI",
      "YOCiDKDW4YsC",
      "VvHb1XVKXY9S",
      "uhyPRLMvsbU9",
      "aETzI0g3FdtX",
      "v0TU4MaWNsWx",
      "sxDA0tZkKAQX",
      "mZMV3RgIUR1n",
      "B3Q8TCH0HI7L",
      "uvURilMpHpU9",
      "nXGvEV9mpNhV",
      "5Hjt7WA7dg0c",
    ],
    rating_pos: 302,
    rating_neg: 232,
  },
  {
    name: "Galactic Ravager",
    detailed_description: `Galactic Ravager is an arcade scrolling shooter, top view.<br />
    Nice graphics and atmospheric music will immerse you in the Aerospace Troops.<br />
    <br />
    The planet earth was attacked by aliens. Only you, the captain of the aerospace forces, can save the planet from enemies. You have to protect the orbital station, as well as penetrate behind enemy lines and destroy all the aliens.<br />
    <br />
    Accumulate points and buy new ships in your hangar. collect new weapons.<br />
    <br />
    -Nice graphics<br />
    - Cool music<br />
    -Gamepad support`,
    short_description: `The planet earth was attacked by aliens. Only you, the captain of the aerospace forces, can save the planet from enemies. You have to protect the orbital station, as well as penetrate behind enemy lines and destroy all the aliens.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823860/header.jpg?t=1657880500`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Microsoft Windows<br></li><li><strong>Processor:</strong> Intel Celeron 1800 MHz<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>Graphics:</strong> Intel HD Graphics<br></li><li><strong>Storage:</strong> 162 MB available space<br></li><li><strong>Sound Card:</strong> DirectSound Compatible<br></li><li><strong>Additional Notes:</strong> Keyboard</li></ul>`,
    publishers: ["Reforged Group"],
    price: 26.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [{ id: "23", description: "Indie" }],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_e915c85cfa565f57c6203523d5fcfa285093c980.600x338.jpg?t=1657880500",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_e915c85cfa565f57c6203523d5fcfa285093c980.1920x1080.jpg?t=1657880500",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_1eceecc2a614fa9d991090d94a4efa4f155dff1f.600x338.jpg?t=1657880500",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_1eceecc2a614fa9d991090d94a4efa4f155dff1f.1920x1080.jpg?t=1657880500",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_ae09e3b99204ceb5c64478625129bdf79b3b1d50.600x338.jpg?t=1657880500",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_ae09e3b99204ceb5c64478625129bdf79b3b1d50.1920x1080.jpg?t=1657880500",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_cad5c41793e661f3a6f3a7271aeca4ec76d35f96.600x338.jpg?t=1657880500",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_cad5c41793e661f3a6f3a7271aeca4ec76d35f96.1920x1080.jpg?t=1657880500",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_a30dd08301c951b386fa5c431f77cd27d8359df4.600x338.jpg?t=1657880500",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/ss_a30dd08301c951b386fa5c431f77cd27d8359df4.1920x1080.jpg?t=1657880500",
      },
    ],
    movies: [
      {
        id: 256863287,
        name: "Galactic Ravager",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256863287/movie.293x165.jpg?t=1638884284",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256863287/movie480_vp9.webm?t=1638884284",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256863287/movie_max_vp9.webm?t=1638884284",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256863287/movie480.mp4?t=1638884284", max: "http://cdn.akamai.steamstatic.com/steam/apps/256863287/movie_max.mp4?t=1638884284" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823860/page_bg_generated_v6b.jpg?t=1657880500",
    keys: ["sZciZM98Doms", "Quv4CV874Jgo", "2OzxP7kLacEv", "t8sVEg3yqkVe", "P5FlDE86d8yy", "ldQeRuOgbf2s", "rOelNg8gCnAY", "bXRMJbTrcLfA"],
    rating_pos: 322,
    rating_neg: 158,
  },
  {
    name: "Creatures Village",
    detailed_description: `<strong>Thrills, Spills and a Playground full of fun!</strong><br><br>This is a special world, inhabited by the amazing virtual life forms known as Norns. These cuddly little creatures have their own Digital DNA, brains and biochemistry. They learn and think for themselves but they need you to love them, care for them and play with them. The adventure starts the moment you hatch your first baby Norn in the Nestery and begin to explore the giant Creatures Village world with them.<br><br><ul class="bb_ul"><li>Do you dare walk through the spooky forest? <br><br></li><li>Or would you like to fly through Cloud Land in a magical sky boat? <br><br></li><li>Perhaps your Norns fancy a day out at the fair where they can ride the big wheel and eat hot dogs and candy floss until they burst! <br><br></li><li>Norns live in your computer and need to sleep, eat and play. <br><br></li><li>Care for them, explore with them, but most of all, love them!<br><br></li><li>Combines the worlds of <i>Creatures Adventures</i> and <i>Creatures Playground</i>.</li></ul>`,
    short_description: `This is a special world, inhabited by the amazing virtual life forms known as Norns. These cuddly little creatures have their own Digital DNA, brains and biochemistry. They learn and think for themselves but they need you to love them, care for them and play with them.`,
    supported_languages: `English`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823900/header.jpg?t=1680073141`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 95/98/2000/ME/XP<br></li><li><strong>Processor:</strong> 200Mgz Pentium Processor or better<br></li><li><strong>Memory:</strong> 32 MB RAM<br></li><li><strong>Graphics:</strong> DirectX Compatible<br></li><li><strong>DirectX:</strong> Version 7.0a<br></li><li><strong>Storage:</strong> 560 MB available space<br></li><li><strong>Sound Card:</strong> DirectX Compatible</li></ul>`,
    publishers: ["Gameware Europe", "Critter Consortium"],
    price: 78.99,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "4", description: "Casual" },
      { id: "28", description: "Simulation" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_4dd5965e16aea80b0a9c8ee03b6556359f7880cf.600x338.jpg?t=1680073141",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_4dd5965e16aea80b0a9c8ee03b6556359f7880cf.1920x1080.jpg?t=1680073141",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_4b31b2450445f51e6ec3e6ebb620361939302ca8.600x338.jpg?t=1680073141",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_4b31b2450445f51e6ec3e6ebb620361939302ca8.1920x1080.jpg?t=1680073141",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_bdd2c8297c4fb623ee1137966b900325f64ede50.600x338.jpg?t=1680073141",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_bdd2c8297c4fb623ee1137966b900325f64ede50.1920x1080.jpg?t=1680073141",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_d614f9b4667276a1e0f476bb00ef34d300a21abe.600x338.jpg?t=1680073141",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_d614f9b4667276a1e0f476bb00ef34d300a21abe.1920x1080.jpg?t=1680073141",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_6232aec07679951bbf930c46882cf1fc6b0004a7.600x338.jpg?t=1680073141",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_6232aec07679951bbf930c46882cf1fc6b0004a7.1920x1080.jpg?t=1680073141",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_243c67d470a54fc3b03a450af6c8739255869e5a.600x338.jpg?t=1680073141",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/ss_243c67d470a54fc3b03a450af6c8739255869e5a.1920x1080.jpg?t=1680073141",
      },
    ],
    movies: [
      {
        id: 256865358,
        name: "Gameplay Trailer",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256865358/movie.293x165.jpg?t=1639643072",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256865358/movie480_vp9.webm?t=1639643072",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256865358/movie_max_vp9.webm?t=1639643072",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256865358/movie480.mp4?t=1639643072", max: "http://cdn.akamai.steamstatic.com/steam/apps/256865358/movie_max.mp4?t=1639643072" },
        highlight: false,
      },
      {
        id: 256860877,
        name: "Intro",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256860877/movie.293x165.jpg?t=1638344930",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256860877/movie480_vp9.webm?t=1638344930",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256860877/movie_max_vp9.webm?t=1638344930",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256860877/movie480.mp4?t=1638344930", max: "http://cdn.akamai.steamstatic.com/steam/apps/256860877/movie_max.mp4?t=1638344930" },
        highlight: false,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823900/page_bg_generated_v6b.jpg?t=1680073141",
    keys: ["lGauQnGlmaLu", "bLeHBikoYQbz", "5JygbUYJhKeu", "eGFJkVLaod99", "ytAOiryTKVGg"],
    rating_pos: 586,
    rating_neg: 255,
  },
  {
    name: "Alephant",
    detailed_description: `<strong>Aleph</strong> is the first letter of the Hebrew alphabet, and it is generally <strong>silent</strong>. However, it can be combined with the <strong>niqqud</strong> (vowels) to make a <strong>sound</strong>.<br><br>A word-less game about language.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823730/extras/GIFAlephant01.gif?t=1677664983" /><br><br>Discover and understand apparently arbitrary rules.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823730/extras/GIFAlephant02.gif?t=1677664983" /><br><br>Find new sounds with unique uses.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823730/extras/GIFAlephant03.gif?t=1677664983" /><br><br>Talk.<br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1823730/extras/GIFAlephant04.gif?t=1677664983" />`,
    short_description: `A word-less abstract puzzle game about language.`,
    supported_languages: `English, Spanish - Spain, Spanish - Latin America`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1823730/header.jpg?t=1677664983`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br></li><li><strong>Processor:</strong> 1.2 Ghz<br></li><li><strong>Memory:</strong> 1024 MB RAM<br></li><li><strong>Graphics:</strong> 512MB<br></li><li><strong>Storage:</strong> 200 MB available space</li></ul>`,
    publishers: ["Lucas Le Slo"],
    price: 765,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "23", description: "Indie" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_b437bc8de6425e74c60aa443579151090cc26e46.600x338.jpg?t=1677664983",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_b437bc8de6425e74c60aa443579151090cc26e46.1920x1080.jpg?t=1677664983",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_fe5f04668ccb2aa29f4eb6fb735b685e70fb993c.600x338.jpg?t=1677664983",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_fe5f04668ccb2aa29f4eb6fb735b685e70fb993c.1920x1080.jpg?t=1677664983",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_c46016981cfb663aa35053248421ec27a2c9a015.600x338.jpg?t=1677664983",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_c46016981cfb663aa35053248421ec27a2c9a015.1920x1080.jpg?t=1677664983",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_1b07146483e06b664a7861e0114bca5b720f4511.600x338.jpg?t=1677664983",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_1b07146483e06b664a7861e0114bca5b720f4511.1920x1080.jpg?t=1677664983",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_27f205678e33d733bc3a23217abee30a412ec33a.600x338.jpg?t=1677664983",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_27f205678e33d733bc3a23217abee30a412ec33a.1920x1080.jpg?t=1677664983",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_88cdd41f5c8c96fab6ea9b0ffcf81e3c54ccec66.600x338.jpg?t=1677664983",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/ss_88cdd41f5c8c96fab6ea9b0ffcf81e3c54ccec66.1920x1080.jpg?t=1677664983",
      },
    ],
    movies: [
      {
        id: 256933192,
        name: "Out Now",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256933192/movie.293x165.jpg?t=1677664976",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256933192/movie480_vp9.webm?t=1677664976",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256933192/movie_max_vp9.webm?t=1677664976",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256933192/movie480.mp4?t=1677664976", max: "http://cdn.akamai.steamstatic.com/steam/apps/256933192/movie_max.mp4?t=1677664976" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1823730/page_bg_generated_v6b.jpg?t=1677664983",
    keys: [
      "eiEEBhdWZDrr",
      "ipinJKOt0D0r",
      "hScXQPB5Zkmh",
      "VPXvt32DOfkU",
      "q6g0QmVF5z2R",
      "tsuhT7QE6u0n",
      "3QcCclsluNW5",
      "Ql3MxmtKr33S",
      "0uOOyj7zcK0n",
      "WpRoqUNipHlF",
      "QPqLHyv9dY4Z",
      "BEOmFxbhRfXp",
      "5QKjZFOPXyMp",
      "PWsVyZl8fBWH",
      "3Z4WGlCF75qS",
      "xghfpzcdgeOV",
      "6JAZqT3m8aho",
      "SHyKsCGe09Oq",
      "SRAnP0hDa48i",
      "mhibLscOw6s4",
      "stEdeQgBx2IU",
      "oCTM30zEc3k9",
      "Ofpn1H8IK7Rm",
      "MOKVYDStHeeq",
      "yy5nIuG2Mxim",
      "LZeqwR3Qgcaq",
      "eIpUqXF65eGd",
      "eCV2mxV3BBPF",
      "smFWRL8GO1Nu",
      "XjJsDItxz1zJ",
      "ZuLVca2voRON",
      "Oa02r9CMEUOQ",
      "9XxvV8sBkjqv",
      "TZ8OecmJR2fc",
      "HmGeVIcSDcpv",
      "sihstEjtmN5N",
    ],
    rating_pos: 565,
    rating_neg: 241,
  },
  {
    name: "HOSTLIGHT",
    detailed_description: `<h1>WISHLIST</h1><p><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824110/extras/WishlistAction.gif?t=1686838859" /></p><br><h1>JOIN SELECTA PLAY DISCORD</h1><p><a href="https://steamcommunity.com/linkfilter/?url=https://discord.gg/K3XcK58SaR" target="_blank" rel=" noopener"  ><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824110/extras/Join_discord.png?t=1686838859" /></a></p><br><h1>About the Game</h1><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824110/extras/Out_now.png?t=1686838859" /><br><br><strong>Hostlight is a challenging single-player first-person puzzle game that will embark you on a mysterious adventure. Solve puzzles by using LIGHTS AND SHADOWS, and discover what lies ahead in an intriguing tower.</strong><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824110/extras/Hostlight_columnas.gif?t=1686838859" /><br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824110/extras/Banner_EN.png?t=1686838859" /><br><br>o	<strong>Use your brain to complete intriguing and challenging puzzles</strong> by using lights and shadows with innovative gameplay mechanics.<br><br>o	<strong>Create the pieces</strong> required to solve the puzzles through the use of projected shadows. <br><br>o	<strong>Lights and shadows</strong> can be projected by manipulating silhouettes that hit the player to obtain the necessary pieces.<br><br>o	Play around with the <strong>primary light colours</strong> (Red, Green, and Blue) to mix and match and complete puzzles. Only the white light creates objects!<br><br>o	<strong>Take advantage of the environment</strong> — Use mirrors to direct light beams and use rails.<br><br>o	To <strong>complete from one level to another</strong> you need to light up the platform in the middle of each room.<br><br>o	<strong>Play through over 20 levels</strong>, each designed to offer different puzzles and challenges. <br><br><img src="https://cdn.akamai.steamstatic.com/steam/apps/1824110/extras/Hostlight_cambio_nivel.gif?t=1686838859" />`,
    short_description: `Hostlight is a casual single player puzzle game with mechanics that revolve around the use of LIGHTS AND SHADOWS, which will help you create objects to solve the puzzles, ascend levels through the tower and unveil its mysteries.`,
    supported_languages: `English<strong>*</strong>, Spanish - Spain, French, Italian, German, Simplified Chinese, Portuguese - Brazil, Russian<br><strong>*</strong>languages with full audio support`,
    header_image: `https://cdn.akamai.steamstatic.com/steam/apps/1824110/header.jpg?t=1686838859`,
    pc_requirements: `<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10<br></li><li><strong>Processor:</strong> Intel i5 6400 | AMD ryzen 5 1600<br></li><li><strong>Memory:</strong> 16 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia gtx 1050ti | AMD RX 570</li></ul>`,
    publishers: ["Selecta Play"],
    price: 1435.77,
    platforms: { windows: true, mac: false, linux: false },
    genres: [
      { id: "25", description: "Adventure" },
      { id: "4", description: "Casual" },
      { id: "23", description: "Indie" },
      { id: "2", description: "Strategy" },
    ],
    screenshots: [
      {
        id: 0,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_ffbba93dfbfb39566a254d8e8bf5211b41a97e36.600x338.jpg?t=1686838859",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_ffbba93dfbfb39566a254d8e8bf5211b41a97e36.1920x1080.jpg?t=1686838859",
      },
      {
        id: 1,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_74c8e5959a896cf5f2ac96c7cf9202202bcbe754.600x338.jpg?t=1686838859",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_74c8e5959a896cf5f2ac96c7cf9202202bcbe754.1920x1080.jpg?t=1686838859",
      },
      {
        id: 2,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_4bb9e0c3e233eb9a9d7514d4b6e92fba1bd5ef61.600x338.jpg?t=1686838859",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_4bb9e0c3e233eb9a9d7514d4b6e92fba1bd5ef61.1920x1080.jpg?t=1686838859",
      },
      {
        id: 3,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_3f6ba94fe53c1a792d24feec92994f51b891bfc7.600x338.jpg?t=1686838859",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_3f6ba94fe53c1a792d24feec92994f51b891bfc7.1920x1080.jpg?t=1686838859",
      },
      {
        id: 4,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_91c3eaada60cc74f35070ae2e449da8032060760.600x338.jpg?t=1686838859",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_91c3eaada60cc74f35070ae2e449da8032060760.1920x1080.jpg?t=1686838859",
      },
      {
        id: 5,
        path_thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_f4dcf19fd4f99c1eba0de0a6aae680a718ca2787.600x338.jpg?t=1686838859",
        path_full: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/ss_f4dcf19fd4f99c1eba0de0a6aae680a718ca2787.1920x1080.jpg?t=1686838859",
      },
    ],
    movies: [
      {
        id: 256894008,
        name: "Hostlight",
        thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/256894008/movie.293x165.jpg?t=1656503088",
        webm: {
          480: "http://cdn.akamai.steamstatic.com/steam/apps/256894008/movie480_vp9.webm?t=1656503088",
          max: "http://cdn.akamai.steamstatic.com/steam/apps/256894008/movie_max_vp9.webm?t=1656503088",
        },
        mp4: { 480: "http://cdn.akamai.steamstatic.com/steam/apps/256894008/movie480.mp4?t=1656503088", max: "http://cdn.akamai.steamstatic.com/steam/apps/256894008/movie_max.mp4?t=1656503088" },
        highlight: true,
      },
    ],
    background: "https://cdn.akamai.steamstatic.com/steam/apps/1824110/page_bg_generated_v6b.jpg?t=1686838859",
    keys: [
      "gub69ibLYQQe",
      "ddWleq1KuC0m",
      "NPMkwnlsu60H",
      "AsuLLVVwl0id",
      "Zd3FkaWpjnAT",
      "QVGZveUXijjC",
      "qu7pD9cL7FKV",
      "68ntFMqRVWbg",
      "uFKypFu8X257",
      "JTRhuZsOa4b1",
      "RrAiQWX2ozlQ",
      "1ic02XG0Bmar",
      "69i8xXckE3g1",
      "vSMRmfh2G0dT",
      "K3eNLSbqlcB8",
      "QInQ1wImHYxZ",
      "MasPetSx0GOF",
      "slIgpjHlolrB",
      "PKgeYdzaMD98",
      "rIES3MLY1YZ3",
      "hm4p7f5wVQHg",
      "8GCkoY9n6kk8",
      "ClaAWmsArzcU",
      "F2Tl26Aa8zYc",
      "6PUkh5cLdJ4d",
      "zKp4ew5nymY6",
      "xip2eB8w80Jb",
      "VoZpuKsxlwS9",
      "KAiUv1TqvGrN",
      "S9vd5B8T74TS",
      "Ib0yLOVAQBP4",
    ],
    rating_pos: 531,
    rating_neg: 50,
  },
];

console.log(">>>", games.length);

async function uploadGames() {
  try {
    for (const game of games) {
      const existingGame = await Game.findOne({ name: game.name });

      if (!existingGame) {
        await Game.create(game);
        console.log(`Game "${game.name}" added to the database.`);
      } else {
        console.log(`Game "${game.name}" already exists in the database. Skipping.`);
      }
    }

    console.log("Games data uploaded successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

uploadGames();