/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único del usuario
 *         nombre:
 *           type: string
 *           example: Juan
 *         apellido:
 *           type: string
 *           example: Pérez
 *         email:
 *           type: string
 *           example: juan@mail.com
 *         password:
 *           type: string
 *           example: password123
 *       required:
 *         - nombre
 *         - apellido
 *         - email
 *         - password
 */
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema<IUser>({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
