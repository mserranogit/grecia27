# Grecia 2027: Islas Cícladas y Dodecaneso

Planificador integral, logística y aplicación web interactiva para el viaje a Grecia del 1 al 22 de Junio de 2027 (22 días / 21 noches).

## 📍 Contenido del Proyecto

- **[`web/`](./web/)**: Aplicación web interactiva responsive (HTML5, Vanilla CSS, JS moderno, mapas con Leaflet y Google Maps sin API Key).
  - Selector interactivo de días (1 al 22) e islas (8 islas clave).
  - Vistas dedicadas de Alojamientos (Booking.com), Vuelos, Ferris y Coches de alquiler con conmutador Tarjetas / Tablas.
  - Catálogo de 37 monumentos con tarifas senior 65+ y buscador en tiempo real.
  - Presupuesto global consolidado.
- **[`documentos/`](./documentos/)**: Itinerarios maestros en Markdown, tablas de transporte, hoteles, coches con seguro a todo riesgo sin franquicia (SCDW), cronogramas y rutas detalladas.
- **[`mobile/`](./mobile/)**: Recursos y adaptaciones móviles.

## 🚀 Uso Rápido de la Web

Abrir directamente el archivo `web/index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari). No requiere servidor ni instalación previa.

## 🐳 Despliegue en VPS con Coolify

El proyecto incluye `Dockerfile`, `docker-compose.yml` y `nginx.conf` optimizados para despliegue inmediato en Coolify:

1. En tu panel de **Coolify**, accede a tu proyecto o entorno y pulsa **+ New Resource**.
2. Selecciona **Public Repository** (o Private Repository con tu GitHub App).
3. Introduce la URL: `https://github.com/mserranogit/grecia27`
4. Rama: `main`
5. Coolify detectará automáticamente el **Dockerfile** (o **Docker Compose**).
6. Configura tu dominio o subdominio en Coolify (con SSL automático Let's Encrypt).
7. Puerto expuesto: `80`
8. Pulsa **Deploy**.

