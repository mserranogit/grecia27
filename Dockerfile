# Imagen base ultra-ligera de Nginx Alpine
FROM nginx:alpine

# Metadatos del contenedor
LABEL maintainer="mserranogit"
LABEL description="Grecia 2027 - Web App Itinerario Islas Griegas"

# Eliminar configuración por defecto de Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf /usr/share/nginx/html/*

# Copiar configuración optimizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos estáticos de la web
COPY web/ /usr/share/nginx/html/

# Exponer el puerto estándar HTTP
EXPOSE 80

# Comprobación de salud (Healthcheck)
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1

# Arrancar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
