/**
 * @openapi
 * /api/libraries:
 *   post:
 *     summary: Crear un libro
 *     tags:
 *       - Libros
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Library'
 *     responses:
 *       201:
 *         description: Libro creado
 *       400:
 *         description: Datos incompletos
 *       500:
 *         description: Error interno
 */
/**
 * @openapi
 * /api/libraries:
 *   get:
 *     summary: Obtener todos los libros del usuario autenticado
 *     tags:
 *       - Libros
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de libros
 *       500:
 *         description: Error interno
 */
/**
 * @openapi
 * /api/libraries/{id}:
 *   put:
 *     summary: Actualizar un libro
 *     tags:
 *       - Libros
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Library'
 *     responses:
 *       200:
 *         description: Libro actualizado
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error interno
 */
/**
 * @openapi
 * /api/libraries/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     tags:
 *       - Libros
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Libro eliminado
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error interno
 */

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
