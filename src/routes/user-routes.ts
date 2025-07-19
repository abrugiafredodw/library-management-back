
import { Router } from "express";
import { login, register } from "../controllers/user-controller";

/**
 * Rutas para usuarios
 */
const router = Router();

// Registro de usuario
router.post("/register", register);

// Autenticación de usuario
router.post("/login", login);

export default router;