/**
 * ITINERARIO ISLAS GRIEGAS - 24 MAYO AL 14 JUNIO 2027
 * Base de datos maestra y cargador modular de datos JSON
 *
 * Carga los datos desde los ficheros independientes en /data/:
 * - viaje_config.json (configuración del viaje, fechas, perfil, viajeros)
 * - presupuesto.json (auditoría económica, Cuadro 8, partidas y previsiones)
 * - itinerario.json (programa diario 1 al 22, waypoints y mapas)
 * - vuelos.json (vuelos internacionales y domésticos)
 * - ferris.json (travesías marítimas y catamarán)
 * - alojamientos.json (7 alojamientos boutique seleccionados)
 * - coches_alquiler.json (20 días de alquiler con cobertura SCDW Cero Franquicia)
 * - monumentos.json (monumentos y yacimientos con Tarifa Senior UE 65+)
 * - islas.json (fichas insulares, geolocalización y justificación de estancias)
 */

let ITINERARY_DATA = {
  tripConfig: {},
  tripInfo: {},
  recursosYWebs: {},
  presupuesto: {},
  auditCuadro8: {},
  daysJustification: [],
  flights: [],
  ferries: [],
  accommodations: [],
  carRentals: { rentals: [] },
  monumentsByIsland: [],
  islands: [],
  days: []
};

/**
 * Función asíncrona principal para cargar todos los ficheros JSON
 */
async function loadGreciaData() {
  try {
    const basePath = './data';

    const [
      viajeConfig,
      presupuesto,
      itinerario,
      vuelos,
      ferris,
      alojamientos,
      coches,
      monumentos,
      islas
    ] = await Promise.all([
      fetch(`${basePath}/viaje_config.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar viaje_config.json`);
        return r.json();
      }),
      fetch(`${basePath}/presupuesto.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar presupuesto.json`);
        return r.json();
      }),
      fetch(`${basePath}/itinerario.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar itinerario.json`);
        return r.json();
      }),
      fetch(`${basePath}/vuelos.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar vuelos.json`);
        return r.json();
      }),
      fetch(`${basePath}/ferris.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar ferris.json`);
        return r.json();
      }),
      fetch(`${basePath}/alojamientos.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar alojamientos.json`);
        return r.json();
      }),
      fetch(`${basePath}/coches_alquiler.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar coches_alquiler.json`);
        return r.json();
      }),
      fetch(`${basePath}/monumentos.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar monumentos.json`);
        return r.json();
      }),
      fetch(`${basePath}/islas.json`).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} al cargar islas.json`);
        return r.json();
      })
    ]);

    // Asignación de datos estructurados
    ITINERARY_DATA.tripConfig = viajeConfig.viaje || viajeConfig;
    ITINERARY_DATA.tripInfo = viajeConfig.tripInfo || viajeConfig.viaje || {};
    ITINERARY_DATA.recursosYWebs = viajeConfig.recursosYWebs || {};
    ITINERARY_DATA.presupuesto = presupuesto || {};
    ITINERARY_DATA.auditCuadro8 = presupuesto.auditCuadro8 || {};
    
    // Unificación de fuente: daysJustification se extrae directamente de islas.json
    ITINERARY_DATA.daysJustification = (islas || []).filter(isl => isl.justification).map(isl => ({
      island: isl.name,
      badge: isl.justification.badge,
      days: isl.justification.days,
      nights: isl.justification.nights,
      monuments: isl.justification.monuments,
      beaches: isl.justification.beaches,
      activities: isl.justification.activities,
      whyDays: isl.justification.whyDays
    }));

    ITINERARY_DATA.days = itinerario || [];
    ITINERARY_DATA.flights = vuelos || [];
    ITINERARY_DATA.ferries = ferris || [];
    ITINERARY_DATA.accommodations = alojamientos || [];
    ITINERARY_DATA.carRentals = coches || {};
    ITINERARY_DATA.monumentsByIsland = monumentos || [];
    ITINERARY_DATA.islands = islas || [];

    // Compatibilidad global en window
    window.ITINERARY_DATA = ITINERARY_DATA;

    console.info('✓ Base de datos modular Grecia 2027 cargada con éxito desde ficheros JSON (con presupuesto.json e islas.json unificados).');
    return ITINERARY_DATA;
  } catch (error) {
    console.warn('Aviso al cargar JSON (posible ejecución local file:// sin servidor web):', error);
    return ITINERARY_DATA;
  }
}

// Ejecución inmediata si el entorno ya permite fetch
if (typeof window !== 'undefined') {
  window.ITINERARY_DATA = ITINERARY_DATA;
  window.loadGreciaData = loadGreciaData;
}
