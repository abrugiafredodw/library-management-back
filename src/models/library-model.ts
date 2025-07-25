/**
 * @openapi
 * components:
 *   schemas:
 *     Library:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único del libro
 *         nombre:
 *           type: string
 *           example: El Principito
 *         genero:
 *           type: string
 *           example: Ficción
 *         descripcion:
 *           type: string
 *           example: Libro clásico de la literatura
 *         usuario:
 *           type: string
 *           description: ID del usuario propietario
 *         leido:
 *           type: boolean
 *           example: false
 *       required:
 *         - nombre
 *         - genero
 *         - descripcion
 *         - usuario
 */
import mongoose, { Schema, Document, Types } from "mongoose";

export interface ILibrary extends Document {
  nombre: string;
  genero: string;
  descripcion: string;
  usuario: Types.ObjectId;
  leido: boolean;
}

const LibrarySchema: Schema = new Schema<ILibrary>({
  nombre: { type: String, required: true },
  genero: { type: String, required: true },
  descripcion: { type: String, required: true },
  usuario: { type: Schema.Types.ObjectId, ref: "User", required: true },
  leido: { type: Boolean, default: false },
}, {
  timestamps: true
});

const Library = mongoose.model<ILibrary>("Library", LibrarySchema);

export default Library;
