import { Router } from "express";
import { authenticate } from "../middleware/auth";
import {
  createLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary
} from "../controllers/library-controller";

/**
 * Rutas protegidas para el modelo Library
 */
const router = Router();

// Todas las rutas requieren autenticación
router.use(authenticate);

// Crear libro
router.post("/", createLibrary);

// Obtener todos los libros del usuario autenticado
router.get("/", getLibraries);

// Actualizar libro
router.put("/:id", updateLibrary);

// Eliminar libro
router.delete("/:id", deleteLibrary);

export default router;
