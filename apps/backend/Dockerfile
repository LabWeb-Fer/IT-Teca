# contexto = raíz del proyecto
FROM node:20-slim

WORKDIR /app

COPY apps/backend/package*.json ./

RUN npm install -g npm@11.6.2
RUN npm install --legacy-peer-deps

COPY apps/backend ./ 

COPY domain ./domain/

CMD ["npx", "tsx", "index.ts"]
