# Étape 1 : Build l'application Next.js
FROM node:20-alpine AS builder

WORKDIR /app

# Copie des fichiers
COPY package*.json ./
COPY . .

# Installation des dépendances
RUN npm install

# Génération statique
RUN npm run build

# Étape 2 : Image finale avec "serve"
FROM node:20-alpine

# Installation du serveur de fichiers statiques
RUN npm install -g serve

WORKDIR /app

# Copie du site statique généré
COPY --from=builder /app/out ./out

# Port sur lequel le serveur écoute
EXPOSE 3000

# Commande de lancement
CMD ["serve", "-s", "out", "-l", "3000"]
