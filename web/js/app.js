/**
 * APLICACIÓN WEB INTERACTIVA - ITINERARIO ISLAS GRIEGAS 2027
 * Controlador de navegación, renderizado dinámico y mapas interactivos
 */

// Estado global de la aplicación
const AppState = {
  currentView: 'daily',     // 'daily', 'islands', 'flights', 'ferries', 'hotels', 'cars', 'monuments', 'budget'
  currentDay: 1,            // 1 a 20
  currentIslandId: 'mykonos',
  monumentFilterIsland: 'all',
  monumentSearchText: '',
  tableViewMode: null,      // 'cards' o 'table'
  activeMap: null           // Instancia Leaflet activa para evitar memory leaks
};

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderView('daily');
});

/**
 * Control y eventos de la barra lateral y navegación
 */
function initNavigation() {
  const sidebar = document.getElementById('sidebar');
  const appContainer = document.querySelector('.app-container');
  const btnSidebarToggle = document.getElementById('btn-sidebar-toggle');
  const btnMobileMenu = document.getElementById('btn-mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const daysSubmenuToggle = document.getElementById('days-submenu-toggle');
  const daysSubmenu = document.getElementById('days-submenu');

  // Toggle colapso escritorio
  if (btnSidebarToggle) {
    btnSidebarToggle.addEventListener('click', () => {
      appContainer.classList.toggle('sidebar-collapsed');
      setTimeout(() => {
        if (AppState.activeMap) AppState.activeMap.invalidateSize();
      }, 350);
    });
  }

  // Toggle menú móvil
  if (btnMobileMenu) {
    btnMobileMenu.addEventListener('click', () => {
      sidebar.classList.add('mobile-open');
      mobileOverlay.classList.add('active');
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      mobileOverlay.classList.remove('active');
    });
  }

  // Acordeón del programa diario
  if (daysSubmenuToggle && daysSubmenu) {
    // Generar enlaces del día 1 al 20 en el submenú
    daysSubmenu.innerHTML = ITINERARY_DATA.days.map(d => `
      <li class="nav-item">
        <a class="nav-link sub-day-link" data-day="${d.day}">
          <span>Día ${d.day}</span>
          <span style="font-size:0.75rem;opacity:0.7;">${d.island}</span>
        </a>
      </li>
    `).join('');

    daysSubmenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      daysSubmenu.classList.toggle('open');
    });

    // Clic en enlace de día individual del submenú
    daysSubmenu.querySelectorAll('.sub-day-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const dayNum = parseInt(link.dataset.day, 10);
        AppState.currentDay = dayNum;
        setActiveNavLink('nav-daily');
        renderView('daily');
        closeMobileSidebar();
      });
    });
  }

  // Acordeón del programa por isla
  const islandsSubmenuToggle = document.getElementById('islands-submenu-toggle');
  const islandsSubmenu = document.getElementById('islands-submenu');
  if (islandsSubmenuToggle && islandsSubmenu) {
    // Generar enlaces de las 8 islas en el submenú
    islandsSubmenu.innerHTML = ITINERARY_DATA.islands.map(isl => `
      <li class="nav-item">
        <a class="nav-link sub-island-link" data-island="${isl.id}">
          <span>${isl.name}</span>
          <span style="font-size:0.75rem;opacity:0.7;">${isl.daysCount.split(' ')[0]} ${isl.daysCount.split(' ')[1] || ''}</span>
        </a>
      </li>
    `).join('');

    islandsSubmenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      islandsSubmenu.classList.toggle('open');
    });

    // Clic en enlace de isla individual del submenú
    islandsSubmenu.querySelectorAll('.sub-island-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const islandId = link.dataset.island;
        AppState.currentIslandId = islandId;
        setActiveNavLink('nav-islands');
        renderView('islands');
        closeMobileSidebar();
      });
    });
  }

  // 1. Acordeón de Alojamientos (Booking.com)
  const hotelsSubmenuToggle = document.getElementById('hotels-submenu-toggle');
  const hotelsSubmenu = document.getElementById('hotels-submenu');
  if (hotelsSubmenuToggle && hotelsSubmenu) {
    hotelsSubmenu.innerHTML = ITINERARY_DATA.accommodations.map(acc => `
      <li class="nav-item">
        <a class="nav-link sub-hotel-link" data-hotel="${acc.id}">
          <span>🏨 ${acc.island}</span>
          <span style="font-size:0.72rem;opacity:0.75;">${acc.name.split(' ')[0]}</span>
        </a>
      </li>
    `).join('');

    hotelsSubmenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hotelsSubmenu.classList.toggle('open');
    });

    hotelsSubmenu.querySelectorAll('.sub-hotel-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const hotelId = link.dataset.hotel;
        setActiveNavLink('nav-hotels');
        renderView('hotels');
        scrollToTarget(`hotel-card-${hotelId}`);
        closeMobileSidebar();
      });
    });
  }

  // 2. Acordeón de Vuelos
  const flightsSubmenuToggle = document.getElementById('flights-submenu-toggle');
  const flightsSubmenu = document.getElementById('flights-submenu');
  if (flightsSubmenuToggle && flightsSubmenu) {
    flightsSubmenu.innerHTML = ITINERARY_DATA.flights.map(fl => `
      <li class="nav-item">
        <a class="nav-link sub-flight-link" data-flight="${fl.id}">
          <span>✈️ ${fl.airports.origin.code} ➔ ${fl.airports.dest.code}</span>
          <span style="font-size:0.72rem;opacity:0.75;">${fl.day.split(' ')[0]} ${fl.day.split(' ')[1]}</span>
        </a>
      </li>
    `).join('');

    flightsSubmenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      flightsSubmenu.classList.toggle('open');
    });

    flightsSubmenu.querySelectorAll('.sub-flight-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const flightId = link.dataset.flight;
        setActiveNavLink('nav-flights');
        renderView('flights');
        scrollToTarget(`flight-row-${flightId}`);
        closeMobileSidebar();
      });
    });
  }

  // 3. Acordeón de Ferris
  const ferriesSubmenuToggle = document.getElementById('ferries-submenu-toggle');
  const ferriesSubmenu = document.getElementById('ferries-submenu');
  if (ferriesSubmenuToggle && ferriesSubmenu) {
    ferriesSubmenu.innerHTML = ITINERARY_DATA.ferries.map(fer => `
      <li class="nav-item">
        <a class="nav-link sub-ferry-link" data-ferry="${fer.id}">
          <span>⛴️ ${fer.route.split('(')[0].trim()}</span>
          <span style="font-size:0.72rem;opacity:0.75;">${fer.day.split(' ')[0]} ${fer.day.split(' ')[1]}</span>
        </a>
      </li>
    `).join('');

    ferriesSubmenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      ferriesSubmenu.classList.toggle('open');
    });

    ferriesSubmenu.querySelectorAll('.sub-ferry-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const ferryId = link.dataset.ferry;
        setActiveNavLink('nav-ferries');
        renderView('ferries');
        scrollToTarget(`ferry-row-${ferryId}`);
        closeMobileSidebar();
      });
    });
  }

  // 4. Acordeón de Coches de Alquiler
  const carsSubmenuToggle = document.getElementById('cars-submenu-toggle');
  const carsSubmenu = document.getElementById('cars-submenu');
  if (carsSubmenuToggle && carsSubmenu) {
    carsSubmenu.innerHTML = ITINERARY_DATA.carRentals.rentals.map((r, idx) => `
      <li class="nav-item">
        <a class="nav-link sub-car-link" data-car-idx="${idx}">
          <span>🚗 ${r.island}</span>
          <span style="font-size:0.72rem;opacity:0.75;">${r.days}d • ${r.cost.split(' ')[0]}</span>
        </a>
      </li>
    `).join('');

    carsSubmenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      carsSubmenu.classList.toggle('open');
    });

    carsSubmenu.querySelectorAll('.sub-car-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const carIdx = link.dataset.carIdx;
        setActiveNavLink('nav-cars');
        renderView('cars');
        scrollToTarget(`car-row-${carIdx}`);
        closeMobileSidebar();
      });
    });
  }

  // 5. Acordeón de Monumentos (Selector y Filtro por Isla)
  const monumentsSubmenuToggle = document.getElementById('monuments-submenu-toggle');
  const monumentsSubmenu = document.getElementById('monuments-submenu');
  if (monumentsSubmenuToggle && monumentsSubmenu) {
    const monumentIslands = [
      { name: "Todas las islas", filter: "all", count: "37 sitios" },
      ...ITINERARY_DATA.monumentsByIsland.map(m => ({
        name: m.island,
        filter: m.island,
        count: `${m.sites.length} sitios`
      }))
    ];

    monumentsSubmenu.innerHTML = monumentIslands.map(item => `
      <li class="nav-item">
        <a class="nav-link sub-monument-link" data-monument-island="${item.filter}">
          <span>🏛️ ${item.name}</span>
          <span style="font-size:0.72rem;opacity:0.75;">${item.count}</span>
        </a>
      </li>
    `).join('');

    monumentsSubmenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      monumentsSubmenu.classList.toggle('open');
    });

    monumentsSubmenu.querySelectorAll('.sub-monument-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const filterVal = link.dataset.monumentIsland;
        AppState.monumentFilterIsland = filterVal;
        setActiveNavLink('nav-monuments');
        renderView('monuments');
        closeMobileSidebar();
      });
    });
  }

  // 6. Acordeón de Presupuesto Global
  const budgetSubmenuToggle = document.getElementById('budget-submenu-toggle');
  const budgetSubmenu = document.getElementById('budget-submenu');
  if (budgetSubmenuToggle && budgetSubmenu) {
    const budgetParts = [
      { label: "Resumen Total", target: "budget-summary-hero", cost: "4.183 €" },
      { label: "✈️ Vuelos", target: "budget-row-flights", cost: "1.040 €" },
      { label: "⛴️ Ferris", target: "budget-row-ferries", cost: "340 €" },
      { label: "🏨 Alojamientos", target: "budget-row-hotels", cost: "1.815 €" },
      { label: "🚗 Coches SCDW", target: "budget-row-cars", cost: "721 €" },
      { label: "⛽ Combustible", target: "budget-row-fuel", cost: "190 €" },
      { label: "🏛️ Monumentos", target: "budget-row-monuments", cost: "77 €" }
    ];

    budgetSubmenu.innerHTML = budgetParts.map(bp => `
      <li class="nav-item">
        <a class="nav-link sub-budget-link" data-budget-target="${bp.target}">
          <span>${bp.label}</span>
          <span style="font-size:0.72rem;opacity:0.75;">${bp.cost}</span>
        </a>
      </li>
    `).join('');

    budgetSubmenuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      budgetSubmenu.classList.toggle('open');
    });

    budgetSubmenu.querySelectorAll('.sub-budget-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.dataset.budgetTarget;
        setActiveNavLink('nav-budget');
        renderView('budget');
        scrollToTarget(targetId);
        closeMobileSidebar();
      });
    });
  }

  // Navegación principal
  document.querySelectorAll('.nav-link[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      setActiveNavLink(link.id);
      renderView(view);
      closeMobileSidebar();
    });
  });
}

