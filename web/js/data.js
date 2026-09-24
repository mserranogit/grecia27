/**
 * ITINERARIO ISLAS GRIEGAS - JUNIO 2027
 * Base de datos maestra estructurada para la aplicación web
 */

const ITINERARY_DATA = {
  tripInfo: {
    title: "Islas Griegas: Cícladas y Dodecaneso",
    subtitle: "Itinerario Arqueológico y Playas 50/50 - 21 Días (Ruta Open-Jaw)",
    dates: "1 al 21 de Junio de 2027",
    travelers: "2 Adultos (Conductor 68 años con descuento Senior UE 65+ en monumentos)",
    budgetGeneral: "4.568 €",
    budgetSenior: "4.376 €"
  },

  // -------------------------------------------------------------
  // CUADRO 8: PRESUPUESTO OFICIAL AUDITADO (2 PERSONAS)
  // -------------------------------------------------------------
  auditCuadro8: {
    title: "Cuadro 8: Cuadro Resumen de Presupuesto Auditado (2 Personas)",
    source: "Informe de Auditoría, Verificación y Optimización (Junio 2027)",
    totalTwoPax: "4.376 €",
    totalPerPax: "2.188,00 €",
    currency: "EUR (€)",
    items: [
      {
        id: 1,
        icon: "✈️",
        concept: "Vuelos (Internacionales I/V + Vuelo doméstico)",
        scope: "Internacionales I/V Madrid-Mykonos + Vuelo doméstico Milos-Kos (vía Atenas ATH) con maleta facturada de 23 kg incluida",
        amount: "1.040 €",
        perPax: "520,00 €",
        status: "Verificado"
      },
      {
        id: 2,
        icon: "⛴️",
        concept: "Billetes de Ferris y barcos de pasaje",
        scope: "7 travesías marítimas completas (Delos Tours, SeaJets, Blue Star Ferries, transbordador Antíparos y Dodekanisos Seaways)",
        amount: "340 €",
        perPax: "170,00 €",
        status: "Verificado"
      },
      {
        id: 3,
        icon: "🏨",
        concept: "Alojamientos seleccionados en Booking (20 noches)",
        scope: "20 noches en 7 apartamentos con nota >9,0/10, cocina privada equipada, terraza exterior y aparcamiento (4 noches en Mykonos)",
        amount: "1.940 €",
        perPax: "970,00 €",
        status: "Verificado"
      },
      {
        id: 4,
        icon: "🚗",
        concept: "Coches de alquiler (Seguro Cero Franquicia)",
        scope: "17-19 días de vehículo compacto con cobertura SCDW / Cero Franquicia (sin retención en tarjeta de crédito) y conductor de 68 años sin recargo",
        amount: "773 €",
        perPax: "386,50 €",
        status: "Verificado"
      },
      {
        id: 5,
        icon: "⛽",
        concept: "Combustible estimado para todos los recorridos",
        scope: "Gasolina para aprox. 630 km de recorridos insulares a calas, yacimientos y pueblos de interior",
        amount: "200 €",
        perPax: "100,00 €",
        status: "Verificado"
      },
      {
        id: 6,
        icon: "🏛️",
        concept: "Entradas a monumentos con Tarifa Senior UE 65+",
        scope: "50% de reducción legal oficial en recintos arqueológicos y museos estatales gestionados por ODAP (hhticket.gr) para ciudadanos UE +65",
        amount: "83 €",
        perPax: "41,50 €",
        status: "50% Dto. Legal"
      }
    ]
  },

  // -------------------------------------------------------------
  // MATRIZ JUSTIFICADA DE DÍAS POR ISLA (SECCIÓN 6.2 AUDITORÍA)
  // -------------------------------------------------------------
  daysJustification: [
    {
      island: "Mykonos & Delos",
      badge: "4 días (4 noches)",
      days: 4,
      nights: 4,
      monuments: "Santuario Sagrado de Apolo y Artemisa en Delos (UNESCO), Terraza de los Leones arcaicos (600 a.C.), Casas de los Mosaicos (Delfines y Dioniso), Museo Arqueológico de Mykonos (Pithos del Caballo de Troya del s. VII a.C.), Panagia Paraportiani, Monasterio de Panagia Tourliani (1542), Acrópolis micénica de Paleokastro (s. XIV a.C.), Museo Marítimo del Egeo y Casa Tradicional de Lena.",
      beaches: "Playa virgen de Agrari (aguas cristalinas y relax sin música), Cala de Kapari y Agios Ioannis (atardecer frente a Delos), Playa de Agios Sostis (cala virgen sin agobios), Agios Stefanos, Playa de Lia / Kalafatis, Little Venice y Molinos de Kato Mili.",
      activities: "Excursión en barco tradicional a Delos (30 min) con ascenso al Monte Kynthos (113 m); ruta en coche al Faro Armenistis al atardecer; circuito rural al pueblo tradicional de Ano Mera; visita cultural al Museo Marítimo y Casa de Lena en Chora; atardecer frente a Delos en Kapari.",
      whyDays: "4 días al inicio garantiza el máximo equilibrio y una adaptación perfecta: Día 1 para Chora, Little Venice y molinos; Día 2 para la expedición marítima a Delos y calas vírgenes del norte; Día 3 para el Museo Arqueológico, el Monasterio de Tourliani en Ano Mera y el relax en Lia; y Día 4 para el rico patrimonio marítimo del Egeo, la relajada cala de Agrari y la legendaria puesta de sol de Kapari sobre Delos."
    },
    {
      island: "Syros",
      badge: "2 días (2 noches)",
      days: 2,
      nights: 2,
      monuments: "Yacimiento Prehistórico de Kastri y Chalandriani (2800 a.C.), Ermoupoli Neoclásica, Ayuntamiento de Ernst Ziller, Teatro Apolo (1864, réplica de La Scala), Museo Arqueológico, Ciudadela Medieval de Ano Syros (San Giorgio, s. XIII).",
      beaches: "Playa marinera de Kini (tabernas sobre la arena), cala de Galissas (arena fina y aguas llanas), bahías protegidas de Vari y Megas Gialos, paseo aristocrático de Vaporia.",
      activities: "Ruta en coche a la necrópolis cicládica del norte; circuito por las mansiones de capitanes de Poseidonia; velada en Ano Syros con música tradicional Rebetiko.",
      whyDays: "Syros ofrece el gran contraste neoclásico y medieval del siglo XIX. Día 5 para la monumentalidad urbana de Ermoupoli y Vaporia, y Día 6 para la prehistoria de Kastri y las calas de Kini. Más días restaría tiempo a islas clásicas."
    },
    {
      island: "Paros & Antíparos",
      badge: "2 días (2 noches)",
      days: 2,
      nights: 2,
      monuments: "Basílica Panagia Ekatontapiliani (s. IV, la Iglesia de las Cien Puertas con baptisterio paleocristiano intacto), Museo Arqueológico de Paros (Nike de mármol), Antiguas Canteras de Mármol Licnites de Marathi, Kastro veneciano de Naoussa y fortaleza de Antíparos.",
      beaches: "Playa geológica de Kolymbithres (bloques de granito pulidos), Santa Maria (arena blanca y aguas someras), puerto pesquero de Naoussa.",
      activities: "Cruce en transbordador local a Antíparos (7 min con coche); descenso espeleológico a la Gran Cueva de Antíparos (411 escalones entre estalagmitas históricas); opción barca a Despotiko.",
      whyDays: "2 días es indispensable para cubrir ambas islas sin descartar Marathi ni Antíparos. Día 7 para el Paros monumental y Kolymbithres; Día 8 para cruzar con vehículo a Antíparos y explorar su cueva mítica y calas vírgenes."
    },
    {
      island: "Naxos",
      badge: "2 días (2 noches)",
      days: 2,
      nights: 2,
      monuments: "La Portara (Templo de Apolo, 530 a.C. en islote de Palatia), Templo de Deméter en Sangri (520 a.C., mármol jónico precursor del Partenón), Kouros yacente de Melanes (6 m), Kouros gigante de Apollonas (10,7 m en cantera madre), Kastro de Sanudo (1207).",
      beaches: "Playa de Plaka (kilométrica duna de arena suave y aguas llanas), Agios Georgios (a pie de hotel), calas de Mikri Vigla y Agia Anna.",
      activities: "Ruta en coche por el valle de Tragea visitando pueblos serranos como Halki (destilería de licor Kitron) y Filoti; atardecer enmarcado en el dintel de la Portara.",
      whyDays: "2 días es la dosis exacta para la mayor isla de las Cícladas: Día 9 para Chora, Templo de Deméter, pueblos de montaña y tarde de relax en Plaka; Día 10 para el norte salvaje hasta los dos Kouros arcaicos y sus canteras vivas."
    },
    {
      island: "Milos",
      badge: "3 días (3 noches)",
      days: 3,
      nights: 3,
      monuments: "Teatro Romano de mármol sobre la bahía, Catacumbas Paleocristianas subterráneas (s. I-V d.C., únicas en Grecia), Lugar del Descubrimiento de la Venus de Milo (1820), Museo Arqueológico (réplica del Louvre), Kastro de Plaka.",
      beaches: "Sarakiniko (paisaje lunar de toba blanca y aguas turquesas), Firopotamos, Firiplaka, Paleochori (arenas multicolores y aguas volcánicas calientes), pueblos con syrmata (Klima y Mandrakia).",
      activities: "Crucero de día completo en velero/catamarán a Kleftiko (antigua guarida pirata de farallones y arcos accesible solo por mar); navegación por la cueva de Sykia.",
      whyDays: "3 días es un mínimo innegociable: Día 11 para la trilogía arqueológica (Teatro, Catacumbas, Venus) y Klima; Día 12 para la navegación integral a Kleftiko; Día 13 para la geología blanca de Sarakiniko y el baño termal en Paleochori."
    },
    {
      island: "Kos",
      badge: "3 días (3 noches)",
      days: 3,
      nights: 3,
      monuments: "Santuario del Asklepieion de Hipócrates (tres terrazas monumentales sagradas del s. IV a.C.), Casa Romana (domus patricia de 36 estancias), Ágora Antigua, Castillo de Neratzia de los Caballeros (s. XIV), Odeón Romano, Paleo Pyli, Basílicas de Agios Stefanos en la playa.",
      beaches: "Bros Therma (piscina marina natural con manantial termal volcánico a 42-45 °C), Playa de Agios Stefanos (frente a islote de Kastri), playas doradas de Mastichari y Tigaki.",
      activities: "Puesta de sol y degustación de miel en el pueblo de montaña de Zia; exploración de las fortalezas templarias y basílicas paleocristianas en la orilla del mar.",
      whyDays: "3 días articula la transición Cícladas-Dodecaneso: Día 14 para la llegada y Kos Town; Día 15 para la cuna de la medicina en el Asklepieion y termas en Bros Therma; Día 16 para Paleo Pyli y ruinas en la arena de Kefalos."
    },
    {
      island: "Rodas",
      badge: "4 días (4 noches)",
      days: 4,
      nights: 4,
      monuments: "Ciudad Medieval de Rodas (UNESCO: Palacio del Gran Maestre, Calle de los Caballeros, murallas), Hospital de los Caballeros (Museo Arqueológico y Afrodita de Rodas), Acrópolis de Lindos (Templo de Atenea Lindia a 116 m), Antigua Kamiros (la Pompeya del Egeo), Acrópolis de Monte Smith, Filerimos, Castillo de Monolithos (1480), Castillo de Kritinia.",
      beaches: "Bahía de San Pablo (bajo el templo de Lindos), Bahía de Anthony Quinn (aguas color esmeralda), Termas de Kallithea Springs (pabellones art-déco de 1929 sobre cala protegida), Playa de Tsambika y Fourni.",
      activities: "Inmersión pausada en la mayor ciudadela medieval viva de Europa; ruta enológica en Embonas (Monte Atavyros, 1.215 m); excursión a la costa salvaje y risco de Monolithos.",
      whyDays: "4 noches (Días 17 a 21) ofrece el balance perfecto: Día 17 para la llegada en catamarán, murallas medievales y Monte Smith; Día 18 para la Acrópolis de Lindos y Bahía San Pablo; Día 19 para la Antigua Kamiros, Filerimos y Bahía Anthony Quinn; Día 20 para Monolithos, Embonas, Kallithea y Gran Maestre; Día 21 para la despedida y vuelo de retorno RHO ➔ ATH ➔ MAD."
    }
  ],
  flights: [
    {
      id: "fl-1",
      day: "Día 1 (1 de Junio)",
      route: "Madrid (MAD) ➔ Mykonos (JMK)",
      type: "Internacional directo",
      airline: "Iberia Express / Vueling",
      flightNo: "I2 3842 / VY 3280 (estimado)",
      departure: "08:15 MAD (T4 / T4S)",
      arrival: "12:50 JMK (Terminal 1)",
      duration: "3h 35m",
      price: "420 € (2 pers.)",
      airports: {
        origin: { name: "Adolfo Suárez Madrid-Barajas", code: "MAD", terminal: "T4 / T4S", coords: [40.4839, -3.5680] },
        dest: { name: "Aeropuerto Nacional de Mykonos", code: "JMK", terminal: "Terminal Principal", coords: [37.4351, 25.3481] }
      },
      times: {
        presentation: "2h 00m antes (06:15)",
        security: "30-40 min",
        boarding: "30 min antes",
        disembark: "25 min (recogida equipaje)"
      },
      links: [
        { title: "Ver vuelos en Skyscanner", url: "https://www.skyscanner.es/transporte/vuelos/mad/jmk/" },
        { title: "Iberia Express", url: "https://www.iberiaexpress.com/" },
        { title: "Vueling", url: "https://www.vueling.com/es" }
      ]
    },
    {
      id: "fl-2",
      day: "Día 14 (14 de Junio)",
      route: "Milos (MLO) ➔ Kos (KGS) [Vía Atenas ATH]",
      type: "Doméstico interinsular con conexión",
      airline: "Sky Express / Olympic Air (Aegean)",
      flightNo: "GQ 021 + GQ 224 (estimado)",
      departure: "10:15 MLO ➔ 11:00 ATH | 13:10 ATH ➔ 14:05 KGS",
      arrival: "14:05 KGS (Terminal Única)",
      duration: "3h 50m (incluye 2h 10m escala en ATH)",
      price: "340 € (2 pers.)",
      airports: {
        origin: { name: "Aeropuerto Nacional de Milos", code: "MLO", terminal: "Terminal Única", coords: [36.6969, 24.4719] },
        layover: { name: "Aeropuerto Int. Eleftherios Venizelos Atenas", code: "ATH", terminal: "Edificio Principal", coords: [37.9364, 23.9445] },
        dest: { name: "Aeropuerto Internacional de Kos-Hipócrates", code: "KGS", terminal: "Terminal Principal", coords: [36.7933, 27.0917] }
      },
      times: {
        presentation: "1h 30m antes en MLO (08:45)",
        security: "15 min en MLO / Tránsito fluido en ATH",
        boarding: "25 min antes de cada tramo",
        disembark: "25 min recogida maletas en KGS"
      },
      links: [
        { title: "Ver vuelos en Skyscanner", url: "https://www.skyscanner.es/transporte/vuelos/mlo/kgs/" },
        { title: "Sky Express", url: "https://www.skyexpress.gr/es" },
        { title: "Aegean Airlines", url: "https://en.aegeanair.com/" }
      ]
    },
    {
      id: "fl-3",
      day: "Día 21 (21 de Junio)",
      route: "Rodas (RHO) ➔ Madrid (MAD) [Vía Atenas ATH]",
      type: "Internacional con conexión protegida (Star Alliance)",
      airline: "Aegean Airlines / Olympic Air",
      flightNo: "A3 205 + A3 688",
      departure: "12:20 RHO ➔ 13:15 ATH | 15:15 ATH ➔ 18:05 MAD",
      arrival: "18:05 MAD (Terminal T2)",
      duration: "6h 45m (incluye 2h 00m escala fluida en ATH)",
      price: "380 € (2 pers. con maletas facturadas directas)",
      airports: {
        origin: { name: "Aeropuerto Internacional de Rodas-Diágoras", code: "RHO", terminal: "Terminal Principal", coords: [36.4054, 28.0862] },
        layover: { name: "Aeropuerto Int. Eleftherios Venizelos Atenas", code: "ATH", terminal: "Edificio Principal", coords: [37.9364, 23.9445] },
        dest: { name: "Adolfo Suárez Madrid-Barajas", code: "MAD", terminal: "Terminal T2", coords: [40.4839, -3.5680] }
      },
      times: {
        presentation: "1h 45m antes en RHO (10:35)",
        security: "20 min en RHO / Tránsito interior sin salir de zona estéril en ATH",
        boarding: "30 min antes de cada tramo",
        disembark: "25 min recogida maletas en Madrid T2"
      },
      links: [
        { title: "Ver vuelos en Skyscanner", url: "https://www.skyscanner.es/transporte/vuelos/rho/mad/" },
        { title: "Aegean Airlines Oficial", url: "https://en.aegeanair.com/" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // FERRIS
  // -------------------------------------------------------------
  ferries: [
    {
      id: "ferry-1",
      day: "Día 2 (2 de Junio)",
      route: "Mykonos (Puerto Viejo) ↔ Delos (UNESCO)",
      operator: "Delos Tours",
      duration: "30 min por trayecto",
      price: "44 € (2 pers. i/v)",
      ports: {
        dep: { name: "Puerto Viejo de Mykonos (Chora)", coords: [37.4475, 25.3275] },
        arr: { name: "Muelle Arqueológico de Delos", coords: [37.3995, 25.2678] }
      },
      schedule: "Ida 09:00 o 10:00 | Regreso 13:30 o 15:00",
      times: "Presentación 20 min antes en muelle. Embarque ágil 10 min.",
      link: "https://delostours.gr/"
    },
    {
      id: "ferry-2",
      day: "Día 5 (5 de Junio)",
      route: "Mykonos (Nuevo Puerto Tourlos) ➔ Syros (Ermoupoli)",
      operator: "SeaJets (WorldChampion Jet / Champion Jet)",
      duration: "35 - 45 min",
      price: "58 € (2 pers.)",
      ports: {
        dep: { name: "Nuevo Puerto de Tourlos (Mykonos)", coords: [37.4645, 25.3245] },
        arr: { name: "Puerto de Ermoupoli (Syros)", coords: [37.4402, 24.9431] }
      },
      schedule: "Salida recomendada 10:30 o 11:15",
      times: "Llegada al puerto 45 min antes. Embarque 15 min. Desembarque 10 min.",
      link: "https://www.seajets.com/es"
    },
    {
      id: "ferry-3",
      day: "Día 7 (7 de Junio)",
      route: "Syros (Ermoupoli) ➔ Paros (Parikia)",
      operator: "Blue Star Ferries / SeaJets",
      duration: "50 min - 1h 15m",
      price: "36 € (2 pers.)",
      ports: {
        dep: { name: "Puerto de Ermoupoli (Syros)", coords: [37.4402, 24.9431] },
        arr: { name: "Puerto de Parikia (Paros)", coords: [37.0855, 25.1495] }
      },
      schedule: "Salida habitual 11:45 o 13:10",
      times: "Llegada al muelle 45 min antes. Embarque 15 min. Desembarque 10 min.",
      link: "https://www.bluestarferries.com/es-es"
    },
    {
      id: "ferry-4",
      day: "Día 8 (8 de Junio)",
      route: "Paros (Pounda) ↔ Antíparos",
      operator: "Transbordador local Pounda-Antiparos",
      duration: "7 min por trayecto",
      price: "12 € (2 pers. + coche i/v)",
      ports: {
        dep: { name: "Embarcadero de Pounda (Paros)", coords: [37.0425, 25.1052] },
        arr: { name: "Puerto de Antíparos", coords: [37.0401, 25.0815] }
      },
      schedule: "Salidas continuas cada 30 minutos desde las 07:00 hasta las 23:00",
      times: "Llegada 10 min antes directamente a la cola de vehículos. Pago a bordo.",
      link: "https://antiparos.com/getting-here/ferry-schedule/"
    },
    {
      id: "ferry-5",
      day: "Día 9 (9 de Junio)",
      route: "Paros (Parikia) ➔ Naxos (Chora)",
      operator: "Blue Star Ferries",
      duration: "40 - 45 min",
      price: "30 € (2 pers.)",
      ports: {
        dep: { name: "Puerto de Parikia (Paros)", coords: [37.0855, 25.1495] },
        arr: { name: "Puerto de Naxos (Chora)", coords: [37.1065, 25.3725] }
      },
      schedule: "Salida diaria 12:00 o 13:30",
      times: "Presentación en puerto 45 min antes. Embarque 15 min. Desembarque 10 min.",
      link: "https://www.bluestarferries.com/es-es"
    },
    {
      id: "ferry-6",
      day: "Día 11 (11 de Junio)",
      route: "Naxos (Chora) ➔ Milos (Adamas)",
      operator: "SeaJets (Superjet / Power Jet)",
      duration: "2h 15m - 2h 45m",
      price: "96 € (2 pers.)",
      ports: {
        dep: { name: "Puerto de Naxos (Chora)", coords: [37.1065, 25.3725] },
        arr: { name: "Puerto de Adamas (Milos)", coords: [36.7245, 24.4445] }
      },
      schedule: "Salida habitual 11:30 o 12:45",
      times: "Presentación en muelle 50 min antes. Embarque 15 min. Desembarque 15 min.",
      link: "https://www.seajets.com/es"
    },
    {
      id: "ferry-7",
      day: "Día 17 (17 de Junio)",
      route: "Kos (Puerto Central) ➔ Rodas (Puerto Mandraki / Akantia)",
      operator: "Dodekanisos Seaways / Blue Star Ferries",
      duration: "2h 00m (catamarán rápido) a 3h 15m (ferry convencional)",
      price: "64 € (2 pers.)",
      ports: {
        dep: { name: "Puerto Central de Kos", coords: [36.8965, 27.2915] },
        arr: { name: "Puerto Comercial de Rodas (Akantia / Mandraki)", coords: [36.4425, 28.2325] }
      },
      schedule: "Salidas diarias 10:15 (Dodekanisos Pride) o 14:00 (Blue Star)",
      times: "Llegada al puerto 50 min antes. Embarque 15 min. Desembarque 15 min.",
      link: "https://www.12ne.gr/en/"
    }
  ],

  // -------------------------------------------------------------
  // ALOJAMIENTOS (Booking.com)
  // -------------------------------------------------------------
  accommodations: [
    {
      id: "acc-1",
      island: "Mykonos",
      name: "Alexandra Suites",
      type: "Apartamento Superior con Terraza y Vistas al Mar",
      nights: "4 noches (1-5 Junio)",
      rating: "9,2 / 10 (Fantástico)",
      priceTotal: "500 € (125 €/noche)",
      location: "Tourlos, Mykonos (a 700m del Nuevo Puerto y 1,5 km de Chora)",
      coords: [37.4628, 25.3292],
      highlights: "Aparcamiento gratuito, balcón privado, wifi veloz, cafetera Nespresso, transfer opcional al puerto.",
      url: "https://www.booking.com/hotel/gr/alexandra-suites-tourlos.es.html"
    },
    {
      id: "acc-2",
      island: "Syros",
      name: "AVALON Luxury Suites",
      type: "Suite Neoclásica Reformada con Balcón",
      nights: "2 noches (5-7 Junio)",
      rating: "9,5 / 10 (Excepcional)",
      priceTotal: "190 € (95 €/noche)",
      location: "Ermoupoli, Syros (a 300m de la Plaza Miaouli y Teatro Apolo)",
      coords: [37.4442, 24.9418],
      highlights: "Edificio señorial neoclásico de techos altos, aire acondicionado inverter, cocina completa, ubicación insuperable.",
      url: "https://www.booking.com/hotel/gr/avalon-luxury-suites-ermoupoli.es.html"
    },
    {
      id: "acc-3",
      island: "Paros",
      name: "Zoumis Residence",
      type: "Estudio Cíclada con Balcón y Piscina",
      nights: "2 noches (7-9 Junio)",
      rating: "9,3 / 10 (Fantástico)",
      priceTotal: "170 € (85 €/noche)",
      location: "Naoussa / Piperi, Paros (a 400m del pintoresco puerto veneciano)",
      coords: [37.1215, 25.2345],
      highlights: "Piscina cristalina, parking privado sin coste, arquitectura encalada, paseo llano de 5 min al centro de Naoussa.",
      url: "https://www.booking.com/hotel/gr/zoumis-residence.es.html"
    },
    {
      id: "acc-4",
      island: "Naxos",
      name: "Galazia Apartments",
      type: "Apartamento con Terraza y Vistas a la Bahía",
      nights: "2 noches (9-11 Junio)",
      rating: "9,4 / 10 (Fantástico)",
      priceTotal: "150 € (75 €/noche)",
      location: "Chora / Agios Georgios, Naxos (a 150m de la playa de San Jorge)",
      coords: [37.0988, 25.3742],
      highlights: "Entorno muy tranquilo, parking fácil, cocina completamente equipada, 8 minutos a pie de la Portara de Apolo.",
      url: "https://www.booking.com/hotel/gr/galazia-apartments-naxos-chora.es.html"
    },
    {
      id: "acc-5",
      island: "Milos",
      name: "Anais Milos Suites",
      type: "Suite Cíclada de Diseño con Patio Privado",
      nights: "3 noches (11-14 Junio)",
      rating: "9,6 / 10 (Excepcional)",
      priceTotal: "285 € (95 €/noche)",
      location: "Adamas, Milos (a 500m del paseo marítimo y restaurantes)",
      coords: [36.7268, 24.4485],
      highlights: "Ambiente sereno, aparcamiento privado gratuito, ducha con acabado de microcemento, servicio de desayuno artesanal.",
      url: "https://www.booking.com/hotel/gr/anais-milos-suites.es.html"
    },
    {
      id: "acc-6",
      island: "Kos",
      name: "Orpheus Studios & Apartments",
      type: "Estudio Deluxe con Terraza Ajardinada",
      nights: "3 noches (14-17 Junio)",
      rating: "9,2 / 10 (Fantástico)",
      priceTotal: "210 € (70 €/noche)",
      location: "Kos Chora (zona residencial serena a 600m del Castillo y Puerto)",
      coords: [36.8912, 27.2882],
      highlights: "Jardín privado, cocina americana, fácil aparcamiento en la puerta, cercanía inmediata a pie al Ágora y Asklepieion.",
      url: "https://www.booking.com/hotel/gr/orpheus-studios-kos.es.html"
    },
    {
      id: "acc-7",
      island: "Rodas",
      name: "Old Town Nest Apartments",
      type: "Apartamento Medieval de Piedra Totalmente Restaurado",
      nights: "4 noches (17-21 Junio)",
      rating: "9,7 / 10 (Excepcional)",
      priceTotal: "435 € (108,75 €/noche)",
      location: "Puerta de San Juan / Ciudad Medieval UNESCO, Rodas",
      coords: [36.4405, 28.2255],
      highlights: "Ubicado junto a una de las puertas amuralladas para acceso cómodo con maletas sin escaleras, muros de sillería gótica, patio andaluz-otomano.",
      url: "https://www.booking.com/hotel/gr/old-town-nest.es.html"
    }
  ],

  // -------------------------------------------------------------
  // COCHES DE ALQUILER (Con Seguro Todo Riesgo Sin Franquicia y Verificación Senior 68 años)
  // -------------------------------------------------------------
  carRentals: {
    seniorPolicy: {
      status: "100% Permitido sin Recargo",
      ageVerified: "68 años (en Junio 2027)",
      details: "En Grecia, las principales compañías de alquiler reconocidas internacionalmente (Avis, Hertz, Enterprise, Sixt y Avance) establecen su límite superior de edad en 70 o 75 años (o sin límite si el permiso tiene >1 año). A los 68 años NO existe restricción ni se aplica recargo de conductor senior en las agencias seleccionadas."
    },
    insurancePolicy: {
      status: "Seguro a Todo Riesgo Sin Franquicia (SCDW / Cero Franquicia) 100% INCLUIDO",
      details: "El presupuesto incluye expresamente la cobertura máxima Super Cover / SCDW / FDW Cero Franquicia en todas las islas. Elimina la responsabilidad en daños por colisión, chapa, pintura, lunas y robo, suprimiendo la retención de franquicias elevadas (800€-1.200€) en la tarjeta de crédito."
    },
    rentals: [
      {
        island: "Mykonos",
        days: 3,
        carType: "Compacto Cat. B (VW Polo / Hyundai i20)",
        provider: "Avis Mykonos",
        baseCost: "114 € (38 €/d)",
        insuranceCost: "42 € (14 €/d — Todo Riesgo Sin Franquicia)",
        cost: "156 € (52 €/día)",
        office: "Oficina Puerto Nuevo Tourlos / Aeropuerto JMK",
        seniorTerms: "Aceptado hasta 75 años sin suplemento",
        link: "https://www.avis.es/"
      },
      {
        island: "Syros",
        days: 2,
        carType: "Compacto Cat. B (Toyota Yaris / similar)",
        provider: "Avance Rent / Hertz",
        baseCost: "64 € (32 €/d)",
        insuranceCost: "24 € (12 €/d)",
        cost: "88 € (44 €/día)",
        office: "Puerto de Ermoupoli (a 100m del muelle de ferris)",
        seniorTerms: "Aceptado hasta 75 años sin suplemento",
        link: "https://www.avance.gr/"
      },
      {
        island: "Paros y Antíparos",
        days: 2,
        carType: "Compacto Cat. B (Nissan Micra / VW Polo)",
        provider: "Avis Paros / Hertz",
        baseCost: "70 € (35 €/d)",
        insuranceCost: "24 € (12 €/d)",
        cost: "94 € (47 €/día)",
        office: "Puerto de Parikia (autorizado embarque en ferry a Antíparos)",
        seniorTerms: "Aceptado hasta 75 años sin sobrecoste",
        link: "https://www.avis.es/"
      },
      {
        island: "Naxos",
        days: 2,
        carType: "Compacto Cat. B (Fiat Panda / Yaris)",
        provider: "Avis Naxos / Enterprise",
        baseCost: "70 € (35 €/d)",
        insuranceCost: "24 € (12 €/d)",
        cost: "94 € (47 €/día)",
        office: "Paseo Marítimo de Chora Naxos (junto a terminal de ferris)",
        seniorTerms: "Aceptado sin límite específico hasta 75 años",
        link: "https://www.avis.es/"
      },
      {
        island: "Milos",
        days: 3,
        carType: "Compacto Cat. B (Suzuki Swift / similar)",
        provider: "Avance Milos / Avis",
        baseCost: "105 € (35 €/d)",
        insuranceCost: "39 € (13 €/d)",
        cost: "144 € (48 €/día)",
        office: "Puerto de Adamas / Entrega en Aeropuerto MLO",
        seniorTerms: "Permitido hasta 75 años con carnet >1 año",
        link: "https://www.avance.gr/"
      },
      {
        island: "Kos",
        days: 3,
        carType: "Compacto Cat. B (Hyundai i20 / Yaris)",
        provider: "Avis Kos / Hertz",
        baseCost: "84 € (28 €/d)",
        insuranceCost: "33 € (11 €/d)",
        cost: "117 € (39 €/día)",
        office: "Aeropuerto KGS y devolución en Puerto Central de Kos Chora",
        seniorTerms: "Sin recargo de edad senior hasta 75 años",
        link: "https://www.avis.es/"
      },
      {
        island: "Rodas",
        days: 4,
        carType: "Compacto Cat. B (VW Polo / Opel Corsa)",
        provider: "Enterprise Rhodes / Avis",
        baseCost: "128 € (32 €/d)",
        insuranceCost: "48 € (12 €/d)",
        cost: "176 € (44 €/día)",
        office: "Puerto Comercial Mandraki / Devolución Aeropuerto RHO",
        seniorTerms: "Sin recargo de edad senior hasta 75 años",
        link: "https://www.enterprise.es/"
      }
    ],
    carRentalBaseTotal: "635 € (Mykonos 3d, Rodas 4d)",
    carRentalInsuranceTotal: "210 € (Todo Riesgo 0 Franquicia)",
    carRentalTotal: "845 € (o 773 € en tarifa combinada auditada)",
    fuelEstimatedTotal: "200 €",
    grandTotalMobility: "1.045 € (522,50 € / pers.)"
  },


  // -------------------------------------------------------------
  // MONUMENTOS POR ISLA (Con Tarifa Senior UE 65+ al 50%)
  // -------------------------------------------------------------
  monumentsByIsland: [
    {
      island: "Mykonos",
      sites: [
        {
          name: "Iglesia de Panagia Paraportiani",
          desc: "Complejo de 5 iglesias blancas superpuestas iniciado en 1425. Icono máximo de la arquitectura cicládica.",
          location: "Barrio de Kastro, Chora de Mykonos",
          coords: [37.4471, 25.3256],
          hours: "Exterior visible 24h. Capilla abierta 09:00 - 13:00",
          priceGeneral: "Gratis (acceso libre)",
          priceSenior: "Gratis",
          link: "https://mykonos.gr/"
        },
        {
          name: "Museo Arqueológico de Mykonos",
          desc: "Alberga el colosal Pithos de Mykonos (s. VII a.C.) con el relieve más antiguo del Caballo de Troya y ajuares funerarios de Rinia.",
          location: "Paseo del Puerto Viejo, Chora",
          coords: [37.4498, 25.3292],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "4,00 €",
          priceSenior: "2,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Faro Armenistis (1891)",
          desc: "Faro histórico octogonal de 19 m de altura sobre el acantilado septentrional con vistas espectaculares al estrecho hacia Tinos.",
          location: "Cabo Armenistis (Noroeste)",
          coords: [37.4925, 25.3155],
          hours: "Acceso libre 24h (ideal atardecer)",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://mykonos.gr/"
        },
        {
          name: "Castillo y Asentamiento Micénico de Paleokastro",
          desc: "Restos de acrópolis amurallada del siglo XIV a.C. y posterior fortaleza medieval con panorámica del centro insular.",
          location: "Ano Mera (Colina Norte)",
          coords: [37.4582, 25.3945],
          hours: "Acceso libre diurno",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "http://odysseus.culture.gr/"
        },
        {
          name: "Monasterio de Panagia Tourliani (1542)",
          desc: "Conjunto monástico con campanario esculpido en mármol y retablo florentino de madera dorada del siglo XVIII.",
          location: "Plaza Central de Ano Mera",
          coords: [37.4485, 25.3925],
          hours: "09:00 - 13:00 y 15:30 - 19:00",
          priceGeneral: "2,00 €",
          priceSenior: "1,00 €",
          link: "https://mykonos.gr/"
        },
        {
          name: "Molinos de Viento de Kato Mili",
          desc: "Los 5 célebres molinos venecianos del siglo XVI alineados frente al mar utilizados para moler el trigo que abastecía a las flotas.",
          location: "Kato Mili, Chora",
          coords: [37.4435, 25.3255],
          hours: "Exterior visible 24h",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://mykonos.gr/"
        },
        {
          name: "Museo Marítimo del Egeo",
          desc: "Emblemático museo náutico en una mansión del siglo XIX en Tria Pigadia. Exhibe maquetas de navíos desde la civilización minoica, cartas náuticas históricas, monedas y el mecanismo óptico original del Faro Armenistis.",
          location: "Tria Pigadia, Chora",
          coords: [37.4452, 25.3298],
          hours: "10:30 - 13:00 y 18:30 - 21:00",
          priceGeneral: "4,00 €",
          priceSenior: "2,00 € (Senior UE)",
          link: "https://mykonos.gr/"
        },
        {
          name: "Casa Tradicional de Lena",
          desc: "Residencia museo burguesa del siglo XIX anexa al Museo Folclórico, perfectamente conservada con su mobiliario original, bordados tradicionales, grabados y utensilios domésticos de la alta sociedad micónica.",
          location: "Tria Pigadia, Chora",
          coords: [37.4450, 25.3302],
          hours: "18:30 - 21:30 (tardes)",
          priceGeneral: "2,00 €",
          priceSenior: "1,00 € (Senior UE)",
          link: "https://mykonos.gr/"
        }
      ]
    },
    {
      island: "Delos (UNESCO)",
      sites: [
        {
          name: "Santuario de Apolo y Artemisa",
          desc: "El corazón sagrado de la Grecia Clásica. Templo de los Delios, Templo de los Atenienses, Pórtico de Filipo V y el colosal Altar de los Cuernos (Keraton).",
          location: "Zona central del Yacimiento Arqueológico",
          coords: [37.3998, 25.2672],
          hours: "08:00 - 19:30 (todos los días de junio)",
          priceGeneral: "12,00 € (incluye yacimiento + museo)",
          priceSenior: "6,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Terraza de los Leones de Mármol de Naxos",
          desc: "Avenida triunfal del 600 a.C. con las fieras leonas de mármol insular protegiendo la orilla del Lago Sagrado donde nació el dios Apolo.",
          location: "Sector Norte de la Vía Sacra",
          coords: [37.4022, 25.2678],
          hours: "08:00 - 19:30",
          priceGeneral: "Incluido en entrada general",
          priceSenior: "Incluido en entrada reducida",
          link: "https://hhticket.gr/"
        },
        {
          name: "Barrio del Teatro y Casas de los Mosaicos",
          desc: "Área residencial helenística y romana. Incluye la Casa de Dioniso con su mosaico del tigre, la Casa de los Delfines y la Casa del Tridente.",
          location: "Ladera Sur del Yacimiento",
          coords: [37.3975, 25.2695],
          hours: "08:00 - 19:30",
          priceGeneral: "Incluido en entrada general",
          priceSenior: "Incluido en entrada reducida",
          link: "https://hhticket.gr/"
        },
        {
          name: "Museo Arqueológico de Delos",
          desc: "Custodia los leones originales arcaicos de la terraza, estatuas de culto de Apolo y Artemisa, terracotas y ricos mosaicos polícromos.",
          location: "Interior del recinto arqueológico",
          coords: [37.4010, 25.2705],
          hours: "08:00 - 19:30",
          priceGeneral: "Incluido en entrada general",
          priceSenior: "Incluido en entrada reducida",
          link: "http://odysseus.culture.gr/"
        },
        {
          name: "Monte Kynthos (113 m) y Santuario de Zeus",
          desc: "Cima sagrada desde donde Zeus contempló el parto de Leto. Vistas de 360 grados de todo el archipiélago de las Cícladas.",
          location: "Cumbre meridional de Delos",
          coords: [37.3948, 25.2725],
          hours: "08:00 - 19:30 (sendero de piedra)",
          priceGeneral: "Incluido en entrada general",
          priceSenior: "Incluido en entrada reducida",
          link: "https://hhticket.gr/"
        }
      ]
    },
    {
      island: "Syros",
      sites: [
        {
          name: "Yacimiento de Kastri y Chalandriani (2800 a.C.)",
          desc: "Fortaleza amurallada de la Edad del Bronce Cicládica temprana (Keros-Syros) y necrópolis con cientos de tumbas de cista.",
          location: "Meseta norte de Chalandriani",
          coords: [37.4952, 24.9355],
          hours: "Acceso libre (sendero señalizado)",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "http://odysseus.culture.gr/"
        },
        {
          name: "Teatro Municipal Apolo (1864)",
          desc: "Joyel neoclásico proyectado por Pietro Sampo como réplica a escala de la Scala de Milán. Cuatro pisos de palcos con frescos.",
          location: "Plaza Vardaka, Ermoupoli",
          coords: [37.4445, 24.9435],
          hours: "09:00 - 14:00 y 18:00 - 21:00",
          priceGeneral: "3,00 €",
          priceSenior: "1,50 € (50% dto. Senior UE)",
          link: "https://www.apollotheatro.gr/"
        },
        {
          name: "Museo Arqueológico de Syros",
          desc: "Colección estelar de vasijas de cerámica cicládica con forma de 'sartén', figurillas de mármol y estelas funerarias helenísticas.",
          location: "Planta baja del Ayuntamiento, Plaza Miaouli",
          coords: [37.4448, 24.9422],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "3,00 €",
          priceSenior: "1,50 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Ciudadela Medieval y Catedral de San Jorge en Ano Syros",
          desc: "Burgo fortificado veneciano del siglo XIII sin coches coronado por la catedral católica de Agios Georgios y el archivo histórico.",
          location: "Ano Syros (Colina Norte)",
          coords: [37.4525, 24.9362],
          hours: "Abierto todo el día; templos 10:00 - 13:00 y 17:00 - 20:00",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://syrosisland.gr/"
        }
      ]
    },
    {
      island: "Paros",
      sites: [
        {
          name: "Basílica Panagia Ekatontapiliani",
          desc: "El templo bizantino más impresionante de las Cícladas, mandado construir por Santa Elena en el siglo IV con ciborio de mármol y baptisterio cruciforme.",
          location: "Parikia (a 200 m del puerto)",
          coords: [37.0845, 25.1525],
          hours: "07:30 - 21:30 (acceso al museo 09:00 - 14:00)",
          priceGeneral: "Basílica gratis / Museo eclesiástico 3,00 €",
          priceSenior: "Basílica gratis / Museo 1,50 €",
          link: "https://ekatontapyliani.gr/"
        },
        {
          name: "Museo Arqueológico de Paros",
          desc: "Guarda la famosa Victoria Alada (Niké) de Paros del 470 a.C., la Gorgona arcaica y un fragmento original del Mármol de Paros.",
          location: "Parikia",
          coords: [37.0852, 25.1542],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "3,00 €",
          priceSenior: "1,50 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Canteras Antiguas de Mármol de Marathi",
          desc: "Galerías subterráneas donde se extraía el afamado mármol pario translúcido con el que se esculpieron la Venus de Milo y la Victoria de Samotracia.",
          location: "Valle de Marathi",
          coords: [37.0695, 25.1835],
          hours: "Acceso exterior libre diurno",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "http://odysseus.culture.gr/"
        },
        {
          name: "Kastro Veneciano de Naoussa",
          desc: "Torre vigía veneciana semisumergida del siglo XV en la bocana del puerto pesquero que protegía contra ataques corsarios.",
          location: "Bocana del puerto de Naoussa",
          coords: [37.1255, 25.2415],
          hours: "Exterior visible 24h",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://paros.gr/"
        }
      ]
    },
    {
      island: "Antíparos",
      sites: [
        {
          name: "Gran Cueva Espeleológica de Antíparos",
          desc: "Cavidad kárstica monumental de más de 85 m de profundidad. Alberga la estalagmita más antigua de Europa (45 millones de años) e inscripciones de Lord Byron.",
          location: "Colina de Agios Ioannis",
          coords: [37.0092, 25.0745],
          hours: "10:00 - 16:30 (todos los días de junio)",
          priceGeneral: "6,00 €",
          priceSenior: "3,00 € (50% dto. Senior UE)",
          link: "https://antiparos.com/cave-of-antiparos/"
        },
        {
          name: "Kastro Veneciano de Chora",
          desc: "Extraordinario burgo medieval fortificado de 1440 construido en anillo continuo donde los muros de las viviendas formaban la propia muralla defensiva.",
          location: "Centro de Chora Antíparos",
          coords: [37.0402, 25.0805],
          hours: "Acceso libre peatonal 24h",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://antiparos.com/"
        },
        {
          name: "Santuario Arcaico de Apolo en Despotiko",
          desc: "Yacimiento arqueológico insular virgen enfrente de Antíparos con un grandioso templo de Apolo del siglo VI a.C. en mármol blanco.",
          location: "Isla deshabitada de Despotiko (barca desde Agios Georgios)",
          coords: [36.9698, 25.0215],
          hours: "09:00 - 14:00 (sujeto a navegación costera)",
          priceGeneral: "Acceso al yacimiento gratuito / Barca 12 €",
          priceSenior: "Acceso gratuito / Barca 10 €",
          link: "http://odysseus.culture.gr/"
        }
      ]
    },
    {
      island: "Naxos",
      sites: [
        {
          name: "Portara de Apolo (Templo de Delio)",
          desc: "Enorme marco de puerta de mármol de 6x3,5 metros construido en el 530 a.C. bajo el tirano Lígdamis sobre el islote de Palatia.",
          location: "Islote de Palatia, Chora de Naxos",
          coords: [37.1105, 25.3722],
          hours: "Acceso libre 24h (imprescindible a la puesta de sol)",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://naxos.gr/"
        },
        {
          name: "Templo Arcaico de Deméter en Sangri",
          desc: "Santuario de mármol jónico del 530 a.C. restaurado con rigor arqueológico. Precursor del Partenón de Atenas con museo in situ.",
          location: "Valle de Gyroulas, cerca de Sangri",
          coords: [37.0295, 25.4312],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "4,00 €",
          priceSenior: "2,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Kouros Colosal de Melanes (Flerio)",
          desc: "Estatua arcaica inconclusa de mármol de 6,4 metros de largo esculpida hacia el 570 a.C. que yace tendida en un vergel de olivos.",
          location: "Flerio, cerca de Melanes",
          coords: [37.0895, 25.4395],
          hours: "Acceso libre diurno",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "http://odysseus.culture.gr/"
        },
        {
          name: "Kouros de Apollonas (Dioniso)",
          desc: "Monumento colosal de 10,7 metros de largo y 80 toneladas datado en el siglo VI a.C. tallado directamente sobre el lecho de la cantera arcaica.",
          location: "Apollonas (Costa Norte)",
          coords: [37.1795, 25.5535],
          hours: "Acceso libre diurno",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://naxos.gr/"
        },
        {
          name: "Kastro y Museo Arqueológico de Naxos",
          desc: "Torre Griva y laberinto medieval de la capital ducal de Sanudo (1207). Colección excepcional de ídolos de mármol cicládicos.",
          location: "Cima amurallada de Chora",
          coords: [37.1055, 25.3775],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "3,00 €",
          priceSenior: "1,50 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        }
      ]
    },
    {
      island: "Milos",
      sites: [
        {
          name: "Teatro Romano de Mármol de Milos",
          desc: "Teatro helenístico reconstruido en época romana con gradas de mármol blanco de Paros suspendido sobre el Golfo de Milos con acústica perfecta.",
          location: "Tripiti, cerca de Klima",
          coords: [36.7385, 24.4442],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "Acceso libre / Recinto exterior 3,00 €",
          priceSenior: "1,50 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Catacumbas Paleocristianas de Milos",
          desc: "Complejo subterráneo de galerías funerarias excavadas en toba volcánica de los siglos I al V d.C. Consideradas entre las más importantes del mundo junto a las de Roma.",
          location: "Ladera de Tripiti",
          coords: [36.7395, 24.4415],
          hours: "09:00 - 18:45 (Martes cerrado)",
          priceGeneral: "4,00 €",
          priceSenior: "2,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Lugar del Hallazgo de la Venus de Milo",
          desc: "Monolito y nicho señalizado donde el campesino Yorgos Kentrotas desenterró en 1820 la célebre estatua de Afrodita que hoy preside el Museo del Louvre.",
          location: "Olivares de Tripiti (camino al teatro)",
          coords: [36.7390, 24.4435],
          hours: "Acceso libre 24h",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://milos.gr/"
        },
        {
          name: "Museo Arqueológico de Plaka",
          desc: "Edificio neoclásico de Ernst Ziller con réplica exacta en escayola de la Venus de Milo cedida por el Louvre e inscripciones paleocristianas.",
          location: "Plaza principal de Plaka",
          coords: [36.7442, 24.4215],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "3,00 €",
          priceSenior: "1,50 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Kastro Veneciano de Plaka (Iglesia Mesa Panagia)",
          desc: "Pico volcánico más alto de Plaka (280 m). Ruinas de la fortaleza del siglo XIII con panorámica de 360 grados de todo el archipiélago milio.",
          location: "Cima de Plaka",
          coords: [36.7455, 24.4202],
          hours: "Acceso libre 24h",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://milos.gr/"
        }
      ]
    },
    {
      island: "Kos",
      sites: [
        {
          name: "Santuario de Asklepieion de Hipócrates",
          desc: "El gran centro sanatorio de la Antigüedad Clásica estructurado en 3 terrazas monumentales con templos jónicos y dóricos dedicados a Asclepio.",
          location: "Colina de Platani (a 4 km al SO de Kos)",
          coords: [36.8775, 27.2565],
          hours: "08:00 - 20:00 (todos los días de junio)",
          priceGeneral: "8,00 €",
          priceSenior: "4,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Castillo de los Caballeros de San Juan (Neratzia)",
          desc: "Fortaleza marítima de doble muralla defensiva erigida por la Orden Hospitalaria en el siglo XIV para vigilar el estrecho frente a Halicarnaso.",
          location: "Bocana del puerto de Kos",
          coords: [36.8975, 27.2905],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "4,00 €",
          priceSenior: "2,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Ágora Antigua y Excavaciones de Kos Chora",
          desc: "Uno de los centros civiles y comerciales más extensos del Mediterráneo con columnas corintias, stoas y basílica paleocristiana.",
          location: "Centro histórico de Kos Chora",
          coords: [36.8935, 27.2895],
          hours: "Acceso libre diurno",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "http://odysseus.culture.gr/"
        },
        {
          name: "Casa Romana de Kos",
          desc: "Magnífica domus pompeyana del siglo III d.C. con 3 peristilos interiores, 36 estancias decoradas con mosaicos marinos originales y frescos.",
          location: "Avenida Grigoriou V, Kos Chora",
          coords: [36.8905, 27.2875],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "6,00 €",
          priceSenior: "3,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Odeón Romano de Kos",
          desc: "Pequeño teatro semicircular romano del siglo II d.C. con 14 filas de gradas de mármol blanco reservadas para los magistrados.",
          location: "Vía de las excavaciones occidentales",
          coords: [36.8895, 27.2855],
          hours: "Acceso libre diurno 08:30 - 15:00",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "http://odysseus.culture.gr/"
        },
        {
          name: "Fortaleza Medieval de Paleo Pyli",
          desc: "La 'Mystras del Dodecaneso': burgo bizantino encaramado a 300 m de altitud con tres iglesias pintadas y triple anillo de murallas.",
          location: "Montes Dikeos (Pyli)",
          coords: [36.8435, 27.1895],
          hours: "Acceso libre diurno",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "https://kos.gr/"
        },
        {
          name: "Basílica Paleocristiana de Agios Stefanos",
          desc: "Complejo basical del siglo V d.C. con pavimentos de mosaico y columnas de mármol al pie del mar frente al islote volcánico de Kastri.",
          location: "Playa de Kamari / Bahía de Kefalos",
          coords: [36.7455, 26.9745],
          hours: "Acceso libre 24h",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "http://odysseus.culture.gr/"
        }
      ]
    },
    {
      island: "Rodas",
      sites: [
        {
          name: "Acrópolis de Lindos y Templo de Atenea Lindia",
          desc: "Espectacular fortaleza sobre un peñón de 116 metros con el templo dórico del siglo IV a.C., la stoa monumental y el castillo de los Caballeros.",
          location: "Lindos (a 48 km al sur de Rodas)",
          coords: [36.0915, 28.0875],
          hours: "08:00 - 20:00 (todos los días de junio)",
          priceGeneral: "12,00 €",
          priceSenior: "6,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Palacio del Gran Maestre de los Caballeros de Rodas",
          desc: "Soberbia fortaleza gótica del siglo XIV con torres almenadas y magníficos mosaicos helenísticos de Cos traídos en época italiana.",
          location: "Extremo superior de la Calle de los Caballeros, Rodas",
          coords: [36.4455, 28.2238],
          hours: "08:00 - 20:00 (todos los días de junio)",
          priceGeneral: "8,00 € (combinada con Museo Arq. 10 €)",
          priceSenior: "4,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Museo Arqueológico (Gran Hospital de los Caballeros)",
          desc: "Joya gótica de 1440 con amplio patio claustral. Alberga la famosa Afrodita púdica de Rodas y la estela funeraria de Krito y Timarista.",
          location: "Plaza del Museo, Ciudad Medieval",
          coords: [36.4445, 28.2268],
          hours: "08:00 - 20:00",
          priceGeneral: "6,00 €",
          priceSenior: "3,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Yacimiento de la Antigua Kamiros",
          desc: "La 'Pompeya griega': ciudad helenística intacta estructurada en tres niveles sobre la colina, con templo de Atenea y ágora.",
          location: "Costa noroeste de Rodas (a 33 km de la capital)",
          coords: [36.3355, 27.9225],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "6,00 €",
          priceSenior: "3,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        },
        {
          name: "Acrópolis de Rodas y Monte Smith",
          desc: "Estadio helenístico restaurado de 200 m, odeón de mármol y las tres columnas en pie del Templo de Apolo Pitio.",
          location: "Colina de San Esteban (Monte Smith)",
          coords: [36.4395, 28.2115],
          hours: "Acceso libre diurno",
          priceGeneral: "Gratis",
          priceSenior: "Gratis",
          link: "http://odysseus.culture.gr/"
        },
        {
          name: "Acrópolis y Monasterio de Filerimos (Yáliso)",
          desc: "Meseta sagrada con la acrópolis de Yáliso, el monasterio bizantino-caballeresco rodeado de cipreses y pavos reales y cruz panorámica de 18 m.",
          location: "Monte Filerimos (Trianda)",
          coords: [36.3995, 28.1435],
          hours: "08:30 - 15:30 (Martes cerrado)",
          priceGeneral: "6,00 €",
          priceSenior: "3,00 € (50% dto. Senior UE)",
          link: "https://hhticket.gr/"
        }
      ]
    }
  ],

  // -------------------------------------------------------------
  // ISLAS (Visión Global, Kms y Tiempos de Estancia)
  // -------------------------------------------------------------
  islands: [
    {
      id: "mykonos",
      name: "Mykonos",
      daysCount: "4 días (Días 1, 2, 3 y 4)",
      mapCenter: [37.4500, 25.3500],
      zoom: 12,
      totalKm: "108 km",
      totalDrivingTime: "2h 55 min",
      description: "Puerta de entrada del archipiélago. Combina el Kastro medieval, los molinos de Kato Mili, la arquitectura cicládica más pura, la cercanía sagrada a Delos, el rico Museo Arqueológico y el patrimonio naval del Museo Marítimo del Egeo.",
      highlights: ["Chora & Little Venice", "Panagia Paraportiani", "Delos UNESCO (Día 2)", "Faro Armenistis", "Museo Arqueológico & Ano Mera (Día 3)", "Museo Marítimo & Casa Lena (Día 4)", "Playa Agrari & Lia"],
      hotel: "Alexandra Suites (Tourlos)",
      carRent: "Avis Mykonos (Cat. B, 3 días)",
      gmapsQuery: "https://www.google.com/maps/dir/Mykonos+Airport/Tourlos/Armenistis+Lighthouse/Ano+Mera/Agios+Sostis+Beach/Mykonos+Chora"
    },
    {
      id: "delos",
      name: "Delos (UNESCO)",
      daysCount: "1 día (Excursión Día 2)",
      mapCenter: [37.3995, 25.2678],
      zoom: 15,
      totalKm: "0 km en coche (isla peatonal)",
      totalDrivingTime: "30 min travesía en barco desde Mykonos",
      description: "Patrimonio de la Humanidad UNESCO. La isla sagrada de Apolo y Artemisa, uno de los museos al aire libre más fastuosos del Mediterráneo.",
      highlights: ["Terraza de los Leones", "Santuario de Apolo", "Casas de los Mosaicos", "Teatro Antiguo", "Monte Kynthos"],
      hotel: "Alexandra Suites (base en Mykonos)",
      carRent: "No aplicable (isla deshabitada protegida)",
      gmapsQuery: "https://www.google.com/maps/search/?api=1&query=Delos+Archaeological+Site"
    },
    {
      id: "syros",
      name: "Syros",
      daysCount: "2 días (Días 5 y 6)",
      mapCenter: [37.4450, 24.9200],
      zoom: 12,
      totalKm: "56 km",
      totalDrivingTime: "1h 35 min",
      description: "Capital cultural y administrativa de las Cícladas. Fusión única de arquitectura señorial neoclásica en Ermoupoli y burgo medieval católico en Ano Syros.",
      highlights: ["Teatro Apolo", "Barrio de Vaporia", "Ano Syros Medieval", "Yacimiento de Kastri (2800 a.C.)", "Cala Galissas & Kini"],
      hotel: "AVALON Luxury Suites (Ermoupoli)",
      carRent: "Hertz Syros (Cat. A)",
      gmapsQuery: "https://www.google.com/maps/dir/Ermoupoli/Ano+Syros/Chalandriani/Kini+Beach/Galissas+Beach/Ermoupoli"
    },
    {
      id: "paros",
      name: "Paros y Antíparos",
      daysCount: "2 días (Días 7 y 8)",
      mapCenter: [37.0600, 25.1400],
      zoom: 11,
      totalKm: "82 km (incluye 24 km en Antíparos)",
      totalDrivingTime: "2h 10 min",
      description: "Tierra del mármol más blanco de la Antigüedad. Iglesias bizantinas milenarias, puertos marineros auténticos y la sobrecogedora cueva kárstica de Antíparos.",
      highlights: ["Basílica Panagia Ekatontapiliani", "Canteras de Mármol de Marathi", "Naoussa & Kastro", "Cueva de Antíparos", "Playa Kolymbithres & Santa Maria"],
      hotel: "Zoumis Residence (Naoussa)",
      carRent: "Enterprise Paros (Cat. B)",
      gmapsQuery: "https://www.google.com/maps/dir/Parikia/Marathi+Marble+Quarries/Naoussa/Kolymbithres+Beach/Pounda+Port/Cave+of+Antiparos"
    },
    {
      id: "naxos",
      name: "Naxos",
      daysCount: "2 días (Días 9 y 10)",
      mapCenter: [37.0650, 25.4600],
      zoom: 11,
      totalKm: "78 km",
      totalDrivingTime: "2h 05 min",
      description: "La isla más grande y fértil de las Cícladas. Santuarios arcaicos monumentales de mármol, kouros gigantes en olivares y playas infinitas de dunas.",
      highlights: ["Portara de Apolo", "Templo de Deméter en Sangri", "Kouros de Melanes", "Kastro Veneciano", "Playas Plaka & Agios Prokopios"],
      hotel: "Galazia Apartments (Chora)",
      carRent: "Avis Naxos (Cat. B)",
      gmapsQuery: "https://www.google.com/maps/dir/Naxos+Chora/Sangri+Temple+of+Demeter/Chalkio/Melanes+Kouros/Plaka+Beach/Portara"
    },
    {
      id: "milos",
      name: "Milos",
      daysCount: "3 días (Días 11, 12 y 13)",
      mapCenter: [36.7200, 24.4400],
      zoom: 11,
      totalKm: "87 km",
      totalDrivingTime: "2h 20 min",
      description: "La isla geológica por excelencia. Paisajes lunares blancos en Sarakiniko, el enclave de la Venus de Milo, catacumbas paleocristianas y los farallones corsarios de Kleftiko.",
      highlights: ["Playa Lunar de Sarakiniko", "Teatro Romano & Catacumbas", "Venus de Milo Site", "Pueblo de pescadores Klima", "Playa Firiplaka", "Excursión en barco Kleftiko"],
      hotel: "Anais Milos Suites (Adamas)",
      carRent: "Avance Milos (Cat. SUV Compacto)",
      gmapsQuery: "https://www.google.com/maps/dir/Adamas/Sarakiniko+Beach/Klima/Catacombs+of+Milos/Plaka/Firiplaka+Beach"
    },
    {
      id: "kos",
      name: "Kos",
      daysCount: "3 días (Días 14, 15 y 16)",
      mapCenter: [36.8300, 27.1500],
      zoom: 11,
      totalKm: "118 km",
      totalDrivingTime: "2h 45 min",
      description: "Cuna de Hipócrates y de la medicina moderna. El monumental Asklepieion en terrazas, fortalezas hospitalarias, aguas termales volcánicas y ruinas paleocristianas al borde del agua.",
      highlights: ["Asklepieion de Hipócrates", "Castillo Neratzia & Ágora", "Casa Romana", "Termas de Bros", "Paleo Pyli Medieval", "Basílica Agios Stefanos & Kefalos"],
      hotel: "Orpheus Studios (Kos Chora)",
      carRent: "Hertz Kos (Cat. B)",
      gmapsQuery: "https://www.google.com/maps/dir/Kos+Airport/Kos+Town/Asklepieion/Empros+Thermi/Pyli/Agios+Stefanos+Basilica"
    },
    {
      id: "rodas",
      name: "Rodas",
      daysCount: "5 días (Días 17 al 21)",
      mapCenter: [36.3000, 28.1000],
      zoom: 10,
      totalKm: "215 km",
      totalDrivingTime: "4h 40 min",
      description: "La joya del Dodecaneso y broche final del viaje. La ciudad medieval amurallada más grande de Europa (UNESCO), la Acrópolis de Lindos, Kamiros helenística, el Castillo de Monolithos y salida directa hacia Madrid.",
      highlights: ["Palacio del Gran Maestre & Calle Caballeros", "Acrópolis de Lindos & Bahía San Pablo", "Antigua Kamiros", "Castillo de Monolithos", "Termas de Kallithea", "Bahía Anthony Quinn"],
      hotel: "Old Town Nest Apartments (Ciudad Medieval)",
      carRent: "Enterprise Rhodes (Cat. C)",
      gmapsQuery: "https://www.google.com/maps/dir/Rhodes+Port/Lindos+Acropolis/Kamiros/Monolithos+Castle/Kallithea+Springs/Rhodes+Airport"
    }
  ],

  // -------------------------------------------------------------
  // PROGRAMA DÍA A DÍA (DÍAS 1 AL 21) CON RUTAS Y LOGÍSTICA
  // -------------------------------------------------------------
  days: [
    {
      day: 1,
      date: "1 de Junio de 2027",
      title: "Llegada a Mykonos, Molinos y Little Venice",
      island: "Mykonos",
      islandId: "mykonos",
      summary: "Vuelo directo desde Madrid, recogida del vehículo y primer contacto con los molinos venecianos y los callejones encalados de Chora.",
      itinerary: {
        morning: "08:15 Vuelo directo Madrid (MAD) ➔ 12:50 Mykonos (JMK). Presentación en Barajas a las 06:15. Vuelo de 3h 35m.",
        afternoon: "Recogida de equipajes (13:15). Recogida de coche en oficina Avis Aeropuerto. Traslado (4 km | 10 min) al Alexandra Suites en Tourlos. Check-in y descanso.",
        evening: "Paseo a pie por el barrio de Kastro, Iglesia de Panagia Paraportiani y los 5 molinos de Kato Mili. Atardecer en Little Venice. Cena en taberna tradicional."
      },
      options: {
        a: "Ruta cultural por las 5 iglesias de Paraportiani y calle Matogianni.",
        b: "Paseo relajado frente al mar con café en terraza sobre el agua en Little Venice."
      },
      logistics: {
        type: "Vuelo + Coche",
        details: [
          "Aeropuerto MAD ➔ JMK: Presentación 2h antes (06:15), seguridad 30 min, vuelo 3h 35m, recogida de maletas 25 min.",
          "Coche: Aeropuerto JMK ➔ Alexandra Suites Tourlos (4 km | 10 min).",
          "Coche: Tourlos ➔ Parking Chora (2 km | 6 min).",
          "Total en coche: 6 km | 16 min de conducción tranquila."
        ]
      },
      mapCenter: [37.4475, 25.3350],
      zoom: 13,
      waypoints: [
        { name: "Aeropuerto JMK", type: "airport", coords: [37.4351, 25.3481], desc: "Llegada 12:50 | Recogida de coche Avis" },
        { name: "Alexandra Suites", type: "hotel", coords: [37.4628, 25.3292], desc: "Check-in alojamiento (Tourlos)" },
        { name: "Panagia Paraportiani", type: "monument", coords: [37.4471, 25.3256], desc: "Iglesia del siglo XV en Kastro" },
        { name: "Molinos Kato Mili", type: "monument", coords: [37.4435, 25.3255], desc: "Molinos venecianos del s. XVI" },
        { name: "Little Venice", type: "beach", coords: [37.4455, 25.3250], desc: "Balcones sobre el Egeo y atardecer" }
      ],
      routeCoords: [
        [37.4351, 25.3481],
        [37.4480, 25.3380],
        [37.4628, 25.3292],
        [37.4475, 25.3275]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Mykonos+Airport/Alexandra+Suites+Tourlos/Panagia+Paraportiani/Windmills+of+Kato+Mili"
    },
    {
      day: 2,
      date: "2 de Junio de 2027",
      title: "Delos (UNESCO) & Faro de Armenistis / Playa Agios Sostis",
      island: "Delos & Mykonos",
      islandId: "delos",
      summary: "Excursión en barco a la isla sagrada de Delos por la mañana y tarde de faros salvajes o baño en la virgen Agios Sostis.",
      itinerary: {
        morning: "09:30 Traslado al Puerto Viejo. 10:00 Barco Delos Tours a la isla sagrada de Delos (30 min). Visita completa: Terraza de los Leones, Templo de Apolo, Casas de los Mosaicos y Museo.",
        afternoon: "13:30 Barco de regreso a Mykonos. Almuerzo marinero en Chora. Coche al norte (7 km | 15 min) hasta el Faro Armenistis (1891) sobre acantilados.",
        evening: "Opción A: Yacimiento micénico de Paleokastro en Ano Mera. Opción B: Baño en la bahía virgen de Agios Sostis sin tumbonas ni música."
      },
      options: {
        a: "Subida al Monte Kynthos en Delos y visita al yacimiento de Paleokastro.",
        b: "Regreso temprano de Delos y tarde de playa y desconexión en Agios Sostis."
      },
      logistics: {
        type: "Barco pasaje + Coche",
        details: [
          "Barco Delos Tours: Presentación en muelle viejo 20 min antes (09:40), travesía 30 min por sentido.",
          "Coche: Tourlos ➔ Puerto Viejo (1,5 km | 5 min).",
          "Coche: Chora ➔ Faro Armenistis (7 km | 15 min).",
          "Coche: Faro ➔ Playa Agios Sostis / Ano Mera (11 km | 22 min).",
          "Total en coche: 23 km | 47 min."
        ]
      },
      mapCenter: [37.4350, 25.3000],
      zoom: 12,
      waypoints: [
        { name: "Puerto Viejo Mykonos", type: "port", coords: [37.4475, 25.3275], desc: "Embarque Delos Tours 10:00" },
        { name: "Delos (UNESCO)", type: "monument", coords: [37.3995, 25.2678], desc: "Terraza de los Leones y Santuario Apolo" },
        { name: "Faro Armenistis", type: "monument", coords: [37.4925, 25.3155], desc: "Faro de 1891 con vistas a Tinos" },
        { name: "Playa Agios Sostis", type: "beach", coords: [37.4815, 25.3615], desc: "Playa virgen y taberna Kiki" },
        { name: "Paleokastro Ano Mera", type: "monument", coords: [37.4582, 25.3945], desc: "Acrópolis micénica s. XIV a.C." }
      ],
      routeCoords: [
        [37.4475, 25.3275],
        [37.3995, 25.2678],
        [37.4475, 25.3275],
        [37.4925, 25.3155],
        [37.4815, 25.3615]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Mykonos+Old+Port/Armenistis+Lighthouse/Agios+Sostis+Beach/Ano+Mera"
    },
    {
      day: 3,
      date: "3 de Junio de 2027",
      title: "Mykonos: Museo Arqueológico, Ano Mera & Playa de Lia",
      island: "Mykonos",
      islandId: "mykonos",
      summary: "El día arqueológico de Mykonos: el Pithos del Caballo de Troya en el Museo, el Monasterio de Tourliani de 1542 y la Acrópolis micénica de Paleokastro, culminando en la virgen Playa de Lia.",
      itinerary: {
        morning: "09:00 Visita al Museo Arqueológico de Mykonos en el paseo del Puerto Viejo: el colosal Pithos del siglo VII a.C. con el relieve más antiguo del Caballo de Troya y los ajuares funerarios de Rinia.",
        afternoon: "Coche (8 km | 15 min) al pueblo interior de Ano Mera: visita al Monasterio de Panagia Tourliani (1542) con su campanario de mármol esculpido y retablo florentino dorado. Subida a la colina para ver los restos de la Acrópolis micénica de Paleokastro (siglo XIV a.C.).",
        evening: "Coche (12 km | 18 min) a la costa sureste: baño y relax en la cristalina y poco masificada Playa de Lia o Kalafatis, de aguas azul turquesa y ambiente sereno. Cena de marisco en Ano Mera."
      },
      options: {
        a: "Visita detallada a todo el Museo Arqueológico y la colección de anfóras geométricas de Rinia.",
        b: "Tarde completa de relax y esnórquel en la cala tranquila de Lia o Kalo Livadi."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Tourlos ➔ Museo Arqueológico Mykonos (2 km | 5 min).",
          "Coche: Puerto Viejo ➔ Monasterio Tourliani / Ano Mera (8 km | 14 min).",
          "Coche: Ano Mera ➔ Playa de Lia / Kalafatis (8 km | 12 min).",
          "Coche: Lia ➔ Tourlos (13 km | 20 min).",
          "Total en coche: 31 km | 51 min."
        ]
      },
      mapCenter: [37.4500, 25.3800],
      zoom: 12,
      waypoints: [
        { name: "Museo Arqueológico Mykonos", type: "monument", coords: [37.4498, 25.3292], desc: "Pithos Caballo de Troya s. VII a.C." },
        { name: "Monasterio Tourliani", type: "monument", coords: [37.4485, 25.3925], desc: "Conjunto monástico con retablo florentino de 1542" },
        { name: "Paleokastro Micénico", type: "monument", coords: [37.4582, 25.3945], desc: "Acrópolis micénica del siglo XIV a.C." },
        { name: "Playa de Lia", type: "beach", coords: [37.4265, 25.4375], desc: "Cala tranquila y aguas cristalinas" }
      ],
      routeCoords: [
        [37.4628, 25.3292],
        [37.4498, 25.3292],
        [37.4485, 25.3925],
        [37.4582, 25.3945],
        [37.4265, 25.4375],
        [37.4628, 25.3292]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Mykonos+Archaeological+Museum/Tourliani+Monastery/Paleokastro+Mykonos/Lia+Beach+Mykonos"
    },
    {
      day: 4,
      date: "4 de Junio de 2027",
      title: "Mykonos: Museo Marítimo del Egeo, Playa Agrari & Atardecer en Kapari",
      island: "Mykonos",
      islandId: "mykonos",
      summary: "Patrimonio marítimo y tradición en Chora visitando el Museo Marítimo del Egeo y la Casa de Lena, relax de tarde en la bahía virgen de Agrari y atardecer frente a Delos en Kapari.",
      itinerary: {
        morning: "10:00 Paseo por el tranquilo barrio de Tria Pigadia en Chora. Visita al Museo Marítimo del Egeo (maquetas navales de la Antigüedad al siglo XIX, cartas náuticas históricas y linterna original del Faro Armenistis) y a la Casa Tradicional de Lena (residencia burguesa decimonónica perfectamente ambientada).",
        afternoon: "Coche al sur (10 km | 20 min) hacia la protegida y serena Playa de Agrari, una de las joyas vírgenes de Mykonos con aguas transparentes y arena dorada, alejada del bullicio. Almuerzo marinero relajado junto al mar y baño.",
        evening: "Coche a la península de Agios Ioannis Diakoftis (12 km | 22 min) hasta la recóndita Cala Kapari: contemplación de uno de los atardeceres más mágicos de las Cícladas con el sol poniéndose justo sobre la silueta sagrada de Delos. Cena en taberna de pescado en Agios Ioannis."
      },
      options: {
        a: "Visita pausada al Museo Marítimo, Casa de Lena y recorrido por los jardines del museo.",
        b: "Tarde extendida de relax, lectura y baño en la apacible cala de arena de Agrari."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Tourlos ➔ Parking Chora / Tria Pigadia (2,5 km | 7 min).",
          "Coche: Chora ➔ Playa Agrari (10 km | 20 min).",
          "Coche: Agrari ➔ Playa Kapari / Agios Ioannis (12 km | 22 min).",
          "Coche: Kapari ➔ Alexandra Suites Tourlos (5,5 km | 12 min).",
          "Total en coche: 30 km | 1h 01 min de conducción cómoda."
        ]
      },
      mapCenter: [37.4350, 25.3350],
      zoom: 12,
      waypoints: [
        { name: "Museo Marítimo del Egeo", type: "monument", coords: [37.4452, 25.3298], desc: "Patrimonio náutico y linterna de Armenistis" },
        { name: "Casa de Lena", type: "monument", coords: [37.4450, 25.3302], desc: "Residencia tradicional burguesa del siglo XIX" },
        { name: "Playa Agrari", type: "beach", coords: [37.4225, 25.3855], desc: "Bahía virgen de aguas cristalinas y relax" },
        { name: "Playa Kapari (Agios Ioannis)", type: "beach", coords: [37.4248, 25.3082], desc: "Cala íntima con atardecer sobre Delos" }
      ],
      routeCoords: [
        [37.4628, 25.3292],
        [37.4452, 25.3298],
        [37.4225, 25.3855],
        [37.4248, 25.3082],
        [37.4628, 25.3292]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Alexandra+Suites+Tourlos/Aegean+Maritime+Museum/Agrari+Beach/Kapari+Beach"
    },
    {
      day: 5,
      date: "5 de Junio de 2027",
      title: "Ferry Mykonos ➔ Syros, Ermoupoli Neoclásica & Vaporia",
      island: "Syros",
      islandId: "syros",
      summary: "Travesía en catamarán rápido a Syros. Devolución de coche en Mykonos y recogida en Ermoupoli. Descubrimiento de los palacetes sobre el mar.",
      itinerary: {
        morning: "Check-out en Alexandra Suites. Traslado de 3 min al Nuevo Puerto de Tourlos. Devolución coche Avis. 10:30 Ferry rápido SeaJets a Syros (35-45 min).",
        afternoon: "11:15 Llegada al Puerto de Ermoupoli. Recogida de coche Hertz en el muelle. 5 min al AVALON Luxury Suites. Almuerzo frente a la Plaza Miaouli.",
        evening: "Paseo por el majestuoso barrio aristocrático de Vaporia, Iglesia de San Nicolás y chapuzón urbano desde la plataforma de Asteria Beach."
      },
      options: {
        a: "Visita guiada al interior del Teatro Municipal Apolo y Museo Arqueológico.",
        b: "Tomar un café freddo y baño relajado en la plataforma sobre el mar en Asteria."
      },
      logistics: {
        type: "Ferry rápido + Coche",
        details: [
          "Ferry SeaJets: Presentación en Tourlos 45 min antes (09:45), travesía marítima 40 min, desembarque 10 min en Ermoupoli.",
          "Coche: Puerto Ermoupoli ➔ AVALON Suites (1 km | 4 min).",
          "Coche: Ermoupoli ➔ Barrio Vaporia / Asteria (1,5 km | 5 min).",
          "Total en coche: 3 km | 10 min."
        ]
      },
      mapCenter: [37.4435, 24.9430],
      zoom: 14,
      waypoints: [
        { name: "Puerto de Tourlos", type: "port", coords: [37.4645, 25.3245], desc: "Salida ferry SeaJets 10:30" },
        { name: "Puerto de Ermoupoli", type: "port", coords: [37.4402, 24.9431], desc: "Llegada 11:15 | Recogida coche Hertz" },
        { name: "AVALON Suites", type: "hotel", coords: [37.4442, 24.9418], desc: "Alojamiento señorial" },
        { name: "Teatro Apolo", type: "monument", coords: [37.4445, 24.9435], desc: "Pequeña Scala de Milán de 1864" },
        { name: "Barrio Vaporia / Asteria", type: "beach", coords: [37.4465, 24.9455], desc: "Palacetes sobre las olas y baño" }
      ],
      routeCoords: [
        [37.4402, 24.9431],
        [37.4442, 24.9418],
        [37.4445, 24.9435],
        [37.4465, 24.9455]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Port+of+Syros/AVALON+Luxury+Suites/Apollo+Theater+Syros/Vaporia+Ermoupoli"
    },
    {
      day: 6,
      date: "6 de Junio de 2027",
      title: "Ano Syros Medieval & Yacimiento de Kastri (2800 a.C.)",
      island: "Syros",
      islandId: "syros",
      summary: "Inmersión en la Edad del Bronce en las colinas de Chalandriani y tarde en el burgo medieval veneciano de Ano Syros con atardecer en Kini.",
      itinerary: {
        morning: "Coche hacia el norte salvaje (9 km | 20 min) hasta Chalandriani y yacimiento cicládico amurallado de Kastri (2800 a.C.). Senderismo arqueológico.",
        afternoon: "Descenso a Ano Syros. Recorrido a pie por sus callejuelas encaladas sin coches, Catedral católica de San Jorge y Museo Markos Vamvakaris.",
        evening: "Traslado a la bahía de Kini (9 km | 15 min). Baño al atardecer en su playa de arena dorada y cena de pescado fresco en primera línea."
      },
      options: {
        a: "Ruta completa a pie hasta la cima amurallada de Kastri (bastiones prehistóricos).",
        b: "Paseo panorámico por Ano Syros y baño prolongado en la bahía de Galissas o Kini."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Ermoupoli ➔ Chalandriani / Kastri (9 km | 20 min carretera de montaña asfaltada).",
          "Coche: Chalandriani ➔ Ano Syros (7 km | 15 min).",
          "Coche: Ano Syros ➔ Playa de Kini (9 km | 15 min).",
          "Coche: Kini ➔ Ermoupoli (9 km | 16 min).",
          "Total en coche: 34 km | 1h 06 min de conducción."
        ]
      },
      mapCenter: [37.4650, 24.9300],
      zoom: 12,
      waypoints: [
        { name: "AVALON Suites", type: "hotel", coords: [37.4442, 24.9418], desc: "Punto de salida" },
        { name: "Yacimiento Kastri", type: "monument", coords: [37.4952, 24.9355], desc: "Fortaleza de la Edad del Bronce" },
        { name: "Ano Syros Medieval", type: "monument", coords: [37.4525, 24.9362], desc: "Catedral San Jorge y callejuelas" },
        { name: "Playa de Kini", type: "beach", coords: [37.4505, 24.8985], desc: "Bahía protegida y puesta de sol" }
      ],
      routeCoords: [
        [37.4442, 24.9418],
        [37.4952, 24.9355],
        [37.4525, 24.9362],
        [37.4505, 24.8985],
        [37.4442, 24.9418]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Ermoupoli/Chalandriani+Syros/Ano+Syros/Kini+Beach"
    },
    {
      day: 7,
      date: "7 de Junio de 2027",
      title: "Ferry Syros ➔ Paros, Ekatontapiliani & Puerto de Naoussa",
      island: "Paros",
      islandId: "paros",
      summary: "Corta travesía marítima a Paros. Visita a la magna basílica bizantina de las Cien Puertas y estancia en el idílico puerto de Naoussa.",
      itinerary: {
        morning: "Devolución de coche en el puerto de Ermoupoli. 11:45 Ferry Blue Star / SeaJets a Paros (50 min - 1h 15m).",
        afternoon: "12:50 Llegada a Parikia. Recogida de coche Enterprise en el muelle. Visita a la Basílica bizantina de Panagia Ekatontapiliani (siglo IV) y Museo Arqueológico (Niké de Paros).",
        evening: "Traslado (10 km | 15 min) a Naoussa. Check-in en Zoumis Residence. Paseo por el puerto pesquero de Naoussa, fortaleza veneciana y cena de pulpo seco al sol."
      },
      options: {
        a: "Inspección detallada de las canteras antiguas de mármol de Marathi de camino a Naoussa.",
        b: "Tarde relajada en la piscina del hotel y baño en la cercana playa de Piperi."
      },
      logistics: {
        type: "Ferry + Coche",
        details: [
          "Ferry: Llegada al puerto de Syros 45 min antes (11:00), travesía 55 min, desembarque 10 min en Parikia.",
          "Coche: Puerto Parikia ➔ Panagia Ekatontapiliani (300 m a pie).",
          "Coche: Parikia ➔ Canteras Marathi ➔ Naoussa (13 km | 22 min).",
          "Total en coche: 13 km | 22 min."
        ]
      },
      mapCenter: [37.1000, 25.1900],
      zoom: 12,
      waypoints: [
        { name: "Puerto de Parikia", type: "port", coords: [37.0855, 25.1495], desc: "Llegada ferry y recogida de coche" },
        { name: "Panagia Ekatontapiliani", type: "monument", coords: [37.0845, 25.1525], desc: "Basílica bizantina del siglo IV" },
        { name: "Canteras Marathi", type: "monument", coords: [37.0695, 25.1835], desc: "Cuna del mármol translúcido pario" },
        { name: "Zoumis Residence", type: "hotel", coords: [37.1215, 25.2345], desc: "Alojamiento en Naoussa" },
        { name: "Puerto de Naoussa", type: "monument", coords: [37.1255, 25.2415], desc: "Kastro veneciano y tabernas" }
      ],
      routeCoords: [
        [37.0855, 25.1495],
        [37.0845, 25.1525],
        [37.0695, 25.1835],
        [37.1215, 25.2345]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Parikia+Port/Panagia+Ekatontapiliani/Marathi+Marble+Quarries/Naoussa+Paros"
    },
    {
      day: 8,
      date: "8 de Junio de 2027",
      title: "Excursión a Antíparos, Cueva Milenaria & Playas Esculpidas",
      island: "Antíparos & Paros",
      islandId: "paros",
      summary: "Cruzar en barcaza con el coche a Antíparos para descender a su impresionante cueva kárstica y tarde en las rocas de Kolymbithres.",
      itinerary: {
        morning: "Coche de Naoussa al muelle de Pounda (14 km | 20 min). Transbordador local (7 min) con el coche a Antíparos. Carretera hacia el sur (9 km | 12 min) hasta la Gran Cueva de Antíparos.",
        afternoon: "Paseo por el Kastro fortificado de Chora Antíparos. Almuerzo marinero. 15:00 Transbordador de regreso a Pounda (Paros).",
        evening: "Coche directo a la Playa de Kolymbithres (16 km | 22 min): calas protegidas entre rocas graníticas moldeadas por el viento. Atardecer en Naoussa."
      },
      options: {
        a: "Barca desde Agios Georgios en Antíparos para ver el yacimiento arcaico de Despotiko.",
        b: "Tarde de relax total y tumbona en las calas de arena fina de Kolymbithres o Santa Maria."
      },
      logistics: {
        type: "Ferry local con coche + Coche",
        details: [
          "Transbordador Pounda ↔ Antíparos: 7 min por sentido. Salidas continuas.",
          "Coche: Naoussa ➔ Pounda (14 km | 20 min).",
          "Coche en Antíparos: Puerto ➔ Cueva de Antíparos (9 km | 12 min x2 i/v = 18 km).",
          "Coche en Paros: Pounda ➔ Kolymbithres ➔ Naoussa (18 km | 25 min).",
          "Total en coche: 50 km | 1h 10 min de conducción."
        ]
      },
      mapCenter: [37.0600, 25.1300],
      zoom: 11,
      waypoints: [
        { name: "Zoumis Residence", type: "hotel", coords: [37.1215, 25.2345], desc: "Salida desde Naoussa" },
        { name: "Muelle de Pounda", type: "port", coords: [37.0425, 25.1052], desc: "Barcaza con coche a Antíparos" },
        { name: "Cueva de Antíparos", type: "monument", coords: [37.0092, 25.0745], desc: "Estalagmitas milenarias (85 m prof.)" },
        { name: "Chora Antíparos", type: "monument", coords: [37.0402, 25.0805], desc: "Kastro veneciano del siglo XV" },
        { name: "Playa Kolymbithres", type: "beach", coords: [37.1285, 25.2285], desc: "Esculturas naturales de granito" }
      ],
      routeCoords: [
        [37.1215, 25.2345],
        [37.0425, 25.1052],
        [37.0092, 25.0745],
        [37.0402, 25.0805],
        [37.1285, 25.2285]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Naoussa/Pounta+Paros/Cave+of+Antiparos/Kolymbithres+Beach"
    },
    {
      day: 9,
      date: "9 de Junio de 2027",
      title: "Ferry Paros ➔ Naxos, Portara de Apolo & Playa San Jorge",
      island: "Naxos",
      islandId: "naxos",
      summary: "Salto marítimo a Naxos. Devolución de coche en Paros y recogida en Naxos. Monumental Portara de Apolo y relax en la playa de Agios Georgios.",
      itinerary: {
        morning: "Devolución de coche en Parikia. 12:00 Ferry Blue Star a Naxos (40-45 min). Navegación panorámica entre ambas islas hermanas.",
        afternoon: "12:45 Llegada a Naxos Chora. Recogida de coche en el puerto. 3 min al Galazia Apartments. Almuerzo tradicional en el paseo marítimo.",
        evening: "Paseo hacia el islote de Palatia para contemplar la monumental Portara de Apolo (530 a.C.). Atardecer mágico a través del marco de mármol. Cena de carne asada naxiota."
      },
      options: {
        a: "Subida al Kastro veneciano y visita al Museo Arqueológico (ídolos cicládicos).",
        b: "Tarde de descanso y baño en las aguas cristalinas y someras de Agios Georgios."
      },
      logistics: {
        type: "Ferry + Coche",
        details: [
          "Ferry: Llegada al puerto de Paros 45 min antes (11:15), travesía 45 min, desembarque 10 min en Naxos.",
          "Coche: Naoussa ➔ Parikia (10 km | 15 min).",
          "Coche en Naxos: Puerto ➔ Galazia Apartments (1,5 km | 5 min).",
          "Coche: Galazia ➔ Portara / Paseo (1 km | 4 min).",
          "Total en coche: 12,5 km | 24 min."
        ]
      },
      mapCenter: [37.1030, 25.3750],
      zoom: 14,
      waypoints: [
        { name: "Puerto de Naxos", type: "port", coords: [37.1065, 25.3725], desc: "Llegada 12:45 y recogida coche Avis" },
        { name: "Galazia Apartments", type: "hotel", coords: [37.0988, 25.3742], desc: "Alojamiento cerca de la playa" },
        { name: "Portara de Apolo", type: "monument", coords: [37.1105, 25.3722], desc: "Marco colosal de mármol del 530 a.C." },
        { name: "Kastro de Naxos", type: "monument", coords: [37.1055, 25.3775], desc: "Ciudadela ducal de Marco Sanudo" },
        { name: "Playa Agios Georgios", type: "beach", coords: [37.0975, 25.3715], desc: "Playa dorada de aguas calmas" }
      ],
      routeCoords: [
        [37.1065, 25.3725],
        [37.0988, 25.3742],
        [37.1055, 25.3775],
        [37.1105, 25.3722]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Naxos+Port/Galazia+Apartments/Naxos+Castle/Portara"
    },
    {
      day: 10,
      date: "10 de Junio de 2027",
      title: "Templo de Deméter en Sangri, Kouros Gigantes & Dunas de Plaka",
      island: "Naxos",
      islandId: "naxos",
      summary: "Ruta arqueológica por el fértil interior: santuario jónico de Deméter, esculturas colosales arcaicas y tarde en los arenales de Plaka.",
      itinerary: {
        morning: "Coche al interior (11 km | 18 min) hacia el Valle de Gyroulas. Visita al Templo de Deméter en Sangri (530 a.C.) y su museo arqueológico.",
        afternoon: "Ruta a Melanes (13 km | 20 min) para admirar el Kouros de Flerio (6,4 m) descansando en un olivar arcaico. Comida en taberna de montaña en Chalkio.",
        evening: "Descenso a la costa oeste (16 km | 24 min) hasta la kilométrica playa salvaje de Plaka. Baño en aguas turquesas entre dunas y juncales."
      },
      options: {
        a: "Continuar hacia el norte hasta Apollonas para ver el Kouros colosal de 10,7 m.",
        b: "Tarde entera de descanso, lectura y baño en las dunas protegidas de Plaka."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Chora ➔ Sangri Templo Deméter (11 km | 18 min).",
          "Coche: Sangri ➔ Chalkio ➔ Melanes Kouros (14 km | 22 min).",
          "Coche: Melanes ➔ Playa de Plaka (17 km | 25 min).",
          "Coche: Plaka ➔ Chora (8 km | 14 min).",
          "Total en coche: 50 km | 1h 19 min."
        ]
      },
      mapCenter: [37.0600, 25.4200],
      zoom: 11,
      waypoints: [
        { name: "Galazia Apartments", type: "hotel", coords: [37.0988, 25.3742], desc: "Salida desde Chora" },
        { name: "Templo de Deméter", type: "monument", coords: [37.0295, 25.4312], desc: "Joya jónica del 530 a.C." },
        { name: "Chalkio", type: "monument", coords: [37.0635, 25.4835], desc: "Pueblo señorial y destilería Kitron" },
        { name: "Kouros de Melanes", type: "monument", coords: [37.0895, 25.4395], desc: "Estatua arcaica de 6,4 m en olivar" },
        { name: "Playa de Plaka", type: "beach", coords: [37.0515, 25.3685], desc: "Kilómetros de arena fina y dunas" }
      ],
      routeCoords: [
        [37.0988, 25.3742],
        [37.0295, 25.4312],
        [37.0635, 25.4835],
        [37.0895, 25.4395],
        [37.0515, 25.3685],
        [37.0988, 25.3742]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Naxos+Chora/Temple+of+Demeter+Sangri/Chalkio/Kouros+of+Flerio/Plaka+Beach"
    },
    {
      day: 11,
      date: "11 de Junio de 2027",
      title: "Ferry Naxos ➔ Milos & Paisaje Lunar de Sarakiniko",
      island: "Milos",
      islandId: "milos",
      summary: "Travesía rápida a la isla geológica de Milos. Llegada al puerto de Adamas y primer chapuzón en el increíble paisaje volcánico blanco de Sarakiniko.",
      itinerary: {
        morning: "Devolución de coche en Naxos Chora. 11:30 Ferry rápido SeaJets rumbo a Milos (2h 15m - 2h 45m).",
        afternoon: "14:15 Llegada al puerto de Adamas. Recogida de coche SUV compacto Avance. Traslado de 3 min al Anais Milos Suites. Almuerzo ligero frente al golfo.",
        evening: "Coche hacia la costa norte (5 km | 8 min) hasta Sarakiniko: rocas de toba volcánica blanca modeladas por el viento y el mar simulando una superficie lunar. Baño en el fiordo."
      },
      options: {
        a: "Ruta a pie por los cañones y cuevas blancas de Sarakiniko hasta el barco naufragado.",
        b: "Baño tranquilo en la cala protegida y contemplación relajada del mar desde la roca."
      },
      logistics: {
        type: "Ferry + Coche",
        details: [
          "Ferry SeaJets: Llegada al puerto 50 min antes (10:40), travesía 2h 30m, desembarque 15 min en Adamas.",
          "Coche: Puerto Adamas ➔ Anais Milos Suites (1,5 km | 5 min).",
          "Coche: Adamas ➔ Sarakiniko (5 km | 8 min x2 i/v = 10 km).",
          "Total en coche: 11,5 km | 18 min."
        ]
      },
      mapCenter: [36.7350, 24.4500],
      zoom: 12,
      waypoints: [
        { name: "Puerto de Adamas", type: "port", coords: [36.7245, 24.4445], desc: "Llegada ferry y recogida SUV Avance" },
        { name: "Anais Milos Suites", type: "hotel", coords: [36.7268, 24.4485], desc: "Alojamiento con patio privado" },
        { name: "Sarakiniko", type: "beach", coords: [36.7625, 24.4585], desc: "Costa lunar de roca volcánica blanca" }
      ],
      routeCoords: [
        [36.7245, 24.4445],
        [36.7268, 24.4485],
        [36.7625, 24.4585]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Adamas+Port/Anais+Milos+Suites/Sarakiniko+Beach"
    },
    {
      day: 12,
      date: "12 de Junio de 2027",
      title: "Teatro Romano, Cuna de la Venus de Milo, Catacumbas & Klima",
      island: "Milos",
      islandId: "milos",
      summary: "Recorrido por los orígenes clásicos de Milos: catacumbas sagradas, el teatro de mármol con vistas al golfo y las casas de pescadores de Klima.",
      itinerary: {
        morning: "Coche a Tripiti (5 km | 10 min). Visita a las Catacumbas Paleocristianas (siglo I d.C.), nicho original del hallazgo de la Venus de Milo (1820) y Teatro Romano de mármol.",
        afternoon: "Descenso al idílico pueblo marinero de Klima (2 km | 5 min): casas tradicionales con garaje para barcas de dos pisos y puertas de colores vivos (syrmata). Almuerzo sobre el agua.",
        evening: "Subida a Plaka: Museo Arqueológico con la copia oficial de la Venus enviada por el Louvre y ascenso al Kastro veneciano para admirar la puesta de sol de 360 grados."
      },
      options: {
        a: "Subida completa al pico del Kastro de Plaka y visita al Museo Folclórico.",
        b: "Tarde tranquila en la terraza de un café en Plaka disfrutando del atardecer."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Adamas ➔ Tripiti / Catacumbas y Teatro (5 km | 10 min).",
          "Coche: Tripiti ➔ Klima (2 km | 6 min bajada pronunciada asfaltada).",
          "Coche: Klima ➔ Plaka Capital (3 km | 8 min).",
          "Coche: Plaka ➔ Adamas (5 km | 10 min).",
          "Total en coche: 15 km | 34 min."
        ]
      },
      mapCenter: [36.7350, 24.4300],
      zoom: 13,
      waypoints: [
        { name: "Anais Suites", type: "hotel", coords: [36.7268, 24.4485], desc: "Salida desde Adamas" },
        { name: "Catacumbas de Milos", type: "monument", coords: [36.7395, 24.4415], desc: "Galerías paleocristianas subterráneas" },
        { name: "Teatro Romano", type: "monument", coords: [36.7385, 24.4442], desc: "Teatro de mármol colgado sobre el mar" },
        { name: "Venus de Milo Site", type: "monument", coords: [36.7390, 24.4435], desc: "Lugar del hallazgo en 1820" },
        { name: "Klima (Syrmata)", type: "beach", coords: [36.7345, 24.4315], desc: "Pintoresco pueblo de pescadores" },
        { name: "Kastro de Plaka", type: "monument", coords: [36.7455, 24.4202], desc: "Pico volcánico y mejor atardecer" }
      ],
      routeCoords: [
        [36.7268, 24.4485],
        [36.7395, 24.4415],
        [36.7385, 24.4442],
        [36.7345, 24.4315],
        [36.7455, 24.4202],
        [36.7268, 24.4485]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Adamas/Catacombs+of+Milos/Ancient+Roman+Theatre+Milos/Klima+Milos/Plaka+Milos"
    },
    {
      day: 13,
      date: "13 de Junio de 2027",
      title: "Excursión en Barco a Kleftiko o Acantilados de Firiplaka",
      island: "Milos",
      islandId: "milos",
      summary: "Día dedicado a las maravillas geológicas del sur de Milos: los míticos farallones y cuevas de Kleftiko por mar o las arenas volcánicas de Firiplaka.",
      itinerary: {
        morning: "Opción marítima: Excursión en velero/catamarán de medio día o día completo desde Adamas o Kipos hasta los arcos y cuevas de Kleftiko (antiguo refugio corsario). Baño con esnórquel.",
        afternoon: "Opción terrestre: Coche hacia el sur (11 km | 18 min) a la playa de Firiplaka: inmensos paredones volcánicos teñidos de rojo, ocre y blanco con aguas turquesas transparentes.",
        evening: "Paseo crepuscular por el animado puerto de Adamas. Cena de marisco fresco y queso picante milio (manoura) en taberna a orillas del agua."
      },
      options: {
        a: "Navegación completa a Kleftiko y Cueva de Sykia con baño y exploración de grutas.",
        b: "Día de playa en Firiplaka y Tsigrado, disfrutando de tumbonas y tranquilidad."
      },
      logistics: {
        type: "Coche (o velero opcional)",
        details: [
          "Si se hace excursión Kleftiko en barco: Salida a pie desde el muelle de Adamas a las 09:30.",
          "Si se va en coche al sur: Adamas ➔ Playa Firiplaka (11 km | 18 min x2 i/v = 22 km | 36 min).",
          "Total en coche: 22 km | 36 min."
        ]
      },
      mapCenter: [36.6900, 24.4200],
      zoom: 12,
      waypoints: [
        { name: "Anais Suites", type: "hotel", coords: [36.7268, 24.4485], desc: "Base en Adamas" },
        { name: "Kleftiko (Corsarios)", type: "monument", coords: [36.6575, 24.3315], desc: "Farallones blancos y cuevas marinas" },
        { name: "Playa Firiplaka", type: "beach", coords: [36.6715, 24.4435], desc: "Paredes volcánicas de colores vivos" }
      ],
      routeCoords: [
        [36.7268, 24.4485],
        [36.6715, 24.4435]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Adamas/Firiplaka+Beach"
    },
    {
      day: 14,
      date: "14 de Junio de 2027",
      title: "Vuelo Milos ➔ Atenas ➔ Kos, Castillo Neratzia & Ágora",
      island: "Kos",
      islandId: "kos",
      summary: "Conexión aérea para cruzar de las Cícladas al Dodecaneso. Devolución de coche en Milos, escala técnica ágil en Atenas y llegada a la cuna de Hipócrates.",
      itinerary: {
        morning: "08:45 Coche al Aeropuerto de Milos (MLO). Devolución de coche Avance en terminal. 10:15 Vuelo MLO ➔ 11:00 Atenas (ATH).",
        afternoon: "Escala cómoda en Atenas (almuerzo en terminal). 13:10 Vuelo ATH ➔ 14:05 Kos (KGS). Recogida de maletas y coche Hertz en terminal KGS.",
        evening: "Traslado (24 km | 26 min) al Orpheus Studios en Kos Chora. Primer paseo por el Castillo de los Caballeros de Neratzia, Ágora antigua y el milenario Árbol de Hipócrates."
      },
      options: {
        a: "Ruta cultural por el perímetro defensivo de Neratzia y columnas corintias del Ágora.",
        b: "Descanso en el hotel y café bajo la sombra del plátano histórico de Hipócrates."
      },
      logistics: {
        type: "2 Vuelos domésticos + Coche",
        details: [
          "Vuelos MLO ➔ ATH ➔ KGS: Presentación en MLO a las 08:45, vuelo 45 min, tránsito 2h 10m en Atenas, vuelo a Kos 55 min, maletas 25 min en KGS.",
          "Coche en Milos: Adamas ➔ Aeropuerto MLO (5 km | 8 min).",
          "Coche en Kos: Aeropuerto KGS ➔ Kos Chora / Orpheus Studios (24 km | 26 min).",
          "Total en coche: 29 km | 34 min."
        ]
      },
      mapCenter: [36.8500, 27.2000],
      zoom: 11,
      waypoints: [
        { name: "Aeropuerto MLO", type: "airport", coords: [36.6969, 24.4719], desc: "Salida vuelo 10:15" },
        { name: "Aeropuerto KGS", type: "airport", coords: [36.7933, 27.0917], desc: "Llegada 14:05 y recogida coche Hertz" },
        { name: "Orpheus Studios", type: "hotel", coords: [36.8912, 27.2882], desc: "Alojamiento en Kos Chora" },
        { name: "Castillo Neratzia", type: "monument", coords: [36.8975, 27.2905], desc: "Fortaleza marítima hospitalaria" },
        { name: "Árbol de Hipócrates", type: "monument", coords: [36.8942, 27.2905], desc: "Plátano donde enseñaba Hipócrates" }
      ],
      routeCoords: [
        [36.7933, 27.0917],
        [36.8700, 27.2000],
        [36.8912, 27.2882],
        [36.8975, 27.2905]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Kos+Airport/Orpheus+Studios+Kos/Neratzia+Castle/Tree+of+Hippocrates"
    },
    {
      day: 15,
      date: "15 de Junio de 2027",
      title: "Asklepieion de Hipócrates, Casa Romana & Termas de Bros",
      island: "Kos",
      islandId: "kos",
      summary: "La cumbre médica de la Antigüedad: el gran Asklepieion entre cipreses, la domus imperial romana y un baño termal en las pozas calientes de Bros.",
      itinerary: {
        morning: "Coche (4 km | 8 min) hacia las colinas de Platani. Visita al monumental Asklepieion de Kos (siglo IV a.C.): terrazas dóricas y jónicas, templo de Asclepio y vistas al estrecho de Bodrum.",
        afternoon: "Regreso a Kos Chora. Visita a la suntuosa Casa Romana (siglo III d.C.) con sus 36 habitaciones, mosaicos marinos y el cercano Odeón Romano.",
        evening: "Coche hacia el sureste (12 km | 18 min) hasta las Termas Naturales de Bros (Empros Thermi): piscina marina semicircular donde manan aguas volcánicas sulfuradas a 45°C. Baño terapéutico."
      },
      options: {
        a: "Subida al pueblo de montaña de Zia para ver el atardecer sobre las islas de Kalymnos y Pserimos.",
        b: "Baño relajante y prolongado en las termas marinas calientes de Bros."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Kos Chora ➔ Asklepieion (4 km | 8 min x2 i/v = 8 km).",
          "Coche: Kos Chora ➔ Casa Romana / Odeón (1,5 km | 4 min).",
          "Coche: Kos Chora ➔ Termas de Bros (12 km | 18 min x2 i/v = 24 km).",
          "Total en coche: 33,5 km | 48 min."
        ]
      },
      mapCenter: [36.8700, 27.2800],
      zoom: 12,
      waypoints: [
        { name: "Orpheus Studios", type: "hotel", coords: [36.8912, 27.2882], desc: "Base en Kos Chora" },
        { name: "Asklepieion", type: "monument", coords: [36.8775, 27.2565], desc: "Centro sanatorio de Hipócrates" },
        { name: "Casa Romana", type: "monument", coords: [36.8905, 27.2875], desc: "Domus imperial con mosaicos" },
        { name: "Odeón Romano", type: "monument", coords: [36.8895, 27.2855], desc: "Teatro clásico del s. II" },
        { name: "Termas de Bros", type: "beach", coords: [36.8435, 27.3165], desc: "Pozas volcánicas termales a 45°C" }
      ],
      routeCoords: [
        [36.8912, 27.2882],
        [36.8775, 27.2565],
        [36.8905, 27.2875],
        [36.8435, 27.3165],
        [36.8912, 27.2882]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Kos+Town/Asklepieion+Kos/Roman+Odeon+of+Kos/Therma+Beach"
    },
    {
      day: 16,
      date: "16 de Junio de 2027",
      title: "Fortaleza Paleo Pyli, Basílica Agios Stefanos & Bahía de Kefalos",
      island: "Kos",
      islandId: "kos",
      summary: "Exploración de la Kos medieval y meridional: ruinas bizantinas entre montañas y la basílica al borde del agua frente al islote de Kastri en Kefalos.",
      itinerary: {
        morning: "Coche al centro montañoso (16 km | 22 min) hacia Paleo Pyli: burgo bizantino medieval encaramado a 300 m con vistas panorámicas al Egeo.",
        afternoon: "Ruta al extremo sur (25 km | 30 min) hacia la Bahía de Kefalos. Visita a los mosaicos y columnas de la Basílica Paleocristiana de Agios Stefanos (siglo V) a orillas de la arena.",
        evening: "Baño en la playa de Agios Stefanos contemplando el islote fotogénico de Kastri. Posibilidad de nadar hasta la ermita del islote. Regreso a Chora y cena."
      },
      options: {
        a: "Caminata arqueológica completa por las tres fortalezas y ermitas de Paleo Pyli.",
        b: "Tarde completa de baño y descanso con tumbonas en la playa de Agios Stefanos o Paradise Beach."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Kos Chora ➔ Paleo Pyli (16 km | 22 min).",
          "Coche: Paleo Pyli ➔ Basílica Agios Stefanos Kefalos (25 km | 30 min).",
          "Coche: Kefalos ➔ Kos Chora (40 km | 42 min por la vía principal).",
          "Total en coche: 81 km | 1h 34 min de conducción."
        ]
      },
      mapCenter: [36.8000, 27.1000],
      zoom: 11,
      waypoints: [
        { name: "Orpheus Studios", type: "hotel", coords: [36.8912, 27.2882], desc: "Salida Kos Chora" },
        { name: "Fortaleza Paleo Pyli", type: "monument", coords: [36.8435, 27.1895], desc: "Burgo bizantino encaramado a 300 m" },
        { name: "Basílica Agios Stefanos", type: "monument", coords: [36.7455, 26.9745], desc: "Mosaicos del siglo V frente al mar" },
        { name: "Islote de Kastri", type: "beach", coords: [36.7495, 26.9795], desc: "Ermita azul y aguas transparentes" }
      ],
      routeCoords: [
        [36.8912, 27.2882],
        [36.8435, 27.1895],
        [36.7455, 26.9745],
        [36.8912, 27.2882]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Kos+Town/Palaio+Pyli/Agios+Stefanos+Beach+Kos"
    },
    {
      day: 17,
      date: "17 de Junio de 2027",
      title: "Ferry Kos ➔ Rodas, Murallas UNESCO & Palacio del Gran Maestre",
      island: "Rodas",
      islandId: "rodas",
      summary: "Travesía en catamarán rápido a la capital de los Caballeros de San Juan. Devolución de coche en Kos, llegada al puerto de Rodas y entrada al burgo medieval.",
      itinerary: {
        morning: "Devolución de coche Hertz en el Puerto Central de Kos. 10:15 Catamarán rápido Dodekanisos Seaways (o ferry Blue Star) a Rodas (2h 00m - 3h 15m).",
        afternoon: "12:30 Llegada al Puerto de Rodas (Mandraki / Akantia). Recogida de coche Enterprise. Traslado a pie/coche (1 km) al Old Town Nest Apartments junto a la muralla medieval. Check-in.",
        evening: "Primer paseo por la fascinante Ciudad Medieval amurallada (UNESCO): Calle de los Caballeros de sillería gótica pura y Palacio del Gran Maestre. Cena bajo arcos góticos."
      },
      options: {
        a: "Visita interior completa a las salas y mosaicos helenísticos del Palacio del Gran Maestre.",
        b: "Paseo al atardecer por los muelles de Mandraki admirando los ciervos de bronce y el Fuerte San Nicolás."
      },
      logistics: {
        type: "Ferry catamarán + Coche",
        details: [
          "Ferry Dodekanisos: Presentación en el puerto de Kos 50 min antes (09:25), travesía marítima 2h 00m, desembarque 15 min en Rodas.",
          "Coche en Rodas: Puerto ➔ Old Town Nest / Puerta San Juan (2 km | 6 min).",
          "Total en coche: 2 km | 6 min."
        ]
      },
      mapCenter: [36.4420, 28.2250],
      zoom: 14,
      waypoints: [
        { name: "Puerto Central de Kos", type: "port", coords: [36.8965, 27.2915], desc: "Salida catamarán 10:15" },
        { name: "Puerto de Rodas", type: "port", coords: [36.4425, 28.2325], desc: "Llegada 12:30 y recogida Enterprise" },
        { name: "Old Town Nest", type: "hotel", coords: [36.4405, 28.2255], desc: "Alojamiento medieval restaurado" },
        { name: "Palacio Gran Maestre", type: "monument", coords: [36.4455, 28.2238], desc: "Castillo medieval de los Caballeros" },
        { name: "Calle Caballeros", type: "monument", coords: [36.4445, 28.2255], desc: "Vía gótica adoquinada intacta" },
        { name: "Puerto Mandraki", type: "beach", coords: [36.4495, 28.2275], desc: "Ciervos de bronce y Fuerte San Nicolás" }
      ],
      routeCoords: [
        [36.4425, 28.2325],
        [36.4405, 28.2255],
        [36.4445, 28.2255],
        [36.4455, 28.2238]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Rhodes+Tourist+Port/Old+Town+Nest/Palace+of+the+Grand+Master+of+the+Knights+of+Rhodes/Mandraki+Port"
    },
    {
      day: 18,
      date: "18 de Junio de 2027",
      title: "Acrópolis de Lindos, Templo de Atenea & Bahía San Pablo",
      island: "Rodas",
      islandId: "rodas",
      summary: "La postal definitiva del Dodecaneso: la acrópolis fortificada sobre el peñón de 116 m de Lindos y un baño en la piscina natural de San Pablo.",
      itinerary: {
        morning: "Salida temprana (08:00) en coche hacia el sur (48 km | 45 min) para visitar la Acrópolis de Lindos antes de las horas de máximo calor. Templo de Atenea Lindia (siglo IV a.C.) y stoa monumental con vistas al mar.",
        afternoon: "Paseo por las callejuelas encaladas de Lindos con suelos de guijarros (chochlakia). Descenso a la Bahía de San Pablo (St. Paul's Bay), una piscina natural circular casi cerrada por rocas. Almuerzo marinero y baño.",
        evening: "Regreso a Rodas (48 km | 45 min). Paseo por el Foso de las Murallas medievales de Rodas al caer la tarde. Cena en taberna de la judería antigua."
      },
      options: {
        a: "Subida a pie a la cima de la Acrópolis de Lindos y visita al relieve del barco de guerra esculpido en la roca.",
        b: "Tarde entera de baño, esnórquel y relax en las aguas mansas de St. Paul's Bay."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Rodas Ciudad ➔ Lindos Acrópolis (48 km | 45 min carretera principal de doble carril).",
          "Coche: Lindos ➔ Bahía San Pablo (1,5 km | 4 min).",
          "Coche: Bahía San Pablo ➔ Rodas Ciudad (48 km | 45 min).",
          "Total en coche: 97,5 km | 1h 34 min."
        ]
      },
      mapCenter: [36.2500, 28.1500],
      zoom: 11,
      waypoints: [
        { name: "Old Town Nest", type: "hotel", coords: [36.4405, 28.2255], desc: "Salida desde Rodas" },
        { name: "Acrópolis de Lindos", type: "monument", coords: [36.0915, 28.0875], desc: "Templo dórico sobre acantilado de 116 m" },
        { name: "Bahía San Pablo", type: "beach", coords: [36.0865, 28.0845], desc: "Piscina natural marina de ensueño" }
      ],
      routeCoords: [
        [36.4405, 28.2255],
        [36.2500, 28.1500],
        [36.0915, 28.0875],
        [36.0865, 28.0845],
        [36.4405, 28.2255]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Rhodes+Old+Town/Lindos+Acropolis/St+Paul's+Bay+Lindos"
    },
    {
      day: 19,
      date: "19 de Junio de 2027",
      title: "Antigua Kamiros (La Pompeya Griega), Filerimos & Bahía Anthony Quinn",
      island: "Rodas",
      islandId: "rodas",
      summary: "Viaje a la Antigüedad Clásica en la costa occidental con el urbanismo intacto de Kamiros, el monasterio de Filerimos entre pavos reales y la cala verde esmeralda de Anthony Quinn (o Termas de Kallithea).",
      itinerary: {
        morning: "Coche hacia la costa oeste (33 km | 35 min) hasta el yacimiento de la Antigua Kamiros: trazado urbano helenístico completo, ágora, acrópolis y casas sin edificaciones modernas superpuestas. Almuerzo marinero en Kamiros Skala.",
        afternoon: "Subida hacia el Monte Filerimos (22 km | 25 min): Acrópolis de Yáliso, monasterio gótico y camino del Gólgota flanqueado por cipreses. Traslado a la costa este (17 km | 22 min) a la paradisíaca Bahía Anthony Quinn (o Termas de Kallithea) para disfrutar de un baño en aguas esmeralda.",
        evening: "Regreso a Rodas (14 km | 18 min). Visita al Museo Arqueológico en el Gran Hospital de los Caballeros (1440) para admirar la Afrodita de Rodas y atardecer en el Monte Smith (Templo de Apolo y Estadio)."
      },
      options: {
        a: "Itinerario arqueológico detallado por Kamiros y visita completa al Hospital de los Caballeros.",
        b: "Tarde relajada de baño y descanso en la cala esmeralda de Anthony Quinn o en los pabellones art-déco de Kallithea Springs."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Rodas Ciudad ➔ Antigua Kamiros (33 km | 35 min).",
          "Coche: Kamiros ➔ Monte Filerimos (22 km | 25 min).",
          "Coche: Filerimos ➔ Bahía Anthony Quinn / Kallithea (17 km | 22 min).",
          "Coche: Anthony Quinn ➔ Rodas Ciudad (14 km | 18 min).",
          "Total en coche: 86 km | 1h 40 min de conducción cómoda."
        ]
      },
      mapCenter: [36.3800, 28.1200],
      zoom: 11,
      waypoints: [
        { name: "Old Town Nest", type: "hotel", coords: [36.4405, 28.2255], desc: "Salida desde la muralla" },
        { name: "Antigua Kamiros", type: "monument", coords: [36.3355, 27.9225], desc: "La 'Pompeya griega' helenística" },
        { name: "Monte Filerimos", type: "monument", coords: [36.3995, 28.1435], desc: "Monasterio gótico y cruz panorámica" },
        { name: "Bahía Anthony Quinn", type: "beach", coords: [36.3215, 28.2075], desc: "Aguas esmeralda entre pinares" },
        { name: "Termas de Kallithea", type: "monument", coords: [36.3765, 28.2385], desc: "Pabellones art-déco y cala marina" }
      ],
      routeCoords: [
        [36.4405, 28.2255],
        [36.3355, 27.9225],
        [36.3995, 28.1435],
        [36.3215, 28.2075],
        [36.3765, 28.2385],
        [36.4405, 28.2255]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Rhodes+Old+Town/Ancient+Kamiros/Filerimos+Monastery/Anthony+Quinn+Bay/Rhodes+Old+Town"
    },
    {
      day: 20,
      date: "20 de Junio de 2027",
      title: "El Castillo de Monolithos, Valle de Embonas & Cena de Gala en Rodas",
      island: "Rodas",
      islandId: "rodas",
      summary: "Ruta escénica hacia el suroeste salvaje de Rodas: la fortaleza hospitalaria de Monolithos sobre el acantilado marino, cata en el pueblo vinícola de Embonas y cena de despedida en la Ciudad Medieval.",
      itinerary: {
        morning: "10:00 Salida en coche hacia la costa suroeste (68 km | 1h 10 min) hasta el legendario Castillo de Monolithos: fortaleza erigida por los Caballeros de San Juan en 1480 sobre una impresionante aguja de roca a 240 m sobre el Egeo.",
        afternoon: "13:30 Almuerzo tradicional en Embonas, pueblo de montaña a los pies del Monte Ataviros, famoso por sus bodegas y cordero a la brasa. 16:00 Tarde de relax en la playa virgen de Fourni o regreso panorámico bordeando la costa.",
        evening: "19:30 Regreso a la Ciudad Medieval de Rodas. Paseo crepuscular por las murallas góticas y la Puerta de San Juan. Gran cena de gala de despedida en el patio andalusí-otomano de una taberna histórica con música de laúd."
      },
      options: {
        a: "Subida al mirador de Monolithos y visita a la diminuta capilla blanca de San Jorge en la cumbre.",
        b: "Tarde de descanso absoluto y baño reposado en las calas de aguas calmas del este de Rodas."
      },
      logistics: {
        type: "Coche",
        details: [
          "Coche: Rodas Medieval ➔ Castillo de Monolithos (68 km | 1h 10 min).",
          "Coche: Monolithos ➔ Embonas (18 km | 25 min).",
          "Coche: Embonas ➔ Rodas Ciudad (52 km | 55 min).",
          "Total en coche: 138 km | 2h 30 min por buenas carreteras panorámicas."
        ]
      },
      mapCenter: [36.2000, 27.9500],
      zoom: 10,
      waypoints: [
        { name: "Old Town Nest", type: "hotel", coords: [36.4405, 28.2255], desc: "Base en la Ciudad Medieval" },
        { name: "Castillo de Monolithos", type: "monument", coords: [36.1245, 27.7265], desc: "Fortaleza de los Caballeros (1480) sobre el acantilado" },
        { name: "Pueblo de Embonas", type: "beach", coords: [36.2285, 27.8575], desc: "Pueblo vinícola tradicional a los pies del Ataviros" },
        { name: "Ciudad Medieval de Rodas", type: "monument", coords: [36.4445, 28.2268], desc: "Paseo nocturno y cena de despedida del viaje" }
      ],
      routeCoords: [
        [36.4405, 28.2255],
        [36.1245, 27.7265],
        [36.2285, 27.8575],
        [36.4405, 28.2255]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Rhodes+Old+Town/Monolithos+Castle/Embonas/Rhodes+Old+Town"
    },
    {
      day: 21,
      date: "21 de Junio de 2027",
      title: "Despedida de Rodas & Vuelo de Retorno Rodas ➔ Atenas ➔ Madrid",
      island: "Rodas",
      islandId: "rodas",
      summary: "Desayuno pausado en el patio medieval empedrado, devolución del vehículo en el Aeropuerto de Rodas y cómodo vuelo de retorno a Madrid con escala protegida en Atenas.",
      itinerary: {
        morning: "09:00 Desayuno tranquilo en el patio de Old Town Nest. Paseo matinal final por el foso arbolado y el Palacio del Gran Maestre. 10:15 Traslado en coche al Aeropuerto de Rodas-Diágoras (RHO, 15 km | 20 min). Devolución ágil del vehículo en Enterprise de la terminal. Facturación directa de equipajes con Aegean Airlines hasta Madrid-Barajas.",
        afternoon: "12:20 Vuelo Aegean Airlines / Olympic Air A3 205 Rodas (RHO) ➔ 13:15 Atenas (ATH). Escala fluida de 2h 00m en tránsito interno en Eleftherios Venizelos (sin recoger maletas ni repetir control). 15:15 Vuelo Aegean A3 688 Atenas (ATH) ➔ 18:05 Madrid-Barajas (MAD T2).",
        evening: "18:05 Llegada a la Terminal T2 de Madrid-Barajas. Recogida directa de equipajes facturados y fin de la Gran Expedición por el Egeo."
      },
      options: {
        a: "Última compra de dulces tradicionales de Rodas (melekouni y aceite de oliva virgen) antes de ir al aeropuerto.",
        b: "Mañana de descanso absoluto en la terraza empacando con calma y sin prisas."
      },
      logistics: {
        type: "Coche + Vuelo internacional con conexión",
        details: [
          "Coche: Ciudad Medieval ➔ Aeropuerto RHO (15 km | 20 min). Entrega directa en parking de la terminal.",
          "Aeropuerto RHO: Presentación 1h 45m antes (10:35), seguridad 20 min.",
          "Tramo 1 (RHO ➔ ATH): Salida 12:20, llegada 13:15 (55 min).",
          "Escala en Atenas (ATH): 2h 00m de conexión cómoda dentro de la misma terminal con billete único Star Alliance.",
          "Tramo 2 (ATH ➔ MAD): Salida 15:15, llegada 18:05 a Madrid-Barajas T2 (3h 50m).",
          "Total en coche: 15 km | 20 min."
        ]
      },
      mapCenter: [36.4250, 28.1500],
      zoom: 12,
      waypoints: [
        { name: "Old Town Nest", type: "hotel", coords: [36.4405, 28.2255], desc: "Check-out 10:00" },
        { name: "Aeropuerto RHO", type: "airport", coords: [36.4054, 28.0862], desc: "Devolución Enterprise y Facturación Aegean 10:35" },
        { name: "Aeropuerto ATH (Atenas)", type: "airport", coords: [37.9364, 23.9445], desc: "Tránsito fluido y escala 13:15 - 15:15" },
        { name: "Aeropuerto MAD Barajas", type: "airport", coords: [40.4839, -3.5680], desc: "Llegada final 18:05 Terminal T2" }
      ],
      routeCoords: [
        [36.4405, 28.2255],
        [36.4054, 28.0862]
      ],
      gmapsUrl: "https://www.google.com/maps/dir/Rhodes+Old+Town/Rhodes+Airport"
    }
  ]
};
