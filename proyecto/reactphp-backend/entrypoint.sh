#!/bin/sh
set -e

# Si no existe la carpeta vendor, instala las dependencias de Composer
if [ ! -d vendor ]; then
  echo "Instalando dependencias de Composer..."
  composer install --no-interaction --prefer-dist --optimize-autoloader
fi

# Ejecutar el servidor
echo "Ejecutando el servidor..."
exec php server.php

