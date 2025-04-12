FROM php:latest

# Instalar extensiones de PHP necesarias y dos2unix
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    curl \
    dos2unix \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar todos los archivos del proyecto
COPY . .

# Convertir entrypoint.sh a formato Unix y dar permisos de ejecución
COPY entrypoint.sh /entrypoint.sh
RUN dos2unix /entrypoint.sh && chmod +x /entrypoint.sh

# Exponer el puerto
EXPOSE 8080

# Configurar el entrypoint y el comando por defecto
ENTRYPOINT ["/entrypoint.sh"]
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
