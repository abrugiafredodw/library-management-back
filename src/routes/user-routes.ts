/**
 * @openapi
 * /api/users/register:
 *   post:
 *     summary: Registro de usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos incompletos
 *       409:
 *         description: Email ya registrado
 *       500:
 *         description: Error interno
 */
/**
 * @openapi
 * /api/users/login:
 *   post:
 *     summary: Autenticación de usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: juan@mail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Autenticación exitosa
 *       400:
 *         description: Datos incompletos
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error interno
 */

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