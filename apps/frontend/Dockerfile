#/apps/frontend/Dockerfile

# --- BUILDER ---
FROM node:20-slim AS builder

WORKDIR /app

# Copiamos solo package.json y package-lock.json para cache de npm
COPY apps/frontend/package.json apps/frontend/package-lock.json ./

# Instalamos npm 11.6.2 y dependencias
RUN npm install -g npm@11.6.2
RUN npm install --legacy-peer-deps

# Copiamos el resto del frontend
COPY apps/frontend ./

# Pasamos variables de entorno como build args
ARG VITE_USE_API
ARG VITE_API_URL
ENV VITE_USE_API=$VITE_USE_API
ENV VITE_API_URL=$VITE_API_URL

# Build de la app
RUN npm run build

# --- RUNTIME ---
FROM nginx:stable-bookworm


# Copiamos los archivos de build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
