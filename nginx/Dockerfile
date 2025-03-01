FROM nginx:alpine

# Nginx-Konfiguration kopieren
COPY default.conf /etc/nginx/conf.d/

# Logs-Verzeichnis erstellen
RUN mkdir -p /var/log/nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]