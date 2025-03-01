FROM python:3.10-slim

WORKDIR /app

# Abhängigkeiten installieren
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn

# Anwendungscode kopieren
COPY . .

# Umgebungsvariable für Production
ENV DJANGO_SETTINGS_MODULE=core.settings

# PORT für Gunicorn
EXPOSE 8000

# Dev-Mode: Verwende runserver
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Prod-Mode (auskommentiert): Verwende Gunicorn
# CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]