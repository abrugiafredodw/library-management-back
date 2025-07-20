# Library Management Back

Este proyecto es una API RESTful para la gestión de libros de usuarios, desarrollada con Node.js, Express y TypeScript, utilizando MongoDB como base de datos. Permite la administración de libros, usuarios y autenticación mediante JWT.

## Descripción

La API permite:
- Registrar y autenticar usuarios.
- Crear, leer, actualizar y eliminar libros asociados a cada usuario.
- Proteger rutas mediante autenticación JWT.

## Arquitectura

La estructura del proyecto es la siguiente:

```
library-management-back/
├── package.json
├── src/
│   ├── index.ts                  # Punto de entrada de la aplicación
│   ├── config/
│   │   └── mongo-db-config.ts    # Configuración de la conexión a MongoDB
│   ├── controllers/
│   │   ├── library-controller.ts # Lógica de negocio para libros
│   │   └── user-controller.ts    # Lógica de negocio para usuarios
│   ├── middleware/
│   │   └── auth.ts               # Middleware de autenticación
│   ├── models/
│   │   ├── library-model.ts      # Modelo de datos de libros
│   │   └── user-model.ts         # Modelo de datos de usuarios
│   └── routes/
│       ├── library-routes.ts     # Rutas para libros
│       └── user-routes.ts        # Rutas para usuarios
```

## Configuración y ejecución

### Requisitos previos
- Node.js >= 14.x
- MongoDB (local o remoto)

### Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/abrugiafredodw/library-management-back.git
   cd library-management-back
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Configura la conexión a MongoDB en `src/config/mongo-db-config.ts`.
   - Puedes usar variables de entorno para el URI de MongoDB.
4. Para ejecutar en local, renombra el archivo `env.example` a `.env` y modifica las variables de usuario y contraseña por:
   ```env
   <db_username>=librarymanager
   <db_password>=librarymanager
   ```
   Esto permitirá realizar pruebas en el entorno local con credenciales de prueba.
4. Ejecuta el proyecto en modo desarrollo:
   ```sh
   npm run dev
   ```
   O compila y ejecuta en modo producción:
   ```sh
   npm run build
   npm start
   ```
   El servidor estará disponible en `http://localhost:3000` (puerto configurable).

## Uso

Las rutas principales son:
- `/api/library` para operaciones de libros.
- `/api/users` para operaciones de usuarios y autenticación.

## Documentación de la API

La documentación interactiva de la API está disponible mediante Swagger. Una vez iniciado el servidor, accede a:

- [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Desde esta interfaz puedes explorar y probar los endpoints de la API de forma sencilla.

## Autor

Proyecto desarrollado por **Ariel Brugafredo** para Darwoft.

---

Para dudas o mejoras, puedes abrir un issue en el repositorio.