/**
 * Función auxiliar para desplazamiento suave y resaltado dinámico de elementos
 */
function scrollToTarget(targetId) {
  setTimeout(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('row-target-highlight');
      setTimeout(() => el.classList.remove('row-target-highlight'), 2300);
    }
  }, 120);
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobile-overlay');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (mobileOverlay) mobileOverlay.classList.remove('active');
}

function setActiveNavLink(activeId) {
  document.querySelectorAll('.sidebar .nav-link').forEach(link => link.classList.remove('active'));
  const activeLink = document.getElementById(activeId);
  if (activeLink) activeLink.classList.add('active');
}

/**
 * Renderizado de vistas principales
 */
function renderView(viewName) {
  AppState.currentView = viewName;
  const contentArea = document.getElementById('main-content-body');
  const pageTitle = document.getElementById('page-title');

  // Limpiar mapa anterior si existía
  if (AppState.activeMap) {
    AppState.activeMap.remove();
    AppState.activeMap = null;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  switch (viewName) {
    case 'daily':
      if (pageTitle) pageTitle.textContent = "Programa Diario";
      renderDailyView(contentArea);
      break;
    case 'islands':
      if (pageTitle) pageTitle.textContent = "Programa por Isla";
      renderIslandsView(contentArea);
      break;
    case 'flights':
      if (pageTitle) pageTitle.textContent = "Vuelos y Traslados Aéreos";
      renderFlightsView(contentArea);
      break;
    case 'ferries':
      if (pageTitle) pageTitle.textContent = "Ferris y Barcos de Pasaje";
      renderFerriesView(contentArea);
      break;
    case 'hotels':
      if (pageTitle) pageTitle.textContent = "Alojamientos (Booking.com)";
      renderHotelsView(contentArea);
      break;
    case 'cars':
      if (pageTitle) pageTitle.textContent = "Coches de Alquiler & Conductor Senior";
      renderCarsView(contentArea);
      break;
    case 'monuments':
      if (pageTitle) pageTitle.textContent = "Monumentos y Sitios Arqueológicos";
      renderMonumentsView(contentArea);
      break;
    case 'budget':
      if (pageTitle) pageTitle.textContent = "Presupuesto Consolidado";
      renderBudgetView(contentArea);
      break;
  }
}

/* ==========================================================================
   1. VISTA: PROGRAMA DIARIO (Días 1 al 20)
   ========================================================================== */
function renderDailyView(container) {
  const dayData = ITINERARY_DATA.days.find(d => d.day === AppState.currentDay) || ITINERARY_DATA.days[0];

  const html = `
    <!-- Barra de Navegación del Día -->
    <div class="day-navigator">
      <button class="btn-nav-day" id="btn-prev-day" ${dayData.day === 1 ? 'disabled' : ''}>
        ← Día Anterior
      </button>

      <div style="display:flex;align-items:center;gap:0.75rem;">
        <label for="day-select" style="font-size:0.85rem;font-weight:700;color:var(--color-text-muted);">IR AL DÍA:</label>
        <select id="day-select" class="day-selector-select">
          ${ITINERARY_DATA.days.map(d => `
            <option value="${d.day}" ${d.day === dayData.day ? 'selected' : ''}>
              Día ${d.day} - ${d.island} (${d.date.split(' de ')[0]} Jun)
            </option>
          `).join('')}
        </select>
      </div>

      <button class="btn-nav-day" id="btn-next-day" ${dayData.day === 20 ? 'disabled' : ''}>
        Día Siguiente →
      </button>
    </div>

    <!-- Contenido del Día -->
    <div class="day-grid">
      <!-- Columna Izquierda: Itinerario y Opciones -->
      <div class="day-itinerary-card">
        <div class="day-header-badge">
          <span class="island-tag">${dayData.island}</span>
          <span class="day-date">📅 ${dayData.date}</span>
        </div>

        <h2 class="day-title">Día ${dayData.day}: ${dayData.title}</h2>
        <p class="day-summary">${dayData.summary}</p>

        <!-- Bloques de tiempo -->
        <div class="time-slot morning">
          <div class="time-icon-badge">🌅</div>
          <div class="time-content">
            <h4>Mañana</h4>
            <p>${dayData.itinerary.morning}</p>
          </div>
        </div>

        <div class="time-slot afternoon">
          <div class="time-icon-badge">☀️</div>
          <div class="time-content">
            <h4>Tarde</h4>
            <p>${dayData.itinerary.afternoon}</p>
          </div>
        </div>

        <div class="time-slot evening">
          <div class="time-icon-badge">🌙</div>
          <div class="time-content">
            <h4>Noche</h4>
            <p>${dayData.itinerary.evening}</p>
          </div>
        </div>

        <!-- Opciones A / B (50% Cultura vs 50% Relax) -->
        <div class="options-box">
          <div class="options-title">
            <span>⚖️ Alternativas de la Jornada (Arqueología vs. Relax)</span>
          </div>
          <div class="option-item">
            <span class="option-letter">A</span>
            <div><strong>Opción A (Cultural/Activa):</strong> ${dayData.options.a}</div>
          </div>
          <div class="option-item">
            <span class="option-letter b">B</span>
            <div><strong>Opción B (Relax/Playa):</strong> ${dayData.options.b}</div>
          </div>
        </div>
      </div>

      <!-- Columna Derecha: Mapa Interactivo y Cronograma Logístico -->
      <div class="day-sidebar-card">
        <!-- Tarjeta del Mapa -->
        <div class="map-container-card">
          <div class="map-header">
            <h3>🗺️ Ruta del Día ${dayData.day}</h3>
            <span class="badge-tag blue">${dayData.logistics.type}</span>
          </div>
          
          <div id="day-map" class="map-wrapper"></div>

          <div class="gmaps-btn-wrapper">
            <a href="${dayData.gmapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-gmaps">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Abrir ruta completa en Google Maps
            </a>
          </div>
        </div>

        <!-- Tarjeta de Logística y Tiempos -->
        <div class="logistics-card">
          <h3>⏱️ Ficha Logística y Tiempos</h3>
          <ul class="logistics-list">
            ${dayData.logistics.details.map(item => `
              <li class="logistics-item">${item}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Eventos de botones de navegación
  const btnPrev = document.getElementById('btn-prev-day');
  const btnNext = document.getElementById('btn-next-day');
  const daySelect = document.getElementById('day-select');

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (AppState.currentDay > 1) {
        AppState.currentDay--;
        renderDailyView(container);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (AppState.currentDay < 20) {
        AppState.currentDay++;
        renderDailyView(container);
      }
    });
  }

  if (daySelect) {
    daySelect.addEventListener('change', (e) => {
      AppState.currentDay = parseInt(e.target.value, 10);
      renderDailyView(container);
    });
  }

  // Inicializar mapa de Leaflet
  initLeafletMap('day-map', dayData.mapCenter, dayData.zoom, dayData.waypoints, dayData.routeCoords);
}

