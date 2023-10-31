
CRUD Node.js con MySQL
=======================

Este es un ejemplo de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) en Node.js utilizando MySQL como base de datos. La aplicación permite a los usuarios realizar operaciones CRUD en una tabla de clientes.

Requisitos
----------

Para ejecutar esta aplicación, necesitarás tener instalado lo siguiente en tu sistema:

- Node.js
- MySQL

Instalación
-----------

1. Clona este repositorio en tu máquina local:

   ```
   git clone https://github.com/Johan-web-developer/Crud-node-mysql.git
   ```

2. Navega hasta la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install
   ```

3. Crea una base de datos MySQL llamada `crud_node_mysql` y una tabla llamada `customer` utilizando el siguiente script SQL:

   ```sql
   CREATE DATABASE crud_node_mysql;

   USE crud_node_mysql;

   CREATE TABLE IF NOT EXISTS customer (
     id INT(11) NOT NULL AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY (id)
   );
   ```

4. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables de entorno:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña_de_MySQL
   DB_NAME=crud_node_mysql
   ```

5. Ejecuta el siguiente comando para iniciar la aplicación:

   ```
   npm start
   ```

6. Abre tu navegador web y navega hasta `http://localhost:3000` para ver la aplicación en funcionamiento.

Uso
---

La aplicación te permite realizar las siguientes operaciones CRUD en la tabla `customer`:

- Crear un nuevo cliente
- Leer todos los clientes
- Actualizar un cliente existente
- Eliminar un cliente existente

Para realizar estas operaciones, simplemente sigue las instrucciones en la interfaz de usuario de la aplicación.

Contribuir
----------

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio
