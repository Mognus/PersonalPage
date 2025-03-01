FROM node:20-alpine

WORKDIR /app

# Abhängigkeiten installieren
COPY package.json package-lock.json* ./
RUN npm ci

# Anwendungscode kopieren
COPY . .

# Port freigeben (wird in Produktion nicht genutzt, da Nginx davor liegt)
EXPOSE 3000

# Entwicklungsserver starten
CMD ["npm", "run", "dev"]