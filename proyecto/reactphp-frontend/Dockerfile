FROM node:latest

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dos2unix (si necesitas convertir archivos a formato Unix)
RUN apt-get update && apt-get install -y dos2unix

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Copiar y preparar el script de entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN dos2unix /entrypoint.sh && chmod +x /entrypoint.sh

# Exponer el puerto para Vite
EXPOSE 5173

# Definir entrypoint y comando por defecto para levantar el servidor de Vite
ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "run", "dev"]