/* ==========================================================================
   2. VISTA: PROGRAMA POR ISLA
   ========================================================================== */
function renderIslandsView(container) {
  const islandData = ITINERARY_DATA.islands.find(isl => isl.id === AppState.currentIslandId) || ITINERARY_DATA.islands[0];
  const currentIndex = ITINERARY_DATA.islands.findIndex(isl => isl.id === islandData.id);

  // Sincronizar submenú del sidebar si existe
  const islandsSubmenu = document.getElementById('islands-submenu');
  if (islandsSubmenu) {
    islandsSubmenu.querySelectorAll('.sub-island-link').forEach(link => {
      link.classList.toggle('active', link.dataset.island === islandData.id);
    });
  }

  // Reunir todos los waypoints y rutas de los días asociados a esta isla
  const islandDays = ITINERARY_DATA.days.filter(d => d.islandId === islandData.id || d.island.includes(islandData.name));
  const combinedWaypoints = [];
  const seenWaypoints = new Set();
  const combinedRoutes = [];

  islandDays.forEach(d => {
    d.waypoints.forEach(wp => {
      if (!seenWaypoints.has(wp.name)) {
        seenWaypoints.add(wp.name);
        combinedWaypoints.push(wp);
      }
    });
    if (d.routeCoords) {
      combinedRoutes.push(d.routeCoords);
    }
  });

  const html = `
    <!-- Barra de Navegación de la Isla (Igual que en Programa Diario) -->
    <div class="day-navigator">
      <button class="btn-nav-day" id="btn-prev-island" ${currentIndex <= 0 ? 'disabled' : ''}>
        ← Isla Anterior
      </button>

      <div style="display:flex;align-items:center;gap:0.75rem;">
        <label for="island-select" style="font-size:0.85rem;font-weight:700;color:var(--color-text-muted);">IR A LA ISLA:</label>
        <select id="island-select" class="day-selector-select">
          ${ITINERARY_DATA.islands.map(isl => `
            <option value="${isl.id}" ${isl.id === islandData.id ? 'selected' : ''}>
              ${isl.name} (${isl.daysCount})
            </option>
          `).join('')}
        </select>
      </div>

      <button class="btn-nav-day" id="btn-next-island" ${currentIndex >= ITINERARY_DATA.islands.length - 1 ? 'disabled' : ''}>
        Isla Siguiente →
      </button>
    </div>

    <div class="section-hero" style="margin-top:1.25rem;">
      <h2>🏝️ Programa y Rutas por Isla</h2>
      <p>Visión global de cada una de las 8 islas clave del itinerario. Consulta los desplazamientos acumulados, kilómetros, tiempos totales de conducción y atractivos imprescindibles.</p>
      <div class="section-hero-stats">
        <div class="hero-stat-pill">📍 <strong>8 Islas</strong> catalogadas</div>
        <div class="hero-stat-pill">🚗 <strong>547 km</strong> en carretera total</div>
        <div class="hero-stat-pill">🧭 Desplazamientos optimizados en estrella</div>
      </div>
    </div>

    <!-- Pestañas de Islas -->
    <div class="island-tabs">
      ${ITINERARY_DATA.islands.map(isl => `
        <button class="island-tab-btn ${isl.id === islandData.id ? 'active' : ''}" data-island="${isl.id}">
          ${isl.name}
        </button>
      `).join('')}
    </div>

    <!-- Detalle de la Isla Seleccionada -->
    <div class="island-detail-grid">
      <!-- Columna Izquierda: Información y Estadísticas -->
      <div class="island-info-card">
        <span class="island-tag">${islandData.daysCount}</span>
        <h2 style="font-size:1.85rem;margin:0.5rem 0 0.75rem;">${islandData.name}</h2>
        <p style="font-size:0.95rem;color:var(--color-text-muted);line-height:1.6;">${islandData.description}</p>

        <div class="island-meta-bar">
          <div class="island-meta-item">
            <span class="meta-label">Total en Coche</span>
            <span class="meta-value">${islandData.totalKm}</span>
          </div>
          <div class="island-meta-item">
            <span class="meta-label">Tiempo Conducción</span>
            <span class="meta-value">${islandData.totalDrivingTime}</span>
          </div>
          <div class="island-meta-item">
            <span class="meta-label">Vehículo</span>
            <span class="meta-value" style="font-size:0.9rem;">${islandData.carRent}</span>
          </div>
          <div class="island-meta-item">
            <span class="meta-label">Alojamiento Base</span>
            <span class="meta-value" style="font-size:0.9rem;">${islandData.hotel}</span>
          </div>
        </div>

        <h4 style="margin-top:1.25rem;font-size:1.05rem;">✨ Hitos y Lugares Clave en la Isla:</h4>
        <ul class="island-highlights-list">
          ${islandData.highlights.map(h => `
            <li><span style="color:var(--color-accent)">✓</span> ${h}</li>
          `).join('')}
        </ul>
      </div>

      <!-- Columna Derecha: Mapa Completo de la Isla -->
      <div class="map-container-card">
        <div class="map-header">
          <h3>🗺️ Mapa General de Desplazamientos: ${islandData.name}</h3>
          <span class="badge-tag green">${islandData.totalKm}</span>
        </div>

        <div id="island-map" class="map-wrapper" style="height:360px;"></div>

        <div class="gmaps-btn-wrapper">
          <a href="${islandData.gmapsQuery}" target="_blank" rel="noopener noreferrer" class="btn-gmaps">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Abrir todos los desplazamientos en Google Maps
          </a>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Eventos de botones de navegación entre islas
  const btnPrev = document.getElementById('btn-prev-island');
  const btnNext = document.getElementById('btn-next-island');
  const islandSelect = document.getElementById('island-select');

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentIndex > 0) {
        AppState.currentIslandId = ITINERARY_DATA.islands[currentIndex - 1].id;
        renderIslandsView(container);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentIndex < ITINERARY_DATA.islands.length - 1) {
        AppState.currentIslandId = ITINERARY_DATA.islands[currentIndex + 1].id;
        renderIslandsView(container);
      }
    });
  }

  if (islandSelect) {
    islandSelect.addEventListener('change', (e) => {
      AppState.currentIslandId = e.target.value;
      renderIslandsView(container);
    });
  }

  // Eventos de botones de pestañas
  container.querySelectorAll('.island-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.currentIslandId = btn.dataset.island;
      renderIslandsView(container);
    });
  });

  // Inicializar mapa de la isla
  initLeafletMap('island-map', islandData.mapCenter, islandData.zoom, combinedWaypoints, combinedRoutes[0] || null);
}

/* ==========================================================================
   3. VISTA: VUELOS
   ========================================================================== */
function renderFlightsView(container) {
  const html = `
    <div class="section-hero">
      <h2>✈️ Vuelos Internacionales y Domésticos</h2>
      <p>Conexiones estratégicas para optimizar los 20 días sin esperas innecesarias: vuelo directo Madrid ↔ Mykonos para entrada y salida, salto ágil Cícladas ➔ Dodecaneso (Milos ➔ Kos con escala) y regreso Rodas ➔ Mykonos.</p>
      <div class="section-hero-stats">
        <div class="hero-stat-pill">💶 <strong>1.040 €</strong> total (2 pers.) / 520 € pers.</div>
        <div class="hero-stat-pill">🧳 Equipaje de mano y facturado incluido</div>
        <div class="hero-stat-pill">⏱️ Ahorro de más de 14 horas de barco</div>
      </div>
    </div>

    <!-- Tabla Maestra de Vuelos con Sistema Híbrido Tarjetas/Tabla -->
    <div class="table-card-wrapper">
      <div class="table-view-header">
        <h3 class="table-title">🛫 Listado de Conexiones Aéreas</h3>
        <div class="table-view-toggle">
          <button type="button" class="btn-toggle-view" data-view="cards" title="Ver en tarjetas apiladas">📱 Tarjetas</button>
          <button type="button" class="btn-toggle-view" data-view="table" title="Ver en tabla tradicional">📊 Tabla</button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Día / Fecha</th>
              <th>Ruta</th>
              <th>Tipo & Aerolínea</th>
              <th>Horarios Estimados</th>
              <th>Duración</th>
              <th>Coste (2 pax)</th>
              <th>Reserva Directa</th>
            </tr>
          </thead>
          <tbody>
            ${ITINERARY_DATA.flights.map(fl => `
              <tr id="flight-row-${fl.id}">
                <td data-label="Día / Fecha" class="cell-primary"><strong>${fl.day}</strong></td>
                <td data-label="Ruta" class="cell-highlight"><span class="route-highlight">${fl.route}</span></td>
                <td data-label="Tipo & Línea">
                  <span class="badge-tag ${fl.type.includes('Internacional') ? 'blue' : 'purple'}">${fl.type}</span>
                  <div class="cell-subtext">${fl.airline}</div>
                </td>
                <td data-label="Horarios">
                  <div class="schedule-item"><strong>Salida:</strong> ${fl.departure}</div>
                  <div class="schedule-item"><strong>Llegada:</strong> ${fl.arrival}</div>
                </td>
                <td data-label="Duración">${fl.duration}</td>
                <td data-label="Coste (2 pax)"><span class="price-pill">${fl.price}</span></td>
                <td data-label="Reserva" class="cell-actions">
                  <div class="action-btn-group">
                    ${fl.links.map(l => `
                      <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn-action-link">
                        ${l.title} ↗
                      </a>
                    `).join('')}
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="table-scroll-hint">⇄ Desliza horizontalmente la tabla para ver todas las columnas</div>
    </div>

    <!-- Desglose de Fichas de Aeropuertos y Tiempos de Seguridad -->
    <h3 style="margin:1.5rem 0 1rem;font-size:1.3rem;">📋 Tiempos de Presentación y Protocolo en Aeropuertos</h3>
    <div class="protocol-cards-grid">
      ${ITINERARY_DATA.flights.map(fl => `
        <div style="background:#ffffff;border-radius:var(--radius-md);padding:1.25rem;border:1px solid var(--color-border);box-shadow:var(--shadow-sm);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem;">
            <span class="badge-tag blue">${fl.route.split('➔')[0]} ➔ ${fl.route.split('➔')[1]}</span>
            <span style="font-size:0.8rem;font-weight:700;color:var(--color-text-muted);">${fl.day.split('(')[0]}</span>
          </div>
          <div style="font-size:0.85rem;margin-bottom:0.4rem;"><strong>⏰ Presentación:</strong> ${fl.times.presentation}</div>
          <div style="font-size:0.85rem;margin-bottom:0.4rem;"><strong>🛂 Filtro Seguridad:</strong> ${fl.times.security}</div>
          <div style="font-size:0.85rem;margin-bottom:0.4rem;"><strong>🚪 Embarque:</strong> ${fl.times.boarding}</div>
          <div style="font-size:0.85rem;"><strong>🧳 Desembarque y Maletas:</strong> ${fl.times.disembark}</div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
  initTableViewToggles(container);
}

/* ==========================================================================
   4. VISTA: FERRIS
   ========================================================================== */
function renderFerriesView(container) {
  const html = `
    <div class="section-hero">
      <h2>⛴️ Ferris y Barcos de Pasaje</h2>
      <p>Las 7 travesías marítimas que unen las islas. Selección de buques rápidos y convencionales de alta estabilidad con enlaces directos de compra en Ferryhopper y navieras oficiales.</p>
      <div class="section-hero-stats">
        <div class="hero-stat-pill">💶 <strong>340 €</strong> total (2 pers.) / 170 € pers.</div>
        <div class="hero-stat-pill">⚓ <strong>7 Rutas</strong> marítimas</div>
        <div class="hero-stat-pill">🎫 Reserva anticipada recomendada</div>
      </div>
    </div>

    <div class="table-card-wrapper">
      <div class="table-view-header">
        <h3 class="table-title">⚓ Travesías Marítimas Interinsulares</h3>
        <div class="table-view-toggle">
          <button type="button" class="btn-toggle-view" data-view="cards" title="Ver en tarjetas apiladas">📱 Tarjetas</button>
          <button type="button" class="btn-toggle-view" data-view="table" title="Ver en tabla tradicional">📊 Tabla</button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Trayecto Marítimo</th>
              <th>Naviera / Barco</th>
              <th>Duración</th>
              <th>Coste (2 pax)</th>
              <th>Puertos y Embarque</th>
              <th>Comprar Billetes</th>
            </tr>
          </thead>
          <tbody>
            ${ITINERARY_DATA.ferries.map(fer => `
              <tr id="ferry-row-${fer.id}">
                <td data-label="Día" class="cell-primary"><strong>${fer.day}</strong></td>
                <td data-label="Trayecto" class="cell-highlight">
                  <span class="route-highlight">${fer.route}</span>
                  <div class="cell-subtext">${fer.schedule}</div>
                </td>
                <td data-label="Naviera"><span class="badge-tag orange">${fer.operator}</span></td>
                <td data-label="Duración">${fer.duration}</td>
                <td data-label="Coste (2 pax)"><span class="price-pill">${fer.price}</span></td>
                <td data-label="Puertos y Embarque">
                  <div style="font-size:0.85rem;">
                    <div><strong>Origen:</strong> ${fer.ports.dep.name}</div>
                    <div><strong>Destino:</strong> ${fer.ports.arr.name}</div>
                    <div class="cell-subtext">${fer.times}</div>
                  </div>
                </td>
                <td data-label="Billetes" class="cell-actions">
                  <div class="action-btn-group">
                    <a href="${fer.link}" target="_blank" rel="noopener noreferrer" class="btn-action-link">
                      Reservar en Naviera ↗
                    </a>
                    <a href="https://www.ferryhopper.com/es/" target="_blank" rel="noopener noreferrer" class="btn-action-link ferryhopper-link">
                      Ferryhopper ↗
                    </a>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="table-scroll-hint">⇄ Desliza horizontalmente la tabla para ver todas las columnas</div>
    </div>

    <!-- Consejos Prácticos de Embarque -->
    <div style="background:#ffffff;border-radius:var(--radius-lg);padding:1.5rem;border:1px solid var(--color-border);margin-top:1.5rem;">
      <h3 style="font-size:1.15rem;margin-bottom:0.75rem;color:var(--color-primary);">💡 Recomendaciones Clave para Ferris en Junio:</h3>
      <ul style="padding-left:1.5rem;font-size:0.9rem;color:var(--color-text-main);line-height:1.6;">
        <li><strong>Llegada al muelle:</strong> Presentarse 45-50 minutos antes de la salida programada (10 minutos bastan para el barco local Pounda-Antiparos).</li>
        <li><strong>Check-in online:</strong> La mayoría de navieras (SeaJets, Blue Star) permiten el check-in web 48 horas antes descargando la tarjeta de embarque con código QR en el móvil.</li>
        <li><strong>Equipaje:</strong> Se deja en las bodegas inferiores del ferry por destino de isla y se viaja cómodamente en el salón de pasaje con aire acondicionado.</li>
      </ul>
    </div>
  `;

  container.innerHTML = html;
  initTableViewToggles(container);
}

/* ==========================================================================
   5. VISTA: ALOJAMIENTOS (Booking.com)
   ========================================================================== */
function renderHotelsView(container) {
  const html = `
    <div class="section-hero">
      <h2>🏨 Alojamientos Seleccionados (Booking.com)</h2>
      <p>Apartamentos y suites de diseño cicládico y medieval con puntuaciones superiores a 9,0/10, balcón o terraza privada, cocina equipada y aparcamiento gratuito.</p>
      <div class="section-hero-stats">
        <div class="hero-stat-pill">💶 <strong>1.815 €</strong> total (19 noches) / 95,50 € media noche</div>
        <div class="hero-stat-pill">⭐ Puntuación media: <strong>9,4 / 10</strong></div>
        <div class="hero-stat-pill">🅿️ Parking privado o muy fácil acceso</div>
      </div>
    </div>

    <div class="hotel-cards-grid">
      ${ITINERARY_DATA.accommodations.map(acc => `
        <div class="hotel-card" id="hotel-card-${acc.id}">
          <div class="hotel-card-header">
            <span class="hotel-island">${acc.island}</span>
            <h3 class="hotel-name">${acc.name}</h3>
            <span class="hotel-rating">★ ${acc.rating}</span>
          </div>

          <div class="hotel-card-body">
            <div class="hotel-detail-row">
              <span style="color:var(--color-text-muted);">Tipo:</span>
              <strong>${acc.type}</strong>
            </div>
            <div class="hotel-detail-row">
              <span style="color:var(--color-text-muted);">Estancia:</span>
              <span>${acc.nights}</span>
            </div>
            <div class="hotel-detail-row">
              <span style="color:var(--color-text-muted);">Ubicación:</span>
              <span style="text-align:right;max-width:200px;">${acc.location}</span>
            </div>
            <p class="hotel-desc"><strong>Destacado:</strong> ${acc.highlights}</p>
          </div>

          <div class="hotel-card-footer">
            <div>
              <div style="font-size:0.75rem;color:var(--color-text-muted);">Precio estancia</div>
              <span class="price-pill" style="font-size:1.15rem;">${acc.priceTotal}</span>
            </div>
            <a href="${acc.url}" target="_blank" rel="noopener noreferrer" class="btn-booking">
              Ver en Booking.com ↗
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
}

/* ==========================================================================
   6. VISTA: COCHES DE ALQUILER & CONDUCTOR SENIOR
   ========================================================================== */
function renderCarsView(container) {
  const cars = ITINERARY_DATA.carRentals;

  const html = `
    <div class="section-hero">
      <h2>🚗 Coches de Alquiler y Seguro a Todo Riesgo Sin Franquicia</h2>
      <p>Estrategia de alquiler insular independiente para no pagar fletes marítimos de coches entre islas. Incluye expresamente el Seguro a Todo Riesgo Sin Franquicia (SCDW / Cero Franquicia) para total tranquilidad.</p>
      <div class="section-hero-stats">
        <div class="hero-stat-pill">💶 <strong>721 €</strong> alquileres (Todo Riesgo) + 190 € gas = <strong>911 €</strong></div>
        <div class="hero-stat-pill" style="background:rgba(22,163,74,0.3);border-color:#86efac;color:#86efac;">
          🛡️ <strong>Seguro Todo Riesgo Sin Franquicia (SCDW) INCLUIDO</strong>
        </div>
        <div class="hero-stat-pill">✅ 68 años verificado sin recargos</div>
      </div>
    </div>

    <!-- Alertas: Conductor Senior y Cobertura Cero Franquicia -->
    <div class="senior-alerts-grid">
      <div class="senior-alert-box" style="margin-bottom:0;">
        <div class="senior-alert-icon">🛡️</div>
        <div class="senior-alert-text">
          <h4>Verificación Conductor Senior (68 años en 2027)</h4>
          <p>${cars.seniorPolicy.details}</p>
          <p style="margin-top:0.4rem;font-weight:700;color:var(--color-senior);">Estado: ${cars.seniorPolicy.status} en Avis, Hertz, Enterprise y Avance.</p>
        </div>
      </div>

      <div class="senior-alert-box" style="background:#eff6ff;border-color:#93c5fd;margin-bottom:0;">
        <div class="senior-alert-icon">✨</div>
        <div class="senior-alert-text">
          <h4 style="color:#1d4ed8;">Seguro Todo Riesgo Sin Franquicia (SCDW)</h4>
          <p style="color:#1e40af;">${cars.insurancePolicy.details}</p>
          <p style="margin-top:0.4rem;font-weight:700;color:#1d4ed8;">Cobertura Total: Cero retención de fianza por daños/robo.</p>
        </div>
      </div>
    </div>

    <!-- Tabla de Alquiler de Coches con Selector Tarjetas/Tabla -->
    <div class="table-card-wrapper">
      <div class="table-view-header">
        <h3 class="table-title">🚗 Flota por Isla y Cobertura Cero Franquicia</h3>
        <div class="table-view-toggle">
          <button type="button" class="btn-toggle-view" data-view="cards" title="Ver en tarjetas apiladas">📱 Tarjetas</button>
          <button type="button" class="btn-toggle-view" data-view="table" title="Ver en tabla tradicional">📊 Tabla</button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Isla</th>
              <th>Días</th>
              <th>Categoría</th>
              <th>Proveedor</th>
              <th>Oficina Entrega</th>
              <th>Base</th>
              <th>Todo Riesgo (SCDW)</th>
              <th>Coste Total</th>
              <th>Condición Senior</th>
              <th>Reserva</th>
            </tr>
          </thead>
          <tbody>
            ${cars.rentals.map((r, idx) => `
              <tr id="car-row-${idx}">
                <td data-label="Isla" class="cell-primary"><strong>${r.island}</strong></td>
                <td data-label="Días">${r.days} d</td>
                <td data-label="Categoría"><span class="badge-tag blue">${r.carType}</span></td>
                <td data-label="Proveedor"><strong>${r.provider}</strong></td>
                <td data-label="Oficina Entrega"><span style="font-size:0.85rem;">${r.office}</span></td>
                <td data-label="Tarifa Base"><span style="color:var(--color-text-muted);font-size:0.85rem;">${r.baseCost}</span></td>
                <td data-label="Seguro SCDW 0€"><span style="color:#15803d;font-weight:600;font-size:0.85rem;">+${r.insuranceCost}</span></td>
                <td data-label="Coste Total"><span class="price-pill" style="color:#1d4ed8;">${r.cost}</span></td>
                <td data-label="Condición Senior"><span class="senior-badge-tag">${r.seniorTerms}</span></td>
                <td data-label="Reserva" class="cell-actions">
                  <a href="${r.link}" target="_blank" rel="noopener noreferrer" class="btn-action-link">
                    Web Casa ↗
                  </a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="table-scroll-hint">⇄ Desliza horizontalmente la tabla para ver todas las columnas</div>
    </div>

    <div style="background:#ffffff;border-radius:var(--radius-lg);padding:1.5rem;border:1px solid var(--color-border);margin-top:1rem;">
      <h4 style="font-size:1.1rem;margin-bottom:0.5rem;color:var(--color-primary);">⛽ Combustible Estimado:</h4>
      <p style="font-size:0.9rem;color:var(--color-text-muted);">Consumo calculado para 547 km totales en motores gasolina eficientes / híbridos: ~190 € en total para todo el viaje.</p>
    </div>
  `;

  container.innerHTML = html;
  initTableViewToggles(container);
}


/* ==========================================================================
   7. VISTA: MONUMENTOS Y YACIMIENTOS (Con Descuento Senior UE 65+)
   ========================================================================== */
function renderMonumentsView(container) {
  const allIslands = ITINERARY_DATA.monumentsByIsland;

  let filteredMonuments = [];
  allIslands.forEach(isl => {
    if (AppState.monumentFilterIsland === 'all' || AppState.monumentFilterIsland === isl.island) {
      isl.sites.forEach(site => {
        if (!AppState.monumentSearchText || 
            site.name.toLowerCase().includes(AppState.monumentSearchText.toLowerCase()) ||
            site.desc.toLowerCase().includes(AppState.monumentSearchText.toLowerCase())) {
          filteredMonuments.push({ ...site, islandName: isl.island });
        }
      });
    }
  });

  const html = `
    <div class="section-hero">
      <h2>🏛️ Catálogo de Monumentos y Yacimientos</h2>
      <p>Guía exhaustiva de los tesoros arqueológicos e históricos de las 9 islas visitadas. Incluye precios oficiales, horarios estivales y la reducción legal del 50% para ciudadanos mayores de 65 años de la Unión Europea.</p>
      <div class="section-hero-stats">
        <div class="hero-stat-pill">🎟️ <strong>Descuento Senior UE 65+:</strong> 50% de reducción</div>
        <div class="hero-stat-pill">🏛️ <strong>37 Sitios</strong> y monumentos catalogados</div>
        <div class="hero-stat-pill">🌐 Enlaces oficiales ODAP y hhticket.gr</div>
      </div>
    </div>

    <!-- Barra de Filtros y Búsqueda -->
    <div class="monument-filter-bar">
      <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <label for="monument-island-select" style="font-size:0.85rem;font-weight:700;color:var(--color-text-muted);">FILTRAR POR ISLA:</label>
        <select id="monument-island-select" class="day-selector-select" style="padding:0.4rem 0.8rem;">
          <option value="all" ${AppState.monumentFilterIsland === 'all' ? 'selected' : ''}>Todas las Islas (37 sitios)</option>
          ${allIslands.map(isl => `
            <option value="${isl.island}" ${AppState.monumentFilterIsland === isl.island ? 'selected' : ''}>
              ${isl.island} (${isl.sites.length})
            </option>
          `).join('')}
        </select>
      </div>

      <div style="display:flex;align-items:center;gap:0.5rem;">
        <input type="text" id="monument-search-input" placeholder="Buscar monumento o yacimiento..." 
               value="${AppState.monumentSearchText}" 
               style="font-family:inherit;padding:0.45rem 0.85rem;border:1.5px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.88rem;outline:none;min-width:240px;">
      </div>
    </div>

    <!-- Grid de Tarjetas de Monumentos -->
    <div class="monument-cards-grid">
      ${filteredMonuments.map(m => `
        <div class="monument-card">
          <div class="monument-card-header">
            <span class="monument-island-tag">${m.islandName}</span>
            <h3 class="monument-title">${m.name}</h3>
          </div>

          <p class="monument-desc">${m.desc}</p>

          <div class="monument-meta-list">
            <div><strong>📍 Ubicación:</strong> ${m.location}</div>
            <div><strong>🕒 Horario Junio:</strong> ${m.hours}</div>
          </div>

          <div class="monument-price-row">
            <div>
              <div style="font-size:0.75rem;color:var(--color-text-muted);">Tarifa General</div>
              <span style="font-weight:700;color:var(--color-primary);">${m.priceGeneral}</span>
            </div>
            <div style="text-align:right;">
              <span class="senior-badge-tag">Senior UE 65+: ${m.priceSenior}</span>
            </div>
          </div>

          <div style="margin-top:1rem;display:flex;justify-content:flex-end;">
            <a href="${m.link}" target="_blank" rel="noopener noreferrer" class="btn-action-link">
              Web Oficial / hhticket.gr ↗
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;

  // Eventos de filtrado
  const selectIsland = document.getElementById('monument-island-select');
  const searchInput = document.getElementById('monument-search-input');

  if (selectIsland) {
    selectIsland.addEventListener('change', (e) => {
      AppState.monumentFilterIsland = e.target.value;
      renderMonumentsView(container);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.monumentSearchText = e.target.value;
      renderMonumentsView(container);
    });
  }
}

/* ==========================================================================
   8. VISTA: PRESUPUESTO GLOBAL
   ========================================================================== */
function renderBudgetView(container) {
  const html = `
    <div class="section-hero" id="budget-summary-hero">
      <h2>💰 Presupuesto Global Consolidado</h2>
      <p>Comparativa exhaustiva de costes reales para 2 personas y por persona durante los 20 días de viaje por el Egeo (Junio 2027), con seguro a todo riesgo sin franquicia en coches de alquiler.</p>
      <div class="section-hero-stats">
        <div class="hero-stat-pill">💶 <strong>Tarifa General:</strong> 4.260 € (2.130,00 € / pers.)</div>
        <div class="hero-stat-pill" style="background:rgba(22,163,74,0.3);border-color:#86efac;color:#86efac;">
          🎖️ <strong>Con Dto. Senior UE 65+:</strong> 4.183 € (2.091,50 € / pers.)
        </div>
      </div>
    </div>

    <div class="table-card-wrapper">
      <div class="table-view-header">
        <h3 class="table-title">📊 Balance Global por Partidas de Gasto</h3>
        <div class="table-view-toggle">
          <button type="button" class="btn-toggle-view" data-view="cards" title="Ver en tarjetas apiladas">📱 Tarjetas</button>
          <button type="button" class="btn-toggle-view" data-view="table" title="Ver en tabla tradicional">📊 Tabla</button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Concepto de Gasto</th>
              <th>Detalle</th>
              <th>Coste General (2 pax)</th>
              <th>Coste Senior 65+ (2 pax)</th>
              <th>Coste por Persona</th>
            </tr>
          </thead>
          <tbody>
            <tr id="budget-row-flights">
              <td data-label="Concepto" class="cell-primary"><strong>✈️ Vuelos</strong></td>
              <td data-label="Detalle">Madrid-Mykonos i/v + Milos-Atenas-Kos + Rodas-Mykonos</td>
              <td data-label="Coste General">1.040 €</td>
              <td data-label="Coste Senior 65+">1.040 €</td>
              <td data-label="Coste / Persona">520,00 €</td>
            </tr>
            <tr id="budget-row-ferries">
              <td data-label="Concepto" class="cell-primary"><strong>⛴️ Ferris y Barcos</strong></td>
              <td data-label="Detalle">7 travesías marítimas interinsulares</td>
              <td data-label="Coste General">340 €</td>
              <td data-label="Coste Senior 65+">340 €</td>
              <td data-label="Coste / Persona">170,00 €</td>
            </tr>
            <tr id="budget-row-hotels">
              <td data-label="Concepto" class="cell-primary"><strong>🏨 Alojamientos Booking</strong></td>
              <td data-label="Detalle">19 noches en apartamentos (>9,0) con cocina y parking</td>
              <td data-label="Coste General">1.815 €</td>
              <td data-label="Coste Senior 65+">1.815 €</td>
              <td data-label="Coste / Persona">907,50 €</td>
            </tr>
            <tr id="budget-row-cars">
              <td data-label="Concepto" class="cell-primary"><strong>🚗 Coches de Alquiler</strong></td>
              <td data-label="Detalle">16 días con Seguro Todo Riesgo Sin Franquicia (SCDW)</td>
              <td data-label="Coste General"><strong>721 €</strong></td>
              <td data-label="Coste Senior 65+"><strong>721 €</strong></td>
              <td data-label="Coste / Persona">360,50 €</td>
            </tr>
            <tr id="budget-row-fuel">
              <td data-label="Concepto" class="cell-primary"><strong>⛽ Combustible</strong></td>
              <td data-label="Detalle">Estimado para 547 km en carretera</td>
              <td data-label="Coste General">190 €</td>
              <td data-label="Coste Senior 65+">190 €</td>
              <td data-label="Coste / Persona">95,00 €</td>
            </tr>
            <tr id="budget-row-monuments">
              <td data-label="Concepto" class="cell-primary"><strong>🏛️ Monumentos y Museos</strong></td>
              <td data-label="Detalle">Delos, Asklepieion, Lindos, Kamiros, Catacumbas, etc.</td>
              <td data-label="Coste General">154 €</td>
              <td data-label="Coste Senior 65+"><strong style="color:var(--color-senior);">77 € (50% Dto.)</strong></td>
              <td data-label="Coste / Persona"><strong style="color:var(--color-senior);">38,50 €</strong></td>
            </tr>
            <tr class="budget-total-row" id="budget-row-total">
              <td data-label="Resumen" class="cell-primary" colspan="2">TOTAL CONSOLIDADO DEL VIAJE</td>
              <td data-label="Coste General" style="color:var(--color-primary);font-weight:800;font-size:1.15rem;">4.260 €</td>
              <td data-label="Coste Senior 65+" style="color:var(--color-senior);font-weight:800;font-size:1.25rem;">4.183 €</td>
              <td data-label="Coste / Persona" style="color:var(--color-accent);font-weight:800;font-size:1.15rem;">2.091,50 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-scroll-hint">⇄ Desliza horizontalmente la tabla para ver todas las columnas</div>
    </div>
  `;

  container.innerHTML = html;
  initTableViewToggles(container);
}

/**
 * Control del selector de modo de vista para tablas (Tarjetas apiladas vs Tabla completa)
 */
function initTableViewToggles(container) {
  const isMobile = window.innerWidth <= 768;
  const currentMode = AppState.tableViewMode || (isMobile ? 'cards' : 'table');

  container.querySelectorAll('.table-card-wrapper').forEach(wrapper => {
    const tableResp = wrapper.querySelector('.table-responsive');
    const toggleBtns = wrapper.querySelectorAll('.btn-toggle-view');
    const scrollHint = wrapper.querySelector('.table-scroll-hint');
    if (!tableResp) return;

    // Aplicar modo actual
    tableResp.classList.remove('mode-cards', 'mode-table');
    tableResp.classList.add(`mode-${currentMode}`);

    if (scrollHint) {
      scrollHint.classList.toggle('visible', currentMode === 'table');
    }

    toggleBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === currentMode);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const viewMode = btn.dataset.view;
        AppState.tableViewMode = viewMode;

        // Actualizar todos los conmutadores en la vista activa
        container.querySelectorAll('.table-card-wrapper').forEach(w => {
          const tr = w.querySelector('.table-responsive');
          const sh = w.querySelector('.table-scroll-hint');
          const btns = w.querySelectorAll('.btn-toggle-view');
          if (tr) {
            tr.classList.remove('mode-cards', 'mode-table');
            tr.classList.add(`mode-${viewMode}`);
          }
          if (sh) {
            sh.classList.toggle('visible', viewMode === 'table');
          }
          btns.forEach(b => b.classList.toggle('active', b.dataset.view === viewMode));
        });
      });
    });
  });
}

/* ==========================================================================
   UTILIDADES: MAPAS LEAFLET Y MARCADORES
   ========================================================================== */
function initLeafletMap(containerId, center, zoom, waypoints, routeCoords) {
  const mapElem = document.getElementById(containerId);
  if (!mapElem || typeof L === 'undefined') return;

  // Crear mapa
  const map = L.map(containerId, {
    center: center,
    zoom: zoom,
    scrollWheelZoom: false
  });

  AppState.activeMap = map;

  // Capas de mapas 100% compatibles con ejecución local (file:///) SIN bloqueos y SIN API Key
  // Capa 1: Google Maps Callejero Oficial (en español)
  const googleStreets = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&hl=es&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '&copy; Google Maps'
  });

  // Capa 2: Google Maps Satélite / Híbrido con carreteras
  const googleHybrid = L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&hl=es&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '&copy; Google Maps Satélite'
  });

  // Capa 3: Esri World Street Map (excelente alternativa mundial sin restricciones de origen)
  const esriStreet = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: '&copy; Esri &mdash; National Geographic, DeLorme, NAVTEQ'
  });

  // Activar Google Maps Callejero por defecto
  googleStreets.addTo(map);

  // Selector de capas en la esquina superior derecha
  const baseLayers = {
    "🗺️ Google Maps": googleStreets,
    "🛰️ Google Satélite": googleHybrid,
    "🧭 Esri Callejero": esriStreet
  };
  L.control.layers(baseLayers, null, { position: 'topright', collapsed: true }).addTo(map);

  // Iconos personalizados con emojis
  function createCustomIcon(type) {
    let emoji = "📍";
    let bg = "#0077b6";
    if (type === 'monument') { emoji = "🏛️"; bg = "#d97706"; }
    else if (type === 'beach') { emoji = "🏖️"; bg = "#0284c7"; }
    else if (type === 'hotel') { emoji = "🏨"; bg = "#16a34a"; }
    else if (type === 'port') { emoji = "⚓"; bg = "#2563eb"; }
    else if (type === 'airport') { emoji = "✈️"; bg = "#7c3aed"; }

    return L.divIcon({
      className: 'custom-leaflet-marker',
      html: `
        <div style="background:${bg};color:#ffffff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;box-shadow:0 2px 6px rgba(0,0,0,0.3);border:2px solid #ffffff;">
          ${emoji}
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });
  }

  // Añadir marcadores
  const bounds = [];
  if (waypoints && waypoints.length) {
    waypoints.forEach(wp => {
      const marker = L.marker(wp.coords, { icon: createCustomIcon(wp.type) }).addTo(map);
      marker.bindPopup(`
        <div style="font-family:'Outfit',sans-serif;font-weight:700;font-size:0.95rem;color:#0a2540;margin-bottom:2px;">
          ${wp.name}
        </div>
        <div style="font-size:0.8rem;color:#475569;">
          ${wp.desc || ''}
        </div>
      `);
      bounds.push(wp.coords);
    });
  }

  // Trazar línea de ruta
  if (routeCoords && routeCoords.length > 1) {
    L.polyline(routeCoords, {
      color: '#0077b6',
      weight: 4,
      opacity: 0.8,
      dashArray: '6, 6'
    }).addTo(map);

    routeCoords.forEach(c => bounds.push(c));
  }

  // Ajustar vista a todos los puntos
  if (bounds.length > 1) {
    map.fitBounds(bounds, { padding: [30, 30] });
  }

  // Forzar redibujado de Leaflet tras render inicial
  setTimeout(() => {
    map.invalidateSize();
  }, 250);
}
