# contexto = raíz del proyecto
# FROM node:20-slim

# WORKDIR /app

# COPY apps/backend/package*.json ./

# RUN npm install -g npm@11.6.2
# RUN npm install --legacy-peer-deps

# COPY apps/backend ./ 

# COPY domain ./domain/

# CMD ["npx", "tsx", "index.ts"]



#/apps/backend/Dockerfile
# --- BUILDER ---
FROM node:20-slim AS builder
WORKDIR /app
COPY apps/backend/package*.json ./
RUN npm install --legacy-peer-deps
COPY apps/backend ./
COPY domain ./domain/
RUN npm run build

# --- RUNTIME ---
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/index.js"] 
