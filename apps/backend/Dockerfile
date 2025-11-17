# contexto = raíz del proyecto
FROM node:20-slim

WORKDIR /app

# Copiamos package.json del backend
COPY apps/backend/package*.json ./

RUN npm install -g npm@11.6.2
RUN npm install --legacy-peer-deps

# Copiamos todo el backend
COPY apps/backend ./ 

# Copiamos domain
COPY domain ./domain/

CMD ["npx", "tsx", "index.ts"]
