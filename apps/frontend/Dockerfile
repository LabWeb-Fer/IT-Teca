#/apps/frontend/Dockerfile

# --- BUILDER ---
FROM node:20-slim AS builder

WORKDIR /app

COPY apps/frontend/package.json apps/frontend/package-lock.json ./

RUN npm install -g npm@11.6.2
RUN npm install --legacy-peer-deps

# Copiamos el resto del frontend
COPY apps/frontend ./

# variables de entorno como build args
ARG VITE_USE_API
ARG VITE_API_URL
ENV VITE_USE_API=$VITE_USE_API
ENV VITE_API_URL=$VITE_API_URL

# Build de la app
RUN npm run build

# --- RUNTIME ---
FROM nginx:stable-bookworm

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
