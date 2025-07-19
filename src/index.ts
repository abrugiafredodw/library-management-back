import "dotenv/config"
import express from "express"
import cors from "cors"
import { connect } from "./config/mongo-db-config";
import userRoutes from "./routes/user-routes";
import libraryRoutes from "./routes/library-routes";




const app = express()

// Middlewares
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT ?? 4000;

// Rutas (convención REST en inglés)
app.use('/api/users', userRoutes);
app.use('/api/libraries', libraryRoutes);

// Manejo de errores global tipado
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    ok: false,
    mensaje: err.message || 'Error interno del servidor',
  });
});

// Esperar conexión a MongoDB antes de iniciar el servidor
connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Servidor en escucha por el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('🛑 No se pudo conectar a MongoDB:', err);
    process.exit(1);
  });